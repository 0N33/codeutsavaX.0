import React, { useState } from "react";
import confetti from "canvas-confetti";
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Info, 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Bug, 
  Coffee, 
  Trophy, 
  Layers, 
  X,
  Volume2
} from "lucide-react";
import { playSound } from "../../utils/audioEngine";
import { SheepBit, DinoByte, WolfPixel, NitRaipurTower, ComicSfxSticker } from "./ComicCharacters";
import { CHAPTERS_LIST } from "./ChaptersModal";
import tcpLogoOfficial from "../../assets/tcp_logo_official.png";

export default function ComicReader({ 
  currentChapter = 1, 
  onChapterChange, 
  onEnterLanding, 
  onOpenChapters, 
  onOpenAbout,
  onBackToCover
}) {
  const [interactiveP3Fixed, setInteractiveP3Fixed] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([
    "> git fetch tcp-nitrr/codeutsava10.0",
    "> status: SHORTLIST_CONFIRMED"
  ]);
  const [clickBursts, setClickBursts] = useState([]);

  const chapterInfo = CHAPTERS_LIST.find((c) => c.id === currentChapter) || CHAPTERS_LIST[0];

  const handleNextChapter = () => {
    if (currentChapter < CHAPTERS_LIST.length) {
      playSound("pageTurn");
      onChapterChange(currentChapter + 1);
    } else {
      triggerConfetti();
      onEnterLanding();
    }
  };

  const handlePrevChapter = () => {
    if (currentChapter > 1) {
      playSound("pageTurn");
      onChapterChange(currentChapter - 1);
    } else {
      onBackToCover();
    }
  };

  const triggerConfetti = () => {
    playSound("compileSuccess");
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF9820", "#FF528F", "#FFD028", "#2958FF", "#48D17E"]
      });
    } catch {}
  };

  const handleSpawnBurst = (e, text = "POW!") => {
    playSound("pop");
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newBurst = {
      id: Date.now() + Math.random(),
      text,
      x,
      y
    };
    setClickBursts((prev) => [...prev.slice(-4), newBurst]);
    setTimeout(() => {
      setClickBursts((prev) => prev.filter((b) => b.id !== newBurst.id));
    }, 800);
  };

  const handleFixBug = (e) => {
    e.stopPropagation();
    playSound("keyClack");
    playSound("compileSuccess");
    setInteractiveP3Fixed(true);
    triggerConfetti();
    setTerminalOutput((prev) => [
      ...prev,
      "> [OPTIMIZER] Zero bugs remaining! Build SUCCESS (0.04s)",
      "> Ready for CodeUtsava 10.0 Grand Judgment!"
    ]);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#E5832E] overflow-x-hidden flex flex-col justify-between py-4 px-2 sm:px-6 select-none font-comic">
      
      {/* Dynamic Ponpon Mania Abstract Background Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Organic Blue Wave Blob Left */}
        <div 
          className="absolute -top-20 -left-20 w-[420px] h-[550px] bg-[#2958FF] rounded-full blur-2xl opacity-60 mix-blend-multiply transform -rotate-12"
        />
        {/* Organic Pink/Orange Blob Right */}
        <div 
          className="absolute top-1/3 -right-24 w-[480px] h-[600px] bg-[#FF528F] rounded-full blur-2xl opacity-60 mix-blend-multiply transform rotate-45"
        />
        {/* Halftone Overlay */}
        <div className="absolute inset-0 bg-halftone-dark opacity-[0.05]" />
      </div>

      {/* Top Floating Reader Navbar */}
      <header className="relative z-30 w-full max-w-5xl mx-auto flex items-center justify-between px-2 sm:px-4 py-2">
        
        {/* Left: Chapters Button */}
        <button
          onClick={() => {
            playSound("pop");
            onOpenChapters();
          }}
          className="flex items-center gap-2 px-4 py-1.5 bg-[#FFFDF7] text-comic-dark font-bangers text-sm sm:text-base rounded-full comic-border comic-shadow-sm hover:comic-shadow comic-btn"
        >
          <BookOpen className="w-4 h-4 text-comic-orange" />
          <span>CHAPTERS</span>
        </button>

        {/* Center: Comic Title & Chapter Pill */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              playSound("pop");
              onBackToCover();
            }}
            className="flex items-center gap-1.5 font-bangers text-xl sm:text-2xl text-[#FFFDF7] comic-title-stroke hover:scale-105 transition-transform"
          >
            <span>CODEUTSAVA</span>
            <span className="text-comic-yellow">10.0</span>
          </button>
          <span className="hidden sm:inline-block px-2.5 py-0.5 bg-comic-dark text-comic-yellow font-mono text-xs font-bold rounded-full border border-zinc-700">
            ISSUE #{chapterInfo.badge}
          </span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => {
              playSound("pop");
              onOpenAbout();
            }}
            className="px-3 sm:px-4 py-1.5 bg-[#FFFDF7] text-comic-dark font-bangers text-sm sm:text-base rounded-full comic-border comic-shadow-sm hover:comic-shadow comic-btn flex items-center gap-1"
          >
            <Info className="w-4 h-4 text-comic-pink-hot" />
            <span className="hidden sm:inline">ABOUT</span>
          </button>

          <button
            onClick={() => {
              playSound("pageTurn");
              onEnterLanding();
            }}
            className="px-3 sm:px-4 py-1.5 bg-comic-yellow text-comic-dark font-bangers text-sm sm:text-base rounded-full comic-border comic-shadow-sm hover:comic-shadow comic-btn flex items-center gap-1"
          >
            <span>HACKATHON SITE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </header>

      {/* Main Comic Reader Stage (Ponpon Mania Organic Cloud Container) */}
      <main className="relative z-20 w-full max-w-4xl mx-auto my-auto py-2 flex flex-col items-center">
        
        {/* The Cloud Shaped Inset Canvas */}
        <div className="relative w-full bg-[#FFFDF7] comic-border-thick rounded-[36px] sm:rounded-[48px] comic-shadow-xl p-4 sm:p-7 md:p-9 overflow-hidden animate-[panelPop_0.4s_ease-out]">
          
          {/* Halftone Decorative Border Header */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-dashed border-zinc-300">
            <div className="flex items-center gap-2">
              <span 
                className="w-3.5 h-3.5 rounded-full comic-border"
                style={{ backgroundColor: chapterInfo.color }}
              />
              <span className="font-bangers text-lg sm:text-xl text-comic-dark tracking-wide">
                {chapterInfo.title}: {chapterInfo.subtitle}
              </span>
            </div>
            <div className="text-xs font-mono text-zinc-500 font-bold">
              PAGE {currentChapter} OF 4
            </div>
          </div>

          {/* Interactive Comic Panel Grid (2x2 Inked Comic Layout) */}
          <div 
            onClick={(e) => handleSpawnBurst(e, "*POW!*")}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            
            {/* ================= CHAPTER 1 PANELS ================= */}
            {currentChapter === 1 && (
              <>
                {/* Panel 1: The Midnight Dorm Hack */}
                <div className="relative bg-white comic-border-thick rounded-2xl p-4 min-h-[220px] flex flex-col justify-between overflow-hidden comic-shadow-sm group hover:comic-shadow transition-all">
                  {/* Panel Corner Number */}
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-comic-dark text-white font-bangers text-xs flex items-center justify-center">
                    1
                  </div>

                  {/* Speech Bubble */}
                  <div className="self-end bg-[#FFFDF7] comic-border rounded-xl px-3 py-1.5 text-xs font-hand font-bold text-comic-dark max-w-[200px] shadow-sm ml-6 mb-2">
                    "Another 404 error at 2 AM?! Where is that missing semicolon?!"
                  </div>

                  {/* Character Illustration & Screen */}
                  <div className="flex items-end justify-between mt-auto">
                    <div className="w-1/2 flex justify-center">
                      <SheepBit size={120} expression="coding" hasHeadphones={true} />
                    </div>
                    {/* Glowing Terminal Monitor */}
                    <div className="w-1/2 bg-[#18181B] comic-border rounded-xl p-2.5 text-[10px] font-mono text-comic-green shadow-inner">
                      <div className="flex items-center justify-between pb-1 border-b border-zinc-700 text-[8px] text-zinc-400">
                        <span>bash ~ /dorm/app.js</span>
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                      </div>
                      <div className="mt-1 text-zinc-400">npm run build</div>
                      <div className="text-red-400 font-bold">ERR! 404_NOT_FOUND</div>
                      <div className="text-comic-yellow mt-1 animate-pulse">&gt; incoming ping...</div>
                    </div>
                  </div>
                </div>

                {/* Panel 2: The Mysterious TCP Invitation Letter */}
                <div className="relative bg-[#FFF3D6] comic-border-thick rounded-2xl p-4 min-h-[220px] flex flex-col justify-between overflow-hidden comic-shadow-sm group hover:comic-shadow transition-all">
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-comic-dark text-white font-bangers text-xs flex items-center justify-center">
                    2
                  </div>

                  {/* Speech Bubble */}
                  <div className="self-start bg-white comic-border rounded-xl px-3 py-1.5 text-xs font-hand font-bold text-comic-dark max-w-[220px] shadow-sm ml-6">
                    "WAIT! The terminal just decrypted an official letter from NIT RAIPUR!"
                  </div>

                  {/* Golden Envelope Letter */}
                  <div className="my-auto bg-white comic-border rounded-2xl p-3.5 text-center comic-shadow-sm border-2 border-comic-border transform rotate-1 hover:rotate-0 transition-transform">
                    <div className="flex items-center justify-center gap-1.5 text-comic-pink-hot font-bangers text-sm">
                      <Sparkles className="w-4 h-4" />
                      OFFICIAL SHORTLIST NOTICE
                    </div>
                    <div className="text-base font-bangers text-comic-dark mt-1">
                      WELCOME TO CODEUTSAVA 10.0!
                    </div>
                    <p className="text-[11px] font-comic text-zinc-600 mt-0.5">
                      Your team has cleared Round 1. Report to Central Computer Center, NIT Raipur!
                    </p>
                    <div className="mt-2 inline-block px-2.5 py-0.5 bg-comic-yellow text-comic-dark rounded-full font-mono text-[9px] font-bold comic-border">
                      FREE FOOD • FREE STAY • TRAVEL REIMBURSED
                    </div>
                  </div>
                </div>

                {/* Panel 3: Bit Hypes Up & Packs Mechanical Keyboards */}
                <div className="relative bg-[#FFE5EF] comic-border-thick rounded-2xl p-4 min-h-[220px] flex flex-col justify-between overflow-hidden comic-shadow-sm group hover:comic-shadow transition-all">
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-comic-dark text-white font-bangers text-xs flex items-center justify-center">
                    3
                  </div>

                  {/* Speech Bubble */}
                  <div className="self-end bg-white comic-border rounded-xl px-3 py-1.5 text-xs font-hand font-bold text-comic-dark max-w-[210px] shadow-sm ml-6">
                    "PACK THE BLUE SWITCHES! We're bringing the heat to Central India's biggest hackathon!"
                  </div>

                  <div className="flex items-center justify-around my-auto">
                    <SheepBit size={130} expression="happy" holdingKeyboard={true} />
                    <div className="flex flex-col gap-1.5">
                      <ComicSfxSticker text="CLICK-CLACK!" color="pink" />
                      <ComicSfxSticker text="LET'S GOOO!" color="yellow" />
                    </div>
                  </div>
                </div>

                {/* Panel 4: Boarding Train to NIT Raipur */}
                <div className="relative bg-[#E8F4FF] comic-border-thick rounded-2xl p-4 min-h-[220px] flex flex-col justify-between overflow-hidden comic-shadow-sm group hover:comic-shadow transition-all">
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-comic-dark text-white font-bangers text-xs flex items-center justify-center">
                    4
                  </div>

                  {/* Speech Bubble */}
                  <div className="self-start bg-white comic-border rounded-xl px-3 py-1.5 text-xs font-hand font-bold text-comic-dark max-w-[220px] shadow-sm ml-6">
                    "Destination: Raipur, Chhattisgarh. Next stop: Turing Club of Programmers HQ!"
                  </div>

                  {/* Train Ticket to Raipur */}
                  <div className="my-auto bg-white comic-border rounded-xl p-3 comic-shadow-sm border-dashed border-2 border-comic-dark">
                    <div className="flex items-center justify-between font-mono text-[10px] font-bold text-zinc-500">
                      <span>RAIPUR SPECIAL EXPRESS</span>
                      <span className="text-comic-blue">PLATFORM 01</span>
                    </div>
                    <div className="flex items-center justify-between text-base font-bangers text-comic-dark mt-1">
                      <span>ORIGIN: DORM</span>
                      <span>➔</span>
                      <span className="text-comic-pink-hot">NIT RAIPUR (NITRR)</span>
                    </div>
                    <div className="text-[10px] font-comic text-zinc-600 mt-1 flex justify-between">
                      <span>PASSENGER: BIT & SQUAD</span>
                      <span className="font-bold text-comic-green">STATUS: CONFIRMED</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* ================= CHAPTER 2 PANELS ================= */}
            {currentChapter === 2 && (
              <>
                {/* Panel 1: NIT Raipur Iconic Clock Tower */}
                <div className="relative bg-[#FFF3D6] comic-border-thick rounded-2xl p-4 min-h-[220px] flex flex-col justify-between overflow-hidden comic-shadow-sm group hover:comic-shadow transition-all">
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-comic-dark text-white font-bangers text-xs flex items-center justify-center">
                    1
                  </div>

                  <div className="self-end bg-white comic-border rounded-xl px-3 py-1.5 text-xs font-hand font-bold text-comic-dark max-w-[210px] shadow-sm ml-6">
                    "Whoa! Look at that majestic red-brick tower! We have officially arrived at NIT Raipur!"
                  </div>

                  <div className="flex items-center justify-center my-auto">
                    <NitRaipurTower size={190} />
                  </div>
                </div>

                {/* Panel 2: Entering TCP HQ */}
                <div className="relative bg-white comic-border-thick rounded-2xl p-4 min-h-[220px] flex flex-col justify-between overflow-hidden comic-shadow-sm group hover:comic-shadow transition-all">
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-comic-dark text-white font-bangers text-xs flex items-center justify-center">
                    2
                  </div>

                  <div className="self-start bg-[#FFFDF7] comic-border rounded-xl px-3 py-1.5 text-xs font-hand font-bold text-comic-dark max-w-[220px] shadow-sm ml-6">
                    "Entering Turing Club of Programmers (TCP) Tech Lab. The energy in here is electric!"
                  </div>

                  <div className="my-auto bg-[#18181B] text-white comic-border rounded-xl p-3 text-center">
                    <img src={tcpLogoOfficial} alt="TCP" className="w-10 h-10 mx-auto object-contain mb-1" />
                    <div className="font-bangers text-base text-comic-yellow tracking-wider">
                      TURING CLUB OF PROGRAMMERS
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400">
                      OFFICIAL CODING CLUB OF NIT RAIPUR
                    </div>
                  </div>
                </div>

                {/* Panel 3: Byte the Dino Architect */}
                <div className="relative bg-[#E8F8F0] comic-border-thick rounded-2xl p-4 min-h-[220px] flex flex-col justify-between overflow-hidden comic-shadow-sm group hover:comic-shadow transition-all">
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-comic-dark text-white font-bangers text-xs flex items-center justify-center">
                    3
                  </div>

                  <div className="self-end bg-white comic-border rounded-xl px-3 py-1.5 text-xs font-hand font-bold text-comic-dark max-w-[210px] shadow-sm ml-6">
                    "I'm Byte! Senior backend dino. Rule #1: Microservices only when needed; clean code always!"
                  </div>

                  <div className="flex items-center justify-around my-auto">
                    <DinoByte size={130} holdingCoffee={true} />
                    <div className="flex flex-col gap-1.5">
                      <ComicSfxSticker text="SLURP! ☕" color="green" />
                      <ComicSfxSticker text="C++ MASTER" color="yellow" />
                    </div>
                  </div>
                </div>

                {/* Panel 4: Pixel the QA Wolf */}
                <div className="relative bg-[#F3F0FF] comic-border-thick rounded-2xl p-4 min-h-[220px] flex flex-col justify-between overflow-hidden comic-shadow-sm group hover:comic-shadow transition-all">
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-comic-dark text-white font-bangers text-xs flex items-center justify-center">
                    4
                  </div>

                  <div className="self-start bg-white comic-border rounded-xl px-3 py-1.5 text-xs font-hand font-bold text-comic-dark max-w-[220px] shadow-sm ml-6">
                    "I'm Pixel! Bug-hunter extraodinaire. I brought 12 cans of energy drinks for the 36h sprint!"
                  </div>

                  <div className="flex items-center justify-around my-auto">
                    <WolfPixel size={130} holdingSoda={true} />
                    <div className="flex flex-col gap-1.5">
                      <ComicSfxSticker text="CRUNCH!" color="blue" />
                      <ComicSfxSticker text="READY TO WIN!" color="pink" />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* ================= CHAPTER 3 PANELS ================= */}
            {currentChapter === 3 && (
              <>
                {/* Panel 1: 03:00 AM Midnight Crunch */}
                <div className="relative bg-[#18181B] text-white comic-border-thick rounded-2xl p-4 min-h-[220px] flex flex-col justify-between overflow-hidden comic-shadow-sm group hover:comic-shadow transition-all">
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-comic-yellow text-comic-dark font-bangers text-xs flex items-center justify-center">
                    1
                  </div>

                  <div className="self-end bg-[#27272A] comic-border border-zinc-600 rounded-xl px-3 py-1.5 text-xs font-hand font-bold text-comic-yellow max-w-[210px] shadow-sm ml-6">
                    "Hour 24 of 36 at CCC! The whole hall is illuminated by glowing IDEs and caffeine!"
                  </div>

                  <div className="flex items-center justify-around my-auto text-center">
                    <div>
                      <div className="text-3xl font-bangers text-comic-pink-hot">03:42 AM</div>
                      <div className="text-[10px] font-mono text-zinc-400">NIT RAIPUR CCC HALL</div>
                    </div>
                    <div className="flex flex-col gap-1 text-[11px] font-mono text-comic-green">
                      <span>✓ 4,200 LINES WRITTEN</span>
                      <span>✓ 8 COFFEES CONSUMED</span>
                      <span className="text-comic-yellow">⚡ DEPLOYING TO PROD...</span>
                    </div>
                  </div>
                </div>

                {/* Panel 2: The Dreaded Boss Bug Appears */}
                <div className="relative bg-[#FFEBEB] comic-border-thick rounded-2xl p-4 min-h-[220px] flex flex-col justify-between overflow-hidden comic-shadow-sm group hover:comic-shadow transition-all">
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-comic-dark text-white font-bangers text-xs flex items-center justify-center">
                    2
                  </div>

                  <div className="self-start bg-white comic-border rounded-xl px-3 py-1.5 text-xs font-hand font-bold text-red-600 max-w-[220px] shadow-sm ml-6">
                    "ALERT! Boss Bug detected! Uncaught TypeError right before final judgment demo!"
                  </div>

                  {/* Bug Warning Card */}
                  <div className="my-auto bg-red-600 text-white comic-border rounded-xl p-3 comic-shadow-sm animate-pulse">
                    <div className="flex items-center gap-1.5 font-bangers text-base">
                      <Bug className="w-5 h-5" />
                      CRITICAL RUNTIME EXCEPTION
                    </div>
                    <div className="font-mono text-[10px] bg-red-800/80 p-1.5 rounded mt-1">
                      TypeError: Cannot read properties of undefined (reading 'score')
                    </div>
                  </div>
                </div>

                {/* Panel 3: Interactive Debug & Fix Mini-Panel */}
                <div className="relative bg-[#FFFDF7] comic-border-thick rounded-2xl p-4 min-h-[220px] flex flex-col justify-between overflow-hidden comic-shadow-sm group hover:comic-shadow transition-all">
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-comic-dark text-white font-bangers text-xs flex items-center justify-center">
                    3
                  </div>

                  <div className="self-end bg-white comic-border rounded-xl px-3 py-1.5 text-xs font-hand font-bold text-comic-dark max-w-[220px] shadow-sm ml-6">
                    {interactiveP3Fixed 
                      ? "BOOM! Bug squashed in record time! Build turned green!" 
                      : "Quick! Click DEBUG & PATCH below to fix the code with the team!"}
                  </div>

                  {/* Interactive Button */}
                  <div className="my-auto flex flex-col items-center">
                    {interactiveP3Fixed ? (
                      <div className="flex items-center gap-2 px-4 py-2 bg-comic-green text-comic-dark font-bangers text-base rounded-xl comic-border comic-shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-comic-dark" />
                        BUILD PASSING • 100% COVERAGE
                      </div>
                    ) : (
                      <button
                        onClick={handleFixBug}
                        className="px-5 py-2.5 bg-comic-pink-hot text-white font-bangers text-lg tracking-wider rounded-xl comic-border comic-shadow hover:scale-105 active:scale-95 transition-all flex items-center gap-2 animate-bounce"
                      >
                        <Sparkles className="w-5 h-5 text-comic-yellow" />
                        CLICK TO SQUASH BUG!
                      </button>
                    )}
                  </div>
                </div>

                {/* Panel 4: Build Successful */}
                <div className="relative bg-[#E8F8F0] comic-border-thick rounded-2xl p-4 min-h-[220px] flex flex-col justify-between overflow-hidden comic-shadow-sm group hover:comic-shadow transition-all">
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-comic-dark text-white font-bangers text-xs flex items-center justify-center">
                    4
                  </div>

                  <div className="self-start bg-white comic-border rounded-xl px-3 py-1.5 text-xs font-hand font-bold text-comic-dark max-w-[220px] shadow-sm ml-6">
                    "All green! The presentation deck is loaded. Time to show the jury what we built!"
                  </div>

                  <div className="my-auto bg-white comic-border rounded-xl p-3 comic-shadow-sm flex items-center justify-around">
                    <SheepBit size={100} expression="happy" />
                    <div className="flex flex-col gap-1 text-center">
                      <div className="font-bangers text-lg text-comic-green">READY TO PITCH!</div>
                      <ComicSfxSticker text="GIT COMMIT: WIN" color="yellow" />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* ================= CHAPTER 4 PANELS ================= */}
            {currentChapter === 4 && (
              <>
                {/* Panel 1: The Pitch on Stage */}
                <div className="relative bg-[#FFF3D6] comic-border-thick rounded-2xl p-4 min-h-[220px] flex flex-col justify-between overflow-hidden comic-shadow-sm group hover:comic-shadow transition-all">
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-comic-dark text-white font-bangers text-xs flex items-center justify-center">
                    1
                  </div>

                  <div className="self-end bg-white comic-border rounded-xl px-3 py-1.5 text-xs font-hand font-bold text-comic-dark max-w-[210px] shadow-sm ml-6">
                    "Live demo before the jury panel of industry leaders and NIT Raipur faculty!"
                  </div>

                  <div className="my-auto bg-[#18181B] text-white comic-border rounded-xl p-3 text-center">
                    <div className="text-xs font-mono text-comic-yellow">DEMO SCREEN: LIVE</div>
                    <div className="text-base font-bangers text-white mt-1">
                      INNOVATIVE AI & WEB3 PLATFORM
                    </div>
                    <div className="text-[10px] font-comic text-comic-green mt-1">
                      Judges Rating: 10 / 10 EXCELLENCE
                    </div>
                  </div>
                </div>

                {/* Panel 2: Golden Trophy Unlocked */}
                <div className="relative bg-[#FFE5EF] comic-border-thick rounded-2xl p-4 min-h-[220px] flex flex-col justify-between overflow-hidden comic-shadow-sm group hover:comic-shadow transition-all">
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-comic-dark text-white font-bangers text-xs flex items-center justify-center">
                    2
                  </div>

                  <div className="self-start bg-white comic-border rounded-xl px-3 py-1.5 text-xs font-hand font-bold text-comic-dark max-w-[220px] shadow-sm ml-6">
                    "AND THE WINNER OF CODEUTSAVA 10.0 IS..."
                  </div>

                  <div className="my-auto flex items-center justify-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-comic-yellow comic-border flex items-center justify-center comic-shadow-sm animate-bounce">
                      <Trophy className="w-10 h-10 text-comic-dark" />
                    </div>
                    <div>
                      <div className="text-2xl font-bangers text-comic-dark">₹5,00,000+</div>
                      <div className="text-xs font-mono font-bold text-comic-pink-hot">PRIZE POOL UNLOCKED</div>
                    </div>
                  </div>
                </div>

                {/* Panel 3: Squad Victory Celebration */}
                <div className="relative bg-[#E8F8F0] comic-border-thick rounded-2xl p-4 min-h-[220px] flex flex-col justify-between overflow-hidden comic-shadow-sm group hover:comic-shadow transition-all">
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-comic-dark text-white font-bangers text-xs flex items-center justify-center">
                    3
                  </div>

                  <div className="self-end bg-white comic-border rounded-xl px-3 py-1.5 text-xs font-hand font-bold text-comic-dark max-w-[210px] shadow-sm ml-6">
                    "WE DID IT! 36 hours of grit, learning, and unstoppable teamwork!"
                  </div>

                  <div className="flex items-center justify-around my-auto">
                    <SheepBit size={100} expression="happy" />
                    <DinoByte size={95} holdingCoffee={false} />
                    <WolfPixel size={95} holdingSoda={false} />
                  </div>
                </div>

                {/* Panel 4: Grand Portal to Hackathon Arena */}
                <div className="relative bg-gradient-to-br from-comic-yellow to-comic-orange comic-border-thick rounded-2xl p-4 min-h-[220px] flex flex-col justify-between overflow-hidden comic-shadow-sm group hover:comic-shadow transition-all text-center">
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-md bg-comic-dark text-white font-bangers text-xs flex items-center justify-center">
                    4
                  </div>

                  <div className="font-bangers text-2xl text-comic-dark mt-4">
                    YOUR JOURNEY BEGINS NOW!
                  </div>
                  
                  <p className="text-xs font-hand font-bold text-comic-dark px-2">
                    Step into the official CodeUtsava 10.0 arena: explore tracks, schedule, prizes, and register your team!
                  </p>

                  <button
                    onClick={() => {
                      triggerConfetti();
                      onEnterLanding();
                    }}
                    className="my-auto px-5 py-3 bg-[#18181B] text-white font-bangers text-lg tracking-wider rounded-full comic-border comic-shadow-lg hover:bg-comic-pink-hot hover:text-white transition-all comic-btn flex items-center justify-center gap-2"
                  >
                    <span>ENTER HACKATHON SITE</span>
                    <ArrowRight className="w-5 h-5 text-comic-yellow" />
                  </button>
                </div>
              </>
            )}

            {/* Dynamic Interactive Burst SFX on click */}
            {clickBursts.map((b) => (
              <div
                key={b.id}
                style={{ left: b.x, top: b.y }}
                className="absolute z-50 pointer-events-none comic-sfx-burst -translate-x-1/2 -translate-y-1/2"
              >
                <ComicSfxSticker text={b.text} color="pink" />
              </div>
            ))}

          </div>

          {/* Interactive Comic Navigation Bar (Next/Prev Page Buttons) */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t-2 border-dashed border-zinc-300">
            
            {/* Prev Page Button */}
            <button
              onClick={handlePrevChapter}
              className="flex items-center gap-2 px-4 py-2 bg-white text-comic-dark font-bangers text-base rounded-full comic-border comic-shadow-sm hover:comic-shadow comic-btn"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{currentChapter === 1 ? "COVER" : "PREV ISSUE"}</span>
            </button>

            {/* Interactive Page Dots */}
            <div className="flex items-center gap-2">
              {CHAPTERS_LIST.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    playSound("pageTurn");
                    onChapterChange(c.id);
                  }}
                  className={`w-3.5 h-3.5 rounded-full transition-all comic-border ${
                    currentChapter === c.id 
                      ? "bg-comic-pink-hot scale-125 comic-shadow-sm" 
                      : "bg-zinc-200 hover:bg-comic-yellow"
                  }`}
                  title={`Jump to Chapter ${c.id}`}
                />
              ))}
            </div>

            {/* Next Page Button */}
            <button
              onClick={handleNextChapter}
              className="flex items-center gap-2 px-5 py-2 bg-comic-yellow text-comic-dark font-bangers text-base rounded-full comic-border comic-shadow-sm hover:comic-shadow comic-btn"
            >
              <span>{currentChapter === 4 ? "ENTER SITE" : "NEXT ISSUE"}</span>
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </main>

      {/* Footer Info Notice */}
      <footer className="relative z-20 w-full text-center text-xs font-mono text-white/90 py-2">
        <span>Click anywhere on comic panels to trigger sound effects & stickers • </span>
        <button 
          onClick={onEnterLanding} 
          className="underline font-bold hover:text-comic-yellow"
        >
          Skip comic and go to Main Hackathon Portal ➔
        </button>
      </footer>

    </div>
  );
}
