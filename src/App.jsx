import React, { useState, useEffect } from "react";
import ComicIntroCover from "./components/comic/ComicIntroCover";
import ComicReader from "./components/comic/ComicReader";
import ComicAudioPlayer from "./components/comic/ComicAudioPlayer";
import ChaptersModal from "./components/comic/ChaptersModal";
import AboutComicModal from "./components/comic/AboutComicModal";
import LandingPage from "./components/landing/LandingPage";
import { getAudioContext, playSound } from "./utils/audioEngine";

export default function App() {
  const [view, setView] = useState("cover"); // "cover", "reader", "landing"
  const [currentChapter, setCurrentChapter] = useState(1);
  const [isChaptersModalOpen, setIsChaptersModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);

  // Browser History Navigation Support
  useEffect(() => {
    window.history.replaceState({ view: "cover", chapter: 1 }, "", "");

    const handlePopState = (event) => {
      if (event.state && event.state.view) {
        setView(event.state.view);
        if (event.state.chapter) {
          setCurrentChapter(event.state.chapter);
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateToView = (newView, chapter = 1) => {
    setView(newView);
    setCurrentChapter(chapter);
    window.history.pushState({ view: newView, chapter }, "", "");
  };

  return (
    <div className="w-full min-h-screen bg-comic-paper text-comic-dark overflow-x-hidden relative font-comic selection:bg-comic-pink-hot selection:text-white">
      
      {/* Global Lo-Fi Audio Player Pill */}
      <ComicAudioPlayer
        isMusicPlaying={isMusicPlaying}
        toggleMusic={(state) => setIsMusicPlaying(state)}
      />

      {/* Chapters Overlay Modal */}
      <ChaptersModal
        isOpen={isChaptersModalOpen}
        onClose={() => setIsChaptersModalOpen(false)}
        currentChapter={currentChapter}
        onSelectChapter={(chapId) => {
          navigateToView("reader", chapId);
        }}
      />

      {/* About Code Comic Modal */}
      <AboutComicModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />

      {/* Primary View Switcher */}
      {view === "cover" ? (
        <ComicIntroCover
          onStartReading={() => navigateToView("reader", 1)}
          onEnterLanding={() => navigateToView("landing")}
          onOpenChapters={() => setIsChaptersModalOpen(true)}
          onOpenAbout={() => setIsAboutModalOpen(true)}
          isMusicPlaying={isMusicPlaying}
          toggleMusic={() => setIsMusicPlaying(!isMusicPlaying)}
        />
      ) : view === "reader" ? (
        <ComicReader
          currentChapter={currentChapter}
          onChapterChange={(newChap) => navigateToView("reader", newChap)}
          onEnterLanding={() => navigateToView("landing")}
          onOpenChapters={() => setIsChaptersModalOpen(true)}
          onOpenAbout={() => setIsAboutModalOpen(true)}
          onBackToCover={() => navigateToView("cover")}
        />
      ) : (
        <LandingPage
          onPlayIntro={() => navigateToView("cover")}
          isMusicPlaying={isMusicPlaying}
          toggleMusic={() => setIsMusicPlaying(!isMusicPlaying)}
        />
      )}

    </div>
  );
}
