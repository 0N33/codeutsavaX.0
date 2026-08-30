import type { SVGProps } from 'react';
import { ExternalLink, UserRound } from 'lucide-react';
import PixelReveal from '@/components/ui/pixel-reveal';
import type { TeamGroup, TeamMember } from '@/types/content';
import styles from './TeamPage.module.css';

// ─── Icon components ──────────────────────────────────────────────────────────

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.7" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5 3.1a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.1 9h3.8v12H3.1V9Zm6.4 0h3.65v1.64h.05c.51-.96 1.75-1.98 3.61-1.98 3.87 0 4.58 2.54 4.58 5.85V21h-3.8v-5.75c0-1.37-.03-3.14-1.92-3.14-1.92 0-2.21 1.5-2.21 3.04V21H9.5V9Z" />
    </svg>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .8a11.4 11.4 0 0 0-3.6 22.22c.57.1.78-.25.78-.55v-2.14c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.54-.29-5.21-1.27-5.21-5.64 0-1.25.44-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.82 1.18 3.07 0 4.38-2.68 5.34-5.23 5.63.41.36.78 1.06.78 2.13v3.15c0 .3.21.66.79.55A11.4 11.4 0 0 0 12 .8Z" />
    </svg>
  );
}

// ─── Section config ───────────────────────────────────────────────────────────

type TeamSection = {
  id: TeamGroup;
  number: string;
  title: string;
  singularRole: string;
  placeholderCount: number;
  gridClass: string;
  flatLayout: boolean;
};

const teamSections: readonly TeamSection[] = [
  {
    id: 'overall-coordinator',
    number: '01',
    title: 'Overall Coordinators',
    singularRole: 'Overall Coordinator',
    placeholderCount: 1,
    gridClass: styles.featuredGrid,
    flatLayout: true,
  },
  {
    id: 'domain-lead',
    number: '02',
    title: 'Domain Leads',
    singularRole: 'Domain Lead',
    placeholderCount: 2,
    gridClass: styles.headGrid,
    flatLayout: false,
  },
  {
    id: 'head-coordinator',
    number: '03',
    title: 'Head Coordinators',
    singularRole: 'Head Coordinator',
    placeholderCount: 2,
    gridClass: styles.headGrid,
    flatLayout: false,
  },
  {
    id: 'manager',
    number: '04',
    title: 'Managers',
    singularRole: 'Manager',
    placeholderCount: 3,
    gridClass: styles.managerGrid,
    flatLayout: false,
  },
  {
    id: 'executive',
    number: '05',
    title: 'Executives',
    singularRole: 'Executive',
    placeholderCount: 4,
    gridClass: styles.executiveGrid,
    flatLayout: false,
  },
] as const;

const profilePlatforms = [
  { id: 'instagram', label: 'Instagram', icon: InstagramIcon },
  { id: 'linkedin', label: 'LinkedIn', icon: LinkedInIcon },
  { id: 'github', label: 'GitHub', icon: GitHubIcon },
] as const;

// ─── Profile card ─────────────────────────────────────────────────────────────

type ProfileCardProps = {
  member?: TeamMember;
  section: TeamSection;
  index: number;
};

