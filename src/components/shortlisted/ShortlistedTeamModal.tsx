'use client';

import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Square, Terminal, ShieldCheck } from 'lucide-react';
import type { ParsedShortlistedTeam } from '@/lib/shortlisted-api';
import styles from './ShortlistedTeamModal.module.css';

interface ShortlistedTeamModalProps {
  team: ParsedShortlistedTeam | null;
  onClose: () => void;
}

export function ShortlistedTeamModal({ team, onClose }: ShortlistedTeamModalProps) {
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

  // Handle ESC key to close
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

  return (
    <AnimatePresence>
      {team && (
        <motion.div
          className={styles.backdrop}
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Windows XP / Cyberpunk Glitchy Dialog Shell */}
          <motion.div
            className={styles.windowShell}
            initial={{ scale: 0.88, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 10 }}
            transition={{ type: 'spring', damping: 24, stiffness: 320 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-team-title"
          >
            {/* Scanline and CRT overlay effects */}
            <div className={styles.windowScanlines} aria-hidden="true" />
            <div className={styles.windowGlow} aria-hidden="true" />

            {/* Retro Windows Title Bar */}
            <div className={styles.titleBar}>
              <div className={styles.titleLeft}>
                <Terminal size={13} className={styles.terminalIcon} />
                <span className={styles.windowTitle}>
                  TEAM_DOSSIER.EXE // [{team.teamName}]
                </span>
              </div>

              {/* Windows XP Control Buttons */}
              <div className={styles.windowControls}>
                <button
                  type="button"
                  className={styles.winBtn}
                  onClick={onClose}
                  aria-label="Minimize"
                >
                  <Minus size={11} strokeWidth={2.5} />
                </button>
                <button
                  type="button"
                  className={styles.winBtn}
                  onClick={onClose}
                  aria-label="Maximize"
                >
                  <Square size={10} strokeWidth={2.2} />
                </button>
                <button
                  type="button"
                  className={`${styles.winBtn} ${styles.winBtnClose}`}
                  onClick={onClose}
                  aria-label="Close dialog"
                >
                  <X size={12} strokeWidth={2.6} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className={styles.windowBody}>
              {/* Top Banner Plaque (Matching reference image) */}
              <div className={styles.teamPlaque}>
                <div className={styles.plaqueInner}>
                  <div className={styles.verifiedTag}>
                    <ShieldCheck size={11} />
                    <span>OFFICIAL SHORTLIST</span>
                  </div>
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

              {/* Footer status row */}
              <div className={styles.windowFooter}>
                <span className={styles.footerStatus}>
                  ● VERIFIED SQUAD // {team.members.length} OPERATOR{team.members.length > 1 ? 'S' : ''}
                </span>
                <button
                  type="button"
                  className={styles.closeActionBtn}
                  onClick={onClose}
                >
                  [ CLOSE DOSSIER ]
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
