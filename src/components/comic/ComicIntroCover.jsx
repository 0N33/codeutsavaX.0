import React, { useState } from "react";
import { BookOpen, Info, ArrowRight, Volume2, VolumeX, Sparkles, Zap, MessageSquare } from "lucide-react";
import { playSound } from "../../utils/audioEngine";
import { SheepBit, DinoByte, WolfPixel, NitRaipurTower, ComicStampBadge, ComicSfxSticker } from "./ComicCharacters";
import tcpLogoOfficial from "../../assets/tcp_logo_official.png";

export default function ComicIntroCover({ 
  onStartReading, 
  onEnterLanding, 
  onOpenChapters, 
  onOpenAbout,
  isMusicPlaying,
  toggleMusic
}) {
  const [activeSpeech, setActiveSpeech] = useState({
    char: "bit",
    text: "Welcome to CodeUtsava 10.0! Click us to chat, or hit READ COMIC NOW!"
  });

  const [balloons, setBalloons] = useState([
    { id: 1, text: "{ }", color: "#FFA6C9", top: "15%", left: "12%", popped: false },
    { id: 2, text: "10.0", color: "#FFE600", top: "10%", right: "14%", popped: false },
    { id: 3, text: ";", color: "#00F0FF", top: "25%", right: "8%", popped: false },
    { id: 4, text: "&lt;/&gt;", color: "#00FF88", top: "22%", left: "6%", popped: false },
  ]);

  const characterDialogues = {
    bit: "Ready to deploy something legendary at NIT Raipur? Hit READ COMIC NOW!",
    byte: "Remember: Don't push to main at 3 AM without tests!",
    pixel: "I sniffed out 14 bugs before morning coffee. Let's win CodeUtsava 10.0!"
  };

  const handleCharacterClick = (char) => {
    playSound("pop");
    setActiveSpeech({
      char,
      text: characterDialogues[char]
    });
  };

  const handlePopBalloon = (id) => {
    playSound("thwip");
    setBalloons((prev) =>
      prev.map((b) => (b.id === id ? { ...b, popped: true } : b))
    );
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#FFA439] via-[#FF8C1A] to-[#FF6B35] overflow-hidden flex flex-col justify-between select-none">
      
      {/* Background Halftone & Comic Grid Overlay */}
      <div className="absolute inset-0 bg-spider-dots opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-screentone-diagonal opacity-20 pointer-events-none" />

      {/* Top Floating Clouds & NIT Raipur Skyline Silhouette */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-12 left-10 w-48 h-24 bg-white/40 rounded-full blur-sm animate-cloud-drift opacity-60" />
        <div className="absolute top-20 right-20 w-64 h-32 bg-white/30 rounded-full blur-sm animate-cloud-drift opacity-50" style={{ animationDelay: "-10s" }} />
        
        {/* NIT Raipur Skyline Silhouettes */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-full max-w-5xl flex justify-between items-end opacity-25 px-8">
          <div className="w-24 h-48 bg-[#6B240C] rounded-t-lg comic-border" />
          <div className="w-32 h-64 bg-[#7A2A0E] rounded-t-xl comic-border" />
          <div className="w-40 h-80 bg-[#5C1E0A] rounded-t-2xl comic-border flex flex-col items-center pt-4">
            <div className="w-12 h-12 rounded-full border-2 border-white/50" />
          </div>
          <div className="w-28 h-56 bg-[#7A2A0E] rounded-t-xl comic-border" />
          <div className="w-20 h-44 bg-[#6B240C] rounded-t-lg comic-border" />
        </div>
      </div>

      {/* Interactive Floating Balloons */}
      {balloons.map((b) => (
        !b.popped && (
          <div
            key={b.id}
            onClick={() => handlePopBalloon(b.id)}
            style={{
              top: b.top,
              left: b.left,
              right: b.right,
              backgroundColor: b.color,
            }}
            className="absolute z-20 w-12 h-14 md:w-14 md:h-16 rounded-full comic-border comic-shadow-sm flex items-center justify-center cursor-pointer font-bangers text-comic-dark text-lg animate-float hover:scale-110 active:scale-90 transition-transform"
            title="Click to pop!"
          >
            <span dangerouslySetInnerHTML={{ __html: b.text }} />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0.5 h-5 bg-comic-dark" />
          </div>
        )
      ))}

      {/* Spinning Stamp Badge */}
      <div className="absolute top-20 right-4 md:right-12 z-20 hidden sm:block">
        <ComicStampBadge text="CODEUTSAVA 10.0 • NIT RAIPUR • COMIC EDITION" size={120} />
      </div>

      {/* Top Navigation Bar */}
      <header className="relative z-30 w-full px-6 py-5 flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Left: Chapters Button */}
        <button
          onClick={() => {
            playSound("pop");
            onOpenChapters();
          }}
          className="flex items-center gap-2 px-4 py-2 bg-[#FFFDF7] text-comic-dark font-bangers text-base md:text-lg rounded-full comic-border comic-shadow-sm hover:comic-shadow comic-btn"
        >
          <BookOpen className="w-4 h-4 text-comic-orange" />
          <span>CHAPTERS</span>
        </button>

        {/* Center: Branding Pill */}
        <div className="hidden md:flex items-center gap-2 bg-[#18181B] text-white px-4 py-1.5 rounded-full border border-zinc-700 comic-shadow-sm">
          <img src={tcpLogoOfficial} alt="TCP Logo" className="w-5 h-5 object-contain" />
          <span className="text-xs font-mono tracking-wider font-bold">
            TCP NIT RAIPUR PRESENTS
          </span>
        </div>

        {/* Right Controls: About, Sound, Skip */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              playSound("pop");
              onOpenAbout();
            }}
            className="px-4 py-2 bg-[#FFFDF7] text-comic-dark font-bangers text-base md:text-lg rounded-full comic-border comic-shadow-sm hover:comic-shadow comic-btn flex items-center gap-1.5"
          >
            <Info className="w-4 h-4 text-[#FF2A7A]" />
            <span>ABOUT</span>
          </button>

          <button
            onClick={() => {
              playSound("pageTurn");
              onEnterLanding();
            }}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-[#FFE600] text-comic-dark font-bangers text-base md:text-lg rounded-full comic-border comic-shadow-sm hover:comic-shadow comic-btn"
          >
            <span>SKIP TO SITE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Cover Body Content */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 max-w-4xl mx-auto w-full my-auto">
        
        {/* Title Header */}
        <div className="text-center mb-1 animate-[panelPop_0.5s_ease-out]">
          
          {/* Main Comic Logo */}
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-bangers tracking-wider text-[#FFFDF7] comic-title-stroke-lg leading-none transform -rotate-1 hover:rotate-0 transition-transform spider-glitch-text">
            codeutsava
          </h1>
          <div className="text-4xl sm:text-5xl md:text-7xl font-bangers tracking-widest text-[#FFE600] comic-title-stroke leading-none -mt-2 sm:-mt-4">
            comic mania 10.0
          </div>

          {/* Subtitle Byline */}
          <p className="font-hand font-bold text-lg md:text-2xl text-comic-dark mt-1 tracking-wide">
            by Turing Club of Programmers • NIT Raipur
          </p>

          {/* Event Pill Banner */}
          <div className="inline-flex items-center gap-2 mt-1 px-3.5 py-1 bg-[#18181B] text-white rounded-full text-xs font-mono comic-shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
            CENTRAL INDIA'S LARGEST 36H HACKATHON • OCT 26-27
          </div>
        </div>

        {/* Character Trio Stage With Dynamic Near-Head Speech Bubble */}
        <div className="relative w-full max-w-xl h-[280px] sm:h-[320px] md:h-[350px] flex items-end justify-center mt-2">
          
          {/* Speech Bubble Placed Directly Near the Characters' Heads */}
          {activeSpeech && (
            <div 
              className={`absolute z-40 bg-[#FFFDF7] text-comic-dark font-comic font-bold text-xs sm:text-sm px-4 py-2.5 rounded-2xl comic-border comic-shadow-lg max-w-[240px] sm:max-w-[280px] text-center animate-[panelPop_0.25s_ease-out] ${
                activeSpeech.char === "pixel" 
                  ? "top-0 left-2 sm:left-4" 
                  : activeSpeech.char === "byte"
                  ? "top-0 right-2 sm:right-4"
                  : "-top-2 left-1/2 -translate-x-1/2"
              }`}
            >
              {/* Comic Speech Pointer Tail pointing right at the character */}
              <div 
                className={`absolute -bottom-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[#FFFDF7] ${
                  activeSpeech.char === "pixel"
                    ? "left-8"
                    : activeSpeech.char === "byte"
                    ? "right-8"
                    : "left-1/2 -translate-x-1/2"
                }`}
                style={{ filter: "drop-shadow(0 2px 0 #18181B)" }}
              />

              <div className="flex items-center justify-center gap-1 text-[10px] text-[#FF2A7A] font-bangers uppercase mb-0.5">
                <MessageSquare className="w-3 h-3" />
                {activeSpeech.char} speaks:
              </div>
              <div className="leading-snug text-comic-dark">
                "{activeSpeech.text}"
              </div>
            </div>
          )}

          {/* Pixel the Wolf (Left) */}
          <div 
            onClick={() => handleCharacterClick("pixel")}
            className="absolute left-2 sm:left-8 bottom-0 z-10 animate-bounce-subtle cursor-pointer hover:scale-105 transition-transform"
            style={{ animationDelay: "-0.5s" }}
            title="Click Pixel!"
          >
            <WolfPixel size={window.innerWidth < 640 ? 120 : 160} />
          </div>

          {/* Bit the Sheep (Center, Big and Hyped) */}
          <div 
            onClick={() => handleCharacterClick("bit")}
            className="relative z-20 animate-wiggle cursor-pointer hover:scale-105 transition-transform"
            title="Click Bit!"
          >
            <SheepBit size={window.innerWidth < 640 ? 160 : 210} expression="happy" hasHeadphones={true} />
          </div>

          {/* Byte the Dino (Right) */}
          <div 
            onClick={() => handleCharacterClick("byte")}
            className="absolute right-2 sm:right-8 bottom-0 z-10 animate-bounce-subtle cursor-pointer hover:scale-105 transition-transform"
            style={{ animationDelay: "-1s" }}
            title="Click Byte!"
          >
            <DinoByte size={window.innerWidth < 640 ? 125 : 165} holdingCoffee={true} />
          </div>

          {/* Action SFX Badges floating around characters */}
          <div className="absolute top-12 left-0 z-30 animate-float hidden sm:block">
            <ComicSfxSticker text="36 HOURS!" color="pink" />
          </div>
          <div className="absolute top-16 right-0 z-30 animate-float-delayed hidden sm:block">
            <ComicSfxSticker text="₹5L POOL!" color="yellow" />
          </div>

        </div>

        {/* Primary Action Buttons (Ponpon Mania "read now" Pill) */}
        <div className="relative z-30 flex flex-col sm:flex-row items-center gap-3 mt-3 mb-4 w-full justify-center">
          
          {/* Main "Read Now" Button */}
          <button
            onClick={() => {
              playSound("pageTurn");
              onStartReading();
            }}
            className="w-full sm:w-auto px-8 py-4 bg-[#18181B] text-white font-bangers text-2xl tracking-widest rounded-full comic-border comic-shadow-lg hover:bg-[#FF2A7A] hover:text-white transition-all comic-btn flex items-center justify-center gap-3 group"
          >
            <Sparkles className="w-6 h-6 text-[#FFE600] group-hover:rotate-12 transition-transform" />
            <span>READ COMIC NOW</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary "Explore Hackathon Site" */}
          <button
            onClick={() => {
              playSound("kapow");
              onEnterLanding();
            }}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#FFE600] text-[#18181B] font-bangers text-xl tracking-wider rounded-full comic-border comic-shadow hover:bg-white transition-all comic-btn flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5 text-[#18181B]" />
            <span>ENTER HACKATHON ARENA</span>
          </button>

        </div>

      </main>

      {/* Fluffy Pink & White Comic Clouds Footer */}
      <footer className="relative z-20 w-full">
        <div className="relative w-full overflow-hidden leading-none">
          <svg 
            viewBox="0 0 1200 140" 
            className="w-full h-16 sm:h-24 md:h-28 text-[#FFA6C9]"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,80 Q70,20 160,50 Q240,0 360,40 Q480,10 600,60 Q720,0 840,45 Q960,15 1060,50 Q1140,20 1200,80 L1200,140 L0,140 Z" 
              stroke="#18181B" 
              strokeWidth="4" 
            />
          </svg>
          <svg 
            viewBox="0 0 1200 120" 
            className="w-full h-12 sm:h-16 text-[#FFFDF7] -mt-10 sm:-mt-14 relative z-10"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,60 Q90,10 200,45 Q310,0 440,35 Q560,5 680,45 Q800,0 920,35 Q1040,10 1200,50 L1200,120 L0,120 Z" 
              stroke="#18181B" 
              strokeWidth="4" 
            />
          </svg>
        </div>

        {/* Bottom Bar Info */}
        <div className="bg-[#FFFDF7] px-6 py-3 border-t-2 border-comic-dark flex flex-wrap items-center justify-between text-xs font-mono text-comic-dark gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold">NIT RAIPUR</span>
            <span>•</span>
            <span className="text-[#FF2A7A] font-bold">OCTOBER 26-27, 2026</span>
          </div>
          <div className="text-zinc-700 font-hand font-bold text-sm">
            Interactive Webcomic experience designed for CodeUtsava 10.0
          </div>
        </div>
      </footer>

    </div>
  );
}
