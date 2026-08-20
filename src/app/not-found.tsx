import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function NotFound() {
    return (
        <main
            id="main-content"
            className="site-grid relative isolate flex flex-1 items-center overflow-hidden py-20 sm:py-28"
        >
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <p className="font-mono text-xs font-semibold tracking-[0.24em] text-pink-200 uppercase">
                        Error 404 / Signal lost
                    </p>
                    <h1
                        aria-label="This route slipped out of reality."
                        className="glitch-title mt-6 text-5xl leading-[0.92] font-black tracking-[-0.05em] text-balance text-white uppercase sm:text-7xl"
                    >
                        This route slipped out of reality.
                    </h1>
                    <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-pretty text-zinc-300 sm:text-lg">
                        The page may have moved, or the address may be
                        incomplete. Rejoin the main transmission or continue to
                        the event catalog.
                    </p>
                    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/"
                            className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-xs font-bold tracking-[0.13em] text-[#05030a] uppercase focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#05030a] focus-visible:outline-none"
                        >
                            Return home
                        </Link>
                        <Link
                            href="/events"
                            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs font-bold tracking-[0.13em] text-white uppercase hover:border-pink-300/60 hover:bg-pink-300/10 focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:outline-none"
                        >
                            Browse events
                        </Link>
                    </div>
                </div>
            </Container>
        </main>
    );
}
