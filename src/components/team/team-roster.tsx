import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { teamMembers } from "@/data/team";

export function TeamRoster() {
    return (
        <section
            aria-labelledby="team-roster-title"
            className="relative isolate overflow-hidden border-b border-white/10 py-20 sm:py-24 lg:py-28"
        >
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 -z-10 size-96 bg-pink-400/[0.06] blur-3xl"
            />
            <Container>
                <SectionHeading
                    id="team-roster-title"
                    eyebrow="People behind the signal"
                    title="Built by a team that makes the improbable operational."
                    description="The CodeUtsava X organizing roster will be published here as team profiles and official social links are confirmed."
                />

                <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member) => (
                        <li key={member.id}>
                            <article
                                aria-labelledby={`${member.id}-name`}
                                className="h-full border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-pink-300/30 sm:p-6"
                            >
                                <div
                                    aria-hidden="true"
                                    className="grid aspect-[4/3] place-items-center border border-white/10 bg-[linear-gradient(135deg,rgba(54,241,205,0.08),rgba(255,62,165,0.08))]"
                                >
                                    <span className="font-mono text-5xl font-black text-white/20">
                                        ?
                                    </span>
                                </div>
                                <div className="pt-6">
                                    <p className="font-mono text-[0.62rem] tracking-[0.18em] text-cyan-200 uppercase">
                                        {member.status === "published"
                                            ? "Profile online"
                                            : "Profile incoming"}
                                    </p>
                                    <h3
                                        id={`${member.id}-name`}
                                        className="mt-3 text-xl font-bold text-white"
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
                                                        className="text-sm font-semibold text-zinc-300 underline decoration-white/20 underline-offset-4 hover:text-cyan-200 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
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
            </Container>
        </section>
    );
}
