function QuestionCard({ question, options, selected, setSelected }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{question}</h2>

      <div className="flex flex-col gap-3">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(opt)}
            className={`p-2 border rounded hover:bg-blue-200 transition ${
              selected === opt ? "bg-blue-500 text-white" : ""
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