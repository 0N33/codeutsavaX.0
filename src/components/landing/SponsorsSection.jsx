import React from "react";
import { Handshake, ExternalLink, Sparkles, Star } from "lucide-react";
import { playSound } from "../../utils/audioEngine";

export default function SponsorsSection() {
  const sponsors = [
    {
      name: "Devfolio",
      tier: "PLATINUM PLATFORM PARTNER",
      category: "Hackathon Platform",
      bg: "bg-[#E8F4FF]",
      border: "border-comic-blue",
      logo: (
        <div className="w-14 h-14 rounded-2xl bg-[#2762EB] comic-border flex items-center justify-center text-white font-bangers text-2xl comic-shadow-sm">
          DEV
        </div>
      ),
      desc: "India's largest community of passionate builders powering hackathon registrations and team matchmaking."
    },
    {
      name: "Polygon",
      tier: "TITLE BLOCKCHAIN PARTNER",
      category: "Web3 & Zero-Knowledge",
      bg: "bg-[#F3E8FF]",
      border: "border-purple-600",
      logo: (
        <div className="w-14 h-14 rounded-2xl bg-[#8247E5] comic-border flex items-center justify-center text-white font-bangers text-2xl comic-shadow-sm">
          POL
        </div>
      ),
      desc: "Scaling Ethereum with zk-tech. Exclusive $5,000 track bounties for top decentralized dApps!"
    },
    {
      name: "ETHIndia",
      tier: "GOLD COMMUNITY SPONSOR",
      category: "Ethereum Ecosystem",
      bg: "bg-[#E8F8F0]",
      border: "border-comic-green",
      logo: (
        <div className="w-14 h-14 rounded-2xl bg-[#10B981] comic-border flex items-center justify-center text-white font-bangers text-2xl comic-shadow-sm">
          ETH
        </div>
      ),
      desc: "Asia's largest Ethereum hackathon movement nurturing Web3 talent across collegiate campuses."
    },
    {
      name: "State Bank of India (SBI)",
      tier: "BANKING & FINTECH PARTNER",
      category: "Public Sector Banking",
      bg: "bg-[#E8F4FF]",
      border: "border-[#0054a6]",
      logo: (
        <div className="w-14 h-14 rounded-2xl bg-[#0054A6] comic-border flex items-center justify-center text-white font-bangers text-2xl comic-shadow-sm">
          SBI
        </div>
      ),
      desc: "Empowering next-generation financial inclusion, digital banking APIs, and student innovation."
    },
    {
      name: "Life Insurance Corporation (LIC)",
      tier: "ASSOCIATE SPONSOR",
      category: "Insurance & FinTech",
      bg: "bg-[#FFF3D6]",
      border: "border-[#F39C12]",
      logo: (
        <div className="w-14 h-14 rounded-2xl bg-[#F39C12] comic-border flex items-center justify-center text-comic-dark font-bangers text-2xl comic-shadow-sm">
          LIC
        </div>
      ),
      desc: "Leading insurance giant supporting youth technology development and societal protection solutions."
    },
    {
      name: "Fold Health",
      tier: "HEALTHTECH TRACK SPONSOR",
      category: "HealthTech & AI",
      bg: "bg-[#FFE5EF]",
      border: "border-comic-pink-hot",
      logo: (
        <div className="w-14 h-14 rounded-2xl bg-[#FF528F] comic-border flex items-center justify-center text-white font-bangers text-2xl comic-shadow-sm">
          FLD
        </div>
      ),
      desc: "Revolutionizing digital clinical collaboration and interoperable medical workflows."
    }
  ];

  return (
    <section id="sponsors" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7] border-b-[3px] border-comic-border select-none">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-comic-yellow comic-border rounded-full text-xs font-bangers text-comic-dark mb-2 comic-shadow-sm">
            <Handshake className="w-3.5 h-3.5" />
            PARTNERS IN INNOVATION
          </div>
          <h2 className="text-4xl sm:text-5xl font-bangers text-comic-dark tracking-wide">
            OUR ESTEEMED SPONSORS
          </h2>
          <p className="mt-2 text-base sm:text-lg font-hand font-bold text-zinc-600">
            Backed by visionary global organizations powering student innovation and grants.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors.map((sp, idx) => (
            <div
              key={idx}
              onMouseEnter={() => playSound("blip")}
              className={`relative ${sp.bg} p-6 rounded-3xl comic-border comic-shadow hover:comic-shadow-lg transition-all duration-200 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {sp.logo}
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-comic-dark text-white">
                    {sp.category}
                  </span>
                </div>

                <div className="text-[10px] font-mono font-bold text-comic-pink-hot uppercase tracking-wider">
                  {sp.tier}
                </div>

                <h3 className="text-2xl font-bangers text-comic-dark tracking-wide mt-1">
                  {sp.name}
                </h3>

                <p className="text-xs font-comic text-zinc-600 mt-2 leading-relaxed">
                  {sp.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-comic-border/20 flex items-center justify-between text-xs font-mono font-bold text-zinc-500">
                <span>OFFICIAL PARTNER</span>
                <Sparkles className="w-3.5 h-3.5 text-comic-yellow group-hover:rotate-45 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Sponsor Us Callout */}
        <div className="mt-12 bg-[#18181B] text-white p-6 sm:p-8 rounded-3xl comic-border comic-shadow flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bangers text-comic-yellow">
              WANT TO SPONSOR CODEUTSAVA 10.0?
            </h3>
            <p className="text-xs sm:text-sm font-comic text-zinc-300 mt-1 max-w-xl">
              Connect with 1,500+ top engineering candidates, present custom problem bounties, and showcase your brand to Central India’s premier talent pool.
            </p>
          </div>
          <a
            href="mailto:contact@codeutsava.com"
            onClick={() => playSound("pop")}
            className="px-6 py-3 bg-comic-pink-hot text-white font-bangers text-lg tracking-wider rounded-full comic-border comic-shadow hover:bg-comic-yellow hover:text-comic-dark transition-all comic-btn whitespace-nowrap"
          >
            SPONSORSHIP BROCHURE
          </a>
        </div>

      </div>

    </section>
  );
}
