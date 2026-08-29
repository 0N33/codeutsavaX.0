import type { Metadata } from 'next';
import { ArrowDown, Database, Radio, UsersRound } from 'lucide-react';
import { BackgroundVideo } from '@/components/layout/BackgroundVideo';
import { Navbar } from '@/components/navbar/Navbar';
import { SiteFooter } from '@/components/footer/SiteFooter';
import { TeamRoster } from '@/components/team/team-roster';
import styles from '@/components/team/TeamPage.module.css';

export const metadata: Metadata = {
  title: 'Team - Codeutsava X.0',
  description: 'Meet the organizers building Codeutsava X.0 at NIT Raipur.',
};

const teamSignals = [
  { label: 'Edition', value: 'X.0', icon: Radio },
  { label: 'Collective', value: 'TCP, NIT Raipur', icon: UsersRound },
  { label: 'Roster status', value: 'Sync pending', icon: Database },
] as const;

export default function TeamPage() {
  return (
    <>
      <BackgroundVideo />

      <div className={styles.pageShell}>
        <Navbar variant="back-to-home" />

        <main className={styles.main} id="main-content">
          <section className={styles.hero} aria-labelledby="team-page-title">
            <div className={styles.heroGrid} aria-hidden="true" />
            <div className={styles.heroGlow} aria-hidden="true" />

            <div className={styles.heroFrame}>
              <span className={styles.frameCorner} aria-hidden="true" />
              <span className={styles.frameCorner} aria-hidden="true" />
              <span className={styles.frameCorner} aria-hidden="true" />
              <span className={styles.frameCorner} aria-hidden="true" />

              <div className={styles.frameHeader} aria-hidden="true">
                <span>DIRECTORY // ORGANIZING COLLECTIVE</span>
                <span className={styles.onlineStatus}><i /> CHANNEL OPEN</span>
              </div>

              <div className={styles.heroContent}>
                <div className={styles.heroCopy}>
                  <p className={styles.kicker}>THE MINDS BEHIND THE BUILD</p>
                  <h1 id="team-page-title" data-text="MEET THE TEAM">MEET THE TEAM</h1>
                  <p>
                    Codeutsava is built by a multidisciplinary crew of developers, designers, coordinators and community builders from the Turing Club of Programmers.
                  </p>
                  <p>
                    The directory is ready for the confirmed roster. Once member information and photos are collected, every profile can be published directly from the team data file.
                  </p>

                  <a className={styles.rosterLink} href="#team-roster">
                    <span>OPEN ROSTER</span>
                    <ArrowDown aria-hidden="true" size={18} strokeWidth={1.8} />
                  </a>
                </div>

                <aside className={styles.signalPanel} aria-label="Team directory status">
                  <div className={styles.signalPanelHeader}>
                    <span>TEAM_SIGNAL.LOG</span>
                    <span>03 CHANNELS</span>
                  </div>

                  <dl>
                    {teamSignals.map(({ label, value, icon: Icon }, index) => (
                      <div key={label}>
                        <dt><Icon aria-hidden="true" size={18} strokeWidth={1.6} /> {label}</dt>
                        <dd><span>{String(index + 1).padStart(2, '0')}</span>{value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className={styles.signalTrack} aria-hidden="true"><i /></div>
                  <p>DATA SCHEMA READY // AWAITING VERIFIED PROFILES</p>
                </aside>
              </div>

              <div className={styles.frameFooter} aria-hidden="true">
                <span>PEOPLE // PROCESS // PROGRAM</span>
                <span>CU-X.0</span>
              </div>
            </div>
          </section>

          <TeamRoster />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
