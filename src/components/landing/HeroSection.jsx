import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, BookOpen, Clock, Users, Trophy, MapPin, CheckCircle2, Zap } from "lucide-react";
import { playSound } from "../../utils/audioEngine";
import { SheepBit, DinoByte, WolfPixel, ComicSfxSticker } from "../comic/ComicCharacters";

export default function HeroSection({ onPlayIntro, onRegisterClick }) {
  // Live Countdown to CodeUtsava 10.0 (Oct 26, 2026, 11:00 AM)
  const [timeLeft, setTimeLeft] = useState({
    days: 72,
    hours: 14,
    minutes: 35,
    seconds: 40
  });

  const [interactiveBursts, setInteractiveBursts] = useState([]);

  useEffect(() => {
    const targetDate = new Date("2026-10-26T11:00:00+05:30").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = Math.max(0, targetDate - now);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const spawnBurst = (e, text = "*THWIP!*") => {
    playSound(text === "*THWIP!*" ? "thwip" : text === "*KAPOW!*" ? "kapow" : "glitch");
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const burst = { id: Date.now() + Math.random(), text, x, y };
    setInteractiveBursts((prev) => [...prev.slice(-3), burst]);
    setTimeout(() => {
      setInteractiveBursts((prev) => prev.filter((b) => b.id !== burst.id));
    }, 800);
  };

  return (
    <section 
      onClick={(e) => spawnBurst(e, "*THWIP!*")}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFA73B] via-[#FF8C1E] to-[#FF7A00] pt-8 pb-20 px-4 sm:px-6 lg:px-8 border-b-[4px] border-comic-border select-none"
    >
      {/* Spider-Verse Ben-Day Dot Pattern & Halftone Screentone */}
      <div className="absolute inset-0 bg-spider-dots opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-screentone-diagonal opacity-25 pointer-events-none" />

      {/* Spider-Verse Dynamic Cyan & Magenta Ambient Halos */}
      <div className="absolute top-8 left-1/4 w-96 h-96 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF2A7A]/20 rounded-full blur-3xl pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Classic Spider-Verse Narration Caption Box (Like Image 2!) */}
        <div className="flex justify-start mb-6">
          <div className="comic-caption-box text-sm sm:text-base md:text-lg animate-wiggle">
            <span>MEANWHILE IN THE NIT RAIPUR CODE-VERSE...</span>
          </div>
        </div>

        {/* Real Comic Strip 3-Panel Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Panel 1: Story Headline & Hackathon Intel (7 Cols) */}
          <div className="lg:col-span-7 comic-panel-frame p-6 sm:p-8 rounded-3xl flex flex-col justify-between group hover:comic-shadow-lg transition-all bg-[#FFF9ED]">
            
            {/* Panel Corner Indicator */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-dashed border-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#18181B] text-white font-bangers text-xs flex items-center justify-center">
                  #01
                </span>
                <span className="text-xs font-mono font-bold text-comic-dark tracking-wider">
                  ISSUE: CENTRAL INDIA'S LARGEST HACKATHON
                </span>
              </div>
              <span className="px-2.5 py-0.5 bg-[#FF2A7A] text-white rounded-full text-[10px] font-mono font-bold comic-border">
                OCT 26-27 • 36 HOURS
              </span>
            </div>

            {/* Headline with Spider-Verse Chromatic Glitch Effect */}
            <div className="my-4">
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bangers text-[#18181B] tracking-wide leading-[0.95] spider-glitch-text">
                CODEUTSAVA <br />
                <span className="text-[#FFE600] comic-title-stroke">10.0 COMIC SPRINT</span>
              </h1>
              
              <p className="mt-4 text-base sm:text-xl font-hand font-bold text-zinc-800 max-w-2xl leading-relaxed">
                Assembled by the legendary <strong className="underline decoration-[#FF2A7A] decoration-4">Turing Club of Programmers (TCP)</strong> at <strong className="underline decoration-[#FFE600] decoration-4">NIT Raipur</strong>. 1000+ Hackers unite across dimensions for 36 hours of code, glory, and breakthrough creations!
              </p>
            </div>

            {/* Live Hackathon Countdown Comic Panel */}
            <div className="w-full bg-[#18181B] text-white p-4 rounded-2xl comic-border comic-shadow-sm mb-4">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-zinc-400 mb-2 pb-1 border-b border-zinc-700">
                <span className="flex items-center gap-1 text-[#FFE600]">
                  <Clock className="w-4 h-4 animate-spin-slow" />
                  COUNTDOWN TO THE GRAND HACK:
                </span>
                <span className="text-[#00F0FF]">NIT RAIPUR CAMPUS</span>
              </div>
              
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-zinc-900 border border-zinc-700 p-2 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bangers text-[#FFE600]">{timeLeft.days}</div>
                  <div className="text-[10px] font-mono text-zinc-400">DAYS</div>
                </div>
                <div className="bg-zinc-900 border border-zinc-700 p-2 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bangers text-[#FF2A7A]">{timeLeft.hours}</div>
                  <div className="text-[10px] font-mono text-zinc-400">HOURS</div>
                </div>
                <div className="bg-zinc-900 border border-zinc-700 p-2 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bangers text-[#00F0FF]">{timeLeft.minutes}</div>
                  <div className="text-[10px] font-mono text-zinc-400">MINS</div>
                </div>
                <div className="bg-zinc-900 border border-zinc-700 p-2 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bangers text-[#00FF88]">{timeLeft.seconds}</div>
                  <div className="text-[10px] font-mono text-zinc-400">SECS</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playSound("kapow");
                  onRegisterClick();
                }}
                className="w-full sm:w-auto px-8 py-4 bg-[#FFE600] text-[#18181B] font-bangers text-2xl tracking-wider rounded-full comic-border comic-shadow hover:comic-shadow-pink comic-btn flex items-center justify-center gap-2 group"
              >
                <Zap className="w-6 h-6 text-[#FF2A7A] group-hover:rotate-45 transition-transform" />
                <span>APPLY WITH DEVFOLIO</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playSound("pageTurn");
                  onPlayIntro();
                }}
                className="w-full sm:w-auto px-6 py-4 bg-white text-[#18181B] font-bangers text-xl tracking-wider rounded-full comic-border comic-shadow-sm hover:comic-shadow comic-btn flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5 text-comic-orange" />
                <span>READ INTRO COMIC</span>
              </button>
            </div>

          </div>

          {/* Panel 2: Interactive Spider-Verse Mascot Splash (5 Cols) */}
          <div className="lg:col-span-5 comic-panel-frame p-6 sm:p-8 rounded-3xl flex flex-col justify-between bg-gradient-to-br from-[#FFE6C7] via-[#FFF3D6] to-[#FFD8A8] relative overflow-hidden group">
            
            {/* Panel Corner Indicator */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-dashed border-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#18181B] text-white font-bangers text-xs flex items-center justify-center">
                  #02
                </span>
                <span className="text-xs font-mono font-bold text-comic-dark tracking-wider">
                  SQUAD SPLASH PAGE
                </span>
              </div>
              <span className="text-xs font-bangers text-[#FF2A7A] tracking-wider animate-pulse">
                ★ 10.0 CHAMPIONS
              </span>
            </div>

            {/* Mascot Cluster (Characters Breaking the Comic Panel Bounds!) */}
            <div className="relative h-[280px] sm:h-[320px] flex items-end justify-center my-4">
              
              {/* Halftone Sunburst in Background */}
              <div className="absolute inset-0 bg-spider-dots-orange opacity-40 rounded-full blur-[1px] pointer-events-none" />

              {/* Pixel the Wolf (Left) */}
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  spawnBurst(e, "*KAPOW!*");
                }}
                className="absolute left-0 bottom-0 z-10 animate-bounce-subtle cursor-pointer hover:scale-110 transition-transform"
                title="Click Pixel!"
              >
                <WolfPixel size={130} holdingSoda={true} />
              </div>

              {/* Bit the Sheep (Center - Hero Jump!) */}
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  spawnBurst(e, "*THWIP!*");
                }}
                className="relative z-20 animate-wiggle cursor-pointer hover:scale-110 transition-transform"
                title="Click Bit!"
              >
                <SheepBit size={165} expression="happy" hasHeadphones={true} holdingKeyboard={true} />
              </div>

              {/* Byte the Dino (Right) */}
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  spawnBurst(e, "*BZZZT!*");
                }}
                className="absolute right-0 bottom-0 z-10 animate-bounce-subtle cursor-pointer hover:scale-110 transition-transform"
                style={{ animationDelay: "-0.7s" }}
                title="Click Byte!"
              >
                <DinoByte size={135} holdingCoffee={true} />
              </div>

              {/* Floating Spider-Verse Action Badges */}
              <div className="absolute -top-2 right-2 z-30 animate-float">
                <ComicSfxSticker text="NIT RAIPUR!" color="yellow" />
              </div>
              <div className="absolute top-6 left-0 z-30 animate-float-delayed">
                <ComicSfxSticker text="36 HOURS!" color="pink" />
              </div>
            </div>

            {/* Speech Dialogue Bubble at Bottom */}
            <div className="bg-white p-3.5 rounded-2xl comic-border text-center speech-tail-bottom">
              <p className="text-xs sm:text-sm font-comic font-bold text-comic-dark">
                "Assemble your squad of 2-4 hackers! ₹5,00,000+ bounty awaits under the NIT Raipur Clock Tower!"
              </p>
            </div>

            {/* Click Burst Feedback Overlay */}
            {interactiveBursts.map((b) => (
              <div
                key={b.id}
                style={{ left: b.x, top: b.y }}
                className="absolute z-50 pointer-events-none comic-sfx-burst -translate-x-1/2 -translate-y-1/2"
              >
                <ComicSfxSticker text={b.text} color="pink" />
              </div>
            ))}

          </div>

        </div>

        {/* Perks Strip at Bottom of Hero */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="comic-panel-frame p-4 rounded-2xl flex items-center gap-3 bg-[#FFFDF7]">
            <span className="w-10 h-10 rounded-xl bg-[#FFE600] comic-border flex items-center justify-center text-comic-dark font-bangers text-lg">
              01
            </span>
            <div>
              <div className="font-bangers text-lg text-comic-dark">FREE MEALS & STAY</div>
              <div className="text-[11px] font-comic text-zinc-600">100% Free Campus Accommodation</div>
            </div>
          </div>

          <div className="comic-panel-frame p-4 rounded-2xl flex items-center gap-3 bg-[#FFFDF7]">
            <span className="w-10 h-10 rounded-xl bg-[#FF2A7A] comic-border flex items-center justify-center text-white font-bangers text-lg">
              02
            </span>
            <div>
              <div className="font-bangers text-lg text-comic-dark">₹1,500 TRAVEL REIMBURSEMENT</div>
              <div className="text-[11px] font-comic text-zinc-600">Per Person to & fro Travel Grant</div>
            </div>
          </div>

          <div className="comic-panel-frame p-4 rounded-2xl flex items-center gap-3 bg-[#FFFDF7]">
            <span className="w-10 h-10 rounded-xl bg-[#00FF88] comic-border flex items-center justify-center text-comic-dark font-bangers text-lg">
              03
            </span>
            <div>
              <div className="font-bangers text-lg text-comic-dark">₹5,00,000+ PRIZE POOL</div>
              <div className="text-[11px] font-comic text-zinc-600">Cash Prizes, Swags & Track Bounties</div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
