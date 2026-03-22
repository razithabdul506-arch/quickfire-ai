import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Practice from "./pages/Practice";
import Battle from "./pages/Battle";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import VideoFeed from "./pages/VideoFeed";

function App() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("quickfire-theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }

    const prefersDark =
      typeof window !== "undefined" && typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : false;

    return prefersDark ? "dark" : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("quickfire-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Navbar
        theme={theme}
        onToggleTheme={() =>
          setTheme((prev) => (prev === "dark" ? "light" : "dark"))
        }
      />
      <div className="px-3 pb-6 md:px-6">
        <div className="nav-outline mx-auto mt-4 max-w-7xl rounded-3xl bg-[var(--shell)] p-2 shadow-[0_22px_70px_var(--shadow)] backdrop-blur-sm md:p-4">
          <div className="flex flex-col gap-3 md:flex-row">
            <Sidebar />
            <main className="main-outline page-enter min-h-[78vh] flex-1 rounded-2xl bg-[var(--page)] p-4 md:p-7">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/battle" element={<Battle />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/video" element={<VideoFeed />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
