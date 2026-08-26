"use client";

import { useEffect, useState } from "react";
import styles from "./LiveTimer.module.css";

export const TIMER_CONFIG = {
  // Set to true to start tracking the countdown
  isRunning: true,
  // When the countdown officially starts
  startTime: "2026-08-26T23:31:00", // Format: YYYY-MM-DDTHH:mm:ss
  // When the countdown officially ends
  endTime: "2026-08-26T23:35:00", // Format: YYYY-MM-DDTHH:mm:ss
};

export function LiveTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateDistance = () => {
      const startTimestamp = new Date(TIMER_CONFIG.startTime).getTime();
      const endTimestamp = new Date(TIMER_CONFIG.endTime).getTime();

      if (!TIMER_CONFIG.isRunning) {
        return endTimestamp - startTimestamp;
      }

      const now = new Date().getTime();
      if (now < startTimestamp) {
        // Event hasn't started yet, show full duration
        return endTimestamp - startTimestamp;
      } else if (now > endTimestamp) {
        // Event ended, show zero
        return 0;
      } else {
        // Event is running, show remaining time
        return endTimestamp - now;
      }
    };

    const updateTimer = () => {
      const distance = calculateDistance();

      setTimeLeft({
        hours: Math.floor(distance / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    // Run once immediately
    updateTimer();

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; // avoid hydration mismatch

  return (
    <div className={styles.timerWrapper}>
      <div className={styles.timerBlock}>
        <span className={styles.timerValue} data-text={String(timeLeft.hours).padStart(2, '0')}>{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className={styles.timerLabel}>HRS</span>
      </div>
      <span className={styles.timerSeparator}>:</span>
      <div className={styles.timerBlock}>
        <span className={styles.timerValue} data-text={String(timeLeft.minutes).padStart(2, '0')}>{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className={styles.timerLabel}>MINS</span>
      </div>
      <span className={styles.timerSeparator}>:</span>
      <div className={styles.timerBlock}>
        <span className={styles.timerValue} data-text={String(timeLeft.seconds).padStart(2, '0')}>{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className={styles.timerLabel}>SECS</span>
      </div>
    </div>
  );
}
