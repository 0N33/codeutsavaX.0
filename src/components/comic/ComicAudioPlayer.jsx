import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipForward, Volume2, VolumeX, Disc3 } from "lucide-react";
import { getAudioContext, playSound, COMIC_TRACKS } from "../../utils/audioEngine";

export default function ComicAudioPlayer({ isMusicPlaying, toggleMusic }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(isMusicPlaying);
  const [sfxEnabled, setSfxEnabled] = useState(true);
  const currentTrack = COMIC_TRACKS[currentTrackIndex];

  const timerRef = useRef(null);
  const chordStepRef = useRef(0);

  // Sync with parent prop
  useEffect(() => {
    setIsPlaying(isMusicPlaying);
  }, [isMusicPlaying]);

  // Web Audio procedural synthesizer chord looper
  useEffect(() => {
    if (isPlaying) {
      const ctx = getAudioContext();
      if (!ctx) return;

      const tempoMs = Math.round((60 / currentTrack.bpm) * 1000);

      timerRef.current = setInterval(() => {
        if (ctx.state === "suspended") return;
        const now = ctx.currentTime;
        const chords = currentTrack.chords;
        const currentChord = chords[chordStepRef.current % chords.length];

        // Synthesize a soft warm EP/synth chord
        currentChord.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          filter.type = "lowpass";
          filter.frequency.setValueAtTime(1200, now);

          osc.type = i === 0 ? "triangle" : "sine";
          // Gentle detuning for lush lo-fi warmth
          osc.frequency.setValueAtTime(freq + (i % 2 === 0 ? 0.8 : -0.8), now);

          gain.gain.setValueAtTime(0.045 / currentChord.length, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + (tempoMs / 1000) * 1.8);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now);
          osc.stop(now + (tempoMs / 1000) * 1.9);
        });

        chordStepRef.current++;
      }, tempoMs);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, currentTrackIndex, currentTrack]);

  const handleTogglePlay = () => {
    playSound("pop");
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    if (toggleMusic) toggleMusic(nextState);
  };

  const handleNextTrack = () => {
    playSound("pageTurn");
    setCurrentTrackIndex((prev) => (prev + 1) % COMIC_TRACKS.length);
    chordStepRef.current = 0;
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 select-none">
      <div className="flex items-center gap-3 bg-comic-dark/95 backdrop-blur-md text-white px-4 py-2.5 rounded-full comic-border comic-shadow-sm hover:comic-shadow transition-all border-[#27272a]">
        
        {/* Animated Album Artwork Pill */}
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center text-comic-dark font-bangers text-xs shrink-0 comic-border"
          style={{ backgroundColor: currentTrack.coverColor }}
        >
          <Disc3 className={`w-5 h-5 ${isPlaying ? "animate-spin-slow" : ""}`} />
        </div>

        {/* Track Title & Artist */}
        <div className="flex flex-col min-w-[170px] max-w-[240px] truncate">
          <span className="text-xs font-bold font-comic text-comic-yellow truncate">
            {currentTrack.title}
          </span>
          <span className="text-[10px] text-zinc-400 font-mono truncate">
            {currentTrack.artist}
          </span>
        </div>

        {/* Live Audio Equalizer Waves */}
        <div className="flex items-end gap-0.5 h-4 px-1">
          {[40, 90, 60, 100, 70, 30].map((h, i) => (
            <div
              key={i}
              className={`w-1 rounded-full bg-comic-pink-hot transition-all duration-300 ${
                isPlaying ? "animate-pulse" : "opacity-30"
              }`}
              style={{
                height: isPlaying ? `${Math.max(20, (h + (i % 3) * 20) % 100)}%` : "20%",
                animationDelay: `${i * 120}ms`
              }}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={handleTogglePlay}
          className="w-8 h-8 rounded-full bg-comic-yellow text-comic-dark flex items-center justify-center comic-border hover:bg-comic-orange hover:scale-105 active:scale-95 transition-all"
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
        </button>

        {/* Skip Track Button */}
        <button
          onClick={handleNextTrack}
          className="w-7 h-7 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-all active:scale-90"
          title="Next Track"
        >
          <SkipForward className="w-3.5 h-3.5" />
        </button>

        {/* Sound FX Toggle */}
        <button
          onClick={() => {
            playSound("blip");
            setSfxEnabled(!sfxEnabled);
          }}
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
            sfxEnabled ? "text-comic-green hover:bg-zinc-800" : "text-zinc-500 hover:bg-zinc-800"
          }`}
          title={sfxEnabled ? "Sound FX Enabled" : "Sound FX Muted"}
        >
          {sfxEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        </button>

      </div>
    </div>
  );
}
