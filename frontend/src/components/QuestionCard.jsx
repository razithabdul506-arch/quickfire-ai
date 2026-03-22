function QuestionCard({ question, options, selected, setSelected }) {
  return (
    <div>
      <h2 className="heading-display mb-5 text-2xl font-bold text-[#10221a]">
        {question}
      </h2>

      <div className="flex flex-col gap-3">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(opt)}
            className={`rounded-xl border px-4 py-3 text-left font-medium transition ${
              selected === opt
                ? "border-[#0a7f56] bg-[#0a7f56] text-white shadow"
                : "border-[#d1dbd4] bg-white text-[#1f3a2c] hover:border-[#0a7f56]/40 hover:bg-[#f3faf6]"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
