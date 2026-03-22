function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--nav)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <div>
          <h1 className="heading-display text-2xl font-bold tracking-tight text-[var(--brand)] md:text-3xl">
            QuickFire AI
          </h1>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)] md:text-sm">
            AI Real-Time Gamified Placement Prep and Battle Platform
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="rounded-full border border-[var(--line)] bg-[var(--chip)] px-3 py-1 text-xs font-semibold text-[var(--brand)] md:px-4 md:py-2 md:text-sm">
            Real-Time Battle Ready
          </div>
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-[var(--ink)] transition hover:-translate-y-0.5 md:px-4 md:py-2 md:text-sm"
          >
            {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
