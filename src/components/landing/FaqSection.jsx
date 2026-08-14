import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageSquare, Sparkles } from "lucide-react";
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
    <section id="faqs" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7] border-b-[3px] border-comic-border select-none">
      
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-comic-yellow comic-border rounded-full text-xs font-bangers text-comic-dark mb-2 comic-shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bangers text-comic-dark tracking-wide">
            HAVE QUESTIONS? WE'VE GOT ANSWERS!
          </h2>
          <p className="mt-2 text-base sm:text-lg font-hand font-bold text-zinc-600">
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
                    ? "bg-[#FFF3D6] comic-shadow"
                    : "bg-white hover:bg-zinc-50 comic-shadow-sm"
                }`}
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bangers text-lg sm:text-xl text-comic-dark tracking-wide"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-comic-yellow comic-border text-xs flex items-center justify-center shrink-0">
                      Q{idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-white comic-border flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-comic-pink-hot text-white" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm font-comic text-zinc-700 leading-relaxed border-t border-comic-border/20">
                    <div className="bg-white/80 p-3.5 rounded-xl comic-border">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-8 p-4 bg-[#FFE5EF] rounded-2xl comic-border text-center flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-comic-pink-hot" />
            <span className="font-comic font-bold text-xs sm:text-sm text-comic-dark">
              Still have doubts? Reach out to our manager team directly in WhatsApp or Discord!
            </span>
          </div>
          <a
            href="#contact"
            onClick={() => playSound("blip")}
            className="px-4 py-1.5 bg-comic-dark text-white font-bangers text-sm rounded-full comic-border hover:bg-comic-pink-hot transition-all"
          >
            CONTACT MANAGERS
          </a>
        </div>

      </div>

    </section>
  );
}
