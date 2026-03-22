function Dashboard() {
  return (
    <section className="mx-auto max-w-5xl">
      <h1 className="heading-display text-3xl font-bold text-[#10221a] md:text-4xl">
        Command Center
      </h1>
      <p className="mt-2 text-[#4e6a5d]">
        Track placement readiness, XP growth, and live battle momentum.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
        <div className="glass-card p-5 md:p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#8a63ff]/30 bg-[#8a63ff]/14 text-2xl">
                👤
              </div>
              <div>
                <p className="text-lg font-bold text-[#10221a]">Sakthi</p>
                <p className="text-xs uppercase tracking-[0.16em] text-[#4e6a5d]">
                  Rank #14 | 11 day streak
                </p>
              </div>
            </div>
            <button
              type="button"
              className="rounded-xl bg-[#8a63ff] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#6f48e8]"
            >
              Start Battle
            </button>
          </div>

          <div className="mt-5 rounded-2xl border border-[#d4ddd6] bg-white/70 p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.18em] text-[#4e6a5d]">
                Daily Challenge
              </p>
              <p className="text-sm font-semibold text-[#10221a]">78%</p>
            </div>
            <div className="mt-3 h-2.5 w-full rounded-full bg-[#d8e3dc]">
              <div className="h-2.5 w-[78%] rounded-full bg-[#8a63ff]"></div>
            </div>
            <p className="mt-2 text-sm text-[#4e6a5d]">
              Solve 2 more coding questions to finish today.
            </p>
          </div>
        </div>

        <div className="glass-card p-5 md:p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-[#4e6a5d]">
            Quick Stats
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-[#d4ddd6] bg-white/70 p-3 text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-[#4e6a5d]">
                XP
              </p>
              <p className="mt-1 text-xl font-bold text-[#10221a]">2,450</p>
            </div>
            <div className="rounded-xl border border-[#d4ddd6] bg-white/70 p-3 text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-[#4e6a5d]">
                Accuracy
              </p>
              <p className="mt-1 text-xl font-bold text-[#10221a]">84%</p>
            </div>
            <div className="rounded-xl border border-[#d4ddd6] bg-white/70 p-3 text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-[#4e6a5d]">
                Score
              </p>
              <p className="mt-1 text-xl font-bold text-[#10221a]">9,180</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="glass-card p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-[#4e6a5d]">
            Recent Activity
          </p>
          <div className="mt-3 space-y-2 text-sm text-[#2f4c3f]">
            <p className="rounded-lg border border-[#d4ddd6] bg-white/70 px-3 py-2">
              Won Battle Room #92 (+120 XP)
            </p>
            <p className="rounded-lg border border-[#d4ddd6] bg-white/70 px-3 py-2">
              Completed Aptitude Set 5 (18/20)
            </p>
            <p className="rounded-lg border border-[#d4ddd6] bg-white/70 px-3 py-2">
              Unlocked badge: SQL Sprint
            </p>
          </div>
        </div>

        <div className="glass-card p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-[#4e6a5d]">
            Streak and Rewards
          </p>
          <div className="mt-3 grid grid-cols-7 gap-2 text-center text-xs">
            {[1, 1, 1, 1, 1, 0, 0].map((day, idx) => (
              <span
                key={idx}
                className={`rounded-lg border px-1 py-2 font-semibold ${
                  day
                    ? "border-[#8a63ff]/35 bg-[#8a63ff]/14 text-[#10221a]"
                    : "border-[#d4ddd6] bg-white/70 text-[#4e6a5d]"
                }`}
              >
                D{idx + 1}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm text-[#4e6a5d]">
            11-day streak active. Next reward unlock at 15 days.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
