import Link from "next/link";

import type { Event } from "@/types/content";

type EventCardProps = {
    event: Event;
};

export function EventCard({ event }: EventCardProps) {
    const details = [
        ["Category", event.category],
        ["Format", event.format],
        ["Date", event.date],
        ["Time", event.time],
        ["Venue", event.venue],
    ] as const;

    return (
        <article
            aria-labelledby={`${event.id}-title`}
            className="group relative h-full overflow-hidden border border-white/10 bg-white/[0.025] p-6 shadow-[8px_8px_0_rgba(54,241,205,0.04)] transition-colors hover:border-cyan-300/30 sm:p-8"
        >
            <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-300 to-transparent opacity-60"
            />

            <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-[0.68rem] font-semibold tracking-[0.2em] text-cyan-200 uppercase">
                    Program node / {event.slug}
                </p>
                <span className="border border-pink-300/30 bg-pink-300/5 px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.16em] text-pink-200 uppercase">
                    {event.status === "published" ? "Published" : "Incoming"}
                </span>
            </div>

            <h3
                id={`${event.id}-title`}
                className="mt-8 text-2xl font-black tracking-[-0.035em] text-white uppercase sm:text-3xl"
            >
                {event.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-zinc-300">
                {event.summary}
            </p>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
                {event.description}
            </p>

            <dl className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
                {details.map(([label, value]) => (
                    <div key={label} className="bg-[#08060e] px-4 py-4">
                        <dt className="font-mono text-[0.62rem] tracking-[0.18em] text-zinc-400 uppercase">
                            {label}
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-zinc-200">
                            {value}
                        </dd>
                    </div>
                ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                {event.registrationUrl ? (
                    <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-cyan-300 px-5 py-2.5 text-xs font-bold tracking-[0.12em] text-[#05030a] uppercase focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#08060e] focus-visible:outline-none"
                    >
                        Open registration
                    </a>
                ) : (
                    <p className="font-mono text-xs tracking-[0.14em] text-zinc-400 uppercase">
                        Registration details incoming
                    </p>
                )}
                <Link
                    href="/faq"
                    className="text-sm font-semibold text-zinc-200 underline decoration-white/20 underline-offset-4 transition-colors hover:text-cyan-200 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
                >
                    Review participation FAQs
                </Link>
            </div>
        </article>
    );
}
