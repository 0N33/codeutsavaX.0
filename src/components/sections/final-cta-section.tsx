import Link from "next/link";

import { Container } from "@/components/ui/container";

export function FinalCtaSection() {
    return (
        <section
            aria-labelledby="final-cta-title"
            className="relative isolate overflow-hidden border-b border-white/10 py-20 sm:py-28"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(255,62,165,0.2),transparent_45%),radial-gradient(circle_at_85%_0%,rgba(54,241,205,0.12),transparent_32%)]"
            />
            <Container>
                <div className="relative overflow-hidden border border-white/15 bg-white/[0.03] px-6 py-12 shadow-[12px_12px_0_rgba(54,241,205,0.07)] sm:px-10 sm:py-16 lg:px-16">
                    <span
                        aria-hidden="true"
                        className="absolute -top-8 -right-8 size-28 border border-pink-300/20"
                    />
                    <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
                        <div className="max-w-3xl">
                            <p className="font-mono text-xs font-semibold tracking-[0.24em] text-cyan-200 uppercase">
                                Next transmission
                            </p>
                            <h2
                                id="final-cta-title"
                                className="mt-5 text-4xl leading-[0.95] font-black tracking-[-0.045em] text-balance text-white uppercase sm:text-6xl"
                            >
                                Your idea belongs in the next build.
                            </h2>
                            <p className="mt-6 max-w-2xl text-base leading-7 text-pretty text-zinc-300 sm:text-lg">
                                Explore the program now, then return when
                                registrations open to join the tenth edition of
                                CodeUtsava.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                            <Link
                                href="/events"
                                className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-7 py-3 text-sm font-bold tracking-[0.12em] text-[#05030a] uppercase transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#05030a] focus-visible:outline-none"
                            >
                                Explore events
                            </Link>
                            <Link
                                href="/contact-us"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-bold tracking-[0.12em] text-white uppercase transition-colors hover:border-pink-300/70 hover:bg-pink-300/10 focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:outline-none"
                            >
                                Contact the team
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