function ProfileCard({ member, section, index }: ProfileCardProps) {
  const slotNumber = String(index + 1).padStart(2, '0');
  const name = member?.name ?? 'Profile incoming';
  const role = member?.role ?? section.singularRole;
  const imageCredit = member?.socialLinks.find((link) => link.platform === 'source');

  const isExecutive = section.id === 'executive';

  return (
    <article
      className={`${styles.memberCard} ${isExecutive ? styles.executiveCard : ''} ${member ? '' : styles.placeholderCard}`}
      aria-labelledby={`${section.id}-${index}-name`}
      tabIndex={0}
    >
      <div className={styles.photoFrame}>
        <div className={styles.photoPlaceholder} aria-hidden="true">
          <span>{section.number}.{slotNumber}</span>
          <UserRound size={isExecutive ? 48 : 64} strokeWidth={0.8} />
          <small>IDENTITY ENCRYPTED</small>
        </div>

        {member?.imageSrc ? (
          <PixelReveal
            imageSrc={member.imageSrc}
            alt={`${member.name}, ${member.role}`}
            gridSize={18}
            edgeHeight={20}
            transitionColor="#9929ea"
            transition={{ type: 'tween', duration: 0.8, ease: 'easeInOut' }}
            direction="down"
            sizes={isExecutive ? "(max-width: 640px) 46vw, 20vw" : "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 25vw"}
            imageClassName={styles.memberPhoto}
            style={{ position: 'absolute', inset: 0, zIndex: 1 }}
          />
        ) : null}

        <div className={styles.photoTint} aria-hidden="true" />
        <span className={styles.photoStatus}>{member?.status === 'published' ? 'PROFILE ONLINE' : 'DATA PENDING'}</span>
      </div>

      <div className={styles.memberBody}>
        <p className={styles.memberTeam}>{member?.team ?? `TCP // ${section.title}`}</p>
        <h3 id={`${section.id}-${index}-name`}>{name}</h3>
        <p className={styles.memberRole}>{role}</p>
        {member?.bio ? <p className={styles.memberBio}>{member.bio}</p> : null}

        <div className={styles.cardFooter}>
          {imageCredit ? (
            <a className={styles.imageCreditLink} href={imageCredit.href} target="_blank" rel="noreferrer">
              {imageCredit.label}<ExternalLink aria-hidden="true" size={11} />
            </a>
          ) : null}

          <div className={styles.profileLinks} aria-label={`${name} profile links`}>
            {profilePlatforms.map(({ id, label, icon: Icon }) => {
              const link = member?.socialLinks.find((item) => {
                if (item.platform) return item.platform === id;
                return item.label.toLowerCase().includes(id);
              });

              return link ? (
                <a
                  key={id}
                  className={styles.profileLink}
                  data-platform={id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member?.name ?? name} on ${label}`}
                  title={`${member?.name ?? name} on ${label}`}
                >
                  <Icon aria-hidden="true" width={22} height={22} />
                </a>
              ) : (
                <span
                  key={id}
                  className={`${styles.profileLink} ${styles.profileLinkUnavailable}`}
                  data-platform={id}
                  aria-label={`${label} profile unavailable`}
                  title={`${label} profile unavailable`}
                >
                  <Icon aria-hidden="true" width={22} height={22} />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── Domain sub-group ─────────────────────────────────────────────────────────

type DomainGroupProps = {
  domain: string;
  members: TeamMember[];
  section: TeamSection;
  indexOffset: number;
};

function DomainGroup({ domain, members, section, indexOffset }: DomainGroupProps) {
  return (
    <div className={styles.domainGroup}>
      <p className={styles.domainLabel}>
        <span className={styles.domainLabelLine} aria-hidden="true" />
        {domain.toUpperCase()}
        <span className={styles.domainLabelLine} aria-hidden="true" />
      </p>
      <ul className={`${styles.memberGrid} ${section.gridClass}`}>
        {members.map((member, i) => (
          <li key={member.id}>
            <ProfileCard member={member} section={section} index={indexOffset + i} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── TeamRoster ───────────────────────────────────────────────────────────────

export type TeamRosterProps = {
  members: readonly TeamMember[];
};

export function TeamRoster({ members }: TeamRosterProps) {
  return (
    <section id="team-roster" className={styles.rosterSection} aria-label="Team directory">
      <div className={styles.gridBackdrop} aria-hidden="true" />

      <div className={styles.rosterContent}>
        <header className={styles.rosterIntro}>
          <p className={styles.kicker}>PEOPLE // COMMAND DIRECTORY</p>
        </header>

        <nav className={styles.sectionRail} aria-label="Team groups">
          {teamSections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              <i>{section.number}</i>{section.title}
            </a>
          ))}
        </nav>

        <div className={styles.teamGroups}>
          {teamSections.map((section) => {
            const sectionMembers = members.filter((m) => m.group === section.id);

            return (
              <section
                key={section.id}
                id={section.id}
                className={styles.teamGroup}
                aria-labelledby={`${section.id}-title`}
              >
                <header className={styles.groupHeader}>
                  <span>{section.number}</span>
                  <div>
                    <p>TEAM NODE // {section.id.replaceAll('-', '_').toUpperCase()}</p>
                    <h3 id={`${section.id}-title`}>{section.title}</h3>
                  </div>
                </header>

                {section.flatLayout || sectionMembers.length === 0 ? (
                  <ul className={`${styles.memberGrid} ${section.gridClass}`}>
                    {Array.from(
                      { length: Math.max(section.placeholderCount, sectionMembers.length) },
                      (_, index) => (
                        <li key={sectionMembers[index]?.id ?? `${section.id}-placeholder-${index}`}>
                          <ProfileCard member={sectionMembers[index]} section={section} index={index} />
                        </li>
                      ),
                    )}
                  </ul>
                ) : (
                  (() => {
                    const domainOrder: string[] = [];
                    const byDomain = new Map<string, TeamMember[]>();

                    for (const member of sectionMembers) {
                      const domain = member.role?.trim() || 'General';
                      if (!byDomain.has(domain)) {
                        byDomain.set(domain, []);
                        domainOrder.push(domain);
                      }
                      byDomain.get(domain)!.push(member);
                    }

                    let offset = 0;
                    return (
                      <div className={styles.domainGroups}>
                        {domainOrder.map((domain) => {
                          const domainMembers = byDomain.get(domain)!;
                          const currentOffset = offset;
                          offset += domainMembers.length;
                          return (
                            <DomainGroup
                              key={domain}
                              domain={domain}
                              members={domainMembers}
                              section={section}
                              indexOffset={currentOffset}
                            />
                          );
                        })}
                      </div>
                    );
                  })()
                )}
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
