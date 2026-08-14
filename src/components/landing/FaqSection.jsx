import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageSquare, Sparkles, Zap } from "lucide-react";
import { playSound } from "../../utils/audioEngine";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "HOW DO I REGISTER FOR THE HACKATHON?",
      a: "Click on any 'Register Now' or 'Apply with Devfolio' button across the website to submit your application on Devfolio. Fill in your team members' details, skills, and portfolio links."
    },
    {
      q: "WHAT IS THE PARTICIPATION FEE?",
      a: "CodeUtsava 10.0 is 100% FREE! Just bring your enthusiasm, coding skills, and hunger to learn. We do not charge a single rupee."
    },
    {
      q: "WHAT IF I DON'T HAVE A TEAM OR IDEA YET?",
      a: "No worries! We host dedicated online team-building and ideation sessions on our Discord server before the hackathon. You can connect with fellow participants and team up."
    },
    {
      q: "WHO IS ELIGIBLE TO PARTICIPATE?",
      a: "Undergraduate and postgraduate students from any recognized university or college across India are eligible to apply. Inter-branch teams from the same college are welcome!"
    },
    {
      q: "WHEN AND HOW WILL TEAMS BE SHORTLISTED?",
      a: "Shortlisting commences on 5th October based on applicant GitHub/Devfolio profiles, past projects, and concept notes. Final teams will be notified via email and WhatsApp on 21st October."
    },
    {
      q: "WHAT IS THE IDEAL TEAM SIZE?",
      a: "Teams must consist of 2 to 4 members, including 1 designated Team Leader."
    },
    {
      q: "WHAT PERKS & TRAVEL REIMBURSEMENTS ARE PROVIDED?",
      a: "NIT Raipur will be providing free hostel accommodation, all meals, snacks, swags, and travel reimbursements up to ₹1,500 per individual upon presenting valid train or bus tickets."
    },
    {
      q: "HOW WILL THE TEAMS BE JUDGED?",
      a: "Projects will be judged on technical complexity, innovative creativity, real-world feasibility, UI/UX polish, and final pitch presentation by a panel of industry leaders and NIT Raipur faculty."
    },
    {
      q: "IS HARDWARE PROTOTYPING ALLOWED?",
      a: "Yes! CodeUtsava 10.0 features a dedicated Hardware Edition track. Teams can bring and build with microcontrollers, Arduino/ESP32 boards, sensors, and robotics kits."
    },
    {
      q: "WHAT IS THE CODE OF CONDUCT?",
      a: "To ensure an inclusive, positive, and fair experience for all, CodeUtsava follows the standard SIH & Major League Hacking (MLH) code of conduct. Harassment or plagiarism will result in disqualification."
    }
  ];

  const handleToggle = (index) => {
    playSound("pop");
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#FF8C1E] border-b-[4px] border-comic-border select-none">
      
      {/* Spider-Verse Dot Screens */}
      <div className="absolute inset-0 bg-spider-dots opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-screentone-diagonal opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Caption Box */}
        <div className="flex justify-start mb-6">
          <div className="comic-caption-box text-sm sm:text-base">
            <span>FREQUENTLY ASKED INTEL & ANSWERS...</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl sm:text-6xl font-bangers text-[#18181B] tracking-wide spider-glitch-text">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-2 text-base sm:text-xl font-hand font-bold text-zinc-900">
            Everything you need to know about CodeUtsava 10.0, registrations, and logistics.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl comic-border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#FFE600] comic-shadow ring-2 ring-[#18181B]"
                    : "bg-[#FFFDF7] hover:bg-white comic-shadow-sm"
                }`}
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bangers text-lg sm:text-xl text-comic-dark tracking-wide"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#18181B] text-[#FFE600] text-xs flex items-center justify-center shrink-0 comic-border">
                      Q{idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-white comic-border flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#FF2A7A] text-white" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm font-comic text-zinc-900 leading-relaxed border-t border-comic-border/20">
                    <div className="bg-white p-4 rounded-xl comic-border">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-8 p-4 bg-[#FFFDF7] rounded-2xl comic-border text-center flex flex-col sm:flex-row items-center justify-between gap-3 comic-shadow">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#FF2A7A]" />
            <span className="font-comic font-bold text-xs sm:text-sm text-comic-dark">
              Still have doubts? Reach out to our manager team directly in WhatsApp or Discord!
            </span>
          </div>
          <a
            href="#contact"
            onClick={() => playSound("blip")}
            className="px-5 py-2 bg-[#18181B] text-[#FFE600] font-bangers text-sm rounded-full comic-border hover:bg-[#FF2A7A] hover:text-white transition-all comic-btn"
          >
            CONTACT MANAGERS
          </a>
        </div>

      </div>

    </section>
  );
}
