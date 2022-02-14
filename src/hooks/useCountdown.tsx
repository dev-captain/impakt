import { useEffect, useRef, useState } from 'react';

const useCountdown = (targetDate: Date) => {
  const [countdown, setCountdown] = useState(0);
  const countdownRef = useRef({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let interval: any;
    if (targetDate) {
      const diff = targetDate.getTime() - Date.now();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      countdownRef.current = {
        days,
        hours,
        minutes,
        seconds,
      };

      interval = setInterval(() => {
        if (diff < 0) {
          clearInterval(interval);
        } else {
          setCountdown(countdown + 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [countdown, setCountdown, targetDate]);

  return countdownRef.current;
};

export default useCountdown;
