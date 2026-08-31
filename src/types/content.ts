export type ContentStatus = "published" | "to-be-announced";

export interface Statistic {
    id: string;
    label: string;
    value: string;
    description: string;
    status: ContentStatus;
}

export interface Event {
    id: string;
    slug: string;
    title: string;
    summary: string;
    description: string;
    category: string;
    format: string;
    venue: string;
    date: string;
    time: string;
    registrationUrl: string | null;
    status: ContentStatus;
}

export interface TimelineItem {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    status: ContentStatus;
}

export interface Sponsor {
    id: string;
    name: string;
    tier: string;
    logoSrc: string | null;
    website: string | null;
    status: ContentStatus;
}

export interface Prize {
    id: string;
    title: string;
    amount: string;
    description: string;
    status: ContentStatus;
}

export interface FaqItem {
    id: string;
    question: string;
    answer: string;
    status: ContentStatus;
}

export interface SocialLink {
    label: string;
    href: string;
    platform?: "instagram" | "linkedin" | "github" | "source";
}

export type TeamGroup =
    | "overall-coordinator"
    | "domain-lead"
    | "head-coordinator"
    | "manager"
    | "executive";

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    group: TeamGroup;
    team?: string;
    bio?: string;
    imageSrc: string | null;
    socialLinks: readonly SocialLink[];
    status: ContentStatus;
}

export interface ShortlistedTeam {
    id: string;
    name: string;
    project: string;
    track: string;
    status: ContentStatus;
}
