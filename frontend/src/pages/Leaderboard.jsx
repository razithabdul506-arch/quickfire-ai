import { useEffect, useState } from "react";

const LEADERBOARD_API = "https://harini05.app.n8n.cloud/webhook/leaderboard";

function Leaderboard() {
  const [allUsers, setAllUsers] = useState([]);
  const [mode, setMode] = useState("Global");
  const [period, setPeriod] = useState("Weekly");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const res = await fetch(LEADERBOARD_API);
      const data = await res.json();

      setAllUsers(Array.isArray(data) ? data : [data]);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const users =
    mode === "Department"
      ? allUsers.filter((u) => u.department === "CSE")
      : allUsers;

  return (
    <div className="glass-card mx-auto mt-4 max-w-2xl p-6 md:p-8">
      <h1 className="heading-display mb-5 text-center text-3xl font-bold text-[#10221a]">
        Leaderboard
      </h1>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-2 text-xs font-semibold">
          <button
            onClick={() => setMode("Global")}
            className={`rounded-full px-3 py-1 ${
              mode === "Global"
                ? "bg-[#8a63ff]/14 border border-[#8a63ff]/35"
                : "bg-white border border-[#d4ddd6]"
            }`}
          >
            Global
          </button>

          <button
            onClick={() => setMode("Department")}
            className={`rounded-full px-3 py-1 ${
              mode === "Department"
                ? "bg-[#8a63ff]/14 border border-[#8a63ff]/35"
                : "bg-white border border-[#d4ddd6]"
            }`}
          >
            Department
          </button>
        </div>

        <div className="flex gap-2 text-xs font-semibold">
          {["Weekly", "Monthly", "All-Time"].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`rounded-lg px-2.5 py-1 ${
                period === p
                  ? "bg-[#8a63ff]/14 border border-[#8a63ff]/35"
                  : "bg-white border border-[#d4ddd6]"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <p className="text-center">Loading leaderboard...</p>
      ) : (
        <div className="space-y-3">
          {users.map((u, i) => (
            <div
              key={i}
              className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
                i === 0
                  ? "border-[#8a63ff]/40 bg-[#8a63ff]/16"
                  : "border-[#d4ddd6] bg-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#8a63ff]/35 bg-[#8a63ff]/14 font-bold text-[#10221a]">
                  {i + 1}
                </span>

                <div>
                  <div className="font-semibold text-[#1d3428]">
                    {u.name || u.studentId || "Student"}
                  </div>
                  <div className="text-xs text-[#4e6a5d]">
                    {u.department || "CSE"}
                  </div>
                </div>
              </div>

              <span className="rounded-lg bg-[#ff6b35]/10 px-3 py-1 font-bold text-[#c54c1f]">
                {u.totalScore ?? 0}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 rounded-xl border border-[#d4ddd6] bg-white/75 px-4 py-3 text-sm text-[#2f4c3f]">
        Showing {period} rankings
      </div>
    </div>
  );
}

export default Leaderboard;