import { useEffect } from "react";

function Timer({ time, setTime }) {
  useEffect(() => {
    if (time === 0) return;

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, setTime]);

  return (
    <p className="mb-5 inline-block rounded-full border border-[#ff6b35]/20 bg-[#ff6b35]/10 px-4 py-1 text-sm font-semibold text-[#c54c1f]">
      Time Left: {time}s
    </p>
  );
}

export default Timer;
