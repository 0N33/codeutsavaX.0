import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { stats } from "@/data/stats";

export function AnalyticsSection() {
    const publishedCount = stats.filter(
        (stat) => stat.status === "published",
    ).length;

    return (
        <SectionShell id="analytics">
            <div className="grid gap-12 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-20">
                <div>
                    <SectionHeading
                        id="analytics-title"
                        eyebrow="Impact console"
                        title="No invented numbers. Only verified impact."
                        description="This second view exposes the publishing state behind each headline metric, keeping the public dashboard honest as event data arrives."
                    />
                    <p
                        className="mt-8 font-mono text-xs tracking-[0.18em] text-zinc-400 uppercase"
                        aria-live="polite"
                    >
                        {publishedCount} / {stats.length} channels verified
                    </p>
                </div>

                <div
                    className="border border-white/10 bg-black/25 p-1 shadow-[10px_10px_0_rgba(255,62,165,0.06)]"
                    aria-label="Metric publication status"
                >
                    <div className="border border-white/10">
                        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 font-mono text-[0.62rem] tracking-[0.18em] text-zinc-400 uppercase">
                            <span>Channel</span>
                            <span>State / Value</span>
                        </div>
                        <ul className="divide-y divide-white/10">
                            {stats.map((stat) => {
                                const isPublished = stat.status === "published";

                                return (
                                    <li
                                        key={stat.id}
                                        className="grid gap-2 px-5 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-6"
                                    >
                                        <div className="flex min-w-0 items-center gap-3">
                                            <span
                                                aria-hidden="true"
                                                className={`size-1.5 shrink-0 rounded-full ${
                                                    isPublished
                                                        ? "bg-cyan-300"
                                                        : "bg-amber-300"
                                                }`}
                                            />
                                            <span className="truncate text-sm font-semibold text-zinc-200">
                                                {stat.label}
                                            </span>
                                        </div>
                                        <div className="pl-[1.125rem] text-left sm:pl-0 sm:text-right">
                                            <span
                                                className={`block text-sm font-bold ${
                                                    isPublished
                                                        ? "text-cyan-200"
                                                        : "text-zinc-400"
                                                }`}
                                            >
                                                {stat.value}
                                            </span>
                                            <span className="mt-1 block font-mono text-[0.58rem] tracking-[0.16em] text-zinc-400 uppercase">
                                                {isPublished
                                                    ? "Verified"
                                                    : "Awaiting verification"}
                                            </span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </SectionShell>
    );
}
