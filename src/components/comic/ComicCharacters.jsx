import React from "react";

// Bit - The Ponpon-Style Developer Sheep
export function SheepBit({ 
  size = 180, 
  expression = "happy", 
  hasHeadphones = true, 
  holdingKeyboard = false,
  className = "",
  onClick = () => {}
}) {
  return (
    <div 
      onClick={onClick}
      className={`relative inline-block cursor-pointer select-none transition-transform hover:scale-105 active:scale-95 ${className}`}
      style={{ width: size, height: size * 1.1 }}
    >
      <svg 
        viewBox="0 0 200 220" 
        className="w-full h-full drop-shadow-[0_4px_0_rgba(24,24,27,0.2)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fleece Fluff Head Silhouette */}
        <path 
          d="M60 45 C45 30, 25 50, 30 70 C15 85, 20 110, 40 120 C35 140, 60 155, 80 150 C100 160, 130 155, 145 140 C165 145, 185 125, 175 105 C190 85, 175 60, 155 55 C150 35, 125 25, 105 35 C85 20, 65 30, 60 45 Z" 
          fill="#FFFDF7" 
          stroke="#18181B" 
          strokeWidth="4" 
          strokeLinejoin="round" 
        />

        {/* Ears */}
        {/* Left Ear */}
        <path 
          d="M38 75 C10 60, 8 95, 36 90 Z" 
          fill="#FFA6C9" 
          stroke="#18181B" 
          strokeWidth="4" 
          strokeLinejoin="round" 
        />
        {/* Right Ear */}
        <path 
          d="M162 75 C190 60, 192 95, 164 90 Z" 
          fill="#FFA6C9" 
          stroke="#18181B" 
          strokeWidth="4" 
          strokeLinejoin="round" 
        />

        {/* Face Base */}
        <path 
          d="M50 85 C50 60, 150 60, 150 85 C150 125, 130 145, 100 145 C70 145, 50 125, 50 85 Z" 
          fill="#FFF0DB" 
          stroke="#18181B" 
          strokeWidth="4" 
          strokeLinejoin="round" 
        />

        {/* Eyes based on expression */}
        {expression === "happy" && (
          <>
            <path d="M72 88 C76 83, 84 83, 88 88" stroke="#18181B" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M112 88 C116 83, 124 83, 128 88" stroke="#18181B" strokeWidth="4.5" strokeLinecap="round" />
          </>
        )}
        {expression === "coding" && (
          <>
            {/* Focused glowing eyes */}
            <circle cx="80" cy="86" r="5" fill="#18181B" />
            <circle cx="82" cy="84" r="1.5" fill="#FFF" />
            <circle cx="120" cy="86" r="5" fill="#18181B" />
            <circle cx="122" cy="84" r="1.5" fill="#FFF" />
          </>
        )}
        {expression === "surprised" && (
          <>
            <circle cx="80" cy="85" r="7" fill="#18181B" />
            <circle cx="82" cy="83" r="2.5" fill="#FFF" />
            <circle cx="120" cy="85" r="7" fill="#18181B" />
            <circle cx="122" cy="83" r="2.5" fill="#FFF" />
          </>
        )}

        {/* Cute Blush */}
        <ellipse cx="66" cy="98" rx="7" ry="4" fill="#FFA6C9" opacity="0.8" />
        <ellipse cx="134" cy="98" rx="7" ry="4" fill="#FFA6C9" opacity="0.8" />

        {/* Nose & Mouth */}
        <path d="M96 98 L104 98 L100 104 Z" fill="#18181B" />
        <path d="M100 104 L100 112" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />
        <path d="M90 112 C95 120, 100 115, 100 112 C100 115, 105 120, 110 112" stroke="#18181B" strokeWidth="3.5" strokeLinecap="round" />

        {/* Body / Hoodie */}
        <path 
          d="M58 145 C45 160, 40 190, 42 215 L158 215 C160 190, 155 160, 142 145 C125 155, 75 155, 58 145 Z" 
          fill="#FFFDF7" 
          stroke="#18181B" 
          strokeWidth="4" 
        />
        
        {/* Hoodie Neck Collar */}
        <path d="M75 148 C90 162, 110 162, 125 148" stroke="#18181B" strokeWidth="4" fill="none" />
        <circle cx="100" cy="170" r="14" fill="#FF9820" stroke="#18181B" strokeWidth="3" />
        <text x="94" y="175" fontSize="12" fontWeight="bold" fontFamily="monospace" fill="#18181B">&lt;/&gt;</text>

        {/* Oversized DJ / Coder Headphones */}
        {hasHeadphones && (
          <g>
            {/* Headband */}
            <path 
              d="M32 80 C30 20, 170 20, 168 80" 
              stroke="#FF528F" 
              strokeWidth="10" 
              strokeLinecap="round" 
              fill="none" 
            />
            <path 
              d="M32 80 C30 20, 170 20, 168 80" 
              stroke="#18181B" 
              strokeWidth="4" 
              strokeLinecap="round" 
              fill="none" 
            />
            {/* Left Ear Cushion */}
            <rect x="22" y="70" width="18" height="34" rx="9" fill="#FFD028" stroke="#18181B" strokeWidth="4" />
            {/* Right Ear Cushion */}
            <rect x="160" y="70" width="18" height="34" rx="9" fill="#FFD028" stroke="#18181B" strokeWidth="4" />
          </g>
        )}

        {/* Mechanical Keyboard In Hand */}
        {holdingKeyboard && (
          <g transform="translate(45, 175)">
            <rect x="0" y="0" width="110" height="36" rx="6" fill="#2958FF" stroke="#18181B" strokeWidth="3.5" />
            <rect x="8" y="6" width="94" height="24" rx="3" fill="#FFFDF7" stroke="#18181B" strokeWidth="2" />
            {/* Key switches */}
            <circle cx="20" cy="18" r="4" fill="#FF528F" />
            <circle cx="35" cy="18" r="4" fill="#FFD028" />
            <circle cx="50" cy="18" r="4" fill="#48D17E" />
            <circle cx="65" cy="18" r="4" fill="#FF9820" />
            <rect x="76" y="14" width="20" height="8" rx="2" fill="#18181B" />
          </g>
        )}
      </svg>
    </div>
  );
}

