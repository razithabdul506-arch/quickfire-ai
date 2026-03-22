import { useEffect, useState } from "react";

function VideoFeed() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

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
    setStatusMessage("Uploading...");

    // Demo upload flow: finalize after a short delay and show preview.
    setTimeout(() => {
      if (video) {
        URL.revokeObjectURL(video);
      }

      const videoUrl = URL.createObjectURL(selectedFile);
      setVideo(videoUrl);
      setUploading(false);
      setStatusMessage("Upload successful.");
    }, 800);
  };

  return (
    <div className="glass-card mx-auto mt-4 max-w-3xl p-6 md:p-8">
      <h1 className="heading-display mb-4 text-center text-3xl font-bold text-[#10221a]">
        Video Feed
      </h1>

      <div className="rounded-2xl border border-dashed border-[#0a7f56]/30 bg-white p-5">
        <div className="flex flex-col items-center gap-3">
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
            className="rounded-xl bg-[#0a7f56] px-5 py-2.5 font-semibold text-white transition hover:bg-[#075d3f] disabled:cursor-not-allowed disabled:opacity-60"
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
        <div className="mt-6">
          <video
            controls
            className="w-full rounded-2xl border border-[#d4ddd6]"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}

      <p className="mt-4 text-center text-sm text-[#4e6a5d]">
        (Demo: Video upload and preview UI)
      </p>
    </div>
  );
}

export default VideoFeed;
