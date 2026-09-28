'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import styles from './ShortlistedTeams.module.css';

interface ShortlistedSlot {
  id: number;
  name: string;
  rank: string;
}

const SHORTLISTED_SLOTS: ShortlistedSlot[] = [
  { id: 1, name: 'BYTE_FORCE', rank: 'TEAM // 01' },
  { id: 2, name: 'CYBER_PULSE', rank: 'TEAM // 02' },
  { id: 3, name: 'NEO_SYNTAX', rank: 'TEAM // 03' },
  { id: 4, name: 'ZERO_DAY', rank: 'TEAM // 04' },
];

const GLITCH_GLYPHS = '!@#$%^&*<>[]{}|~_+?01X=/\\';

function ScrambleGlitchText({
  text,
  isHovered,
  className,
}: {
  text: string;
  isHovered: boolean;
  className?: string;
}) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!isHovered) {
      const timeoutId = setTimeout(() => setDisplayText(text), 0);
      return () => clearTimeout(timeoutId);
    }

    const interval = setInterval(() => {
      const scrambled = text
        .split('')
        .map((char) => {
          if (char === ' ' || char === '&' || char === '_' || char === '[' || char === ']') return char;
          if (Math.random() < 0.48) {
            return GLITCH_GLYPHS[Math.floor(Math.random() * GLITCH_GLYPHS.length)];
          }
          return char;
        })
        .join('');
      setDisplayText(scrambled);
    }, 45);

    return () => clearInterval(interval);
  }, [isHovered, text]);

  return <span className={className}>{isHovered ? displayText : text}</span>;
}

export function ShortlistedTeams() {
  const [hoveredSlot, setHoveredSlot] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 768
      );
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  return (
    <section className={styles.section} id="shortlisted-teams" aria-labelledby="shortlist-title">
      {/* Heading */}
      <div className={styles.heading}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          CYBERNETIC DATA VAULT // X.0
        </p>
        <h2 id="shortlist-title">TEAMS SHORTLISTED</h2>
      </div>

      {/* Master Controls Bar - Decrypted & Live State */}
      <div className={styles.controlsBar}>
        <div className={styles.statusIndicator}>
          <span>TRANSMISSION // DECRYPTED</span>
        </div>

        <div className={styles.btnGroup}>
          <div className={styles.lockedBadge}>
            <CheckCircle2 size={12} className={styles.lockIcon} />
            <span>PHASE 1 SHORTLIST LIVE</span>
          </div>
        </div>
      </div>

      {/* Grid of Rectangular Cards displaying Shortlisted Team Names */}
      <div className={styles.slotsGrid}>
        {SHORTLISTED_SLOTS.map((slot) => {
          const isHovered = !isTouchDevice && hoveredSlot === slot.id;

          return (
            <div
              key={slot.id}
              className={`${styles.slotCard} ${isHovered ? styles.slotCardHovered : ''}`}
              onMouseEnter={() => !isTouchDevice && setHoveredSlot(slot.id)}
              onMouseLeave={() => setHoveredSlot(null)}
              aria-label={`Shortlisted Team ${slot.id}: ${slot.name}`}
            >
              <div className={styles.cardScanline} aria-hidden="true" />
              <span className={styles.cardCorner} aria-hidden="true" />

              <div className={styles.cardInner}>
                <div className={styles.openedView}>
                  <div className={styles.teamContent}>
                    <span className={styles.slotBadge}>{slot.rank}</span>
                    <h3 className={styles.teamName}>
                      <ScrambleGlitchText
                        text={slot.name}
                        isHovered={isHovered}
                      />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
