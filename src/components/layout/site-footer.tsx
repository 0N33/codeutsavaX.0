import Link from "next/link";

import { Container } from "@/components/ui/container";
import { primaryNavigation, siteConfig } from "@/data/site";

export function SiteFooter() {
    return (
        <footer className="border-t border-white/10 bg-[#030207]">
            <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-16">
                <div>
                    <p className="font-mono text-xs tracking-[0.2em] text-cyan-300 uppercase">
                        End of transmission / Start of something new
                    </p>
                    <p className="mt-4 max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        Build. Break. Perceive. Reimagine.
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">
                        {siteConfig.name} is organized by {siteConfig.organizer}
                        . Event details and registrations will be published as
                        they are confirmed.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 text-sm">
                    <div>
                        <p className="font-mono text-xs tracking-[0.18em] text-zinc-400 uppercase">
                            Navigate
                        </p>
                        <ul className="mt-4 space-y-3">
                            {primaryNavigation.slice(0, 4).map((item) => (
                                <li key={item.href}>
                                    <Link
                                        className="text-zinc-300 hover:text-cyan-200"
                                        href={item.href}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="font-mono text-xs tracking-[0.18em] text-zinc-400 uppercase">
                            Connect
                        </p>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <a
                                    className="text-zinc-300 hover:text-cyan-200"
                                    href={siteConfig.links.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-zinc-300 hover:text-cyan-200"
                                    href={siteConfig.links.discord}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
            <div className="border-t border-white/10 py-5">
                <Container className="flex flex-col gap-2 font-mono text-[0.68rem] tracking-[0.16em] text-zinc-400 uppercase sm:flex-row sm:items-center sm:justify-between">
                    <span>
                        © {new Date().getFullYear()} {siteConfig.name}
                    </span>
                    <span>
                        Frontend foundation · Content subject to confirmation
                    </span>
                </Container>
            </div>
        </footer>
    );
}