// Byte - The Veteran Dino Hacker
export function DinoByte({ 
  size = 180, 
  holdingCoffee = true, 
  className = "",
  onClick = () => {}
}) {
  return (
    <div 
      onClick={onClick}
      className={`relative inline-block cursor-pointer select-none transition-transform hover:scale-105 active:scale-95 ${className}`}
      style={{ width: size, height: size * 1.15 }}
    >
      <svg 
        viewBox="0 0 200 230" 
        className="w-full h-full drop-shadow-[0_4px_0_rgba(24,24,27,0.2)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tail */}
        <path d="M30 190 C10 185, 0 160, 5 140 C15 150, 35 160, 45 170 Z" fill="#48D17E" stroke="#18181B" strokeWidth="4" />

        {/* Dino Body */}
        <path 
          d="M50 120 C50 70, 90 40, 140 40 C175 40, 190 65, 185 95 C180 125, 150 140, 140 145 C150 170, 160 200, 150 220 L55 220 C45 200, 45 160, 50 120 Z" 
          fill="#48D17E" 
          stroke="#18181B" 
          strokeWidth="4" 
          strokeLinejoin="round" 
        />

        {/* Yellow Belly Patch */}
        <path 
          d="M80 145 C110 145, 130 170, 130 220 L75 220 C65 195, 68 165, 80 145 Z" 
          fill="#FFD028" 
          stroke="#18181B" 
          strokeWidth="3.5" 
        />

        {/* Dino Eye */}
        <ellipse cx="140" cy="65" rx="10" ry="12" fill="#FFFDF7" stroke="#18181B" strokeWidth="4" />
        <circle cx="143" cy="65" r="4.5" fill="#18181B" />
        <circle cx="145" cy="63" r="1.5" fill="#FFF" />
        {/* Chill Eyebrow */}
        <path d="M130 52 C138 48, 148 50, 154 55" stroke="#18181B" strokeWidth="4" strokeLinecap="round" />

        {/* Snout & Cute Nostril */}
        <circle cx="178" cy="85" r="2.5" fill="#18181B" />

        {/* Big Happy Dino Smile with Sharp Comic Teeth */}
        <path 
          d="M185 95 C170 120, 130 125, 110 115" 
          stroke="#18181B" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        {/* Teeth */}
        <polygon points="172,98 178,108 166,106" fill="#FFFDF7" stroke="#18181B" strokeWidth="2.5" />
        <polygon points="156,104 162,114 150,111" fill="#FFFDF7" stroke="#18181B" strokeWidth="2.5" />
        <polygon points="140,109 145,117 134,114" fill="#FFFDF7" stroke="#18181B" strokeWidth="2.5" />

        {/* Cute Horn Spikes on Back */}
        <polygon points="80,48 70,30 90,42" fill="#FFA6C9" stroke="#18181B" strokeWidth="3" />
        <polygon points="60,65 48,50 68,60" fill="#FFA6C9" stroke="#18181B" strokeWidth="3" />
        <polygon points="48,95 35,82 52,90" fill="#FFA6C9" stroke="#18181B" strokeWidth="3" />

        {/* Dino Hands & Coffee Cup */}
        {holdingCoffee ? (
          <g transform="translate(100, 130)">
            {/* Coffee Mug */}
            <rect x="15" y="10" width="32" height="40" rx="4" fill="#FF528F" stroke="#18181B" strokeWidth="3.5" />
            <path d="M47 20 C58 20, 58 35, 47 35" stroke="#18181B" strokeWidth="3.5" fill="none" />
            <text x="20" y="32" fontSize="10" fontWeight="bold" fontFamily="sans-serif" fill="#FFF">C++</text>
            
            {/* Steam waves */}
            <path d="M22 4 C24 0, 20 -4, 23 -8" stroke="#18181B" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
            <path d="M32 4 C34 0, 30 -4, 33 -8" stroke="#18181B" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
            
            {/* Dino Claws Holding Cup */}
            <ellipse cx="14" cy="28" rx="8" ry="6" fill="#48D17E" stroke="#18181B" strokeWidth="3" />
          </g>
        ) : (
          <g>
            <ellipse cx="115" cy="140" rx="10" ry="7" fill="#48D17E" stroke="#18181B" strokeWidth="3.5" />
          </g>
        )}
      </svg>
    </div>
  );
}

