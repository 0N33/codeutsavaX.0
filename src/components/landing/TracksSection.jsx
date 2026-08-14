import React, { useState } from "react";
import { Brain, Cpu, Coins, Activity, Globe, Sparkles, Flame, Check } from "lucide-react";
import { playSound } from "../../utils/audioEngine";

export default function TracksSection() {
  const [activeTrack, setActiveTrack] = useState(null);

  const tracks = [
    {
      id: "ai-ml",
      title: "AI & AGENTIC ML",
      icon: Brain,
      tag: "HOT TRACK",
      badgeColor: "bg-comic-pink-hot text-white",
      cardBg: "bg-[#FFE5EF]",
      borderColor: "border-comic-pink-hot",
      desc: "Build next-gen autonomous agents, multimodal LLM applications, intelligent copilots, and real-time computer vision pipelines.",
      ideas: ["Autonomous Coding Assistants", "Multimodal Medical Diagnostics", "Real-time Edge Vision Models"]
    },
    {
      id: "web3",
      title: "WEB3 & DEFI",
      icon: Coins,
      tag: "POLYGON SPONSORED",
      badgeColor: "bg-comic-blue text-white",
      cardBg: "bg-[#E8F4FF]",
      borderColor: "border-comic-blue",
      desc: "Architect decentralized applications, zero-knowledge verification systems, smart contract protocols, and on-chain governance.",
      ideas: ["Cross-Chain DeFi Aggregators", "Zero-Knowledge Identity Vaults", "Decentralized Physical Infrastructure"]
    },
    {
      id: "fintech",
      title: "FINTECH & COMMERCE",
      icon: Flame,
      tag: "HIGH IMPACT",
      badgeColor: "bg-comic-orange text-comic-dark",
      cardBg: "bg-[#FFF3D6]",
      borderColor: "border-comic-orange",
      desc: "Innovate banking infrastructure, fraud detection algorithms, algorithmic credit rating, and frictionless micro-payments.",
      ideas: ["Predictive Fraud Engine", "Automated Micro-Investment Bot", "Offline UPI Smart Mesh"]
    },
    {
      id: "healthtech",
      title: "HEALTHTECH & BIO",
      icon: Activity,
      tag: "SOCIAL GOOD",
      badgeColor: "bg-comic-green text-comic-dark",
      cardBg: "bg-[#E8F8F0]",
      borderColor: "border-comic-green",
      desc: "Transform healthcare delivery, clinical diagnostics, wearable vital trackers, and mental wellness platforms.",
      ideas: ["AI Tele-Triage Assistant", "Continuous Biosensor Dashboard", "Smart Emergency Response Grid"]
    },
    {
      id: "hardware-iot",
      title: "HARDWARE & IOT",
      icon: Cpu,
      tag: "HARDWARE EDITION",
      badgeColor: "bg-purple-600 text-white",
      cardBg: "bg-[#F3E8FF]",
      borderColor: "border-purple-600",
      desc: "Multidisciplinary track fusing electronics, microcontrollers, embedded firmware, sensor arrays, and robotics.",
      ideas: ["Smart Agriculture Drone Nodes", "Wearable Assistive Robotics", "Industrial IoT Telemetry"]
    },
    {
      id: "open-innovation",
      title: "OPEN INNOVATION",
      icon: Globe,
      tag: "UNLIMITED",
      badgeColor: "bg-comic-dark text-comic-yellow",
      cardBg: "bg-[#FFFDF7]",
      borderColor: "border-comic-dark",
      desc: "Got a wild, boundary-pushing idea that doesn't fit standard categories? Build whatever sparks your engineering soul!",
      ideas: ["Next-gen EdTech Tools", "Sustainability & Climate Tech", "Creative Coding & Game Engines"]
    }
  ];

  return (
    <section id="tracks" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF8E7] border-b-[3px] border-comic-border select-none">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-comic-yellow comic-border rounded-full text-xs font-bangers text-comic-dark mb-2 comic-shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            HACKATHON THEMES & DOMAINS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bangers text-comic-dark tracking-wide">
            PROBLEM STATEMENT TRACKS
          </h2>
          <p className="mt-2 text-base sm:text-lg font-hand font-bold text-zinc-600">
            Pick your battleground or innovate freely. Dedicated track bounties and mentorship in every domain!
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => {
            const Icon = track.icon;
            const isHovered = activeTrack === track.id;

            return (
              <div
                key={track.id}
                onMouseEnter={() => {
                  playSound("blip");
                  setActiveTrack(track.id);
                }}
                onMouseLeave={() => setActiveTrack(null)}
                className={`relative ${track.cardBg} p-6 rounded-3xl comic-border comic-shadow hover:comic-shadow-lg transition-all duration-200 flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5`}
              >
                <div>
                  {/* Top Track Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white comic-border flex items-center justify-center group-hover:rotate-6 transition-transform">
                      <Icon className="w-6 h-6 text-comic-dark" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold comic-border ${track.badgeColor}`}>
                      {track.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bangers text-comic-dark tracking-wide group-hover:text-comic-blue transition-colors">
                    {track.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-comic text-zinc-700 mt-2 leading-relaxed">
                    {track.desc}
                  </p>
                </div>

                {/* Sub-areas / Idea Pills */}
                <div className="mt-5 pt-3 border-t border-comic-border/30">
                  <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase mb-2">
                    SAMPLE FOCUS AREAS:
                  </div>
                  <div className="flex flex-col gap-1 text-xs font-comic text-zinc-800">
                    {track.ideas.map((idea, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-comic-dark" />
                        <span className="font-medium">{idea}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
