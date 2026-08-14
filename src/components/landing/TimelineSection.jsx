import React, { useState } from "react";
import { Calendar, Clock, CheckCircle2, Circle, Sparkles, Flag, Rocket } from "lucide-react";
import { playSound } from "../../utils/audioEngine";

export default function TimelineSection() {
  const [activeStage, setActiveStage] = useState(null);

  const stages = [
    { stage: "STAGE 01", name: "Registration Opens!", date: "20th SEPTEMBER, 11:00 AM", desc: "Registrations begin for CodeUtsava 10.0 - the flagship event of TCP NIT Raipur.", status: "completed" },
    { stage: "STAGE 02", name: "Shortlisting Begins!", date: "5th OCTOBER, 11:00 AM", desc: "Team shortlisting begins in batches based on applicant profiles and ideas.", status: "active" },
    { stage: "STAGE 03", name: "Registration Closes!", date: "20th OCTOBER, 11:59 PM", desc: "Registrations officially close across Devfolio portal.", status: "upcoming" },
    { stage: "STAGE 04", name: "Final Teams Announced", date: "21st OCTOBER, 11:00 AM", desc: "Final shortlisted teams for CodeUtsava 10.0 are released.", status: "upcoming" },
    { stage: "STAGE 05", name: "Problem Statements Released", date: "22nd OCTOBER, 11:00 AM", desc: "Official problem statement tracks revealed for preparation.", status: "upcoming" },
    { stage: "STAGE 06", name: "Check-in at CCC Entry", date: "26th OCTOBER, 08:00 AM", desc: "On-site check-in and kit distribution at Central Computer Center, NIT Raipur.", status: "upcoming" },
    { stage: "STAGE 07", name: "Grand Opening Ceremony", date: "26th OCTOBER, 10:00 AM", desc: "Keynote address, rules briefing, and mentor introductions.", status: "upcoming" },
    { stage: "STAGE 08", name: "Hackathon Begins! (36h)", date: "26th OCTOBER, 11:00 AM", desc: "The coding clock starts ticking! 36 hours of non-stop innovation.", status: "upcoming" },
    { stage: "STAGE 09", name: "Judgement Round 1", date: "26th OCTOBER, 06:00 PM", desc: "Initial architecture and progress evaluation by industry mentors.", status: "upcoming" },
    { stage: "STAGE 10", name: "Judgement Round 2", date: "27th OCTOBER, 12:00 PM", desc: "Deep technical review, code quality, and prototype functionality check.", status: "upcoming" },
    { stage: "STAGE 11", name: "Hackathon Concludes!", date: "27th OCTOBER, 03:00 PM", desc: "Final code commits pushed to GitHub and repos locked.", status: "upcoming" },
    { stage: "STAGE 12", name: "Closing Ceremony & Awards", date: "27th OCTOBER, 03:30 PM", desc: "Final stage pitches, prize distribution, and trophy handoff!", status: "upcoming" }
  ];

  return (
    <section id="timeline" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF8E7] border-b-[3px] border-comic-border select-none">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-comic-yellow comic-border rounded-full text-xs font-bangers text-comic-dark mb-2 comic-shadow-sm">
            <Calendar className="w-3.5 h-3.5" />
            SCHEDULE OF EVENTS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bangers text-comic-dark tracking-wide">
            THE 12-STAGE COMIC ROADMAP
          </h2>
          <p className="mt-2 text-base sm:text-lg font-hand font-bold text-zinc-600">
            From registration launch to the grand podium finish at NIT Raipur.
          </p>
        </div>

        {/* Timeline Grid (2 Columns of 6 Stages each) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stages.map((item, idx) => {
            const isCompleted = item.status === "completed";
            const isActive = item.status === "active";

            return (
              <div
                key={idx}
                onMouseEnter={() => {
                  playSound("blip");
                  setActiveStage(idx);
                }}
                className={`relative p-5 rounded-2xl comic-border transition-all duration-200 ${
                  isActive
                    ? "bg-[#FFF3D6] comic-shadow-yellow ring-2 ring-comic-dark -translate-y-1"
                    : isCompleted
                    ? "bg-[#E8F8F0] comic-shadow-sm"
                    : "bg-white hover:comic-shadow hover:-translate-y-0.5"
                }`}
              >
                {/* Stage Header */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2.5 py-0.5 rounded-md font-mono text-xs font-bold comic-border ${
                    isActive
                      ? "bg-comic-yellow text-comic-dark"
                      : isCompleted
                      ? "bg-comic-green text-comic-dark"
                      : "bg-zinc-100 text-zinc-600"
                  }`}>
                    {item.stage}
                  </span>

                  <div className="flex items-center gap-1 text-xs font-mono font-bold text-comic-pink-hot">
                    <Clock className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bangers text-comic-dark tracking-wide">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-xs font-comic text-zinc-600 mt-1 leading-relaxed">
                  {item.desc}
                </p>

                {/* Status Indicator */}
                <div className="mt-3 pt-2 border-t border-zinc-200 flex items-center justify-between text-[11px] font-mono">
                  <span className="font-hand font-bold text-zinc-500">
                    {isCompleted ? "Completed" : isActive ? "Currently Active 🔥" : "Scheduled"}
                  </span>
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-comic-green" />
                  ) : isActive ? (
                    <Sparkles className="w-4 h-4 text-comic-orange animate-spin-slow" />
                  ) : (
                    <Circle className="w-3.5 h-3.5 text-zinc-300" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
