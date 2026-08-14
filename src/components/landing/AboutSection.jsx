import React from "react";
import { Users, Award, Zap, Code2, Heart, ExternalLink, Sparkles, Building2 } from "lucide-react";
import { playSound } from "../../utils/audioEngine";
import { NitRaipurTower, ComicSfxSticker, SheepBit } from "../comic/ComicCharacters";
import tcpLogoOfficial from "../../assets/tcp_logo_official.png";

export default function AboutSection() {
  const stats = [
    { label: "REGISTERED HACKERS", value: "1,500+", color: "bg-[#FFE600]", text: "text-comic-dark" },
    { label: "CASH & BOUNTY PRIZES", value: "₹5,00,000+", color: "bg-[#FF2A7A]", text: "text-white" },
    { label: "HOURS OF HACKING", value: "36 HRS", color: "bg-[#00F0FF]", text: "text-comic-dark" },
    { label: "INDUSTRY JURORS", value: "50+ PROS", color: "bg-[#00FF88]", text: "text-comic-dark" },
  ];

  return (
    <section id="about" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#FF8C1E] border-b-[4px] border-comic-border select-none">
      
      {/* Spider-Verse Halftone Overlay */}
      <div className="absolute inset-0 bg-spider-dots opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-screentone-diagonal opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Caption Box */}
        <div className="flex justify-start mb-6">
          <div className="comic-caption-box text-sm sm:text-base">
            <span>IN THE TURING CLUB MULTIVERSE...</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl sm:text-6xl font-bangers text-[#18181B] tracking-wide spider-glitch-text">
            THE ORIGIN STORY OF CODEUTSAVA 10.0
          </h2>
          <p className="mt-2 text-base sm:text-xl font-hand font-bold text-zinc-900">
            A decade of coding culture, hackathon energy, and open-source innovation at NIT Raipur!
          </p>
        </div>

        {/* 4 Comic Stat Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              onMouseEnter={() => playSound("blip")}
              className={`${stat.color} p-5 rounded-2xl comic-border comic-shadow hover:comic-shadow-lg transition-all text-center group cursor-pointer hover:-translate-y-1`}
            >
              <div className={`text-3xl sm:text-4xl font-bangers ${stat.text} tracking-wide group-hover:scale-110 transition-transform`}>
                {stat.value}
              </div>
              <div className="text-xs font-mono font-bold text-comic-dark mt-1 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 3-Panel Comic Strip Origin Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Panel 1: The Turing Legacy (7 Cols) */}
          <div className="lg:col-span-7 comic-panel-frame p-6 sm:p-8 rounded-3xl flex flex-col justify-between bg-[#FFFDF7]">
            <div className="flex items-center justify-between pb-3 border-b-2 border-dashed border-zinc-400 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#18181B] text-white font-bangers text-xs flex items-center justify-center">
                  #03
                </span>
                <span className="font-bangers text-base text-comic-dark tracking-wide">
                  PANEL 1: THE TURING LEGACY
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-[#FF2A7A]">EST. NIT RAIPUR</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FFE600] comic-border flex items-center justify-center shrink-0 comic-shadow-sm">
                <img src={tcpLogoOfficial} alt="TCP" className="w-9 h-9 object-contain" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bangers text-comic-dark">
                  TURING CLUB OF PROGRAMMERS
                </h3>
                <p className="text-xs font-mono text-zinc-600 font-bold">
                  Official Coding Club of NIT Raipur
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm font-comic text-zinc-800 leading-relaxed">
              <p>
                The <strong>Turing Club of Programmers (TCP)</strong> is the premier coding powerhouse at the <strong>National Institute of Technology, Raipur</strong>. Founded with the mission to cultivate exceptional competitive programmers, full-stack builders, and open-source pioneers.
              </p>
              <p>
                <strong>CodeUtsava</strong> is TCP's flagship hackathon, celebrating its landmark <strong>10.0 Edition</strong> with a superhero comic theme. Over the last decade, CodeUtsava has catalyzed hundreds of startups, research projects, and elite developer careers.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-300 mt-4">
              <span className="px-3 py-1 bg-[#FFE6C7] rounded-lg comic-border text-xs font-mono font-bold text-zinc-900">
                ★ 10 Years of Excellence
              </span>
              <span className="px-3 py-1 bg-[#FFE5EF] rounded-lg comic-border text-xs font-mono font-bold text-zinc-900">
                ⚡ 500+ Alumni in Top Tech
              </span>
              <span className="px-3 py-1 bg-[#E8F8F0] rounded-lg comic-border text-xs font-mono font-bold text-zinc-900">
                🌐 SIH & ACM-ICPC Regional Finalists
              </span>
            </div>
          </div>

          {/* Panel 2: NIT Raipur Campus Landmark (5 Cols) */}
          <div className="lg:col-span-5 comic-panel-frame p-6 sm:p-8 rounded-3xl flex flex-col justify-between items-center text-center bg-[#FFE6C7]">
            <div className="w-full flex items-center justify-between pb-3 border-b-2 border-dashed border-zinc-400 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#18181B] text-white font-bangers text-xs flex items-center justify-center">
                  #04
                </span>
                <span className="font-bangers text-base text-comic-dark tracking-wide">
                  PANEL 2: THE ARENA
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-comic-dark">NITRR CCC</span>
            </div>

            <div className="my-auto py-2">
              <NitRaipurTower size={220} />
            </div>

            <div className="bg-[#FFFDF7] p-4 rounded-2xl comic-border w-full mt-2 speech-tail-bottom">
              <h4 className="font-bangers text-lg text-comic-dark">
                CENTRAL COMPUTER CENTER (CCC)
              </h4>
              <p className="text-xs font-comic text-zinc-700 mt-1">
                Equipped with Gigabit fiber internet, ergonomic dev workspaces, and 24/7 continuous electricity & food support.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
