import { timeline } from "@/data/timeline";
import guidelinesStyles from "./guidelines-section.module.css";
import sponsorStyles from "@/components/sponsor-section/SponsorSection.module.css";

export function TimelineSection() {
    return (
        <section
            className={guidelinesStyles.guidelines}
            id="timeline"
            aria-labelledby="timeline-title"
        >
            <div className={sponsorStyles.backgroundGrid} aria-hidden="true" />
            <div className={sponsorStyles.filmGrain} aria-hidden="true" />
            <div className={sponsorStyles.glitchBursts} aria-hidden="true">
                <span />
                <span />
                <span />
            </div>

            <div className={`${sponsorStyles.heading} ${guidelinesStyles.heading}`}>
                <h2 id="timeline-title" data-text="TIMELINE">
                    TIMELINE
                </h2>
            </div>

            <div className={guidelinesStyles.frame}>
                <span className={guidelinesStyles.frameCorner} aria-hidden="true" />
                <span className={guidelinesStyles.frameCorner} aria-hidden="true" />
                <span className={guidelinesStyles.frameCorner} aria-hidden="true" />
                <span className={guidelinesStyles.frameCorner} aria-hidden="true" />

                <div className={guidelinesStyles.frameHeader} aria-hidden="true">
                    <span>TIMELINE // CU-X.0</span>
                    <span className={guidelinesStyles.status}>SYNCING</span>
                </div>

                <div className={guidelinesStyles.content}>
                    <ol className="relative grid gap-0 lg:grid-cols-5">
                        {timeline.map((item, index) => {
                            const isPublished = item.status === "published";

                            return (
                                <li
                                    key={item.id}
                                    className="group relative border-l border-white/15 pb-10 pl-8 last:pb-0 lg:border-t lg:border-l-0 lg:pt-9 lg:pb-0 lg:pl-0"
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`absolute top-0 -left-[0.34rem] size-2.5 rotate-45 border lg:-top-[0.34rem] lg:left-0 ${
                                            isPublished
                                                ? "border-cyan-200 bg-cyan-300"
                                                : "border-zinc-600 bg-[#05030a]"
                                        }`}
                                    />
                                    <article className="lg:pr-7">
                                        <p className="font-mono text-[0.65rem] tracking-[0.18em] text-pink-300 uppercase">
                                            Phase {String(index + 1).padStart(2, "0")}
                                        </p>
                                        <h3 className="mt-3 text-lg font-bold text-white">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-6 text-zinc-400">
                                            {item.description}
                                        </p>
                                        <p className="mt-5 border-t border-white/10 pt-4 font-mono text-[0.68rem] leading-5 tracking-[0.13em] text-zinc-400 uppercase">
                                            <span className="block text-zinc-300">
                                                {item.date}
                                            </span>
                                            <span className="block">{item.time}</span>
                                        </p>
                                    </article>
                                </li>
                            );
                        })}
                    </ol>
                </div>

                <div className={guidelinesStyles.frameFooter} aria-hidden="true">
                    <span>AWAITING NEXT PHASE</span>
                    <span>STATUS: LIVE</span>
                </div>
            </div>
        </section>
    );
}
