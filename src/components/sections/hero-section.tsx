import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

const signals = [
    ["Edition", siteConfig.edition],
    ["Mode", "Build · Break · Reimagine"],
    ["Status", "Transmission incoming"],
] as const;

export function HeroSection() {
    return (
        <section
            id="hero"
            className="site-grid relative isolate min-h-[calc(100svh-4rem)] overflow-hidden border-b border-white/10"
        >
            <div
                aria-hidden="true"
                className="absolute top-24 left-[-8rem] size-80 rounded-full bg-cyan-400/15 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute right-[-5rem] bottom-[-8rem] size-96 rounded-full bg-pink-500/15 blur-3xl"
            />

            <Container className="relative grid min-h-[calc(100svh-4rem)] items-center gap-14 py-20 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:py-28">
                <div className="max-w-4xl">
                    <p className="mb-6 flex items-center gap-3 font-mono text-xs tracking-[0.24em] text-cyan-200 uppercase sm:text-sm">
                        <span
                            className="h-px w-10 bg-cyan-300"
                            aria-hidden="true"
                        />
                        NIT Raipur · {siteConfig.edition}
                    </p>

                    <h1
                        aria-label="Reality has a new interface."
                        className="glitch-title max-w-4xl text-5xl leading-[0.9] font-black tracking-[-0.055em] text-balance text-white uppercase sm:text-7xl lg:text-[6.8rem]"
                    >
                        Reality has a new interface.
                    </h1>

                    <p className="mt-8 max-w-2xl text-base leading-7 text-pretty text-zinc-300 sm:text-lg sm:leading-8">
                        CodeUtsava returns for its tenth edition—an arena for
                        builders, problem-solvers, and curious minds to turn
                        digital distortion into meaningful innovation.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="#about"
                            className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold tracking-[0.12em] text-[#05030a] uppercase transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#05030a] focus-visible:outline-none"
                        >
                            Explore the blueprint
                        </Link>
                        <Link
                            href="/events"
                            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold tracking-[0.12em] text-white uppercase transition-colors hover:border-pink-300/70 hover:bg-pink-300/10 focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:outline-none"
                        >
                            View events
                        </Link>
                    </div>
                </div>

                <aside
                    aria-label="Event signal"
                    className="relative border border-white/15 bg-black/30 p-1 shadow-[12px_12px_0_rgba(54,241,205,0.08)] backdrop-blur-sm"
                >
                    <div className="border border-white/10 p-6 sm:p-8">
                        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[0.68rem] tracking-[0.2em] text-zinc-400 uppercase">
                            <span>Signal / CU-X</span>
                            <span className="inline-flex items-center gap-2 text-cyan-200">
                                <span className="size-2 animate-pulse rounded-full bg-cyan-300" />
                                Online
                            </span>
                        </div>

                        <dl className="space-y-6">
                            {signals.map(([label, value], index) => (
                                <div
                                    key={label}
                                    className="grid grid-cols-[2.5rem_1fr] gap-4"
                                >
                                    <dt className="font-mono text-xs text-pink-300">
                                        0{index + 1}
                                    </dt>
                                    <dd>
                                        <span className="block font-mono text-[0.65rem] tracking-[0.18em] text-zinc-400 uppercase">
                                            {label}
                                        </span>
                                        <span className="mt-1 block text-sm font-semibold text-zinc-100 sm:text-base">
                                            {value}
                                        </span>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </aside>
            </Container>
        </section>
    );
}
