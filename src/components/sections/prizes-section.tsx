import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { prizes } from "@/data/prizes";

export function PrizesSection() {
    return (
        <SectionShell
            id="prizes"
            className="bg-[radial-gradient(circle_at_18%_70%,rgba(255,62,165,0.1),transparent_28%)]"
        >
            <div className="flex flex-col gap-12">
                <SectionHeading
                    id="prizes-title"
                    eyebrow="Reward matrix"
                    title="Recognition for work that shifts perspective."
                    description="Prize tracks, rewards, and eligibility details will be published after the challenge program is finalized."
                />

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {prizes.map((prize, index) => {
                        const isPublished = prize.status === "published";

                        return (
                            <article
                                key={prize.id}
                                className="relative flex min-h-64 flex-col overflow-hidden border border-white/10 bg-white/[0.025] p-7 sm:p-8"
                            >
                                <div className="flex items-start justify-between gap-6">
                                    <p className="font-mono text-[0.65rem] tracking-[0.2em] text-pink-300 uppercase">
                                        Prize{" "}
                                        {String(index + 1).padStart(2, "0")}
                                    </p>
                                    <span
                                        className={`size-2 rotate-45 ${
                                            isPublished
                                                ? "bg-cyan-300"
                                                : "bg-zinc-700"
                                        }`}
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="mt-8 text-2xl font-bold text-white">
                                    {prize.title}
                                </h3>
                                <p
                                    className={`mt-3 text-xl font-black tracking-[-0.025em] ${
                                        isPublished
                                            ? "text-cyan-200"
                                            : "text-zinc-400"
                                    }`}
                                >
                                    {prize.amount}
                                </p>
                                <p className="mt-auto pt-7 text-sm leading-6 text-zinc-400">
                                    {prize.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </SectionShell>
    );
}
