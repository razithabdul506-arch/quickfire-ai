import { useEffect, useState } from "react";

function VideoFeed() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("DSA");
  const [upvotes, setUpvotes] = useState(12);

  useEffect(() => {
    return () => {
      if (video) {
        URL.revokeObjectURL(video);
      }
    };
  }, [video]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] ?? null;

    if (!file) {
      setSelectedFile(null);
      setStatusMessage("");
      return;
    }

    if (!file.type.startsWith("video/")) {
      setSelectedFile(null);
      setStatusMessage("Please choose a valid video file.");
      return;
    }

    setSelectedFile(file);
    setStatusMessage(`${file.name} selected. Click Upload to continue.`);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setStatusMessage("Please choose a video before uploading.");
      return;
    }

    setUploading(true);
    setStatusMessage("AI processing video...");

    setTimeout(() => {
      if (video) {
        URL.revokeObjectURL(video);
      }

      const videoUrl = URL.createObjectURL(selectedFile);
      setVideo(videoUrl);
      setUploading(false);

      if (!title) {
        setTitle("AI Generated Solution Title");
      }

      setStatusMessage("Upload successful. AI metadata generated.");
    }, 1200);
  };

  return (
    <div className="glass-card mx-auto mt-4 max-w-3xl p-6 md:p-8">
      <h1 className="heading-display mb-4 text-center text-3xl font-bold text-[#10221a]">
        Video Solutions Feed
      </h1>

      <div className="rounded-2xl border border-dashed border-[#0a7f56]/30 bg-white p-5">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter solution title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-xl border border-[#d4ddd6] p-2"
          />

          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="rounded-xl border border-[#d4ddd6] p-2"
          >
            <option>DSA</option>
            <option>Aptitude</option>
            <option>Technical</option>
          </select>

          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="w-full rounded-xl border border-[#d4ddd6] p-2 text-sm text-transparent file:mr-4 file:rounded-lg file:border-0 file:bg-[#0a7f56]/10 file:px-4 file:py-2 file:font-semibold file:text-[#10221a]"
          />

          <button
            type="button"
            onClick={handleUpload}
            disabled={uploading}
            className="rounded-xl bg-[#0a7f56] px-5 py-2.5 font-semibold text-white"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>

          {statusMessage && (
            <p className="text-sm font-medium text-[#2f4c3f]">
              {statusMessage}
            </p>
          )}
        </div>
      </div>

      {video && (
        <div className="mt-6 rounded-2xl border border-[#d4ddd6] bg-white p-4">
          <video controls className="w-full rounded-xl">
            <source src={video} type="video/mp4" />
          </video>

          <h2 className="mt-3 text-lg font-bold text-[#10221a]">{title}</h2>

          <p className="text-sm text-[#4e6a5d]">
            Topic: {topic} | 👁 124 views | 👍 {upvotes}
          </p>

          <button
            onClick={() => setUpvotes(upvotes + 1)}
            className="mt-3 rounded-lg bg-[#8a63ff]/14 px-4 py-2 text-sm font-semibold"
          >
            👍 Upvote
          </button>

          <p className="mt-3 text-sm text-[#2f4c3f]">
            AI Summary: Explanation quality good, concept clarity detected.
          </p>
        </div>
      )}

      <div className="mt-6 rounded-xl border border-[#d4ddd6] bg-white p-4">
        <p className="text-sm font-semibold text-[#10221a]">
          Community Posted Solutions
        </p>

        <div className="mt-3 space-y-2 text-sm">
          <p className="rounded-lg border px-3 py-2">
            Binary Search Walkthrough | 👍 45 | 👁 230
          </p>

          <p className="rounded-lg border px-3 py-2">
            DBMS Normalization Explained | 👍 28 | 👁 150
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoFeed;