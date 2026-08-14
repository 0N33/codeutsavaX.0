import React, { useState } from "react";
import ComicNavbar from "./ComicNavbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import TracksSection from "./TracksSection";
import PrizesSection from "./PrizesSection";
import TimelineSection from "./TimelineSection";
import SponsorsSection from "./SponsorsSection";
import GuidelinesSection from "./GuidelinesSection";
import FaqSection from "./FaqSection";
import ComicFooter from "./ComicFooter";
import RegisterModal from "./RegisterModal";
import { MultiverseComicStrip, SpiderActionBurst } from "../comic/SpiderVerseActionStrips";
import { playSound } from "../../utils/audioEngine";

export default function LandingPage({ 
  onPlayIntro, 
  isMusicPlaying, 
  toggleMusic 
}) {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#FFA033] text-comic-dark overflow-x-hidden font-comic select-none animate-[fadeIn_0.5s_ease-out]">
      
      {/* Navigation Bar */}
      <ComicNavbar
        onPlayIntro={onPlayIntro}
        onRegisterClick={() => setIsRegisterModalOpen(true)}
        isMusicPlaying={isMusicPlaying}
        toggleMusic={toggleMusic}
      />

      {/* Hero Section with Live Countdown & Spider-Verse Strip */}
      <HeroSection
        onPlayIntro={onPlayIntro}
        onRegisterClick={() => setIsRegisterModalOpen(true)}
      />

      {/* Interactive 4-Panel Multiverse Comic Strip Carousel (Ponpon Mania + Spider-Verse Reference) */}
      <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#FF8C1E] border-b-[4px] border-comic-border">
        <div className="absolute inset-0 bg-spider-dots opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto mb-6 flex justify-between items-center">
          <div className="comic-caption-box text-sm sm:text-base">
            <span>THE 10.0 MULTIVERSE CHRONICLES...</span>
          </div>
          <SpiderActionBurst 
            text="WRACK!" 
            subtext="HIT FOR SFX"
            onClick={() => playSound("kapow")}
            className="hidden sm:inline-block"
          />
        </div>
        <MultiverseComicStrip />
      </section>

      {/* About NIT Raipur & TCP Origin Comic Strip */}
      <AboutSection />

      {/* Problem Tracks Collectible Issues */}
      <TracksSection />

      {/* Prizes, Loot & Perks Splash Page */}
      <PrizesSection />

      {/* 12-Stage Timeline Comic Issue Strip */}
      <TimelineSection />

      {/* Sponsors & Industry Allies */}
      <SponsorsSection />

      {/* Hackathon Rules & Code of Conduct */}
      <GuidelinesSection />

      {/* FAQs Intel */}
      <FaqSection />

      {/* Footer & Contacts Table */}
      <ComicFooter
        onPlayIntro={onPlayIntro}
        onRegisterClick={() => setIsRegisterModalOpen(true)}
        isMusicPlaying={isMusicPlaying}
        toggleMusic={toggleMusic}
      />

      {/* Registration Application Modal */}
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />

    </div>
  );
}
