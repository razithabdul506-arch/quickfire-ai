import { useState, useEffect } from "react";

function Timer({ time, setTime }) {
  useEffect(() => {
    if (time === 0) return;

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, setTime]);

  return (
    <p className="text-red-500 mb-3 font-bold">
      Time Left: {time}s
    </p>
  );
}

export default Timer;