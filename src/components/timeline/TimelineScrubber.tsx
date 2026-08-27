'use client';

import React, { useState } from 'react';
import { TIMELINE_EVENTS, TimelineEvent } from '@/data/timelineEvents';
import { retroAudio } from '@/utils/audioEffects';
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Compass,
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';

interface TimelineScrubberProps {
  activeEventIndex: number;
  onSelectEvent: (index: number) => void;
  onOpenDialog: (event: TimelineEvent) => void;
  viewMode: '3d-road' | 'xp-desktop' | 'matrix-grid';
  setViewMode: (mode: '3d-road' | 'xp-desktop' | 'matrix-grid') => void;
}

export const TimelineScrubber: React.FC<TimelineScrubberProps> = ({
  activeEventIndex,
  onSelectEvent,
  onOpenDialog,
  viewMode,
  setViewMode
}) => {
  const [isMuted, setIsMuted] = useState(retroAudio.getMuted());

  const handleToggleMute = () => {
    const muted = retroAudio.toggleMute();
    setIsMuted(muted);
    if (!muted) retroAudio.playXPDing();
  };

  const handlePrev = () => {
    if (activeEventIndex > 0) {
      retroAudio.playXPClick();
      onSelectEvent(activeEventIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeEventIndex < TIMELINE_EVENTS.length - 1) {
      retroAudio.playXPClick();
      onSelectEvent(activeEventIndex + 1);
    }
  };

  const currentEvent = TIMELINE_EVENTS[activeEventIndex];

  return (
    <div className="w-full space-y-4 font-mono select-none">
      {/* TOP CONTROLS STRIP (View Switcher & Audio) */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0E0B1A] p-2.5 rounded-xl border border-white/10 shadow-lg">
        {/* Left: View Mode Toggles */}
        <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-lg border border-white/10 text-xs">
          <button
            type="button"
            onClick={() => { retroAudio.playXPClick(); setViewMode('3d-road'); }}
            className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
              viewMode === '3d-road'
                ? 'bg-gradient-to-r from-[#9929EA] to-[#FF5FCF] text-white shadow-[0_0_12px_rgba(255,95,207,0.5)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>3D Highway Road</span>
          </button>

          <button
            type="button"
            onClick={() => { retroAudio.playXPClick(); setViewMode('xp-desktop'); }}
            className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'xp-desktop'
                ? 'bg-gradient-to-r from-[#0055EA] to-[#3C89FF] text-white shadow-[0_0_12px_rgba(0,85,234,0.5)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>XP Desktop Workspace</span>
          </button>

          <button
            type="button"
            onClick={() => { retroAudio.playXPClick(); setViewMode('matrix-grid'); }}
            className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'matrix-grid'
                ? 'bg-[#FFE279] text-black shadow-[0_0_12px_rgba(255,226,121,0.5)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>All Stages Grid</span>
          </button>
        </div>

        {/* Right: Quick Action Controls */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Quick Open Current XP Dialog */}
          <button
            type="button"
            onClick={() => {
              retroAudio.playXPDing();
              onOpenDialog(currentEvent);
            }}
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-[#FFE279] hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5 text-[#FFE279]" />
            <span>Inspect XP Dialog</span>
          </button>

          {/* Retro Audio Toggle */}
          <button
            type="button"
            onClick={handleToggleMute}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              isMuted
                ? 'bg-red-500/10 border-red-500/30 text-red-400'
                : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]'
            }`}
            title={isMuted ? 'Unmute XP Sound Effects' : 'Mute XP Sound Effects'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* HORIZONTAL MILESTONE SCRUBBER STRIP */}
      <div className="relative bg-[#0A0714] p-3 rounded-2xl border border-white/10 shadow-2xl">
        {/* Navigation Step Arrows */}
        <div className="flex items-center justify-between mb-2 px-1">
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={activeEventIndex === 0}
              onClick={handlePrev}
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/15 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs text-gray-300 font-bold">
              STAGE {currentEvent.stageNumber} OF 12
            </span>

            <button
              type="button"
              disabled={activeEventIndex === TIMELINE_EVENTS.length - 1}
              onClick={handleNext}
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/15 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Current Stage Lane Pill */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-gray-400 hidden sm:inline">Active Track:</span>
            <span
              className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider"
              style={{
                backgroundColor: `${currentEvent.accentColor}25`,
                color: currentEvent.accentColor,
                border: `1px solid ${currentEvent.accentColor}60`
              }}
            >
              {currentEvent.lane.toUpperCase()} LANE
            </span>
          </div>
        </div>

        {/* Interactive Stages Scrollable Track */}
        <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-purple-900">
          <div className="flex items-center gap-2 min-w-max py-1">
            {TIMELINE_EVENTS.map((evt, idx) => {
              const isActive = idx === activeEventIndex;
              const laneBg = evt.lane === 'middle' ? '#FFE279' : evt.lane === 'left' ? '#FF5FCF' : '#9929EA';

              return (
                <button
                  key={evt.id}
                  type="button"
                  onClick={() => {
                    retroAudio.playXPClick();
                    onSelectEvent(idx);
                  }}
                  className={`
                    relative group px-3 py-2 rounded-xl border text-left transition-all duration-200 cursor-pointer
                    ${isActive
                      ? 'bg-white/15 border-white shadow-[0_0_15px_rgba(255,226,121,0.4)] scale-105'
                      : 'bg-black/40 border-white/10 hover:border-white/30 hover:bg-white/5'
                    }
                  `}
                  style={{
                    borderColor: isActive ? evt.accentColor : undefined
                  }}
                >
                  {/* Top Lane Indicator Dot */}
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className={`text-[10px] font-bold ${isActive ? 'text-white' : 'text-gray-400'}`}>
                      {evt.stageCode}
                    </span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: laneBg, boxShadow: `0 0 6px ${laneBg}` }}
                      title={`${evt.lane.toUpperCase()} Lane`}
                    />
                  </div>

                  {/* Title & Date */}
                  <div className="text-[11px] font-sans font-bold text-white max-w-[130px] truncate">
                    {evt.title}
                  </div>
                  <div className="text-[9px] text-gray-400 mt-0.5">
                    {evt.dateShort} • {evt.lane.toUpperCase()}
                  </div>

                  {/* Active bottom glow bar */}
                  {isActive && (
                    <div
                      className="absolute inset-x-2 bottom-0 h-[2px] rounded-full"
                      style={{ backgroundColor: evt.accentColor, boxShadow: `0 0 8px ${evt.accentColor}` }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
