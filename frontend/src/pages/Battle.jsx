import { useState } from "react";

function Battle() {
  const [started, setStarted] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");

  const [messages, setMessages] = useState([
    { user: "Demo Student", text: "I think answer is 24 workers." },
    { user: "User1", text: "Yes, because days reduced by half." },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const options = ["12", "18", "24", "36"];
  const correctAnswer = "24";

  const handleSubmit = () => {
    if (!selectedOption) {
      setResult("Please select an option.");
      return;
    }

    if (selectedOption === correctAnswer) {
      setResult("✅ Correct Answer! +10 points");
    } else {
      setResult(`❌ Wrong Answer. Correct answer: ${correctAnswer}`);
    }

    setSubmitted(true);
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    setMessages([
      ...messages,
      { user: "You", text: newMessage }
    ]);

    setNewMessage("");
  };

  return (
    <div className="mx-auto mt-4 max-w-6xl space-y-4">
      <div className="glass-card p-4 text-center md:p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-[#4e6a5d]">
          Battle Arena Timer
        </p>
        <p className="heading-display mt-2 text-4xl font-bold text-[#10221a]">
          00:52
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div className="glass-card p-6 md:p-7">
          <h1 className="heading-display text-3xl font-bold text-[#10221a] md:text-4xl">
            Real-Time Multiplayer Battle
          </h1>

          <p className="mt-2 text-[#4e6a5d]">
            Solve the same question as opponents and discuss after submission.
          </p>

          <div className="mt-5 rounded-2xl border border-[#d3ddd6] bg-white/80 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#4e6a5d]">
              Question Type
            </p>

            <p className="mt-2 text-lg font-bold text-[#10221a]">
              MCQ: Time and Work
            </p>

            <p className="mt-1 text-sm text-[#4e6a5d]">
              If 12 workers finish a task in 18 days, how many workers are needed
              to finish it in 9 days?
            </p>

            <div className="mt-4 grid gap-2">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  className={`rounded-lg border px-4 py-2 text-left ${
                    selectedOption === option
                      ? "bg-[#8a63ff]/20 border-[#8a63ff]"
                      : "bg-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              onClick={handleSubmit}
              className="mt-4 rounded-xl bg-[#0a7f56] px-6 py-2 text-white"
            >
              Submit Answer
            </button>

            {result && (
              <p className="mt-3 text-sm font-semibold text-[#10221a]">
                {result}
              </p>
            )}
          </div>

          {!started ? (
            <button
              type="button"
              onClick={() => setStarted(true)}
              className="mt-6 rounded-xl bg-[#0a7f56] px-7 py-3 font-semibold text-white"
            >
              Start Battle
            </button>
          ) : (
            <div className="mt-6 rounded-2xl border border-[#0a7f56]/20 bg-[#edf6f1] p-5">
              <p className="text-xl font-bold text-[#10221a]">
                Battle Live
              </p>

              <p className="mt-1 text-sm text-[#2f4c3f]">
                Score updates active.
              </p>
            </div>
          )}

          <div className="mt-6 rounded-xl border border-[#d3ddd6] bg-white/80 p-4">
            <p className="text-sm font-bold text-[#10221a]">
              Battle Discussion Room
            </p>

            <div className="mt-3 space-y-2 max-h-40 overflow-y-auto">
              {messages.map((msg, i) => (
                <div key={i} className="rounded-lg border px-3 py-2 text-sm">
                  <strong>{msg.user}:</strong> {msg.text}
                </div>
              ))}
            </div>

            <div className="mt-3 flex gap-2">
              <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Discuss the answer..."
                className="flex-1 rounded-lg border p-2"
              />

              <button
                onClick={sendMessage}
                className="rounded-lg bg-[#8a63ff] px-4 py-2 text-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="glass-card p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4e6a5d]">
            Live Leaderboard
          </p>

          <div className="mt-3 space-y-2">
            {["You", "User1", "User2"].map((name, idx) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-xl border border-[#d3ddd6] bg-white/80 px-3 py-2"
              >
                <p className="font-semibold text-[#10221a]">
                  #{idx + 1} {name}
                </p>

                <p className="font-bold text-[#075d3f]">
                  {420 - idx * 24} pts
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#4e6a5d]">
            Opponent Status
          </p>

          <div className="mt-2 space-y-2 text-sm">
            <p className="rounded-lg border border-[#d3ddd6] bg-white/80 px-3 py-2">
              User1: Answering...
            </p>

            <p className="rounded-lg border border-[#d3ddd6] bg-white/80 px-3 py-2">
              User2: Submitted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Battle;