// Pixel / Wolf - The Sharp QA Bug Hunter
export function WolfPixel({ 
  size = 180, 
  holdingSoda = true,
  className = "",
  onClick = () => {}
}) {
  return (
    <div 
      onClick={onClick}
      className={`relative inline-block cursor-pointer select-none transition-transform hover:scale-105 active:scale-95 ${className}`}
      style={{ width: size, height: size * 1.1 }}
    >
      <svg 
        viewBox="0 0 200 220" 
        className="w-full h-full drop-shadow-[0_4px_0_rgba(24,24,27,0.2)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wolf Ears */}
        <polygon points="50,70 30,25 75,55" fill="#8E8D9B" stroke="#18181B" strokeWidth="4" strokeLinejoin="round" />
        <polygon points="45,60 38,38 62,54" fill="#FFA6C9" stroke="#18181B" strokeWidth="2" />
        
        <polygon points="125,55 170,25 150,70" fill="#8E8D9B" stroke="#18181B" strokeWidth="4" strokeLinejoin="round" />
        <polygon points="138,54 162,38 155,60" fill="#FFA6C9" stroke="#18181B" strokeWidth="2" />

        {/* Head & Big Snout */}
        <path 
          d="M50 80 C40 100, 30 140, 20 150 C50 165, 80 150, 100 140 C120 150, 150 165, 180 150 C170 140, 160 100, 150 80 C130 60, 70 60, 50 80 Z" 
          fill="#A5A3B3" 
          stroke="#18181B" 
          strokeWidth="4" 
          strokeLinejoin="round" 
        />

        {/* Big Goofy Snout Area */}
        <ellipse cx="100" cy="120" rx="35" ry="24" fill="#D7D5E2" stroke="#18181B" strokeWidth="3.5" />
        {/* Black Nose */}
        <ellipse cx="100" cy="108" rx="12" ry="8" fill="#18181B" />

        {/* Goofy Wide Open Grin */}
        <path 
          d="M75 125 C85 145, 115 145, 125 125" 
          stroke="#18181B" 
          strokeWidth="4" 
          strokeLinecap="round" 
          fill="#801020" 
        />
        {/* Gold Tooth */}
        <rect x="86" y="125" width="6" height="8" rx="2" fill="#FFD028" stroke="#18181B" strokeWidth="2" />

        {/* Expressive Eyes */}
        <ellipse cx="70" cy="88" rx="7" ry="9" fill="#FFFDF7" stroke="#18181B" strokeWidth="3.5" />
        <circle cx="72" cy="88" r="3.5" fill="#18181B" />
        
        <ellipse cx="130" cy="88" rx="7" ry="9" fill="#FFFDF7" stroke="#18181B" strokeWidth="3.5" />
        <circle cx="128" cy="88" r="3.5" fill="#18181B" />

        {/* Body */}
        <path 
          d="M55 155 C45 175, 45 205, 48 220 L152 220 C155 205, 155 175, 145 155 Z" 
          fill="#8E8D9B" 
          stroke="#18181B" 
          strokeWidth="4" 
        />

        {/* Tray with Soda & Energy Drink */}
        {holdingSoda && (
          <g transform="translate(45, 155)">
            <rect x="0" y="20" width="110" height="8" rx="4" fill="#18181B" />
            {/* Can 1 - Red Bull / Energy */}
            <rect x="15" y="-5" width="22" height="25" rx="3" fill="#2958FF" stroke="#18181B" strokeWidth="2.5" />
            <path d="M19 2 L33 13" stroke="#FFD028" strokeWidth="2.5" />
            
            {/* Can 2 - Soda */}
            <rect x="44" y="-12" width="24" height="32" rx="3" fill="#FF528F" stroke="#18181B" strokeWidth="2.5" />
            <circle cx="56" cy="4" r="5" fill="#FFD028" />

            {/* Mug 3 - Root Beer */}
            <rect x="74" y="-8" width="24" height="28" rx="3" fill="#FF9820" stroke="#18181B" strokeWidth="2.5" />
            <path d="M74 -8 Q86 -14 98 -8" fill="#FFFDF7" stroke="#18181B" strokeWidth="2" />
          </g>
        )}
      </svg>
    </div>
  );
}

