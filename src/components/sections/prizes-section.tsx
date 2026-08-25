import sponsorStyles from "@/components/sponsor-section/SponsorSection.module.css";
import styles from "./prizes-section.module.css";

const sharedRewards = [
  "To be announced",
] as const;

const prizeCards = [
  {
    signal: "01 // GOLD",
    rank: "🥇",
    title: "Winner's",
    award:
      "A monetary prize of Rs. 50,000 and 2.5 lakhs worth of prizes will be presented to the winning team.",
    rewards: sharedRewards,
  },
  {
    signal: "02 // SILVER",
    rank: "🥈",
    title: "Runner-Up's",
    award:
      "A monetary prize of Rs. 40,000 and 2.4 lakhs worth of prizes will be presented to the 1st runner ups.",
    rewards: sharedRewards,
  },
  {
    signal: "03 // BRONZE",
    rank: "🥉",
    title: "2nd Runner-Up's",
    award:
      "A monetary prize of Rs. 30,000 and 2.4 lakhs worth of prizes will be presented to the 2nd runner ups.",
    rewards: sharedRewards,
  },
  {
    signal: "04 // DOMAIN",
    rank: "◆",
    title: "Problem Statement Winner's",
    award:
      "The category-wise winning teams will be awarded 1.95 lakhs worth of prizes in total, with Rs. 15,000 in cash to each team.",
    rewards: [
      "To be announced",
    ],
  },
  {
    signal: "05 // WEB3",
    rank: "⬡",
    title: "Best Hack on Ethereum + Polygon",
    award: "The winning team will be awarded Rs. 16,000 in cash.",
    rewards: [
      "To be announced",
    ],
  },
  {
    signal: "06 // ALL ACCESS",
    rank: "✦",
    title: "For All Participants!",
    award: "Every participant unlocks the following partner perks and rewards.",
    rewards: [
      "To be announced",
    ],
  },
] as const;

export function PrizesSection() {
  return (
    <section className={styles.prizes} id="prizes" aria-labelledby="prizes-title">
      <div className={sponsorStyles.backgroundGrid} aria-hidden="true" />
      <div className={sponsorStyles.filmGrain} aria-hidden="true" />
      <div className={sponsorStyles.glitchBursts} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className={`${sponsorStyles.heading} ${styles.heading}`}>
        <h2 id="prizes-title" data-text="PRIZES">
          PRIZES
        </h2>
      </div>

      <div className={styles.prizeFrame}>
        <div className={styles.transmissionHeader}>
          <p>WIN EXCITING PRIZES WORTH UP TO</p>
          <strong>40,00,000</strong>
          <span>REWARD POOL // UNLOCKED</span>
        </div>

        <div className={styles.grid}>
          {prizeCards.map((prize, index) => (
            <article className={styles.card} key={prize.signal}>
              <div className={styles.cardScanline} aria-hidden="true" />
              <div className={styles.cardMeta}>
                <span>{prize.signal}</span>
                <span>{String(index + 1).padStart(2, "0")} / 06</span>
              </div>

              <span className={styles.rank} aria-hidden="true">
                {prize.rank}
              </span>
              <h3>{prize.title}</h3>
              <p className={styles.award}>{prize.award}</p>

              {prize.rewards.length > 0 && (
                <ul>
                  {prize.rewards.map((reward) => (
                    <li key={reward}>{reward}</li>
                  ))}
                </ul>
              )}

              <span className={styles.cardCorner} aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className={styles.footerSignal} aria-hidden="true">
          <span>PRIZE MATRIX // CODEUTSAVA 9.0 ARCHIVE</span>
          <span>TRANSMISSION COMPLETE</span>
        </div>
      </div>
    </section>
  );
}
