"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Container } from "@/components/ui/container";
import { primaryNavigation, siteConfig } from "@/data/site";

export function SiteHeader() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06040b]/85 backdrop-blur-xl">
            <Container className="flex min-h-16 items-center justify-between gap-6">
                <Link
                    href="/"
                    className="group inline-flex items-center gap-3 rounded-sm focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
                    aria-label={`${siteConfig.name} home`}
                >
                    <span
                        aria-hidden="true"
                        className="grid size-8 place-items-center border border-cyan-300/50 bg-cyan-300/10 font-mono text-sm font-bold text-cyan-200 shadow-[3px_3px_0_rgba(255,62,165,0.35)] transition-transform group-hover:-translate-y-0.5"
                    >
                        X
                    </span>
                    <span className="hidden font-mono text-sm font-semibold tracking-[0.16em] whitespace-nowrap text-white uppercase min-[350px]:inline sm:text-base">
                        CodeUtsava <span className="text-cyan-300">X</span>
                    </span>
                </Link>

                <nav
                    aria-label="Primary navigation"
                    className="hidden lg:block"
                >
                    <ul className="flex items-center gap-1">
                        {primaryNavigation.map((item) => (
                            <li key={item.href}>
                                <Link
                                    aria-current={
                                        item.href === pathname
                                            ? "page"
                                            : undefined
                                    }
                                    href={item.href}
                                    className="block rounded-full px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <MobileNavigation />
            </Container>
        </header>
    );
}
