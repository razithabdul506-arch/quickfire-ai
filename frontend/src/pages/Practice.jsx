import { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import Confetti from "react-confetti";

function Practice() {
  const questions = [
    {
      question: "What is DBMS?",
      options: ["Database", "System Software", "Network", "Compiler"],
      answer: "Database",
    },
    {
      question: "HTML stands for?",
      options: [
        "Hyper Text Markup Language",
        "HighText",
        "Hyper Transfer",
        "None",
      ],
      answer: "Hyper Text Markup Language",
    },
  ];

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [time, setTime] = useState(10);
  const [started, setStarted] = useState(false);

  const current = questions[index];
  const answeredCount = index + (result ? 1 : 0);
  const progressPercent = started
    ? Math.round((answeredCount / questions.length) * 100)
    : 0;

  useEffect(() => {
    if (!started || loading || result || time !== 0) {
      return;
    }
    setResult("⏰ Time Up");
  }, [started, loading, result, time]);

  const handleStart = () => {
    setIndex(0);
    setStarted(true);
    setSelected("");
    setResult("");
    setError("");
    setTime(10);
  };

  const handleSubmit = () => {
    if (time === 0) {
      setError("⏰ Time is over. Click Next Question.");
      return;
    }

    if (!selected) {
      setError("⚠️ Please select an option");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      if (selected === current.answer) {
        setResult("✅ Correct");
      } else {
        setResult("❌ Wrong");
      }
      setLoading(false);
    }, 800);
  };

  const handleNext = () => {
    setIndex(index + 1);
    setSelected("");
    setResult("");
    setError("");
    setTime(10);
  };

  return (
    <div className="w-full px-1 md:px-4">
      <div className="glass-card mx-auto max-w-2xl p-6 md:mt-6 md:p-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h1 className="heading-display text-3xl font-bold text-[#10221a]">
            Practice Zone
          </h1>
          <p className="rounded-lg border border-[#0a7f56]/30 bg-[#0a7f56]/14 px-3 py-1 text-sm font-semibold text-[#10221a]">
            Q {index + 1} / {questions.length}
          </p>
        </div>

        <div className="mb-5 space-y-3">
          <div className="flex flex-wrap gap-2">
            {["Aptitude", "Coding", "Verbal"].map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-[#0a7f56]/25 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#075d3f]"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {["Easy", "Medium", "Hard"].map((level) => (
              <span
                key={level}
                className="rounded-lg border border-[#d4ddd6] bg-white/70 px-3 py-1 text-xs font-semibold text-[#2f4c3f]"
              >
                {level}
              </span>
            ))}
          </div>

          <div className="rounded-xl border border-[#d4ddd6] bg-white/75 p-3">
            <p className="text-xs uppercase tracking-[0.18em] text-[#4e6a5d]">
              AI Recommendation
            </p>
            <p className="mt-1 text-sm font-semibold text-[#10221a]">
              Focus on Time and Work + SQL Joins today
            </p>
          </div>
        </div>

        {!started ? (
          <div className="rounded-2xl border border-[#d1ddd5] bg-white p-6 text-center">
            <p className="text-lg font-semibold text-[#1c372a]">
              Click Start to begin the question and timer.
            </p>
            <p className="mt-2 text-sm text-[#4e6a5d]">
              Timer will start only after you press Start Practice.
            </p>
            <button
              type="button"
              onClick={handleStart}
              className="mt-5 rounded-xl bg-[#0a7f56] px-6 py-2.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#075d3f]"
            >
              Start Practice
            </button>
          </div>
        ) : (
          <>
            {result === "✅ Correct" && <Confetti />}
            <Timer time={time} setTime={setTime} />
            <QuestionCard
              question={current.question}
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
              className="mt-5 rounded-xl bg-[#0a7f56] px-5 py-2.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#075d3f] disabled:cursor-not-allowed disabled:opacity-60"
            >
              Submit
            </button>

            {loading && (
              <div className="mt-4 flex justify-center">
                <div className="h-7 w-7 animate-spin rounded-full border-4 border-[#0a7f56] border-t-transparent"></div>
              </div>
            )}

            {result && !loading && (
              <div className="mt-4 rounded-xl border border-[#d7e4dc] bg-[#edf6f1] p-3 text-center font-bold text-[#10221a]">
                {result}
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

            {index < questions.length - 1 && result && !loading && (
              <button
                type="button"
                onClick={handleNext}
                className="mt-3 rounded-xl border border-[#0a7f56]/25 bg-white px-5 py-2.5 font-semibold text-[#0a7f56] transition hover:-translate-y-0.5"
              >
                Next Question
              </button>
            )}

            {index === questions.length - 1 && result && !loading && (
              <button
                type="button"
                onClick={() => setStarted(false)}
                className="mt-3 rounded-xl border border-[#0a7f56]/25 bg-white px-5 py-2.5 font-semibold text-[#0a7f56] transition hover:-translate-y-0.5"
              >
                Restart Session
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Practice;