// Iconic NIT Raipur Red-Brick Clock Tower Cartoon Vector
export function NitRaipurTower({ className = "", size = 260 }) {
  return (
    <div className={`relative inline-block select-none ${className}`} style={{ width: size, height: size * 0.9 }}>
      <svg 
        viewBox="0 0 300 270" 
        className="w-full h-full drop-shadow-[0_8px_0_rgba(24,24,27,0.15)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Base Red Brick Building */}
        <rect x="20" y="130" width="260" height="120" rx="8" fill="#C0392B" stroke="#18181B" strokeWidth="4" />
        
        {/* White Trim / Architecture Highlights */}
        <rect x="15" y="125" width="270" height="10" rx="3" fill="#FFFDF7" stroke="#18181B" strokeWidth="3" />
        <rect x="15" y="245" width="270" height="12" rx="2" fill="#FFFDF7" stroke="#18181B" strokeWidth="3.5" />

        {/* Central Iconic Clock Tower Pillar */}
        <rect x="110" y="40" width="80" height="95" rx="6" fill="#A93226" stroke="#18181B" strokeWidth="4" />
        
        {/* Tower Dome Roof */}
        <path d="M100 42 L150 10 L200 42 Z" fill="#FFD028" stroke="#18181B" strokeWidth="4" strokeLinejoin="round" />
        <line x1="150" y1="10" x2="150" y2="0" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />
        <polygon points="150,0 165,4 150,8" fill="#FF528F" stroke="#18181B" strokeWidth="1.5" />

        {/* Clock Face */}
        <circle cx="150" cy="70" r="18" fill="#FFFDF7" stroke="#18181B" strokeWidth="3.5" />
        <line x1="150" y1="70" x2="150" y2="58" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />
        <line x1="150" y1="70" x2="160" y2="70" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />
        <circle cx="150" cy="70" r="2.5" fill="#18181B" />

        {/* Campus Windows Grid */}
        <g fill="#FFD028" stroke="#18181B" strokeWidth="2.5">
          {/* Left Wing Windows */}
          <rect x="35" y="150" width="18" height="26" rx="3" />
          <rect x="65" y="150" width="18" height="26" rx="3" />
          <rect x="35" y="195" width="18" height="26" rx="3" />
          <rect x="65" y="195" width="18" height="26" rx="3" />

          {/* Right Wing Windows */}
          <rect x="215" y="150" width="18" height="26" rx="3" />
          <rect x="245" y="150" width="18" height="26" rx="3" />
          <rect x="215" y="195" width="18" height="26" rx="3" />
          <rect x="245" y="195" width="18" height="26" rx="3" />
        </g>

        {/* Grand Entrance Pillars */}
        <rect x="120" y="175" width="60" height="72" rx="4" fill="#78281F" stroke="#18181B" strokeWidth="3.5" />
        <rect x="130" y="190" width="16" height="57" fill="#18181B" />
        <rect x="154" y="190" width="16" height="57" fill="#18181B" />

        {/* NIT RAIPUR Banner Plate */}
        <g transform="translate(100, 140)">
          <rect x="0" y="0" width="100" height="24" rx="4" fill="#FFD028" stroke="#18181B" strokeWidth="3" />
          <text x="50" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="sans-serif" fill="#18181B">
            NIT RAIPUR
          </text>
        </g>

        {/* Turing Club (TCP) Flag */}
        <g transform="translate(210, 85)">
          <line x1="0" y1="0" x2="0" y2="40" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />
          <path d="M0 0 L40 10 L0 20 Z" fill="#2958FF" stroke="#18181B" strokeWidth="2.5" />
          <text x="8" y="13" fontSize="8" fontWeight="bold" fill="#FFF">TCP</text>
        </g>
      </svg>
    </div>
  );
}

