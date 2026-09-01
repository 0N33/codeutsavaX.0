"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { GlitchButton } from "@/components/ui/glitch-button";
import { CyberSpaceshipGame } from "./CyberSpaceshipGame";
import { CyberDinoGame } from "./CyberDinoGame";
import { CyberBrickBreaker } from "./CyberBrickBreaker";
import styles from "./GlitchverseHero.module.css";

const registrationUrl = "https://codeutsava-x.devfolio.co/overview";

type GameType = "breaker" | "spaceship" | "dino";

export function GlitchverseHero() {
  const [isGameMode, setIsGameMode] = useState<boolean>(false);
  const [activeGame, setActiveGame] = useState<GameType>("breaker");
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

  // Android & Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const isMobile =
        window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobileDevice(isMobile);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const togglePower = useCallback(() => {
    setIsGameMode((prev) => {
      const next = !prev;
      // Synthesize power switch tone
      try {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(next ? 440 : 880, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(next ? 880 : 220, ctx.currentTime + 0.12);
          gain.gain.setValueAtTime(0.15, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 0.15);
        }
      } catch {
        // Audio fallback
      }
      return next;
    });
  }, []);

  const toggleGameType = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    if (!isGameMode) return; // Inactive before powering on monitor!

    setActiveGame((prev) => {
      if (prev === "breaker") return "spaceship";
      if (prev === "spaceship") return "dino";
      return "breaker";
    });

    // Synthesize game switch tone
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.05);
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.2);
      }
    } catch {}
  }, [isGameMode]);

  const getNextGameName = () => {
    if (activeGame === "breaker") return "SPACESHIP";
    if (activeGame === "spaceship") return "DINO RUNNER";
    return "BALL BREAKER";
  };

  return (
    <main className={styles.hero} id="top">
      <div className={styles.ambientLight} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      <section className={styles.heroStage} aria-labelledby="hero-title">
        <p className={styles.eyebrow}>WELCOME TO</p>

        <div className={`${styles.pagerShell} ${isGameMode ? styles.consoleActiveShell : ""}`}>
          <span className={styles.pagerTopRidge} aria-hidden="true">
            <i className={isGameMode ? styles.powerLedActive : ""} />
            <i />
            <i />
          </span>
          <span className={styles.pagerSpeaker} aria-hidden="true"><i /><i /><i /><i /><i /></span>
          
          <div className={styles.pagerControls}>
            {/* 1. SWITCH Button */}
            <button
              type="button"
              className={`${styles.pagerConsoleBtn} ${isGameMode ? styles.pagerSwitchBtnActive : ""}`}
              onClick={toggleGameType}
              onTouchEnd={toggleGameType}
              title={
                !isGameMode
                  ? "Turn on PLAY first to switch games"
                  : `Switch to ${getNextGameName()}`
              }
              aria-label="Switch Game"
            >
              <span>SWITCH</span>
              {isGameMode && (
                <span className={styles.btnTooltip}>
                  [ {getNextGameName()} ]
                </span>
              )}
            </button>

            {/* 2. PLAY / EXIT Button */}
            <button
              type="button"
              className={`${styles.pagerConsoleBtn} ${isGameMode ? styles.pagerPlayBtnActive : ""}`}
              onClick={togglePower}
              title={isGameMode ? "Exit Game Mode" : "Play Cyber Arcade Games"}
              aria-label="Toggle Play Mode"
            >
              <span>{isGameMode ? "EXIT" : "PLAY"}</span>
              <span className={styles.btnTooltip}>
                {isGameMode ? "[ EXIT GAME ]" : "[ LAUNCH GAME ]"}
              </span>
            </button>

            {/* 3. Circular Power Button (Upmost Right Side) */}
            <button
              type="button"
              className={`${styles.pagerConsoleBtn} ${styles.pagerCircleBtn} ${isGameMode ? styles.pagerCircleBtnActive : ""}`}
              onClick={togglePower}
              title={isGameMode ? "Power Off Console" : "Power On Game Console"}
              aria-label="Power Button: Toggle Game Console"
            >
              <span className={styles.btnTooltip}>
                {isGameMode ? "[ PWR: OFF ]" : "[ PWR: ON ]"}
              </span>
            </button>
          </div>

          <div className={styles.pagerViewport}>
            {isGameMode ? (
              activeGame === "breaker" ? (
                <CyberBrickBreaker onClose={() => setIsGameMode(false)} />
              ) : activeGame === "spaceship" ? (
                <CyberSpaceshipGame onClose={() => setIsGameMode(false)} />
              ) : (
                <CyberDinoGame onClose={() => setIsGameMode(false)} />
              )
            ) : (
              <>
                <span className={styles.screenScanlines} aria-hidden="true" />
                <span className={`${styles.screenGlitchBand} ${styles.screenGlitchBandTop}`} aria-hidden="true" />
                <span className={`${styles.screenGlitchBand} ${styles.screenGlitchBandBottom}`} aria-hidden="true" />

                <h1 className={styles.identity} id="hero-title" aria-label="CodeUtsava X point zero, tenth edition">
                  <span className={styles.wordmark} data-text="CODEUTSAVA">CODEUTSAVA</span>
                  <span className={styles.editionCycle} aria-hidden="true">
                    <span className={styles.editionX} data-text="X.0">X.0</span>
                    <span className={styles.editionDas} data-text="दस" lang="hi">दस</span>
                    <span className={styles.editionTen} data-text="10">10</span>
                  </span>
                </h1>
              </>
            )}
          </div>
        </div>

        <p className={styles.tagline}>CODE. INNOVATE. CELEBRATE.</p>
        <p className={styles.eventLine}>CENTRAL INDIA&apos;S LARGEST CODING EVENT&nbsp; // &nbsp;10TH EDITION&nbsp;//&nbsp;3rd-4th OCTOBER 2026</p>

        <div className={styles.heroActions} id="join">
          <GlitchButton
            label="REGISTER NOW"
            onClick={() => window.open(registrationUrl, "_blank", "noopener,noreferrer")}
          />
          <a
            href="https://discord.gg/Ek9gr2Xnqb"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.discordBtn}
            aria-label="Join the CodeUtsava community on Discord"
          >
            <Image src="/images/codeutsava/discord-symbol.svg" alt="Discord" width={24} height={24} />
          </a>
          <GlitchButton
            label="STEPS TO REGISTER"
            variant="secondary"
            onClick={() => {
              const element = document.getElementById("tracks");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </div>
      </section>
    </main>
  );
}
