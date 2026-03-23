import { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import Confetti from "react-confetti";

const QUESTION_API = "https://harini05.app.n8n.cloud/webhook/generate-questions";
const ANSWER_API = "https://harini05.app.n8n.cloud/webhook/submit-answer";

function Practice() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [time, setTime] = useState(10);
  const [started, setStarted] = useState(false);

  const current = questions[index] || {};

  const extractOptions = (text) => {
    if (text.includes("A)")) {
      return [
        text.match(/A\)(.*?)(B\)|$)/s)?.[1]?.trim() || "A",
        text.match(/B\)(.*?)(C\)|$)/s)?.[1]?.trim() || "B",
        text.match(/C\)(.*?)(D\)|$)/s)?.[1]?.trim() || "C",
        text.match(/D\)(.*?)(Correct Answer:|Explanation:|$)/s)?.[1]?.trim() || "D",
      ];
    }

    return ["A", "B", "C", "D"];
  };

  const cleanQuestion =
    current.question?.split("A)")[0] ||
    current.question?.split("Options:")[0] ||
    current.question ||
    "";

  const explanation =
    current.question?.split("Explanation:")[1] ||
    current.question?.split("Reasoning:")[1] ||
    "Generated explanation";

  const answeredCount = index + (result ? 1 : 0);

  const progressPercent =
    started && questions.length > 0
      ? Math.round((answeredCount / questions.length) * 100)
      : 0;

  useEffect(() => {
    if (!started || loading || result || time !== 0) {
      return;
    }
    setResult("⏰ Time Up");
  }, [started, loading, result, time]);

  const handleStart = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(QUESTION_API);
      const raw = await res.json();
      const data = Array.isArray(raw) ? raw[0] : raw;

      const fullQuestion =
        data.question ||
        data[0]?.question ||
        data.output ||
        JSON.stringify(data);

      setQuestions([
        {
          question: fullQuestion,
          options: extractOptions(fullQuestion),
          answer: "A",
        },
      ]);

      setIndex(0);
      setStarted(true);
      setSelected("");
      setResult("");
      setTime(10);
    } catch (err) {
      setError("Failed to load question");
    }

    setLoading(false);
  };

  const handleSubmit = async () => {
    if (selected === "") {
      setError("⚠️ Please select an option");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(ANSWER_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId: "STU001",
          questionId: "Q001",
          selectedAnswer: selected,
        }),
      });

      const data = await res.json();

      if (data.correct) {
        setResult(`✅ Correct | Score: ${data.score}`);
      } else {
        setResult(`❌ Wrong | Correct Answer: ${data.correctAnswer}`);
      }
    } catch (err) {
      setError("Submission failed");
    }

    setLoading(false);
  };

  const handleNext = async () => {
    setSelected("");
    setResult("");
    setError("");
    setTime(10);

    try {
      const res = await fetch(QUESTION_API);
      const raw = await res.json();
      const data = Array.isArray(raw) ? raw[0] : raw;

      const fullQuestion =
        data.question ||
        data[0]?.question ||
        data.output ||
        JSON.stringify(data);

      setQuestions([
        {
          question: fullQuestion,
          options: extractOptions(fullQuestion),
          answer: "A",
        },
      ]);
    } catch (err) {
      setError("Failed to load next question");
    }
  };

  return (
    <div className="w-full px-1 md:px-4">
      <div className="glass-card mx-auto max-w-2xl p-6 md:mt-6 md:p-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h1 className="heading-display text-3xl font-bold text-[#10221a]">
            Practice Zone
          </h1>
          <p className="rounded-lg border border-[#0a7f56]/30 bg-[#0a7f56]/14 px-3 py-1 text-sm font-semibold text-[#10221a]">
            Q {index + 1}
          </p>
        </div>

        {!started ? (
          <div className="rounded-2xl border border-[#d1ddd5] bg-white p-6 text-center">
            <p className="text-lg font-semibold text-[#1c372a]">
              Click Start to begin the question and timer.
            </p>

            <button
              type="button"
              onClick={handleStart}
              className="mt-5 rounded-xl bg-[#0a7f56] px-6 py-2.5 font-semibold text-white"
            >
              Start Practice
            </button>
          </div>
        ) : (
          <>
            {result.includes("Correct") && <Confetti />}

            <Timer time={time} setTime={setTime} />

            <QuestionCard
              question={cleanQuestion}
              options={current.options}
              selected={selected}
              setSelected={setSelected}
            />

            {error && (
              <p className="mt-3 text-sm font-semibold text-[#cf3f1f]">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading || !!result}
              className="mt-5 rounded-xl bg-[#0a7f56] px-5 py-2.5 font-semibold text-white"
            >
              Submit
            </button>

            {loading && (
              <div className="mt-4 flex justify-center">
                <div className="h-7 w-7 animate-spin rounded-full border-4 border-[#0a7f56] border-t-transparent"></div>
              </div>
            )}

            {result && (
              <div className="mt-4 rounded-xl border border-[#d7e4dc] bg-[#edf6f1] p-3 text-center font-bold text-[#10221a]">
                {result}
              </div>
            )}

            {result && (
              <div className="mt-3 rounded-xl bg-white p-3 text-sm">
                Explanation: {explanation}
              </div>
            )}

            <div className="mt-4 rounded-xl border border-[#d4ddd6] bg-white/70 p-3">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#4e6a5d]">
                <span>Progress</span>
                <span>{progressPercent}%</span>
              </div>

              <div className="mt-2 h-2.5 rounded-full bg-[#d8e3dc]">
                <div
                  className="h-2.5 rounded-full bg-[#0a7f56]"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>

            {result && (
              <button
                type="button"
                onClick={handleNext}
                className="mt-3 rounded-xl border border-[#0a7f56]/25 bg-white px-5 py-2.5 font-semibold text-[#0a7f56]"
              >
                Next Question
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Practice;