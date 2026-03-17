function Battle() {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg p-6 rounded text-center">

      <h1 className="text-2xl font-bold mb-4">
        ⚔️ Battle Mode
      </h1>

      <p className="text-gray-500 mb-4">
        Compete with other users (Demo Mode)
      </p>

      <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
        Start Battle
      </button>

    </div>
  );
}

export default Battle;