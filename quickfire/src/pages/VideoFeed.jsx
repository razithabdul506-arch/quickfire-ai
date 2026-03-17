import { useState } from "react";

function VideoFeed() {
  const [video, setVideo] = useState(null);

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg p-6 rounded">

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4 text-center">
        🎥 Video Feed
      </h1>

      {/* Upload Section */}
      <div className="flex flex-col items-center gap-3">

        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(URL.createObjectURL(e.target.files[0]))}
          className="border p-2 rounded"
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Upload
        </button>

      </div>

      {/* Video Preview */}
      {video && (
        <div className="mt-6">
          <video controls className="w-full rounded">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Note */}
      <p className="mt-4 text-gray-500 text-sm text-center">
        (Demo: Video upload and preview UI)
      </p>

    </div>
  );
}

export default VideoFeed;