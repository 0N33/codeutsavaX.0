import Link from "next/link";

import { siteConfig } from "@/data/site";

const channels = [
    {
        label: "GitHub",
        description:
            "Follow the public website project and its development history.",
        href: siteConfig.links.github,
    },
    {
        label: "Discord",
        description:
            "Join the official community channel currently listed by the team.",
        href: siteConfig.links.discord,
    },
] as const;

export function ContactChannels() {
    return (
        <section aria-labelledby="contact-channels-title">
            <p className="font-mono text-xs font-semibold tracking-[0.22em] text-cyan-200 uppercase">
                Confirmed channels
            </p>
            <h2
                id="contact-channels-title"
                className="mt-4 text-3xl font-black tracking-[-0.035em] text-white uppercase"
            >
                Stay close to the source.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
                Until a dedicated contact address is published, use the official
                community destinations below for updates.
            </p>

            <ul className="mt-8 space-y-4">
                {channels.map((channel) => (
                    <li key={channel.label}>
                        <a
                            href={channel.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group block border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-cyan-300/30 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
                        >
                            <span className="flex items-center justify-between gap-4">
                                <span className="text-lg font-bold text-white group-hover:text-cyan-100">
                                    {channel.label}
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="font-mono text-cyan-300"
                                >
                                    ↗
                                </span>
                            </span>
                            <span className="mt-2 block text-sm leading-6 text-zinc-400">
                                {channel.description}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>

            <p className="mt-8 text-sm leading-6 text-zinc-400">
                Looking for participation details?{" "}
                <Link
                    href="/faq"
                    className="font-semibold text-cyan-200 underline decoration-cyan-300/30 underline-offset-4 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
                >
                    Read the FAQ
                </Link>
                .
            </p>
        </section>
    );
}
