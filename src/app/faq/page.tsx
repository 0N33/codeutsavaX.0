import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/data/faq";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "FAQ",
    description:
        "Read answers to frequently asked questions about CodeUtsava X as official participation details are confirmed.",
    path: "/faq",
});

export default function FaqPage() {
    return (
        <main id="main-content" className="flex-1">
            <section
                aria-labelledby="faq-page-title"
                className="site-grid relative isolate overflow-hidden border-b border-white/10 py-20 sm:py-28"
            >
                <Container>
                    <p className="font-mono text-xs font-semibold tracking-[0.24em] text-cyan-200 uppercase">
                        Information desk / CodeUtsava X
                    </p>
                    <h1
                        aria-label="Questions, decoded."
                        id="faq-page-title"
                        className="glitch-title mt-6 max-w-4xl text-5xl leading-[0.92] font-black tracking-[-0.05em] text-balance text-white uppercase sm:text-7xl"
                    >
                        Questions, decoded.
                    </h1>
                    <p className="mt-7 max-w-2xl text-base leading-7 text-pretty text-zinc-300 sm:text-lg sm:leading-8">
                        The answers below reflect only currently confirmed
                        information and will be updated when registration and
                        participation details go live.
                    </p>
                </Container>
            </section>

            <section
                aria-labelledby="faq-list-title"
                className="relative isolate overflow-hidden border-b border-white/10 py-20 sm:py-24 lg:py-28"
            >
                <Container>
                    <SectionHeading
                        id="faq-list-title"
                        eyebrow="Current knowledge base"
                        title="What we can say right now."
                        description="Each answer is backed by the current project content. Return here as the official event signal becomes clearer."
                    />

                    <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
                        {faqs.map((item, index) => (
                            <details key={item.id} className="group py-1">
                                <summary className="flex cursor-pointer list-none items-start gap-4 rounded-sm px-2 py-6 text-left focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none sm:gap-6 sm:px-4">
                                    <span className="pt-1 font-mono text-xs text-pink-300">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="flex-1 text-lg font-bold text-white sm:text-xl">
                                        {item.question}
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="font-mono text-xl text-cyan-300 transition-transform group-open:rotate-45"
                                    >
                                        +
                                    </span>
                                </summary>
                                <div className="pr-4 pb-7 pl-12 sm:pl-16">
                                    <p className="max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                                        {item.answer}
                                    </p>
                                    {item.status === "to-be-announced" ? (
                                        <p className="mt-4 font-mono text-[0.62rem] tracking-[0.17em] text-zinc-400 uppercase">
                                            Answer pending official confirmation
                                        </p>
                                    ) : null}
                                </div>
                            </details>
                        ))}
                    </div>

                    <div className="mt-12 border border-white/10 bg-white/[0.025] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
                        <div>
                            <h2 className="text-xl font-bold text-white">
                                Need another route?
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-zinc-400">
                                Check the verified community channels while
                                direct inquiries are being prepared.
                            </p>
                        </div>
                        <Link
                            href="/contact-us"
                            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-300/40 px-5 py-2.5 text-xs font-bold tracking-[0.12em] text-cyan-100 uppercase hover:bg-cyan-300/10 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none sm:mt-0"
                        >
                            Contact options
                        </Link>
                    </div>
                </Container>
            </section>
        </main>
    );
}
