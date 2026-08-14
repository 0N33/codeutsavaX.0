import React, { useState } from "react";
import { Brain, Cpu, Coins, Activity, Globe, Sparkles, Flame, Check, Zap } from "lucide-react";
import { playSound } from "../../utils/audioEngine";

export default function TracksSection() {
  const [activeTrack, setActiveTrack] = useState(null);

  const tracks = [
    {
      id: "ai-ml",
      issue: "ISSUE #01",
      title: "AI & AGENTIC ML",
      icon: Brain,
      tag: "FEATURED TRACK",
      badgeColor: "bg-[#FF2A7A] text-white",
      cardBg: "bg-[#FFE5EF]",
      borderColor: "border-[#FF2A7A]",
      desc: "Build next-gen autonomous agents, multimodal LLM applications, intelligent copilots, and real-time computer vision pipelines.",
      ideas: ["Autonomous Coding Agents", "Multimodal Medical Diagnostics", "Real-time Edge Vision Models"]
    },
    {
      id: "web3",
      issue: "ISSUE #02",
      title: "WEB3 & DEFI",
      icon: Coins,
      tag: "POLYGON SPONSORED",
      badgeColor: "bg-[#2958FF] text-white",
      cardBg: "bg-[#E8F4FF]",
      borderColor: "border-[#2958FF]",
      desc: "Architect decentralized applications, zero-knowledge verification systems, smart contract protocols, and on-chain governance.",
      ideas: ["Cross-Chain DeFi Aggregators", "Zero-Knowledge Identity Vaults", "Decentralized Physical Infrastructure"]
    },
    {
      id: "fintech",
      issue: "ISSUE #03",
      title: "FINTECH & COMMERCE",
      icon: Flame,
      tag: "HIGH IMPACT",
      badgeColor: "bg-[#FFE600] text-comic-dark",
      cardBg: "bg-[#FFF3D6]",
      borderColor: "border-[#FFE600]",
      desc: "Innovate banking infrastructure, fraud detection algorithms, algorithmic credit rating, and frictionless micro-payments.",
      ideas: ["Predictive Fraud Engine", "Automated Micro-Investment Bot", "Offline UPI Smart Mesh"]
    },
    {
      id: "healthtech",
      issue: "ISSUE #04",
      title: "HEALTHTECH & BIO",
      icon: Activity,
      tag: "SOCIAL GOOD",
      badgeColor: "bg-[#00FF88] text-comic-dark",
      cardBg: "bg-[#E8F8F0]",
      borderColor: "border-[#00FF88]",
      desc: "Transform healthcare delivery, clinical diagnostics, wearable vital trackers, and mental wellness platforms.",
      ideas: ["AI Tele-Triage Assistant", "Continuous Biosensor Dashboard", "Smart Emergency Response Grid"]
    },
    {
      id: "hardware-iot",
      issue: "ISSUE #05",
      title: "HARDWARE & IOT",
      icon: Cpu,
      tag: "HARDWARE EDITION",
      badgeColor: "bg-[#B800FF] text-white",
      cardBg: "bg-[#F3E8FF]",
      borderColor: "border-[#B800FF]",
      desc: "Multidisciplinary track fusing electronics, microcontrollers, embedded firmware, sensor arrays, and robotics.",
      ideas: ["Smart Agriculture Drone Nodes", "Wearable Assistive Robotics", "Industrial IoT Telemetry"]
    },
    {
      id: "open-innovation",
      issue: "ISSUE #06",
      title: "OPEN INNOVATION",
      icon: Globe,
      tag: "UNLIMITED",
      badgeColor: "bg-[#18181B] text-[#FFE600]",
      cardBg: "bg-[#FFFDF7]",
      borderColor: "border-comic-dark",
      desc: "Got a wild, boundary-pushing idea that doesn't fit standard categories? Build whatever sparks your engineering soul!",
      ideas: ["Next-gen EdTech Tools", "Sustainability & Climate Tech", "Creative Coding & Game Engines"]
    }
  ];

  return (
    <section id="tracks" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#FFA73B] border-b-[4px] border-comic-border select-none">
      
      {/* Spider-Verse Dot Screens */}
      <div className="absolute inset-0 bg-spider-dots opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-screentone-diagonal opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Caption Box */}
        <div className="flex justify-start mb-6">
          <div className="comic-caption-box text-sm sm:text-base">
            <span>SELECT YOUR MULTIVERSE MISSION TRACK...</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl sm:text-6xl font-bangers text-[#18181B] tracking-wide spider-glitch-text">
            PROBLEM STATEMENT TRACKS
          </h2>
          <p className="mt-2 text-base sm:text-xl font-hand font-bold text-zinc-900">
            Pick your battleground or innovate freely. Dedicated track bounties and mentors in every domain!
          </p>
        </div>

        {/* Tracks Grid (Formatted as Collectible Comic Issue Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => {
            const Icon = track.icon;
            const isHovered = activeTrack === track.id;

            return (
              <div
                key={track.id}
                onClick={() => playSound("thwip")}
                onMouseEnter={() => {
                  playSound("blip");
                  setActiveTrack(track.id);
                }}
                onMouseLeave={() => setActiveTrack(null)}
                className={`relative comic-panel-frame ${track.cardBg} p-6 sm:p-7 rounded-3xl comic-shadow hover:comic-shadow-lg transition-all duration-200 flex flex-col justify-between group cursor-pointer hover:-translate-y-2`}
              >
                <div>
                  {/* Issue Number & Tag */}
                  <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-dashed border-zinc-400">
                    <span className="font-bangers text-sm text-comic-dark tracking-wider">
                      {track.issue}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold comic-border ${track.badgeColor}`}>
                      {track.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-white comic-border flex items-center justify-center group-hover:rotate-12 transition-transform shrink-0">
                      <Icon className="w-6 h-6 text-comic-dark" />
                    </div>
                    <h3 className="text-2xl font-bangers text-comic-dark tracking-wide group-hover:text-[#2958FF] transition-colors">
                      {track.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-comic text-zinc-800 mt-2 leading-relaxed">
                    {track.desc}
                  </p>
                </div>

                {/* Sub-areas / Idea Pills */}
                <div className="mt-5 pt-3 border-t border-comic-border/30">
                  <div className="text-[10px] font-mono font-bold text-zinc-600 uppercase mb-2">
                    SAMPLE FOCUS DOMAINS:
                  </div>
                  <div className="flex flex-col gap-1 text-xs font-comic text-zinc-900">
                    {track.ideas.map((idea, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#18181B]" />
                        <span>{idea}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-dashed border-zinc-300 flex items-center justify-between text-[11px] font-mono font-bold text-zinc-600">
                  <span>CLICK TO INSPECT</span>
                  <Zap className="w-3.5 h-3.5 text-[#FF2A7A] group-hover:scale-125 transition-transform" />
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
