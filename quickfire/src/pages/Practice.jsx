import { useState } from "react";
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

  const current = questions[index];

  const handleSubmit = () => {
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
    <div className="w-full px-4">
      <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg p-6 rounded">

        {/* 🎉 Confetti */}
        {result === "✅ Correct" && <Confetti />}

        {/* ⏱ Timer */}
        <Timer time={time} setTime={setTime} />

        {/* ❓ Question */}
        <QuestionCard
          question={current.question}
          options={current.options}
          selected={selected}
          setSelected={setSelected}
        />

        {/* ⚠️ Error */}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {/* ✅ Submit */}
        <button
          onClick={handleSubmit}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Submit
        </button>

        {/* 🔄 Loading Spinner */}
        {loading && (
          <div className="mt-4 flex justify-center">
            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* 📢 Result */}
        {result && !loading && (
          <div className="mt-4 p-3 bg-gray-200 rounded text-center font-bold">
            {result}
          </div>
        )}

        {/* ➡️ Next */}
        {index < questions.length - 1 && result && !loading && (
          <button
            onClick={handleNext}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Next Question
          </button>
        )}

      </div>
    </div>
  );
}

export default Practice;