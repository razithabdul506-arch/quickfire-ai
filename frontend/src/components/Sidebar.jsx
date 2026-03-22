import { NavLink } from "react-router-dom";

function Sidebar() {
  const navItems = [
    { to: "/", icon: "🏠", label: "Home" },
    { to: "/practice", icon: "🎮", label: "Practice" },
    { to: "/battle", icon: "⚔️", label: "Battle" },
    { to: "/leaderboard", icon: "🏆", label: "Leaderboard" },
    { to: "/profile", icon: "👤", label: "Profile" },
    { to: "/dashboard", icon: "📊", label: "Dashboard" },
    { to: "/video", icon: "🎥", label: "Video" },
  ];

  const linkClass =
    "flex min-w-[120px] items-center gap-2 rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-[#2e4d3f] transition hover:-translate-y-0.5 hover:border-[#0a7f56]/25 hover:bg-white hover:text-[#0a7f56]";
  const activeClass =
    "flex min-w-[120px] items-center gap-2 rounded-xl border border-[#0a7f56]/30 bg-white px-3 py-2 text-sm font-semibold text-[#075d3f] shadow-[0_10px_28px_rgba(101,74,255,0.22)]";

  return (
    <aside className="glass-card w-full p-3 md:w-64 md:p-4">
      <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#4e6a5d]">
        Navigation
      </p>
      <div className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
