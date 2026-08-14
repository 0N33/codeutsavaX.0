import React, { useState } from "react";
import { BookOpen, Menu, X, ExternalLink, Sparkles, Volume2, VolumeX, MessageSquare } from "lucide-react";
import { playSound } from "../../utils/audioEngine";
import tcpLogoOfficial from "../../assets/tcp_logo_official.png";

export default function ComicNavbar({ 
  onPlayIntro, 
  onRegisterClick,
  isMusicPlaying,
  toggleMusic
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Prizes", href: "#prizes" },
    { name: "Timeline", href: "#timeline" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Guidelines", href: "#guidelines" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    playSound("blip");
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#FFFDF7]/95 backdrop-blur-md border-b-[3px] border-comic-border select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              onClick={() => playSound("pop")}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-comic-yellow comic-border flex items-center justify-center comic-shadow-sm group-hover:rotate-6 transition-transform">
                <img src={tcpLogoOfficial} alt="TCP Logo" className="w-7 h-7 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bangers text-2xl sm:text-3xl text-comic-dark leading-none tracking-wide">
                  CODEUTSAVA <span className="text-comic-pink-hot">10.0</span>
                </span>
                <span className="text-[10px] font-mono font-bold text-zinc-500 tracking-wider">
                  TCP • NIT RAIPUR
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-bangers text-lg text-zinc-700 hover:text-comic-pink-hot tracking-wide hover:-translate-y-0.5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* "Read Comic" Button */}
            <button
              onClick={() => {
                playSound("pageTurn");
                onPlayIntro();
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#FFF3D6] text-comic-dark font-bangers text-base rounded-full comic-border comic-shadow-sm hover:comic-shadow comic-btn"
              title="Launch the Interactive Code Comic Reader"
            >
              <BookOpen className="w-4 h-4 text-comic-orange" />
              <span>READ COMIC</span>
            </button>

            {/* Register on Devfolio Button */}
            <button
              onClick={() => {
                playSound("pop");
                onRegisterClick();
              }}
              className="flex items-center gap-1.5 px-5 py-2 bg-comic-yellow text-comic-dark font-bangers text-base rounded-full comic-border comic-shadow hover:comic-shadow-pink comic-btn group"
            >
              <Sparkles className="w-4 h-4 text-comic-pink-hot group-hover:rotate-45 transition-transform" />
              <span>REGISTER NOW</span>
            </button>

          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => {
                playSound("pop");
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="p-2 rounded-xl bg-comic-yellow comic-border text-comic-dark comic-shadow-sm active:scale-95"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF7] border-t-2 border-comic-border px-4 pt-3 pb-6 space-y-3 animate-[panelPop_0.2s_ease-out]">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-bangers text-lg text-comic-dark p-2 bg-white rounded-xl comic-border text-center hover:bg-comic-yellow transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-zinc-200">
            <button
              onClick={() => {
                playSound("pageTurn");
                setIsMobileMenuOpen(false);
                onPlayIntro();
              }}
              className="w-full py-2.5 bg-[#FFF3D6] text-comic-dark font-bangers text-lg rounded-xl comic-border flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-comic-orange" />
              <span>READ INTRO COMIC</span>
            </button>

            <button
              onClick={() => {
                playSound("pop");
                setIsMobileMenuOpen(false);
                onRegisterClick();
              }}
              className="w-full py-3 bg-comic-yellow text-comic-dark font-bangers text-lg rounded-xl comic-border comic-shadow flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-comic-pink-hot" />
              <span>REGISTER FOR CODEUTSAVA 10.0</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
