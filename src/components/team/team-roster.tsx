import Image from 'next/image';
import { ExternalLink, UserRound } from 'lucide-react';
import { teamMembers } from '@/data/team';
import type { TeamMember } from '@/types/content';
import styles from './TeamPage.module.css';

const placeholderSlots = [
  'Core committee',
  'Technical team',
  'Design team',
  'Events team',
  'Outreach team',
  'Operations team',
] as const;

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <article className={styles.memberCard} aria-labelledby={`${member.id}-name`}>
      <div className={styles.photoFrame}>
        {member.imageSrc ? (
          <Image
            src={member.imageSrc}
            alt={`${member.name}, ${member.role}`}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
            className={styles.memberPhoto}
          />
        ) : (
          <div className={styles.photoPlaceholder} aria-hidden="true">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <UserRound size={54} strokeWidth={1} />
          </div>
        )}
        <span className={styles.photoStatus}>{member.status === 'published' ? 'PROFILE ONLINE' : 'PHOTO PENDING'}</span>
      </div>

      <div className={styles.memberBody}>
        <p className={styles.memberTeam}>{member.team ?? 'Organizing team'}</p>
        <h3 id={`${member.id}-name`}>{member.name}</h3>
        <p className={styles.memberRole}>{member.role}</p>
        {member.bio ? <p className={styles.memberBio}>{member.bio}</p> : null}

        {member.socialLinks.length > 0 ? (
          <ul className={styles.socialLinks} aria-label={`${member.name} social links`}>
            {member.socialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}<ExternalLink aria-hidden="true" size={13} />
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

function PlaceholderCard({ label, index }: { label: string; index: number }) {
  return (
    <article className={`${styles.memberCard} ${styles.placeholderCard}`} aria-label={`${label} profile placeholder`}>
      <div className={styles.photoFrame}>
        <div className={styles.photoPlaceholder} aria-hidden="true">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <UserRound size={54} strokeWidth={1} />
        </div>
        <span className={styles.photoStatus}>PHOTO PENDING</span>
      </div>

      <div className={styles.memberBody}>
        <p className={styles.memberTeam}>{label}</p>
        <h3>Profile incoming</h3>
        <p className={styles.memberRole}>Name, role and links ready to sync</p>
      </div>
    </article>
  );
}

export function TeamRoster() {
  const hasPublishedRoster = teamMembers.length > 0;

  return (
    <section id="team-roster" className={styles.rosterSection} aria-labelledby="team-roster-title">
      <div className={styles.rosterGridBackdrop} aria-hidden="true" />

      <div className={styles.rosterContent}>
        <header className={styles.rosterIntro}>
          <div>
            <p className={styles.kicker}>PEOPLE // ROSTER DIRECTORY</p>
            <h2 id="team-roster-title">THE CREW</h2>
          </div>
          <p>
            Profiles will populate this directory as soon as the verified team list, photographs and social links are available.
          </p>
        </header>

        <div className={styles.departmentRail} aria-label="Planned team departments">
          {placeholderSlots.map((department, index) => (
            <span key={department}><i>{String(index + 1).padStart(2, '0')}</i>{department}</span>
          ))}
        </div>

        <ul className={styles.rosterGrid}>
          {hasPublishedRoster
            ? teamMembers.map((member, index) => (
                <li key={member.id}><MemberCard member={member} index={index} /></li>
              ))
            : placeholderSlots.map((label, index) => (
                <li key={label}><PlaceholderCard label={label} index={index} /></li>
              ))}
        </ul>

        <aside className={styles.dataNote}>
          <span>IMPLEMENTATION NOTE</span>
          <p>Add confirmed profiles to <code>src/data/team.ts</code>. Image, team, role, bio and social-link fields are already supported.</p>
        </aside>
      </div>
    </section>
  );
}
