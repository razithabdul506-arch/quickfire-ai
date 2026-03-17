import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass = "flex items-center gap-2 p-2 rounded hover:bg-gray-700";
  const activeClass = "flex items-center gap-2 p-2 rounded bg-blue-500";

  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-4 flex flex-col gap-3">

      <NavLink to="/" className={({ isActive }) => isActive ? activeClass : linkClass}>
        🏠 Home
      </NavLink>

      <NavLink to="/practice" className={({ isActive }) => isActive ? activeClass : linkClass}>
        🎮 Practice
      </NavLink>

      <NavLink to="/battle" className={({ isActive }) => isActive ? activeClass : linkClass}>
        ⚔️ Battle
      </NavLink>

      <NavLink to="/leaderboard" className={({ isActive }) => isActive ? activeClass : linkClass}>
        🏆 Leaderboard
      </NavLink>

      <NavLink to="/profile" className={({ isActive }) => isActive ? activeClass : linkClass}>
        👤 Profile
      </NavLink>

      {/* ADD THESE TWO 👇 */}
      <NavLink to="/dashboard" className={({ isActive }) => isActive ? activeClass : linkClass}>
        📊 Dashboard
      </NavLink>

      <NavLink to="/video" className={({ isActive }) => isActive ? activeClass : linkClass}>
        🎥 Video
      </NavLink>

    </div>
  );
}

export default Sidebar;