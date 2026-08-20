import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { stats } from "@/data/stats";

export function StatsSection() {
    return (
        <SectionShell id="stats" className="bg-white/[0.015]">
            <div className="grid gap-10 lg:grid-cols-[minmax(18rem,0.65fr)_minmax(0,1.35fr)] lg:items-end lg:gap-16">
                <SectionHeading
                    id="stats-title"
                    eyebrow="Event telemetry"
                    title="The scale of the next signal."
                    description="This dashboard is ready for verified CodeUtsava X figures. Metrics will switch from pending to live as official details are released."
                />

                <dl className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
                    {stats.map((stat, index) => {
                        const isPublished = stat.status === "published";

                        return (
                            <div
                                key={stat.id}
                                className="relative min-h-52 bg-[#08060e] p-6 sm:p-8"
                            >
                                <dt className="flex items-start justify-between gap-4">
                                    <span className="text-sm font-semibold tracking-[0.12em] text-zinc-300 uppercase">
                                        {stat.label}
                                    </span>
                                    <span className="font-mono text-[0.62rem] tracking-[0.18em] text-zinc-400">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </dt>
                                <dd className="mt-8">
                                    <span
                                        className={`block text-2xl font-black tracking-[-0.035em] sm:text-3xl ${
                                            isPublished
                                                ? "text-cyan-200"
                                                : "text-zinc-400"
                                        }`}
                                    >
                                        {stat.value}
                                    </span>
                                    <span className="mt-3 block text-sm leading-6 text-zinc-400">
                                        {stat.description}
                                    </span>
                                    <span className="mt-5 inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.16em] text-zinc-400 uppercase">
                                        <span
                                            aria-hidden="true"
                                            className={`size-1.5 rounded-full ${
                                                isPublished
                                                    ? "bg-cyan-300"
                                                    : "bg-amber-300"
                                            }`}
                                        />
                                        {isPublished
                                            ? "Verified"
                                            : "Pending data"}
                                    </span>
                                </dd>
                            </div>
                        );
                    })}
                </dl>
            </div>
        </SectionShell>
    );
}
