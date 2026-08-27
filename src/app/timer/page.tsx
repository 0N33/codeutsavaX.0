
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { LiveTimer } from "./LiveTimer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Countdown",
    description:
        "The CodeUtsava X countdown page, ready to activate when the official schedule is announced.",
    path: "/timer",
});

export default function TimerPage() {
    return (
        <main id="main-content" className="flex-1">
            <section
                aria-labelledby="timer-page-title"
                className="site-grid relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b border-white/10 py-20 sm:py-28"
            >
                <Container>
                    <div className="mx-auto max-w-5xl text-center">
                        <div className="mt-8 flex justify-center">
                            <LiveTimer />
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
