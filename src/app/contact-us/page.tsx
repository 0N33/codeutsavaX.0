import Link from "next/link";

import { ContactChannels } from "@/components/contact/contact-channels";
import { ContactFormPreview } from "@/components/contact/contact-form-preview";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Contact",
    description:
        "Find the currently confirmed CodeUtsava X community channels and a placeholder for future direct inquiries.",
    path: "/contact-us",
});

export default function ContactPage() {
    return (
        <main id="main-content" className="flex-1">
            <section
                aria-labelledby="contact-page-title"
                className="site-grid relative isolate overflow-hidden border-b border-white/10 py-20 sm:py-28"
            >
                <Container>
                    <p className="font-mono text-xs font-semibold tracking-[0.24em] text-cyan-200 uppercase">
                        Open channel / CodeUtsava X
                    </p>
                    <h1
                        aria-label="Start a conversation."
                        id="contact-page-title"
                        className="glitch-title mt-6 max-w-4xl text-5xl leading-[0.92] font-black tracking-[-0.05em] text-balance text-white uppercase sm:text-7xl"
                    >
                        Start a conversation.
                    </h1>
                    <p className="mt-7 max-w-2xl text-base leading-7 text-pretty text-zinc-300 sm:text-lg sm:leading-8">
                        Follow confirmed community channels now. A direct
                        inquiry workflow can be connected here once the
                        organizing team publishes it.
                    </p>
                </Container>
            </section>

            <section
                aria-labelledby="contact-options-title"
                className="relative isolate overflow-hidden border-b border-white/10 py-20 sm:py-24 lg:py-28"
            >
                <Container>
                    <SectionHeading
                        id="contact-options-title"
                        eyebrow="Contact options"
                        title="Use a verified path."
                        description="The links below come from the project’s shared site configuration. Unconfirmed email addresses and phone numbers are intentionally omitted."
                    />
                    <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
                        <ContactChannels />
                        <ContactFormPreview />
                    </div>
                    <p className="mt-12 border-t border-white/10 pt-8 text-sm text-zinc-400">
                        You can also{" "}
                        <Link
                            href="/events"
                            className="font-semibold text-cyan-200 underline decoration-cyan-300/30 underline-offset-4 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
                        >
                            browse the event catalog
                        </Link>
                        .
                    </p>
                </Container>
            </section>
        </main>
    );
}
