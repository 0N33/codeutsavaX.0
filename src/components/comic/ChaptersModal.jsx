import React from "react";
import { X, BookOpen, Sparkles, ChevronRight } from "lucide-react";
import { playSound } from "../../utils/audioEngine";

export const CHAPTERS_LIST = [
  {
    id: 1,
    title: "Chapter 01",
    subtitle: "The 404 Anomaly & The Invitation",
    tagline: "Late night coding in the dorm — an encrypted ping from NIT Raipur arrives.",
    color: "#FF9820",
    themeClass: "border-comic-orange",
    badge: "01",
    summary: "Bit is wrestling with an elusive syntax bug when his terminal receives an encrypted dispatch: You have been shortlisted for CodeUtsava 10.0!"
  },
  {
    id: 2,
    title: "Chapter 02",
    subtitle: "The TCP Lab & The Squad Assembly",
    tagline: "Stepping into NIT Raipur — meeting Byte the Dino and Pixel the QA Wolf.",
    color: "#FF528F",
    themeClass: "border-comic-pink-hot",
    badge: "02",
    summary: "Under the shadow of NIT Raipur's iconic red-brick clock tower, Bit unites with senior architect Byte and lightning bug-hunter Pixel."
  },
  {
    id: 3,
    title: "Chapter 03",
    subtitle: "36-Hour Sprint & The Boss Bug",
    tagline: "Inside CCC at 3:00 AM — coffee fuels the ultimate terminal showdown.",
    color: "#2958FF",
    themeClass: "border-comic-blue",
    badge: "03",
    summary: "Red Bull cans pile up as an ominous TypeError threatens the build. With 10 minutes on the clock, the team launches an all-out debug assault."
  },
  {
    id: 4,
    title: "Chapter 04",
    subtitle: "Victory & The Hackathon Arena",
    tagline: "Pitching on the grand stage — ₹5,00,000+ prizes unlocked!",
    color: "#48D17E",
    themeClass: "border-comic-green",
    badge: "04",
    summary: "Confetti bursts across NIT Raipur! The judges award the golden trophy and the doors to the CodeUtsava 10.0 arena swing wide open."
  }
];

export default function ChaptersModal({ isOpen, onClose, currentChapter, onSelectChapter }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-comic-dark/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
      <div className="relative w-full max-w-2xl bg-[#FFFDF7] comic-border-thick rounded-3xl comic-shadow-lg p-6 md:p-8 overflow-hidden">
        
        {/* Halftone Top Banner Accent */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-comic-orange bg-halftone-dark opacity-30 border-b-2 border-comic-border" />

        {/* Modal Header */}
        <div className="flex items-center justify-between mt-2 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-comic-yellow comic-border flex items-center justify-center comic-shadow-sm">
              <BookOpen className="w-5 h-5 text-comic-dark" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bangers tracking-wide text-comic-dark">
                COMIC CHAPTERS
              </h2>
              <p className="text-xs md:text-sm font-hand text-zinc-600 font-bold">
                Select an issue to jump straight into the story!
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playSound("pop");
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-comic-pink-light comic-border flex items-center justify-center hover:bg-comic-pink-hot hover:text-white transition-all comic-shadow-sm active:scale-90"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chapters Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
          {CHAPTERS_LIST.map((chap) => {
            const isSelected = currentChapter === chap.id;
            return (
              <div
                key={chap.id}
                onClick={() => {
                  playSound("pageTurn");
                  onSelectChapter(chap.id);
                  onClose();
                }}
                className={`group relative p-4 rounded-2xl comic-border cursor-pointer transition-all duration-200 ${
                  isSelected 
                    ? "bg-[#FFF3D6] comic-shadow-yellow ring-2 ring-comic-dark -translate-y-1" 
                    : "bg-white hover:-translate-y-1 hover:comic-shadow"
                }`}
              >
                {/* Chapter Number Badge */}
                <div 
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md comic-border text-xs font-bangers text-white mb-2 shadow-sm"
                  style={{ backgroundColor: chap.color }}
                >
                  <Sparkles className="w-3 h-3" />
                  ISSUE #{chap.badge}
                </div>

                <h3 className="font-bangers text-lg text-comic-dark tracking-wide group-hover:text-comic-blue transition-colors">
                  {chap.subtitle}
                </h3>

                <p className="text-xs font-comic text-zinc-600 mt-1 line-clamp-2 leading-relaxed">
                  {chap.tagline}
                </p>

                <div className="flex items-center justify-between mt-3 pt-2 border-t border-zinc-200 text-xs font-bold text-comic-dark">
                  <span className="font-hand text-sm text-zinc-500">
                    {isSelected ? "Currently Reading" : "Read Issue"}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-zinc-100 group-hover:bg-comic-yellow comic-border flex items-center justify-center transition-colors">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-6 pt-3 border-t-2 border-dashed border-zinc-300 flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>CODEUTSAVA 10.0 • NIT RAIPUR</span>
          <span className="font-hand font-bold text-comic-pink-hot">TURING CLUB OF PROGRAMMERS</span>
        </div>

      </div>
    </div>
  );
}
