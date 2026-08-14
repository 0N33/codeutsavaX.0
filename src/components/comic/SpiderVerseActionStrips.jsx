import React, { useState } from "react";
import { playSound } from "../../utils/audioEngine";
import { SheepBit, DinoByte, WolfPixel, NitRaipurTower } from "./ComicCharacters";
import { Zap, Sparkles, MessageSquare, Flame, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

// Spider-Verse Action Word Starburst Graphic (Like "WRACK!" and Spider-Punk Star)
export function SpiderActionBurst({ 
  text = "WRACK!", 
  subtext = "", 
  variant = "pink-cyan", 
  size = "md",
  className = "",
  onClick = () => {}
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block cursor-pointer select-none transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`}
    >
      {/* Spider-Punk Jagged Starburst Backdrop */}
      <svg 
        viewBox="0 0 240 160" 
        className={`w-full h-full drop-shadow-[5px_5px_0px_#18181B] ${isHovered ? "animate-wiggle" : ""}`}
      >
        {/* Newspaper Halftone Jagged Edge Shards (Spider-Punk Style) */}
        <polygon 
          points="20,80 0,40 45,35 60,0 95,28 140,5 155,38 200,20 195,65 240,80 205,105 230,140 185,130 160,160 120,135 75,160 65,125 15,145 35,105" 
          fill="#FFE600" 
          stroke="#18181B" 
          strokeWidth="4" 
        />
        {/* Inner Hot Pink Star */}
        <polygon 
          points="28,80 12,48 50,42 64,12 94,36 134,16 148,44 188,30 182,68 220,80 192,102 212,130 174,122 152,146 118,126 80,146 70,118 26,132 42,100" 
          fill="#FF2A7A" 
          stroke="#18181B" 
          strokeWidth="3.5" 
        />
      </svg>

      {/* Action Text with Cyan & Magenta Chromatic Aberration */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="font-bangers text-3xl sm:text-4xl text-white tracking-widest uppercase transform -rotate-3 spider-glitch-text">
          {text}
        </span>
        {subtext && (
          <span className="font-mono text-[9px] font-bold bg-comic-dark text-[#FFE600] px-2 py-0.5 rounded uppercase mt-0.5 comic-border">
            {subtext}
          </span>
        )}
      </div>
    </div>
  );
}

// 4-Panel Interactive Multiverse Comic Strip Carousel (Ponpon Mania + Spider-Verse)
export function MultiverseComicStrip({ className = "" }) {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const comicPages = [
    {
      issue: "ISSUE #01: THE 404 GLITCH IN THE MULTIVERSE",
      panels: [
        {
          id: 1,
          tag: "PANEL 1",
          caption: "2:47 AM • DORM ROOM 304",
          dialogue: "Bit is debugging when a mysterious encrypted dimensional portal blinks open on terminal!",
          speaker: "Bit",
          quote: "Wait... This isn't a normal 404 error! It's a dimensional ping from NIT Raipur!",
          bg: "bg-[#FFF8EA]",
          char: <SheepBit size={110} expression="surprised" />
        },
        {
          id: 2,
          tag: "PANEL 2",
          caption: "NIT RAIPUR CAMPUS PORTAL",
          dialogue: "Under the glowing clock tower, Byte the senior Dino dev sips coffee calmly.",
          speaker: "Byte",
          quote: "Welcome to CodeUtsava 10.0! The build is heavy, but we never push broken code!",
          bg: "bg-[#FFE6C7]",
          char: <DinoByte size={115} holdingCoffee={true} />
        },
        {
          id: 3,
          tag: "PANEL 3",
          caption: "CCC LAB 36-HOUR RUNTIME",
          dialogue: "Pixel the QA Wolf catches 14 memory leaks before breakfast!",
          speaker: "Pixel",
          quote: "Energy drinks stocked! Bug squashed with *WRACK!* Let's claim that ₹5L trophy!",
          bg: "bg-[#E8F8F0]",
          char: <WolfPixel size={115} holdingSoda={true} />
        },
        {
          id: 4,
          tag: "PANEL 4",
          caption: "GRAND AUDITORIUM VICTORY",
          dialogue: "The 36-hour timer hits 00:00. The judges unveil the golden trophy and confetti erupts!",
          speaker: "Jury",
          quote: "WINNER CONFIRMED! CodeUtsava 10.0 Champions crowned at NIT Raipur!",
          bg: "bg-[#FFE5EF]",
          char: (
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bangers text-[#FF2A7A] animate-bounce">🏆 ₹5,00,000+</div>
              <div className="text-xs font-mono font-bold text-comic-dark mt-1">CHAMPIONS UNLOCKED</div>
            </div>
          )
        }
      ]
    },
    {
      issue: "ISSUE #02: THE 36-HOUR MIDNIGHT CRUNCH",
      panels: [
        {
          id: 1,
          tag: "PANEL 1",
          caption: "03:00 AM • CCC AUDITORIUM",
          dialogue: "The entire hall at NIT Raipur glows with neon IDEs and keyboard clatter.",
          speaker: "Bit",
          quote: "4,000 lines written! Next stop: deploy to the multichain testnet!",
          bg: "bg-[#E8F4FF]",
          char: <SheepBit size={110} expression="coding" />
        },
        {
          id: 2,
          tag: "PANEL 2",
          caption: "MERGE CONFLICT ALERT",
          dialogue: "A massive Git merge conflict threatens the production branch!",
          speaker: "Byte",
          quote: "Don't panic! Rebase carefully. I've handled worse in C++ kernel patches.",
          bg: "bg-[#FFF3D6]",
          char: <DinoByte size={115} holdingCoffee={false} />
        },
        {
          id: 3,
          tag: "PANEL 3",
          caption: "THE SPIDER-DEBUGGER",
          dialogue: "Pixel executes test suites with lightning precision.",
          speaker: "Pixel",
          quote: "Zero warnings! All 120 tests passing in 0.04s! Ready for jury demo!",
          bg: "bg-[#E8F8F0]",
          char: <WolfPixel size={115} holdingSoda={false} />
        },
        {
          id: 4,
          tag: "PANEL 4",
          caption: "FINAL DEPLOYMENT",
          dialogue: "The live demo blows away the judges with seamless UX and groundbreaking architecture!",
          speaker: "Squad",
          quote: "Code submitted on GitHub! Time to celebrate under the Clock Tower!",
          bg: "bg-[#FFE6C7]",
          char: <NitRaipurTower size={140} />
        }
      ]
    }
  ];

  const currentPage = comicPages[activePageIndex];

  const handleNext = () => {
    playSound("pageTurn");
    setActivePageIndex((prev) => (prev + 1) % comicPages.length);
  };

  const handlePrev = () => {
    playSound("pageTurn");
    setActivePageIndex((prev) => (prev === 0 ? comicPages.length - 1 : prev - 1));
  };

  return (
    <div className={`w-full max-w-7xl mx-auto ${className}`}>
      
      {/* Comic Book Strip Container */}
      <div className="comic-panel-frame bg-[#FFFDF7] p-6 sm:p-8 rounded-[36px] comic-shadow-xl relative overflow-hidden">
        
        {/* Halftone Screentone Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-6 border-b-4 border-dashed border-comic-border gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFE600] comic-border flex items-center justify-center font-bangers text-xl text-comic-dark comic-shadow-sm">
              ★
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-[#FF2A7A] uppercase tracking-wider">
                INTERACTIVE MULTIVERSE COMIC STRIP
              </div>
              <h3 className="text-2xl sm:text-3xl font-bangers text-comic-dark tracking-wide">
                {currentPage.issue}
              </h3>
            </div>
          </div>

          {/* Page Switcher */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              onClick={handlePrev}
              className="p-2 bg-white rounded-full comic-border comic-shadow-sm hover:bg-[#FFE600] transition-colors active:scale-95"
              title="Previous Issue Strip"
            >
              <ChevronLeft className="w-5 h-5 text-comic-dark" />
            </button>
            <span className="font-mono text-xs font-bold px-3 py-1 bg-comic-dark text-white rounded-full">
              PAGE {activePageIndex + 1} / {comicPages.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 bg-[#FFE600] rounded-full comic-border comic-shadow-sm hover:bg-white transition-colors active:scale-95"
              title="Next Issue Strip"
            >
              <ChevronRight className="w-5 h-5 text-comic-dark" />
            </button>
          </div>
        </div>

        {/* 4 Inked Comic Panels Strip Grid (Ponpon Mania Horizontal Format) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {currentPage.panels.map((panel, idx) => (
            <div
              key={panel.id}
              onClick={() => playSound(idx % 2 === 0 ? "thwip" : "kapow")}
              className={`relative comic-panel-frame ${panel.bg} p-4 sm:p-5 rounded-2xl flex flex-col justify-between group hover:comic-shadow-lg hover:-translate-y-1.5 transition-all duration-200 cursor-pointer`}
            >
              {/* Panel Caption Tag */}
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-comic-border/30">
                  <span className="px-2 py-0.5 bg-[#18181B] text-[#FFE600] text-[9px] font-mono font-bold rounded">
                    {panel.tag}
                  </span>
                  <span className="text-[9px] font-mono text-zinc-600 font-bold">
                    {panel.caption}
                  </span>
                </div>

                {/* Character Speech Bubble */}
                <div className="bg-white p-2.5 rounded-xl comic-border text-left shadow-sm speech-tail-bottom mb-3">
                  <div className="text-[9px] font-bangers text-[#FF2A7A] uppercase mb-0.5 flex items-center gap-1">
                    <MessageSquare className="w-2.5 h-2.5" />
                    {panel.speaker}:
                  </div>
                  <p className="text-[11px] font-comic font-bold text-zinc-900 leading-snug">
                    "{panel.quote}"
                  </p>
                </div>
              </div>

              {/* Character Illustration Center */}
              <div className="my-auto py-2 flex justify-center items-center group-hover:scale-105 transition-transform">
                {panel.char}
              </div>

              {/* Narration Box at Bottom of Panel */}
              <div className="pt-2 border-t border-comic-border/20 text-[10px] font-comic text-zinc-600 italic leading-tight">
                {panel.dialogue}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Prompt */}
        <div className="mt-6 pt-3 border-t-2 border-dashed border-zinc-300 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-600 gap-2">
          <span>Click any comic panel for sound bursts and easter eggs!</span>
          <span className="font-hand font-bold text-[#FF2A7A] text-sm">
            TURING CLUB OF PROGRAMMERS • NIT RAIPUR
          </span>
        </div>

      </div>
    </div>
  );
}
