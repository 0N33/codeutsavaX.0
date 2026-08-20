import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";

type SectionShellProps = {
    id: string;
    children: ReactNode;
    className?: string;
    containerClassName?: string;
};

export function SectionShell({
    id,
    children,
    className = "",
    containerClassName = "",
}: SectionShellProps) {
    return (
        <section
            id={id}
            aria-labelledby={`${id}-title`}
            className={`relative isolate scroll-mt-20 overflow-hidden border-b border-white/10 py-20 sm:py-24 lg:py-28 ${className}`}
        >
            <div
                aria-hidden="true"
                className="absolute inset-y-0 left-1/2 -z-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
            />
            <Container className={containerClassName}>{children}</Container>
        </section>
    );
}
