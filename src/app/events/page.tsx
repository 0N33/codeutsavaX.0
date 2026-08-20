import Link from "next/link";

import { EventsCatalog } from "@/components/events/events-catalog";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Events",
    description:
        "Explore the CodeUtsava X event catalog as program, format, and registration details are announced.",
    path: "/events",
});

export default function EventsPage() {
    return (
        <main id="main-content" className="flex-1">
            <section
                aria-labelledby="events-page-title"
                className="site-grid relative isolate overflow-hidden border-b border-white/10 py-20 sm:py-28"
            >
                <Container>
                    <p className="font-mono text-xs font-semibold tracking-[0.24em] text-cyan-200 uppercase">
                        Program directory / CodeUtsava X
                    </p>
                    <h1
                        aria-label="Find your next challenge."
                        id="events-page-title"
                        className="glitch-title mt-6 max-w-4xl text-5xl leading-[0.92] font-black tracking-[-0.05em] text-balance text-white uppercase sm:text-7xl"
                    >
                        Find your next challenge.
                    </h1>
                    <p className="mt-7 max-w-2xl text-base leading-7 text-pretty text-zinc-300 sm:text-lg sm:leading-8">
                        A structured home for every CodeUtsava X challenge,
                        session, and activity. Confirmed program details will
                        replace the preview entries below.
                    </p>
                    <Link
                        href="/"
                        className="mt-8 inline-flex text-sm font-semibold text-zinc-200 underline decoration-white/20 underline-offset-4 hover:text-cyan-200 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
                    >
                        Back to the main transmission
                    </Link>
                </Container>
            </section>

            <EventsCatalog />
        </main>
    );
}
