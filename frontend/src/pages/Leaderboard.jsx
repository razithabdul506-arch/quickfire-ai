function Leaderboard() {
  const users = [
    { name: "Sakthi", score: 10 },
    { name: "User1", score: 8 },
    { name: "User2", score: 6 },
  ];

  return (
    <div className="glass-card mx-auto mt-4 max-w-2xl p-6 md:p-8">
      <h1 className="heading-display mb-5 text-center text-3xl font-bold text-[#10221a]">
        Leaderboard
      </h1>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-2 text-xs font-semibold">
          <span className="rounded-full border border-[#8a63ff]/35 bg-[#8a63ff]/14 px-3 py-1 text-[#10221a]">
            Global
          </span>
          <span className="rounded-full border border-[#d4ddd6] bg-white/85 px-3 py-1 text-[#10221a]">
            Friends
          </span>
        </div>
        <div className="flex gap-2 text-xs font-semibold">
          {["Weekly", "Monthly", "All-Time"].map((period) => (
            <span
              key={period}
              className="rounded-lg border border-[#d4ddd6] bg-white/85 px-2.5 py-1 text-[#10221a]"
            >
              {period}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {users.map((u, i) => (
          <div
            key={i}
            className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
              u.name === "Sakthi"
                ? "border-[#8a63ff]/40 bg-[#8a63ff]/16 shadow-[0_0_0_1px_rgba(138,99,255,0.25)]"
                : "border-[#d4ddd6] bg-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#8a63ff]/35 bg-[#8a63ff]/14 font-bold text-[#10221a]">
                {i + 1}
              </span>
              <span className="font-semibold text-[#1d3428]">{u.name}</span>
            </div>
            <span className="rounded-lg bg-[#ff6b35]/10 px-3 py-1 font-bold text-[#c54c1f]">
              {u.score}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-[#d4ddd6] bg-white/75 px-4 py-3 text-sm text-[#2f4c3f]">
        Participant Range: 1-100 players active this week. You are in Top 15%.
      </div>

      <p className="mt-5 text-center text-sm text-[#4e6a5d]">
        Keep practicing daily to increase rank before your campus placement
        round.
      </p>
    </div>
  );
}

export default Leaderboard;
