import React from "react";
import { X, Heart, Code2, Sparkles, Trophy, MapPin } from "lucide-react";
import { playSound } from "../../utils/audioEngine";
import { SheepBit, DinoByte, WolfPixel } from "./ComicCharacters";

export default function AboutComicModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-comic-dark/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFFDF7] comic-border-thick rounded-3xl comic-shadow-lg p-6 md:p-8">
        
        {/* Close Button */}
        <button
          onClick={() => {
            playSound("pop");
            onClose();
          }}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-comic-pink-light comic-border flex items-center justify-center hover:bg-comic-pink-hot hover:text-white transition-all comic-shadow-sm active:scale-90 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-comic-yellow comic-border rounded-full text-xs font-bangers text-comic-dark mb-2 comic-shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            THE STORY BEHIND CODE COMIC
          </div>
          <h2 className="text-3xl md:text-4xl font-bangers tracking-wide text-comic-dark">
            ABOUT CODEUTSAVA 10.0
          </h2>
          <p className="text-sm font-hand text-zinc-600 font-bold mt-1">
            Where Pop-Art Web Comics meet Central India's biggest 36-Hour Hackathon!
          </p>
        </div>

        {/* Narrative Box */}
        <div className="bg-[#FFF8E7] p-4 rounded-2xl comic-border mb-6 text-sm font-comic text-zinc-700 leading-relaxed space-y-3">
          <p>
            Welcome to the <strong>10th Edition of CodeUtsava</strong>, organized with pride by the <strong>Turing Club of Programmers (TCP)</strong> at the <strong>National Institute of Technology (NIT) Raipur</strong>!
          </p>
          <p>
            Inspired by the iconic pop-art and digital storytelling of <em>Ponpon Mania</em>, this year’s theme merges the high-octane thrill of competitive hackathons with animated comic strips. Every commit is an action panel, every bug is a supervillain, and every developer is a superhero crafting the future.
          </p>
        </div>

        {/* Character Roster */}
        <h3 className="font-bangers text-xl text-comic-dark mb-3 flex items-center gap-2">
          <Code2 className="w-5 h-5 text-comic-pink-hot" />
          MEET THE CODE COMIC HEROES
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {/* Bit */}
          <div className="bg-white p-3 rounded-xl comic-border text-center flex flex-col items-center">
            <SheepBit size={90} expression="happy" />
            <h4 className="font-bangers text-base text-comic-dark mt-2">BIT THE SHEEP</h4>
            <p className="text-[11px] text-zinc-500 font-comic">The ambitious frontend dev with big headphones and mechanical switches.</p>
          </div>

          {/* Byte */}
          <div className="bg-white p-3 rounded-xl comic-border text-center flex flex-col items-center">
            <DinoByte size={90} />
            <h4 className="font-bangers text-base text-comic-dark mt-2">BYTE THE DINO</h4>
            <p className="text-[11px] text-zinc-500 font-comic">The calm senior backend architect fueled by C++ and cold brews.</p>
          </div>

          {/* Pixel */}
          <div className="bg-white p-3 rounded-xl comic-border text-center flex flex-col items-center">
            <WolfPixel size={90} />
            <h4 className="font-bangers text-base text-comic-dark mt-2">PIXEL THE WOLF</h4>
            <p className="text-[11px] text-zinc-500 font-comic">The hyperactive QA specialist who catches race conditions at 3 AM.</p>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-3 gap-2 bg-comic-dark text-white p-3 rounded-2xl comic-border text-center mb-6">
          <div>
            <div className="text-xl font-bangers text-comic-yellow">₹5,00,000+</div>
            <div className="text-[10px] font-mono text-zinc-400">PRIZE POOL</div>
          </div>
          <div>
            <div className="text-xl font-bangers text-comic-pink">36 HOURS</div>
            <div className="text-[10px] font-mono text-zinc-400">NON-STOP HACK</div>
          </div>
          <div>
            <div className="text-xl font-bangers text-comic-green">NIT RAIPUR</div>
            <div className="text-[10px] font-mono text-zinc-400">CENTRAL INDIA</div>
          </div>
        </div>

        {/* Footer Credit */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pt-3 border-t border-zinc-200">
          <span className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 fill-comic-pink-hot text-comic-pink-hot" /> by TCP Tech Team
          </span>
          <span className="flex items-center gap-1 font-bold text-comic-dark">
            <MapPin className="w-3.5 h-3.5 text-comic-orange" /> Raipur, Chhattisgarh
          </span>
        </div>

      </div>
    </div>
  );
}
