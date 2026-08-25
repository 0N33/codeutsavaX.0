"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar/Navbar";
import { GlitchButton } from "@/components/ui/glitch-button";
import styles from "./GlitchverseHero.module.css";

const registrationUrl = "https://codeutsava-x.devfolio.co/overview";

export function GlitchverseHero() {
  return (
    <main className={styles.hero} id="top">
      <div className={styles.ambientLight} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />
      <Navbar />

      <section className={styles.heroStage} aria-labelledby="hero-title">
        <p className={styles.eyebrow}>WELCOME TO</p>

        <div className={styles.pagerShell}>
          <span className={styles.pagerTopRidge} aria-hidden="true"><i /><i /><i /></span>
          <span className={styles.pagerSpeaker} aria-hidden="true"><i /><i /><i /><i /><i /></span>
          <span className={styles.pagerControls} aria-hidden="true"><i /><i /></span>

          <div className={styles.pagerViewport}>
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
            <img src="/images/codeutsava/discord-symbol.svg" alt="" />
          </a>
          <GlitchButton
            label="STEPS TO REGISTER"
            variant="secondary"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Registration_Instructions.pdf";
              link.download = "RegistrationInstructions.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          />

        </div>
      </section>

      <div className={styles.bottomRail} aria-hidden="true">
        <span>CODEUTSAVA // X</span>
        <span>BUILD / BREAK / PERCEIVE / REIMAGINE</span>
        <span>BY TURING CLUB OF PROGRAMMERS</span>
      </div>
    </main>
  );
}
