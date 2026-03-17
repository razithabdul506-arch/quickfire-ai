function Leaderboard() {
  const users = [
    { name: "Sakthi", score: 10 },
    { name: "User1", score: 8 },
    { name: "User2", score: 6 },
  ];

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg p-6 rounded">

      <h1 className="text-2xl font-bold mb-4 text-center">
        🏆 Leaderboard
      </h1>

      {users.map((u, i) => (
        <div key={i} className="flex justify-between p-3 border-b">
          <span>{u.name}</span>
          <span className="font-bold">{u.score}</span>
        </div>
      ))}

    </div>
  );
}

export default Leaderboard;