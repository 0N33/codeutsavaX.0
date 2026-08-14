import React from "react";
import { Users, Award, Zap, Code2, Heart, ExternalLink, Sparkles, Building2 } from "lucide-react";
import { playSound } from "../../utils/audioEngine";
import { NitRaipurTower, ComicSfxSticker } from "../comic/ComicCharacters";
import tcpLogoOfficial from "../../assets/tcp_logo_official.png";

export default function AboutSection() {
  const stats = [
    { label: "REGISTERED HACKERS", value: "1,500+", color: "bg-[#FFF3D6]", text: "text-comic-dark" },
    { label: "CASH & BOUNTY PRIZES", value: "₹5,00,000+", color: "bg-[#FFE5EF]", text: "text-comic-pink-hot" },
    { label: "HOURS OF HACKING", value: "36 HRS", color: "bg-[#E8F4FF]", text: "text-comic-blue" },
    { label: "INDUSTRY JURORS", value: "50+ PROS", color: "bg-[#E8F8F0]", text: "text-comic-green" },
  ];

  return (
    <section id="about" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7] border-b-[3px] border-comic-border select-none">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-comic-yellow comic-border rounded-full text-xs font-bangers text-comic-dark mb-2 comic-shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            THE 10TH LEGENDARY EDITION
          </div>
          <h2 className="text-4xl sm:text-5xl font-bangers text-comic-dark tracking-wide">
            ABOUT CODEUTSAVA 10.0 & TCP
          </h2>
          <p className="mt-2 text-base sm:text-lg font-hand font-bold text-zinc-600">
            Fostering competitive programming, open source, and cutting-edge digital creation at NIT Raipur.
          </p>
        </div>

        {/* 4 Big Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`${stat.color} p-5 rounded-2xl comic-border comic-shadow-sm hover:comic-shadow transition-all text-center group`}
            >
              <div className={`text-3xl sm:text-4xl font-bangers ${stat.text} tracking-wide group-hover:scale-105 transition-transform`}>
                {stat.value}
              </div>
              <div className="text-xs font-mono font-bold text-zinc-600 mt-1 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: NIT Raipur & TCP Info (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="bg-white p-6 rounded-3xl comic-border comic-shadow space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-comic-pink-light comic-border flex items-center justify-center">
                  <img src={tcpLogoOfficial} alt="TCP" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bangers text-comic-dark">
                    TURING CLUB OF PROGRAMMERS
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 font-bold">
                    Official Coding Club of NIT Raipur
                  </p>
                </div>
              </div>

              <p className="text-sm font-comic text-zinc-700 leading-relaxed">
                The <strong>Turing Club of Programmers (TCP)</strong> is the premier coding community of the <strong>National Institute of Technology, Raipur</strong>. TCP is dedicated to cultivating a passionate ecosystem of problem-solvers, competitive programmers, full-stack builders, and open-source pioneers.
              </p>

              <p className="text-sm font-comic text-zinc-700 leading-relaxed">
                <strong>CodeUtsava</strong> is TCP’s flagship annual hackathon. Celebrating its momentous <strong>10.0 Edition</strong>, CodeUtsava attracts the brightest minds from across India for an unforgettable 36 hours of software engineering, hardware prototyping, mentorship, and tech culture.
              </p>

              {/* Club Perks Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-zinc-100 rounded-lg comic-border text-xs font-mono font-bold text-zinc-800">
                  🏆 10 Years of Legacy
                </span>
                <span className="px-3 py-1 bg-zinc-100 rounded-lg comic-border text-xs font-mono font-bold text-zinc-800">
                  ⚡ 500+ Active Alumni in Top Tech
                </span>
                <span className="px-3 py-1 bg-zinc-100 rounded-lg comic-border text-xs font-mono font-bold text-zinc-800">
                  🌐 SIH & ACM-ICPC Regional Finalists
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: NIT Raipur Architecture Visual (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="w-full bg-[#FFF3D6] p-6 rounded-3xl comic-border comic-shadow flex flex-col items-center text-center">
              <NitRaipurTower size={240} />
              
              <h4 className="text-xl font-bangers text-comic-dark mt-3">
                NIT RAIPUR CAMPUS & CCC
              </h4>
              <p className="text-xs font-hand font-bold text-zinc-600 mt-1 max-w-xs">
                Hosted inside the state-of-the-art Central Computer Center (CCC) with high-speed gigabit Wi-Fi, air conditioning, and 24/7 power backup.
              </p>
              
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-comic-pink-hot">
                <span>📍 G.E. Road, Raipur, Chhattisgarh</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
