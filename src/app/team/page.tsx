import { Navbar } from '@/components/navbar/Navbar';
import { createPageMetadata } from "@/lib/metadata";
import { teamMembers } from "@/data/team";
import sponsorStyles from "@/components/sponsor-section/SponsorSection.module.css";
import guidelineStyles from "@/components/sections/guidelines-section.module.css";

export const metadata = createPageMetadata({
    title: "Team",
    description: "Meet the CodeUtsava X organizing team as official member profiles are announced.",
    path: "/team",
});

export default function TeamPage() {
    return (
        <div className='flex min-h-screen flex-col bg-transparent relative'>
                <div className={sponsorStyles.backgroundGrid} aria-hidden="true" />
                <div className={sponsorStyles.filmGrain} aria-hidden="true" />
                <div className={sponsorStyles.glitchBursts} aria-hidden="true">
                    <span /><span /><span />
                </div>
                
                <Navbar variant="back-to-home" />

                <main id="main-content" className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    <div className={`${sponsorStyles.heading} ${guidelineStyles.heading}`}>
                        <h1 id="team-page-title" data-text="THE TEAM">
                            THE TEAM
                        </h1>
                    </div>

                    <div className={guidelineStyles.frame} style={{ maxWidth: '1200px', width: '100%' }}>
                        <span className={guidelineStyles.frameCorner} aria-hidden="true" />
                        <span className={guidelineStyles.frameCorner} aria-hidden="true" />
                        <span className={guidelineStyles.frameCorner} aria-hidden="true" />
                        <span className={guidelineStyles.frameCorner} aria-hidden="true" />

                        <div className={guidelineStyles.frameHeader} aria-hidden="true">
                            <span>PROTOCOL // CU-X.0</span>
                            <span className={guidelineStyles.status}>OPERATIONAL</span>
                        </div>

                        <div className={guidelineStyles.content}>
                            <p className={guidelineStyles.kicker}>ORGANIZING COLLECTIVE</p>
                            <h3>Meet the minds behind the build.</h3>
                            
                            <p className="mt-4 text-zinc-300 max-w-2xl mb-12">
                                The CodeUtsava X organizing roster will be published here as team profiles and official social links are confirmed.
                            </p>

                            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {teamMembers.map((member) => (
                                    <li key={member.id}>
                                        <article
                                            aria-labelledby={`${member.id}-name`}
                                            className="h-full border border-white/10 bg-[#07050d]/80 p-5 transition-colors hover:border-[#ff5fcf]/50 sm:p-6"
                                        >
                                            <div
                                                aria-hidden="true"
                                                className="grid aspect-[4/3] place-items-center border border-white/10 bg-[linear-gradient(135deg,rgba(153,41,234,0.08),rgba(255,95,207,0.08))]"
                                            >
                                                <span className="font-mono text-5xl font-black text-[#ff5fcf]/40">
                                                    ?
                                                </span>
                                            </div>
                                            <div className="pt-6">
                                                <p className="font-mono text-[0.62rem] tracking-[0.18em] text-[#00f0ff] uppercase">
                                                    {member.status === "published"
                                                        ? "Profile online"
                                                        : "Profile incoming"}
                                                </p>
                                                <h3
                                                    id={`${member.id}-name`}
                                                    className="mt-3 text-xl font-bold text-[#faeb92] m-0"
                                                    style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.02em', textShadow: 'none' }}
                                                >
                                                    {member.name}
                                                </h3>
                                                <p className="mt-1 text-sm text-zinc-400">
                                                    {member.role}
                                                </p>

                                                {member.socialLinks.length > 0 ? (
                                                    <ul className="mt-5 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                                                        {member.socialLinks.map((link) => (
                                                            <li key={link.href}>
                                                                <a
                                                                    href={link.href}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    className="text-sm font-semibold text-zinc-300 underline decoration-white/20 underline-offset-4 hover:text-[#00f0ff] focus-visible:ring-2 focus-visible:ring-[#00f0ff] focus-visible:outline-none"
                                                                >
                                                                    {link.label}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : null}
                                            </div>
                                        </article>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={guidelineStyles.frameFooter} aria-hidden="true">
                            <span>READ // COMPILE // BUILD</span>
                            <span>TEAM ROSTER</span>
                        </div>
                    </div>
                </main>
            </div>
    );
}
