import type { Metadata } from 'next';
import { ArrowDown } from 'lucide-react';
import { BackgroundVideo } from '@/components/layout/BackgroundVideo';
import { Navbar } from '@/components/navbar/Navbar';
import { SiteFooter } from '@/components/footer/SiteFooter';
import { TeamRoster } from '@/components/team/team-roster';
import { fetchTeamMembers } from '@/lib/team-api';
import styles from '@/components/team/TeamPage.module.css';

export const metadata: Metadata = {
  title: 'Team TCP 2026 - Codeutsava X.0',
  description: 'Meet the Turing Club of Programmers team organizing Codeutsava X.0 in 2026.',
};

export const revalidate = 60;

export default async function TeamPage() {
  const members = await fetchTeamMembers(2026);

  return (
    <>
      <BackgroundVideo />

      <div className={styles.pageShell}>
        <Navbar variant="back-to-home" />

        <main className={styles.main} id="main-content">
          <section className={styles.masthead} aria-labelledby="team-page-title">
            <div className={styles.gridBackdrop} aria-hidden="true" />
            <div className={styles.mastheadGlow} aria-hidden="true" />

            <div className={styles.mastheadFrame}>
              <div className={styles.mastheadContent}>
                <p className={styles.kicker}>TURING CLUB OF PROGRAMMERS // NIT RAIPUR</p>

                <div className={styles.titleViewport}>
                  <span className={styles.titleScanlines} aria-hidden="true" />
                  <span className={`${styles.titleGlitchBand} ${styles.titleGlitchBandTop}`} aria-hidden="true" />
                  <span className={`${styles.titleGlitchBand} ${styles.titleGlitchBandBottom}`} aria-hidden="true" />

                  <h1 id="team-page-title" className={styles.teamTitle} aria-label="Team TCP 2026">
                    <span className={styles.teamTitleMain} data-text="TEAM TCP">TEAM TCP</span>
                    <span className={styles.teamTitleYear} data-text="2026">2026</span>
                  </h1>
                </div>

                <p className={styles.mastheadCopy}>
                  The coordinators, managers and executives engineering the tenth edition of Codeutsava.
                </p>

                <a className={styles.directoryLink} href="#team-roster">
                  <span>ENTER DIRECTORY</span>
                  <ArrowDown aria-hidden="true" size={18} strokeWidth={1.8} />
                </a>
              </div>

            </div>
          </section>

          <TeamRoster members={members} />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
