import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">
        QuickFire AI 🚀
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 mb-6">
        Practice coding questions with AI-powered feedback
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          to="/practice"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Start Practice
        </Link>

        <Link
          to="/leaderboard"
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
        >
          Leaderboard
        </Link>
      </div>

    </div>
  );
}

export default Home;