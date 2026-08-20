import Image from "next/image";

import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { sponsors } from "@/data/sponsors";

function SponsorIdentity({
    name,
    tier,
    logoSrc,
    isLinked,
}: {
    name: string;
    tier: string;
    logoSrc: string | null;
    isLinked: boolean;
}) {
    return (
        <>
            <div className="grid min-h-24 place-items-center border border-dashed border-white/15 bg-black/20 px-5">
                {logoSrc ? (
                    <Image
                        src={logoSrc}
                        alt=""
                        width={180}
                        height={72}
                        className="max-h-16 w-auto object-contain"
                    />
                ) : (
                    <span className="font-mono text-xs tracking-[0.22em] text-zinc-400 uppercase">
                        Partner mark
                    </span>
                )}
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                    <h3 className="font-semibold text-white">{name}</h3>
                    <p className="mt-1 font-mono text-[0.65rem] tracking-[0.18em] text-cyan-200 uppercase">
                        {tier}
                    </p>
                </div>
                {isLinked ? (
                    <span aria-hidden="true" className="text-pink-300">
                        ↗
                    </span>
                ) : (
                    <span className="mt-1 font-mono text-[0.58rem] tracking-[0.14em] text-zinc-400 uppercase">
                        Pending
                    </span>
                )}
            </div>
        </>
    );
}

export function SponsorsSection() {
    return (
        <SectionShell
            id="sponsors"
            className="bg-[radial-gradient(circle_at_85%_30%,rgba(139,92,246,0.11),transparent_30%)]"
        >
            <SectionHeading
                id="sponsors-title"
                eyebrow="Shared frequency"
                title="Partners behind the build."
                description="The organizations supporting CodeUtsava X will appear here as partnerships are confirmed."
                align="center"
            />

            <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sponsors.map((sponsor) => {
                    const content = (
                        <SponsorIdentity
                            name={sponsor.name}
                            tier={sponsor.tier}
                            logoSrc={sponsor.logoSrc}
                            isLinked={Boolean(sponsor.website)}
                        />
                    );

                    return sponsor.website ? (
                        <a
                            key={sponsor.id}
                            href={sponsor.website}
                            target="_blank"
                            rel="noreferrer"
                            className="group border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/[0.04] focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
                            aria-label={`Visit ${sponsor.name} website`}
                        >
                            {content}
                        </a>
                    ) : (
                        <article
                            key={sponsor.id}
                            className="border border-white/10 bg-white/[0.025] p-5"
                        >
                            {content}
                        </article>
                    );
                })}
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-zinc-400">
                Interested in supporting the community? Partnership information
                will be shared through the official contact channel.
            </p>
        </SectionShell>
    );
}
