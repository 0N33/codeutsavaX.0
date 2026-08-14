import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, BookOpen, Clock, Users, Trophy, MapPin, CheckCircle2 } from "lucide-react";
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

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#FFF8E7] to-[#FFFDF7] pt-8 pb-16 px-4 sm:px-6 lg:px-8 border-b-[3px] border-comic-border select-none">
      
      {/* Halftone & Grid Accents */}
      <div className="absolute inset-0 bg-halftone-orange opacity-[0.03] pointer-events-none" />
      <div className="absolute top-12 left-8 w-40 h-40 bg-comic-yellow/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-8 w-56 h-56 bg-comic-pink/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#18181B] text-white rounded-full text-xs font-mono font-bold comic-shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-comic-green animate-pulse" />
              <span>REGISTRATIONS OPEN • SOFTWARE & HARDWARE EDITIONS</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bangers text-comic-dark tracking-wide leading-tight">
                CENTRAL INDIA'S LARGEST <br />
                <span className="text-comic-orange comic-title-stroke">36-HOUR HACKATHON</span>
              </h1>
              
              <p className="mt-3 text-base sm:text-xl font-hand font-bold text-zinc-700 max-w-2xl leading-relaxed">
                Organized with pride by <span className="text-comic-dark font-black underline decoration-comic-pink-hot decoration-4">Turing Club of Programmers (TCP)</span> at <span className="text-comic-dark font-black underline decoration-comic-yellow decoration-4">NIT Raipur</span>. Code, collaborate, and compete in the ultimate comic adventure!
              </p>
            </div>

            {/* Live Hackathon Countdown Timer Box */}
            <div className="w-full max-w-lg bg-white p-4 rounded-2xl comic-border comic-shadow-sm">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-zinc-500 mb-2 pb-1 border-b border-zinc-200">
                <span className="flex items-center gap-1 text-comic-pink-hot">
                  <Clock className="w-3.5 h-3.5" />
                  HACKATHON COMMENCES IN:
                </span>
                <span>OCTOBER 26, 2026 • NITR</span>
              </div>
              
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-[#FFF3D6] p-2 rounded-xl comic-border">
                  <div className="text-2xl sm:text-3xl font-bangers text-comic-dark">{timeLeft.days}</div>
                  <div className="text-[10px] font-mono text-zinc-600 font-bold">DAYS</div>
                </div>
                <div className="bg-[#FFE5EF] p-2 rounded-xl comic-border">
                  <div className="text-2xl sm:text-3xl font-bangers text-comic-pink-hot">{timeLeft.hours}</div>
                  <div className="text-[10px] font-mono text-zinc-600 font-bold">HOURS</div>
                </div>
                <div className="bg-[#E8F4FF] p-2 rounded-xl comic-border">
                  <div className="text-2xl sm:text-3xl font-bangers text-comic-blue">{timeLeft.minutes}</div>
                  <div className="text-[10px] font-mono text-zinc-600 font-bold">MINS</div>
                </div>
                <div className="bg-[#E8F8F0] p-2 rounded-xl comic-border">
                  <div className="text-2xl sm:text-3xl font-bangers text-comic-green">{timeLeft.seconds}</div>
                  <div className="text-[10px] font-mono text-zinc-600 font-bold">SECS</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              
              <button
                onClick={() => {
                  playSound("pop");
                  onRegisterClick();
                }}
                className="w-full sm:w-auto px-7 py-3.5 bg-comic-yellow text-comic-dark font-bangers text-xl tracking-wider rounded-full comic-border comic-shadow hover:comic-shadow-pink comic-btn flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-5 h-5 text-comic-pink-hot group-hover:rotate-45 transition-transform" />
                <span>APPLY WITH DEVFOLIO</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  playSound("pageTurn");
                  onPlayIntro();
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-comic-dark font-bangers text-xl tracking-wider rounded-full comic-border comic-shadow-sm hover:comic-shadow comic-btn flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5 text-comic-orange" />
                <span>READ INTRO COMIC</span>
              </button>

            </div>

            {/* Perks Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-bold text-zinc-600 pt-2">
              <span className="flex items-center gap-1 text-comic-dark">
                <CheckCircle2 className="w-4 h-4 text-comic-green" /> Free Food & Stay
              </span>
              <span className="flex items-center gap-1 text-comic-dark">
                <CheckCircle2 className="w-4 h-4 text-comic-green" /> ₹1,500 Travel Reimbursed
              </span>
              <span className="flex items-center gap-1 text-comic-dark">
                <CheckCircle2 className="w-4 h-4 text-comic-green" /> ₹5,00,000+ Prize Pool
              </span>
            </div>

          </div>

          {/* Right Column: Comic Visual Hero Card (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
            
            {/* The Comic Hero Card Container */}
            <div className="relative w-full max-w-md bg-[#FFFDF7] comic-border-thick rounded-3xl comic-shadow-lg p-6 overflow-hidden">
              
              {/* Comic Header In Card */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-dashed border-zinc-300">
                <div className="flex items-center gap-2 font-bangers text-lg text-comic-dark">
                  <span className="w-3 h-3 rounded-full bg-comic-pink-hot" />
                  <span>THE CODE COMIC ROSTER</span>
                </div>
                <span className="text-xs font-mono font-bold bg-comic-dark text-white px-2 py-0.5 rounded-full">
                  NITRR
                </span>
              </div>

              {/* Characters Illustration Cluster */}
              <div className="relative h-[250px] flex items-end justify-center my-2">
                
                {/* Pixel left */}
                <div className="absolute left-0 bottom-0 z-10 animate-bounce-subtle">
                  <WolfPixel size={115} holdingSoda={true} />
                </div>

                {/* Bit center */}
                <div className="relative z-20 animate-wiggle">
                  <SheepBit size={145} expression="happy" hasHeadphones={true} holdingKeyboard={true} />
                </div>

                {/* Byte right */}
                <div className="absolute right-0 bottom-0 z-10 animate-bounce-subtle" style={{ animationDelay: "-0.8s" }}>
                  <DinoByte size={120} holdingCoffee={true} />
                </div>

                {/* Floating Comic Stickers */}
                <div className="absolute top-0 right-2 z-30 animate-float">
                  <ComicSfxSticker text="NIT RAIPUR!" color="yellow" />
                </div>
                <div className="absolute top-6 left-0 z-30 animate-float-delayed">
                  <ComicSfxSticker text="36 HOURS!" color="pink" />
                </div>
              </div>

              {/* Card Footer Dialog Callout */}
              <div className="bg-[#FFF3D6] p-3 rounded-xl comic-border text-center">
                <p className="text-xs font-comic font-bold text-comic-dark">
                  "Ready to build the future at CodeUtsava 10.0? Assemble your squad of 2-4 hackers!"
                </p>
                <div className="flex items-center justify-center gap-3 mt-2 text-[10px] font-mono text-zinc-600 font-bold">
                  <span>📍 NIT Raipur Campus</span>
                  <span>•</span>
                  <span>🗓 Oct 26-27, 2026</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
