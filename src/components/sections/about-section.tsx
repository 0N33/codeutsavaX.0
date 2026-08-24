import Image from 'next/image';
import styles from './EventSections.module.css';

export function AboutSection() {
  return (
    <section
      className={`${styles.sections} ${styles.faq} ${styles.aboutSection}`}
      id='about'
      aria-labelledby='about-title'
    >
      <div className={`${styles.faqPanel} ${styles.aboutPanel}`}>
        <div className={styles.aboutScrim} aria-hidden='true' />

        <div className={styles.aboutPanelContent}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLogoStage}>
              <span className={styles.aboutLogoIndex} aria-hidden='true'>
                TCP // 01
              </span>
              <div className={styles.aboutLogoFrame}>
                <Image
                  src='/images/codeutsava/tcp-logo.png'
                  alt='Turing Club of Programmers logo'
                  width={520}
                  height={520}
                  className={styles.aboutLogo}
                />
              </div>
              <p>TURING CLUB OF PROGRAMMERS</p>
            </div>

            <div className={styles.aboutCopy}>
              <h2 id='about-title'>About Us</h2>

              <div className={styles.aboutBody}>
                <p>
                  Codeutsava is the Turing Club of Programmers&apos; annual gathering for coders across the nation,
                  created to foster a thriving culture of building, learning and collaboration.
                </p>
                <p>
                  At its heart is a <strong>28-hour hackathon</strong> where participants turn ambitious ideas into
                  working solutions. Workshops, MIC sessions, mentorship, gaming battles and community showcases
                  keep the experience moving beyond the build. This year&apos;s edition features a 33&nbsp;L+ prize pool,
                  including 1.5–2&nbsp;L cash prizes.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
