import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const dailyStats = [
    {
      key: "today",
      label: "Today",
      solvedQuestions: ["DBMS Basics", "React Hooks", "SQL Joins", "OOPS"],
      accuracy: 82,
    },
    {
      key: "yesterday",
      label: "Yesterday",
      solvedQuestions: ["HTML Forms", "CSS Grid", "Java Arrays"],
      accuracy: 76,
    },
    {
      key: "twoDaysAgo",
      label: "2 Days Ago",
      solvedQuestions: [
        "Binary Search",
        "Linked List",
        "OSI Model",
        "REST API",
        "Python Dict",
      ],
      accuracy: 88,
    },
  ];

  const [selectedDay, setSelectedDay] = useState(dailyStats[0].key);

  const activeDay =
    dailyStats.find((day) => day.key === selectedDay) ?? dailyStats[0];

  return (
    <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.4fr_1fr]">
      <div className="glass-card p-7 md:p-10">
        <h1 className="text-4xl font-['Poppins'] font-bold leading-tight text-[#10221a] md:text-6xl">
          Crack Placements Like a Pro. Compete, Learn, Dominate.
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3f5a4d] md:text-lg">
          Master coding, aptitude, and verbal rounds with AI-guided practice,
          real-time battle arenas, and leaderboard pressure built for modern
          placement preparation.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/practice"
            className="rounded-xl bg-[#0a7f56] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#075d3f]"
          >
            Start Practice
          </Link>

          <Link
            to="/leaderboard"
            className="rounded-xl border border-[#0a7f56]/25 bg-white px-6 py-3 text-sm font-semibold text-[#0a7f56] transition hover:-translate-y-0.5"
          >
            View Leaderboard
          </Link>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="glass-card p-4">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#4e6a5d]">
            View By Day
          </p>
          <div className="flex flex-wrap gap-2">
            {dailyStats.map((day) => (
              <button
                key={day.key}
                type="button"
                onClick={() => setSelectedDay(day.key)}
                className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
                  selectedDay === day.key
                    ? "bg-[#0a7f56] text-white"
                    : "bg-white text-[#2f4c3f] hover:bg-[#f0f6f2]"
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4e6a5d]">
            {activeDay.label}
          </p>
          <p className="mt-2 text-4xl font-bold text-[#10221a]">
            {activeDay.solvedQuestions.length}
          </p>
          <p className="text-sm text-[#4e6a5d]">Questions solved</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {activeDay.solvedQuestions.map((question) => (
              <span
                key={question}
                className="rounded-full border border-[#d2ddd5] bg-white px-3 py-1 text-xs font-semibold text-[#2f4c3f]"
              >
                {question}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4e6a5d]">
            Performance - {activeDay.label}
          </p>
          <p className="mt-2 text-4xl font-bold text-[#10221a]">
            {activeDay.accuracy}%
          </p>
          <p className="text-sm text-[#4e6a5d]">Accuracy on selected day</p>

          <div className="mt-3 h-2.5 w-full rounded-full bg-[#d9e5dd]">
            <div
              className="h-2.5 rounded-full bg-[#0a7f56]"
              style={{ width: `${activeDay.accuracy}%` }}
            ></div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#0a7f56]/20 bg-[#0a7f56] px-6 py-5 text-white shadow-lg">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">
            Next Step
          </p>
          <p className="mt-2 text-xl font-bold">Battle Mode Challenge</p>
          <p className="mt-2 text-sm text-white/80">
            Compete live with friends and boost confidence before interviews.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
