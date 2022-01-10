import { useEffect, useRef, useState } from "react";

const useCountdown = (targetDate: Date) => {
  const [countdown, setCountdown] = useState(0);
  const countdownRef = useRef({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const diff = targetDate.getTime() - Date.now();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownRef.current = {
      days,
      hours,
      minutes,
      seconds,
    };

    const interval = setInterval(() => {
      if (diff < 0) {
        clearInterval(interval);
      } else {
        setCountdown(countdown + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown, setCountdown, targetDate]);

  return countdownRef.current;
};

export default useCountdown;
