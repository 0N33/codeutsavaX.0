import React from "react";
import { ShieldAlert, CheckCircle2, Users2, Building, Wrench, Bus, FileCheck2, Sparkles } from "lucide-react";
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
      border: "border-comic-pink-hot",
      desc: "Each team must consist of 2 to 4 members, including 1 designated Team Leader who will submit final project artifacts and handle communications."
    },
    {
      icon: Wrench,
      title: "SOFTWARE & HARDWARE EDITIONS",
      color: "bg-[#E8F4FF]",
      border: "border-comic-blue",
      desc: "For the Software Edition, members must be proficient in development. For the Hardware Edition, multidisciplinary teams (electronics, mechanical, IoT, and software) are highly encouraged."
    },
    {
      icon: Bus,
      title: "FREE STAY, FOOD & REIMBURSEMENT",
      color: "bg-[#E8F8F0]",
      border: "border-comic-green",
      desc: "NIT Raipur provides 100% free accommodation, all meals, and up to ₹1,500 per person travel reimbursement upon presenting valid transit tickets."
    },
    {
      icon: FileCheck2,
      title: "ORIGINAL CODE INTEGRITY",
      color: "bg-[#F3E8FF]",
      border: "border-purple-600",
      desc: "All code must be authored during the 36-hour hackathon period. Plagiarism, copying fellow participants, or submitting pre-built repositories results in immediate disqualification."
    },
    {
      icon: ShieldAlert,
      title: "CODE OF CONDUCT",
      color: "bg-white",
      border: "border-comic-dark",
      desc: "CodeUtsava adheres strictly to SIH and standard ethical codes of conduct. Maintain mutual respect, professional collaboration, and academic integrity throughout."
    }
  ];

  return (
    <section id="guidelines" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF8E7] border-b-[3px] border-comic-border select-none">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-comic-yellow comic-border rounded-full text-xs font-bangers text-comic-dark mb-2 comic-shadow-sm">
            <FileCheck2 className="w-3.5 h-3.5" />
            HACKATHON PROTOCOL
          </div>
          <h2 className="text-4xl sm:text-5xl font-bangers text-comic-dark tracking-wide">
            RULES & GUIDELINES
          </h2>
          <p className="mt-2 text-base sm:text-lg font-hand font-bold text-zinc-600">
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
                onMouseEnter={() => playSound("blip")}
                className={`relative ${rule.color} p-6 rounded-3xl comic-border comic-shadow hover:comic-shadow-lg transition-all duration-200 flex flex-col justify-between`}
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-2xl bg-white comic-border flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-comic-dark" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bangers text-comic-dark tracking-wide">
                    {rule.title}
                  </h3>

                  {/* Text */}
                  <p className="text-xs sm:text-sm font-comic text-zinc-700 mt-2 leading-relaxed">
                    {rule.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-comic-border/20 flex items-center justify-between text-[11px] font-mono font-bold text-zinc-500">
                  <span>RULE #{String(idx + 1).padStart(2, "0")}</span>
                  <CheckCircle2 className="w-4 h-4 text-comic-green" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
