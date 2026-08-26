'use client';

import React, { useState, useEffect, useRef } from 'react';
import { TimelineCanvas3D } from './TimelineCanvas3D';
import styles from './TimelineRoad.module.css';
import { retroAudio } from '@/utils/audioEffects';
import {
  Volume2,
  VolumeX,
  FastForward,
  X,
  ChevronRight
} from 'lucide-react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 text-[#FF5FCF] opacity-70 clip-path-glitch-1 animate-pulse -translate-x-px translate-y-px pointer-events-none"
      >
        {text}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 text-[#00F0FF] opacity-70 clip-path-glitch-2 animate-pulse translate-x-px -translate-y-px pointer-events-none"
      >
        {text}
      </span>
    </span>
  );
};

export const TimelineRoad: React.FC = () => {
  const stickyContainerRef = useRef<HTMLElement | null>(null);
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(retroAudio.getMuted());
  const [isTimelineOpen, setIsTimelineOpen] = useState<boolean>(false);
  const [isTimelineClosing, setIsTimelineClosing] = useState<boolean>(false);
  const closeTimerRef = useRef<number | null>(null);
  const touchLastYRef = useRef<number | null>(null);

  useEffect(() => {
    return retroAudio.subscribe((muted) => setIsMuted(muted));
  }, []);

  useEffect(() => {
    if (!isTimelineOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
    };
  }, [isTimelineOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const handleSelectEvent = React.useCallback((index: number) => {
    setActiveEventIndex(prev => prev === index ? prev : index);
  }, []);

  const toggleMute = () => {
    const nextMuted = retroAudio.toggleMute();
    setIsMuted(nextMuted);
    if (!nextMuted) retroAudio.playXPDing();
  };

  const handleSkipSection = () => {
    if (!stickyContainerRef.current) return;
    setIsTimelineOpen(false);
    const nextEl = stickyContainerRef.current.nextElementSibling;
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      const rect = stickyContainerRef.current.getBoundingClientRect();
      window.scrollTo({
        top: window.scrollY + rect.bottom,
        behavior: 'smooth'
      });
    }
    retroAudio.playXPDing();
  };

  const handleCloseTimeline = () => {
    if (isTimelineClosing) return;
    setIsTimelineClosing(true);
    retroAudio.playXPDing();
    closeTimerRef.current = window.setTimeout(() => {
      setIsTimelineOpen(false);
      setIsTimelineClosing(false);
      closeTimerRef.current = null;
    }, 360);
  };

  const handleOpenTimeline = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setScrollProgress(0);
    setIsTimelineClosing(false);
    setIsTimelineOpen(true);
    retroAudio.playXPDing();
  };

  const updateTimelineProgress = (delta: number) => {
    const nextProgress = Math.max(0, Math.min(1, scrollProgress + delta));
    setScrollProgress(nextProgress);

    if (delta > 0 && nextProgress >= 1) {
      handleCloseTimeline();
    }
  };

  const handleTimelineWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    updateTimelineProgress(event.deltaY / (window.innerHeight * 2));
  };

  const handleTimelineTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchLastYRef.current = event.touches[0]?.clientY ?? null;
  };

  const handleTimelineTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const currentY = event.touches[0]?.clientY;
    const lastY = touchLastYRef.current;
    if (currentY === undefined || lastY === null) return;

    event.preventDefault();
    updateTimelineProgress((lastY - currentY) / (window.innerHeight * 1.2));
    touchLastYRef.current = currentY;
  };

  const handleTimelineTouchEnd = () => {
    touchLastYRef.current = null;
  };

  return (
    // The trigger is visually positioned without reserving timeline layout space.
    <section
      id="timeline"
      ref={stickyContainerRef}
      className="relative w-full bg-transparent"
      style={{ height: '1px' }}
    >
      <button
        type="button"
        onClick={handleOpenTimeline}
        className="group absolute left-1/2 top-0 z-10 flex min-h-14 min-w-60 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-3 rounded-xl border border-[#FF5FCF]/80 bg-[#07050D]/95 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FAEB92] shadow-[0_0_0_1px_rgba(153,41,234,0.5),0_0_24px_rgba(153,41,234,0.75),inset_0_0_18px_rgba(153,41,234,0.2)] transition duration-300 hover:scale-105 hover:border-[#FAEB92] hover:bg-[#9929EA] hover:text-white hover:shadow-[0_0_32px_rgba(255,95,207,0.75)] sm:min-h-16 sm:min-w-72 sm:text-base"
        aria-label="Open timeline"
      >
        <span>Open Timeline</span>
        <ChevronRight className="h-5 w-5 text-[#FF5FCF] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </button>
      {isTimelineOpen && (
        <div
          className={`${styles.modalBackdrop} ${isTimelineClosing ? styles.modalBackdropClosing : ''} fixed inset-0 z-3000 flex items-center justify-center bg-black/45 p-2 sm:p-6`}
          role="presentation"
        >
          <div
            className={`${styles.modalPanel} ${isTimelineClosing ? styles.modalPanelClosing : ''} relative h-[min(92svh,900px)] w-full max-w-360 overflow-hidden rounded-2xl border border-[#FF5FCF]/60 bg-[#05040A]/95 shadow-[0_0_0_1px_rgba(153,41,234,0.5),0_0_45px_rgba(153,41,234,0.55)] touch-none`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="timeline-dialog-title"
            onWheel={handleTimelineWheel}
            onTouchStart={handleTimelineTouchStart}
            onTouchMove={handleTimelineTouchMove}
            onTouchEnd={handleTimelineTouchEnd}
          >
            <button
              type="button"
              onClick={handleCloseTimeline}
              className="absolute right-3 top-3 z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-[#FF5FCF]/60 bg-[#090511]/80 text-[#FAEB92] shadow-[0_0_16px_rgba(255,95,207,0.35)] transition hover:bg-[#9929EA]/70 hover:text-white"
              aria-label="Close timeline"
              title="Close timeline"
            >
              <X className="h-5 w-5" />
            </button>

            {/* FULLSCREEN PINNED STICKY VIEWPORT (100vw x 100vh) */}
            <div className="relative h-full w-full overflow-hidden flex flex-col justify-between select-none">

              {/* 1. FULL-BLEED 3D PERSPECTIVE CANVAS */}
              <TimelineCanvas3D
                activeEventIndex={activeEventIndex}
                onSelectEvent={handleSelectEvent}
                scrollProgress={scrollProgress}
                setScrollProgress={setScrollProgress}
              />

              {/* 2. TOP FLOATING HUD OVERLAY */}
              <div className="relative z-40 w-full pt-4 sm:pt-6 px-4 sm:px-10 pointer-events-none flex items-start justify-between">

                {/* Left Headline */}
                <div className="pointer-events-auto max-w-xl">
                  <h2
                    id="timeline-dialog-title"
                    className="text-2xl sm:text-4xl lg:text-[44px] uppercase select-none leading-[0.92] tracking-[-0.045em] drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]"
                    style={{ fontFamily: '"Arial Narrow", "Helvetica Neue", Arial, sans-serif', fontWeight: 800 }}
                  >
                    <span className="text-white">THE </span>
                    <GlitchText text="TIMELINE" className="text-[#FAEB92]" />
                    <span className="text-white"> TO THE</span>
                    <br />
                    <span
                      className="text-[#FF5FCF] inline-block mt-1"
                      style={{
                        textShadow: '3px 3px 0 #9929EA, 0 0 20px rgba(255,95,207,0.5)',
                        filter: 'drop-shadow(0 0 15px rgba(255,95,207,0.4))'
                      }}
                    >
                      GLITCHVERSE
                    </span>
                  </h2>
                </div>

                {/* Right Controls: Skip Section Button + Volume Toggle Button */}
                <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 pr-12">
                  {/* Skip Section Button */}
                  <button
                    type="button"
                    onClick={handleSkipSection}
                    className="h-10 px-3 sm:px-4 rounded-xl flex items-center gap-1.5 sm:gap-2 transition-all duration-300 cursor-pointer border bg-[#9929EA]/25 text-[#FAEB92] border-[#FF5FCF]/50 hover:bg-[#9929EA]/40 hover:scale-105 shadow-[0_0_20px_rgba(153,41,234,0.4)] text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider"
                    title="Skip Timeline Section"
                    aria-label="Skip Timeline Section"
                  >
                    <span>SKIP</span>
                    <FastForward className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF5FCF] drop-shadow-[0_0_8px_#FF5FCF]" />
                  </button>

                  {/* Sleek Purple Volume Toggle Button */}
                  <button
                    type="button"
                    onClick={toggleMute}
                    className={`
                w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer border
                ${!isMuted
                        ? 'bg-[#9929EA]/25 text-[#FF5FCF] border-[#FF5FCF]/50 hover:bg-[#9929EA]/40 hover:scale-105 shadow-[0_0_20px_rgba(153,41,234,0.4)]'
                        : 'bg-black/60 text-gray-500 border-white/10 hover:bg-black/80 hover:text-gray-300'
                      }
              `}
                    title={isMuted ? 'Unmute Timeline SFX' : 'Mute Timeline SFX'}
                    aria-label={isMuted ? 'Unmute Timeline SFX' : 'Mute Timeline SFX'}
                  >
                    {!isMuted ? (
                      <Volume2 className="w-5 h-5 text-[#FF5FCF] drop-shadow-[0_0_8px_#FF5FCF]" />
                    ) : (
                      <VolumeX className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              {/* Empty bottom spacer for pristine clean view */}
              <div className="relative z-40 w-full pointer-events-none pb-4" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
