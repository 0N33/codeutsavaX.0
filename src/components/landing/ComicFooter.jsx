import React from "react";
import { playSound } from "../../utils/audioEngine";
import tcpLogoOfficial from "../../assets/tcp_logo_official.png";
import { Volume2, VolumeX, MapPin, ArrowUp, Sparkles, Heart } from "lucide-react";

export default function ComicFooter({ 
  onPlayIntro, 
  onRegisterClick,
  isMusicPlaying = true,
  toggleMusic = () => {}
}) {
  const menuItems = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "SPONSORS", href: "#sponsors" },
    { name: "TIMELINE", href: "#timeline" },
    { name: "RULES", href: "#guidelines" },
    { name: "PRIZES", href: "#prizes" },
    { name: "FAQS", href: "#faqs" },
    { name: "CONTACT", href: "#contact" }
  ];

  const socialLinks = [
    { name: "FB", url: "https://www.facebook.com/codeutsava/", color: "hover:bg-[#1877F2]" },
    { name: "IG", url: "https://www.instagram.com/codeutsavanitrr/", color: "hover:bg-[#FF2A7A]" },
    { name: "GH", url: "https://github.com/TCP-Tech", color: "hover:bg-[#333]" },
    { name: "TW", url: "https://twitter.com/codeutsavanitrr", color: "hover:bg-[#1DA1F2]" },
    { name: "LN", url: "https://www.linkedin.com/company/codeutsava/", color: "hover:bg-[#0A66C2]" },
    { name: "DC", url: "https://discord.com/invite/sxfvDKhEgQ", color: "hover:bg-[#5865F2]" }
  ];

  const scrollToTop = () => {
    playSound("pop");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#121214] text-white border-t-[4px] border-comic-border pt-12 pb-8 px-4 sm:px-8 md:px-12 select-none font-comic">
      
      {/* Spider-Verse Halftone Overlay */}
      <div className="absolute inset-0 bg-spider-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Content Row: Logos | About NIT Raipur Box | Socials & Nav */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b-2 border-dashed border-zinc-700 items-center">
          
          {/* Left Column: Official Branding (3.5 Cols) */}
          <div className="lg:col-span-3 flex items-center gap-3">
            {/* Comic Logo Badge */}
            <div className="w-12 h-12 rounded-2xl bg-[#FFE600] comic-border flex items-center justify-center comic-shadow-sm shrink-0">
              <img src={tcpLogoOfficial} alt="TCP" className="w-8 h-8 object-contain" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 font-bangers text-2xl tracking-wide text-white">
                <span>CODEUTSAVA</span>
                <span className="text-[#FF2A7A]">10.0</span>
              </div>
              <span className="text-[11px] font-mono font-bold text-[#FFE600] tracking-wider uppercase">
                TURING CLUB OF PROGRAMMERS
              </span>
              <span className="text-[10px] font-mono text-zinc-400">
                NIT RAIPUR
              </span>
            </div>
          </div>

          {/* Center Column: ABOUT NIT RAIPUR Comic Panel Box (5.5 Cols) */}
          <div className="lg:col-span-5 bg-[#1B1B1F] border-[3px] border-[#18181B] p-4 sm:p-5 rounded-2xl comic-shadow flex gap-4 items-center">
            
            {/* NIT Raipur Emblem Vector Graphic */}
            <div className="shrink-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-[#27272A] comic-border flex items-center justify-center p-1.5 shadow-sm">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Outer Cogwheel Teeth */}
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#FFE600" strokeWidth="4" strokeDasharray="10,6" />
                  <circle cx="50" cy="50" r="38" fill="#18181B" stroke="#FFF" strokeWidth="2" />
                  
                  {/* Quad Sectors */}
                  <path d="M50 14 A36 36 0 0 1 86 50 L50 50 Z" fill="#2958FF" />
                  <path d="M86 50 A36 36 0 0 1 50 86 L50 50 Z" fill="#FFE600" />
                  <path d="M50 86 A36 36 0 0 1 14 50 L50 50 Z" fill="#FF2A7A" />
                  <path d="M14 50 A36 36 0 0 1 50 14 L50 50 Z" fill="#26DE81" />
                  
                  {/* Center Sun Hub */}
                  <circle cx="50" cy="50" r="14" fill="#18181B" stroke="#FFF" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="8" fill="#FF7A00" />
                </svg>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-1">
              <h5 className="font-bangers text-base sm:text-lg text-[#FFE600] tracking-wide">
                ABOUT NIT RAIPUR
              </h5>
              <p className="text-xs font-comic text-zinc-300 leading-relaxed">
                The Institute is dedicated to advancing technical education by producing skilled graduates in engineering and technology. For nearly five decades, we've pursued this mission with sincerity and commitment at NIT Raipur.
              </p>
            </div>
          </div>

          {/* Right Column: Social buttons & Navigation links (3.5 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-3 lg:items-end">
            
            <div className="space-y-1.5 lg:text-right">
              {/* Comic Box Social Buttons */}
              <div className="flex gap-2 lg:justify-end flex-wrap">
                {socialLinks.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => playSound("blip")}
                    onClick={() => playSound("thwip")}
                    className={`w-8 h-8 rounded-lg bg-[#27272A] comic-border flex items-center justify-center font-bangers text-xs text-white ${soc.color} transition-all comic-shadow-sm hover:-translate-y-0.5 active:translate-y-0.5 cursor-pointer`}
                  >
                    {soc.name}
                  </a>
                ))}
              </div>
              <p className="text-[11px] font-hand font-bold text-zinc-400 uppercase tracking-wider">
                FOR MORE UPDATES, FOLLOW US ON ALL SOCIAL MEDIA.
              </p>
            </div>

            {/* Navigation Menu Links */}
            <div className="flex flex-wrap gap-x-3 gap-y-1 lg:justify-end text-xs font-bangers tracking-wider text-zinc-300">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => playSound("blip")}
                  onClick={(e) => {
                    playSound("pop");
                    if (item.name === "HOME") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="hover:text-[#FFE600] transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Status Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          
          {/* Creator Credit */}
          <div className="flex items-center gap-1">
            <span>ARCHITECTED WITH</span>
            <Heart className="w-3.5 h-3.5 fill-[#FF2A7A] text-[#FF2A7A] inline-block animate-pulse" />
            <span>BY</span>
            <span className="text-[#FFE600] font-bold font-bangers text-sm ml-0.5 tracking-wider">PiBie</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-bangers text-sm text-zinc-200 hover:text-[#FFE600] transition-colors cursor-pointer select-none tracking-wider group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>

          {/* Location & Sound Controls */}
          <div className="flex items-center gap-4">
            <a
              href="https://maps.google.com/?q=NIT+Raipur"
              target="_blank"
              rel="noreferrer"
              onClick={() => playSound("blip")}
              className="text-zinc-300 hover:text-[#FFE600] transition-colors flex items-center gap-1.5 font-mono text-xs"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FF2A7A]" />
              <span>VIEW MAP LOCATION</span>
            </a>

            {/* Sound Toggle Button */}
            <button
              onClick={() => {
                playSound("pop");
                toggleMusic();
              }}
              className={`w-8 h-8 rounded-full comic-border flex items-center justify-center transition-all comic-shadow-sm active:scale-95 cursor-pointer ${
                isMusicPlaying ? "bg-[#FFE600] text-[#18181B]" : "bg-[#27272A] text-zinc-400"
              }`}
              title={isMusicPlaying ? "Mute Background Music" : "Play Background Music"}
            >
              {isMusicPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
}