// Comic Floating Action SFX Sticker
export function ComicSfxSticker({ text = "POW!", color = "yellow", className = "", style = {} }) {
  const bgColors = {
    yellow: "bg-comic-yellow text-comic-dark",
    pink: "bg-comic-pink-hot text-white",
    blue: "bg-comic-blue text-white",
    orange: "bg-comic-orange text-comic-dark",
    green: "bg-comic-green text-comic-dark",
  };

  return (
    <div 
      style={style}
      className={`inline-block select-none font-bangers tracking-wider px-3 py-1 text-sm md:text-base uppercase comic-border rounded-lg comic-shadow-sm rotate-[-4deg] hover:rotate-3 transition-transform ${bgColors[color] || bgColors.yellow} ${className}`}
    >
      {text}
    </div>
  );
}

// Spinning Interactive Stamp Badge
export function ComicStampBadge({ text = "CODEUTSAVA 10.0 • NIT RAIPUR • 2026", size = 110, className = "" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg 
        viewBox="0 0 120 120" 
        className="w-full h-full animate-spin-slow"
      >
        <path 
          id="stampCirclePath" 
          d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" 
          fill="none" 
        />
        <text className="text-[9px] font-mono font-bold fill-comic-dark uppercase tracking-[2.8px]">
          <textPath href="#stampCirclePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      {/* Center Star / Code Icon */}
      <div className="absolute w-10 h-10 rounded-full bg-comic-pink-hot comic-border flex items-center justify-center text-white font-bangers text-sm comic-shadow-sm">
        10.0
      </div>
    </div>
  );
}
