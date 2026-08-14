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

export default function LandingPage({ 
  onPlayIntro, 
  isMusicPlaying, 
  toggleMusic 
}) {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#FFFDF7] text-comic-dark overflow-x-hidden font-comic select-none animate-[fadeIn_0.5s_ease-out]">
      
      {/* Navigation Bar */}
      <ComicNavbar
        onPlayIntro={onPlayIntro}
        onRegisterClick={() => setIsRegisterModalOpen(true)}
        isMusicPlaying={isMusicPlaying}
        toggleMusic={toggleMusic}
      />

      {/* Hero Section with Live Countdown */}
      <HeroSection
        onPlayIntro={onPlayIntro}
        onRegisterClick={() => setIsRegisterModalOpen(true)}
      />

      {/* About NIT Raipur & TCP */}
      <AboutSection />

      {/* Problem Tracks */}
      <TracksSection />

      {/* Prizes, Loot & Perks */}
      <PrizesSection />

      {/* 12-Stage Timeline Roadmap */}
      <TimelineSection />

      {/* Sponsors & Partners */}
      <SponsorsSection />

      {/* Hackathon Rules & Guidelines */}
      <GuidelinesSection />

      {/* FAQs */}
      <FaqSection />

      {/* Footer & Contacts Table */}
      <ComicFooter
        onPlayIntro={onPlayIntro}
        onRegisterClick={() => setIsRegisterModalOpen(true)}
      />

      {/* Registration Application Modal */}
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />

    </div>
  );
}
