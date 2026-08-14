import React from "react";
import { ShieldAlert, CheckCircle2, Users2, Building, Wrench, Bus, FileCheck2, Sparkles, Zap } from "lucide-react";
import { playSound } from "../../utils/audioEngine";

export default function GuidelinesSection() {
  const rules = [
    {
      icon: Building,
      title: "COLLEGE ELIGIBILITY",
      color: "bg-[#FFF3D6]",
      border: "border-comic-orange",
      desc: "All team members must be enrolled in the same university/college. No inter-college teams are allowed. However, members from different academic branches and graduation years are strongly encouraged!"
    },
    {
      icon: Users2,
      title: "TEAM COMPOSITION (2-4 MEMBERS)",
      color: "bg-[#FFE5EF]",
      border: "border-[#FF2A7A]",
      desc: "Each team must consist of 2 to 4 members, including 1 designated Team Leader who will submit final project artifacts and handle communications."
    },
    {
      icon: Wrench,
      title: "SOFTWARE & HARDWARE EDITIONS",
      color: "bg-[#E8F4FF]",
      border: "border-[#2958FF]",
      desc: "For the Software Edition, members must be proficient in development. For the Hardware Edition, multidisciplinary teams (electronics, mechanical, IoT, and software) are highly encouraged."
    },
    {
      icon: Bus,
      title: "FREE STAY, FOOD & REIMBURSEMENT",
      color: "bg-[#E8F8F0]",
      border: "border-[#00FF88]",
      desc: "NIT Raipur provides 100% free accommodation, all meals, and up to ₹1,500 per person travel reimbursement upon presenting valid transit tickets."
    },
    {
      icon: FileCheck2,
      title: "ORIGINAL CODE INTEGRITY",
      color: "bg-[#F3E8FF]",
      border: "border-[#B800FF]",
      desc: "All code must be authored during the 36-hour hackathon period. Plagiarism, copying fellow participants, or submitting pre-built repositories results in immediate disqualification."
    },
    {
      icon: ShieldAlert,
      title: "CODE OF CONDUCT",
      color: "bg-[#FFFDF7]",
      border: "border-comic-dark",
      desc: "CodeUtsava adheres strictly to SIH and standard ethical codes of conduct. Maintain mutual respect, professional collaboration, and academic integrity throughout."
    }
  ];

  return (
    <section id="guidelines" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#FFA73B] border-b-[4px] border-comic-border select-none">
      
      {/* Spider-Verse Dot Screens */}
      <div className="absolute inset-0 bg-spider-dots opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-screentone-diagonal opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Caption Box */}
        <div className="flex justify-start mb-6">
          <div className="comic-caption-box text-sm sm:text-base">
            <span>THE CODE OF THE MULTIVERSE BUILDERS...</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl sm:text-6xl font-bangers text-[#18181B] tracking-wide spider-glitch-text">
            RULES & GUIDELINES
          </h2>
          <p className="mt-2 text-base sm:text-xl font-hand font-bold text-zinc-900">
            Official guidelines for all shortlisted participants and teams at CodeUtsava 10.0.
          </p>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, idx) => {
            const Icon = rule.icon;

            return (
              <div
                key={idx}
                onClick={() => playSound("blip")}
                onMouseEnter={() => playSound("blip")}
                className={`relative comic-panel-frame ${rule.color} p-6 rounded-3xl comic-shadow hover:comic-shadow-lg transition-all duration-200 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5`}
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-2xl bg-white comic-border flex items-center justify-center mb-4 pb-1">
                    <Icon className="w-6 h-6 text-comic-dark" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bangers text-comic-dark tracking-wide">
                    {rule.title}
                  </h3>

                  {/* Text */}
                  <p className="text-xs sm:text-sm font-comic text-zinc-800 mt-2 leading-relaxed">
                    {rule.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-comic-border/20 flex items-center justify-between text-[11px] font-mono font-bold text-zinc-600">
                  <span>RULE #{String(idx + 1).padStart(2, "0")}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#26DE81]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
