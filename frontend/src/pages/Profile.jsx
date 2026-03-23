function Profile() {
  return (
    <div className="glass-card mx-auto mt-4 max-w-3xl p-7 text-center md:p-8">
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-[#8a63ff]/30 bg-[#8a63ff]/14 text-3xl">
        👤
      </div>

      <h1 className="heading-display text-3xl font-bold text-[#10221a]">
        Demo Student
      </h1>

      <p className="mt-1 text-sm text-[#4e6a5d]">CSE | QuickFire Active User</p>

      <div className="mt-6 grid gap-3 text-left md:grid-cols-3">
        <div className="rounded-xl border border-[#d4ddd6] bg-white p-3">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4e6a5d]">
            Score
          </p>
          <p className="text-xl font-bold text-[#10221a]">15</p>
        </div>

        <div className="rounded-xl border border-[#d4ddd6] bg-white p-3">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4e6a5d]">
            Rank
          </p>
          <p className="text-xl font-bold text-[#10221a]">#1</p>
        </div>

        <div className="rounded-xl border border-[#d4ddd6] bg-white p-3">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4e6a5d]">
            Streak
          </p>
          <p className="text-xl font-bold text-[#10221a]">🔥 1 Day</p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-[#d4ddd6] bg-white/80 p-4 text-left">
          <p className="text-xs uppercase tracking-[0.18em] text-[#4e6a5d]">
            Performance Analytics
          </p>

          <div className="mt-3 space-y-2 text-sm text-[#2f4c3f]">
            <div>
              <p className="font-semibold">Aptitude</p>
              <div className="mt-1 h-2 rounded-full bg-[#d8e3dc]">
                <div className="h-2 w-[82%] rounded-full bg-[#8a63ff]"></div>
              </div>
            </div>

            <div>
              <p className="font-semibold">Coding</p>
              <div className="mt-1 h-2 rounded-full bg-[#d8e3dc]">
                <div className="h-2 w-[74%] rounded-full bg-[#8a63ff]"></div>
              </div>
            </div>

            <div>
              <p className="font-semibold">Verbal</p>
              <div className="mt-1 h-2 rounded-full bg-[#d8e3dc]">
                <div className="h-2 w-[68%] rounded-full bg-[#8a63ff]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#d4ddd6] bg-white/80 p-4 text-left">
          <p className="text-xs uppercase tracking-[0.18em] text-[#4e6a5d]">
            Strength and Weakness
          </p>

          <p className="mt-3 rounded-lg border border-[#d4ddd6] bg-white px-3 py-2 text-sm text-[#2f4c3f]">
            Strength: Aptitude Speed
          </p>

          <p className="mt-2 rounded-lg border border-[#d4ddd6] bg-white px-3 py-2 text-sm text-[#2f4c3f]">
            Weak Topic: DBMS, SQL
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-[#d4ddd6] bg-white/80 p-4 text-left">
        <p className="text-xs uppercase tracking-[0.18em] text-[#4e6a5d]">
          Badges Earned
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#8a63ff]/14 px-3 py-1 text-sm">
            🔥 Week Warrior
          </span>

          <span className="rounded-full bg-[#ff6b35]/10 px-3 py-1 text-sm">
            ⚡ Speed Starter
          </span>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-[#d4ddd6] bg-white/80 p-4 text-left">
        <p className="text-xs uppercase tracking-[0.18em] text-[#4e6a5d]">
          Match History
        </p>

        <div className="mt-3 space-y-2 text-sm text-[#2f4c3f]">
          <p className="rounded-lg border border-[#d4ddd6] bg-white px-3 py-2">
            Correct Answer | +10 Score | just now
          </p>

          <p className="rounded-lg border border-[#d4ddd6] bg-white px-3 py-2">
            Practice Session | +5 Score | 10 min ago
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;