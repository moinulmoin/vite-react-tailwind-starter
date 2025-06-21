import React, { useEffect, useState } from "react";

type TimerProps = {
  duration: number; // Tổng thời gian (giây)
  onTimeout: () => void;
};

const Timer: React.FC<TimerProps> = ({ duration, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState<number>(duration);
  const [showTimeoutPopup, setShowTimeoutPopup] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowTimeoutPopup(true); // Hiện popup
      const timeout = setTimeout(() => {
        onTimeout(); // Gọi nộp bài sau 2 giây
      }, 2000);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const percentage = (timeLeft / duration) * 100;

  const color =
    timeLeft <= 10
      ? "red"
      : timeLeft <= 30
      ? "orange"
      : "green";

  const barColor =
    color === "red"
      ? "bg-red-500"
      : color === "orange"
      ? "bg-orange-400"
      : "bg-green-500";

  return (
    <div className="w-full max-w-sm relative z-10">
      <div className="text-center text-lg font-semibold mb-1">
        <span className={`text-${color}-600`}>⏱ {formatTime(timeLeft)}</span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`${barColor} h-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Popup hết giờ */}
      {showTimeoutPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center w-80 animate-bounce">
            <h2 className="text-xl font-bold text-red-600 mb-2">⏰ Hết giờ!</h2>
            <p className="text-gray-700">Bài thi đang được tự động nộp...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
