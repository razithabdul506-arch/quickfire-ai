import { useState } from "react";

function Battle() {
  const [started, setStarted] = useState(false);

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
            Solve the same question as your opponents. Faster accurate
            submissions raise your live score.
          </p>

          <div className="mt-5 rounded-2xl border border-[#d3ddd6] bg-white/80 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#4e6a5d]">
              Question Type
            </p>
            <p className="mt-2 text-lg font-bold text-[#10221a]">
              MCQ: Time and Work
            </p>
            <p className="mt-1 text-sm text-[#4e6a5d]">
              If 12 workers finish a task in 18 days, how many workers are
              needed to finish it in 9 days?
            </p>
          </div>

          <div className="mt-4 grid gap-3 text-left md:grid-cols-3">
            <div className="rounded-xl border border-[#d3ddd6] bg-white/80 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#4e6a5d]">
                Room
              </p>
              <p className="mt-1 text-lg font-bold text-[#10221a]">
                Public Match
              </p>
            </div>
            <div className="rounded-xl border border-[#d3ddd6] bg-white/80 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#4e6a5d]">
                Mode
              </p>
              <p className="mt-1 text-lg font-bold text-[#10221a]">Ranked</p>
            </div>
            <div className="rounded-xl border border-[#d3ddd6] bg-white/80 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#4e6a5d]">
                Difficulty
              </p>
              <p className="mt-1 text-lg font-bold text-[#10221a]">Mixed</p>
            </div>
          </div>

          {!started ? (
            <button
              type="button"
              onClick={() => setStarted(true)}
              className="mt-6 rounded-xl bg-[#0a7f56] px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#075d3f]"
            >
              Start Battle
            </button>
          ) : (
            <div className="mt-6 rounded-2xl border border-[#0a7f56]/20 bg-[#edf6f1] p-5 text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-[#4e6a5d]">
                Status
              </p>
              <p className="mt-2 text-xl font-bold text-[#10221a]">
                Battle Live
              </p>
              <p className="mt-1 text-sm text-[#2f4c3f]">
                Score updated: +20 streak bonus. Keep the momentum.
              </p>
            </div>
          )}
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
                <p className="font-bold text-[#075d3f]">{420 - idx * 24} pts</p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#4e6a5d]">
            Opponent Status
          </p>
          <div className="mt-2 space-y-2 text-sm">
            <p className="rounded-lg border border-[#d3ddd6] bg-white/80 px-3 py-2 text-[#2f4c3f]">
              User1: Answering...
            </p>
            <p className="rounded-lg border border-[#d3ddd6] bg-white/80 px-3 py-2 text-[#2f4c3f]">
              User2: Submitted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Battle;
