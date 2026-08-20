import { AboutSection } from "@/components/sections/about-section";
import { AnalyticsSection } from "@/components/sections/analytics-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { GuidelinesSection } from "@/components/sections/guidelines-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PrizesSection } from "@/components/sections/prizes-section";
import { ShortlistedTeamsSection } from "@/components/sections/shortlisted-teams-section";
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TimelineSection } from "@/components/sections/timeline-section";

export default function Home() {
    return (
        <main id="main-content" className="flex-1">
            <HeroSection />
            <StatsSection />
            <AboutSection />
            <SponsorsSection />
            <TimelineSection />
            <GuidelinesSection />
            <PrizesSection />
            <AnalyticsSection />
            <ShortlistedTeamsSection />
            <FaqSection />
            <FinalCtaSection />
        </main>
    );
}
