"use client";

import { useEffect, useState } from "react";
import styles from "./LiveTimer.module.css";

export const TIMER_CONFIG = {
  isRunning: true,
  startTime: "2026-08-26T23:31:00",
  endTime: "2026-08-26T23:35:00",
};

export function LiveTimer() {
  const calculateDistance = () => {
    const startTimestamp = new Date(TIMER_CONFIG.startTime).getTime();
    const endTimestamp = new Date(TIMER_CONFIG.endTime).getTime();

    if (!TIMER_CONFIG.isRunning) {
      return endTimestamp - startTimestamp;
    }

    const now = Date.now();
    if (now < startTimestamp) {
      return endTimestamp - startTimestamp;
    } else if (now > endTimestamp) {
      return 0;
    } else {
      return endTimestamp - now;
    }
  };

  const timeFromDistance = (distance: number) => ({
    hours: Math.floor(distance / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  });

  // Initialize state from calculation so we don't call setState synchronously inside useEffect
  const [timeLeft, setTimeLeft] = useState(() => timeFromDistance(calculateDistance()));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const updateTimer = () => {
      setTimeLeft(timeFromDistance(calculateDistance()));
    };

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.timerWrapper}>
      <div className={styles.timerBlock}>
        <span className={styles.timerValue} data-text={String(timeLeft.hours).padStart(2, '0')}>
          {String(timeLeft.hours).padStart(2, '0')}
        </span>
        <span className={styles.timerLabel}>HRS</span>
      </div>
      <span className={styles.timerSeparator}>:</span>
      <div className={styles.timerBlock}>
        <span className={styles.timerValue} data-text={String(timeLeft.minutes).padStart(2, '0')}>
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className={styles.timerLabel}>MINS</span>
      </div>
      <span className={styles.timerSeparator}>:</span>
      <div className={styles.timerBlock}>
        <span className={styles.timerValue} data-text={String(timeLeft.seconds).padStart(2, '0')}>
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
        <span className={styles.timerLabel}>SECS</span>
      </div>
    </div>
  );
}
