import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Countdown",
    description:
        "The CodeUtsava X countdown page, ready to activate when the official schedule is announced.",
    path: "/timer",
});

const countdownUnits = ["Days", "Hours", "Minutes", "Seconds"] as const;

export default function TimerPage() {
    return (
        <main id="main-content" className="flex-1">
            <section
                aria-labelledby="timer-page-title"
                className="site-grid relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b border-white/10 py-20 sm:py-28"
            >
                <Container>
                    <div className="mx-auto max-w-5xl text-center">
                        <p className="font-mono text-xs font-semibold tracking-[0.24em] text-cyan-200 uppercase">
                            Launch clock / Awaiting schedule
                        </p>
                        <h1
                            aria-label="The countdown starts with a confirmed date."
                            id="timer-page-title"
                            className="glitch-title mt-6 text-5xl leading-[0.92] font-black tracking-[-0.05em] text-balance text-white uppercase sm:text-7xl lg:text-8xl"
                        >
                            The countdown starts with a confirmed date.
                        </h1>
                        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-pretty text-zinc-300 sm:text-lg sm:leading-8">
                            This clock is deliberately paused until the official
                            CodeUtsava X schedule is published.
                        </p>

                        <dl
                            aria-label="Countdown unavailable until the event schedule is confirmed"
                            className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-4"
                        >
                            {countdownUnits.map((unit) => (
                                <div
                                    key={unit}
                                    className="flex flex-col bg-[#08060e]/95 px-4 py-7 sm:py-9"
                                >
                                    <dt className="order-2 mt-2 font-mono text-[0.62rem] tracking-[0.18em] text-zinc-400 uppercase">
                                        {unit}
                                    </dt>
                                    <dd className="order-1 font-mono text-4xl font-black text-white sm:text-5xl">
                                        --
                                    </dd>
                                </div>
                            ))}
                        </dl>

                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                href="/events"
                                className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-xs font-bold tracking-[0.13em] text-[#05030a] uppercase hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#05030a] focus-visible:outline-none"
                            >
                                Explore events
                            </Link>
                            <Link
                                href="/faq"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs font-bold tracking-[0.13em] text-white uppercase hover:border-pink-300/60 hover:bg-pink-300/10 focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:outline-none"
                            >
                                Read FAQs
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            <section
                aria-labelledby="timer-notes-title"
                className="border-b border-white/10 py-20 sm:py-24"
            >
                <Container>
                    <SectionHeading
                        id="timer-notes-title"
                        eyebrow="Countdown contract"
                        title="Accurate first. Dramatic second."
                        description="When an official start time is available, this route can connect to one shared timestamp and present a synchronized countdown without changing the page structure."
                    />
                </Container>
            </section>
        </main>
    );
}
