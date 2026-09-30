'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Square, Terminal } from 'lucide-react';
import type { ParsedShortlistedTeam } from '@/lib/shortlisted-api';
import styles from './ShortlistedTeamModal.module.css';

interface ShortlistedTeamModalProps {
  team: ParsedShortlistedTeam | null;
  onClose: () => void;
}

export function ShortlistedTeamModal({ team, onClose }: ShortlistedTeamModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Synthesize retro open audio tone
  useEffect(() => {
    if (team) {
      try {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'square';
          osc.frequency.setValueAtTime(520, ctx.currentTime);
          osc.frequency.setValueAtTime(780, ctx.currentTime + 0.04);
          osc.frequency.setValueAtTime(1040, ctx.currentTime + 0.08);
          gain.gain.setValueAtTime(0.08, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 0.18);
        }
      } catch {}
    }
  }, [team]);

  // Handle ESC key to close & scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (team) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [team, onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {team && (
        <motion.div
          className={styles.backdrop}
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
        >
          {/* Windows XP / Cyberpunk Glitchy Dialog Shell */}
          <motion.div
            className={styles.windowShell}
            initial={{ scale: 0.88, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 16 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-team-title"
          >
            {/* Scanline and CRT overlay effects */}
            <div className={styles.windowScanlines} aria-hidden="true" />
            <div className={styles.windowGlow} aria-hidden="true" />

            {/* Retro Windows XP Title Bar */}
            <div className={styles.titleBar}>
              <div className={styles.titleLeft}>
                <Terminal size={13} className={styles.terminalIcon} />
                <span className={styles.windowTitle}>
                  TEAM_SHORTLISTED // {team.teamName.replace(/\s+/g, '_').toUpperCase()}
                </span>
              </div>

              {/* Windows XP Control Buttons */}
              <div className={styles.windowControls}>
                <button
                  type="button"
                  className={styles.winBtn}
                  onClick={onClose}
                  title="Minimize"
                  aria-label="Minimize"
                >
                  <Minus size={11} strokeWidth={2.5} />
                </button>
                <button
                  type="button"
                  className={styles.winBtn}
                  onClick={onClose}
                  title="Maximize"
                  aria-label="Maximize"
                >
                  <Square size={10} strokeWidth={2.2} />
                </button>
                <button
                  type="button"
                  className={`${styles.winBtn} ${styles.winBtnClose}`}
                  onClick={onClose}
                  title="Close"
                  aria-label="Close dialog"
                >
                  <X size={12} strokeWidth={2.6} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className={styles.windowBody}>
              {/* Top Banner Plaque (Team Name & College only) */}
              <div className={styles.teamPlaque}>
                <div className={styles.plaqueInner}>
                  <h2 id="modal-team-title" className={styles.plaqueTeamName}>
                    {team.teamName}
                  </h2>
                  <p className={styles.plaqueCollege}>{team.college}</p>
                </div>
              </div>

              {/* Roster Table */}
              <div className={styles.tableWrapper}>
                <table className={styles.rosterTable}>
                  <thead>
                    <tr>
                      <th scope="col" className={styles.thMember}>
                        Team Member
                      </th>
                      <th scope="col" className={styles.thName}>
                        Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {team.members.map((memberName, idx) => (
                      <tr key={idx} className={styles.tableRow}>
                        <td className={styles.tdMember}>
                          <span className={styles.memberNumberBadge}>{idx + 1}</span>
                        </td>
                        <td className={styles.tdName}>{memberName}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
