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
  return (
    <BrowserRouter>

      {/* Top Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/battle" element={<Battle />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/video" element={<VideoFeed />} />
          </Routes>
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;