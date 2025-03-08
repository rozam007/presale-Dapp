import { useEffect, useState } from "react";

const SaleCountdown = ({ startTime, endTime }) => {
  const [currentTime, setCurrentTime] = useState(Math.floor(Date.now() / 1000));
  const [remainingTime, setRemainingTime] = useState(startTime - currentTime);
  const [status, setStatus] = useState("Sale starts in");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Math.floor(Date.now() / 1000);

      if (now < startTime) {
        setRemainingTime(startTime - now);
        setStatus("Sale starts in");
      } else if (now >= startTime && now < endTime) {
        setRemainingTime(endTime - now);
        setStatus("Sale ends in");
      } else {
        setRemainingTime(0);
        setStatus("Sale has ended");
        clearInterval(interval);
      }

      setCurrentTime(now);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  // Convert seconds to days, hours, minutes, and seconds
  const formatTime = (seconds) => {
    if (seconds <= 0) return "00:00:00";
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days > 0 ? `${days}d ` : ""}${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="p-2 flex gap-2 items-center text-center">
      <h2 className="text-md font-bold text-white font-semibold">{status}: </h2>
      <p className="text-lg text-white text-themeColor">{formatTime(remainingTime)}</p>
    </div>
  );
};

export default SaleCountdown;
