import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

const guidelines = [
    {
        title: "Create during the event",
        description:
            "Begin implementation inside the official build window. Reusable open-source tools and prior research are welcome when disclosed.",
    },
    {
        title: "Make collaboration visible",
        description:
            "Document the problem, each member’s contribution, and the decisions that shaped the final prototype.",
    },
    {
        title: "Design for people",
        description:
            "Consider accessibility, privacy, safety, and the real-world impact of the experience you create.",
    },
    {
        title: "Present what works",
        description:
            "Show a focused demonstration, explain the trade-offs, and be transparent about unfinished or simulated parts.",
    },
] as const;

export function GuidelinesSection() {
    return (
        <SectionShell id="guidelines" className="bg-white/[0.015]">
            <div className="grid gap-12 lg:grid-cols-[minmax(18rem,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
                <div>
                    <SectionHeading
                        id="guidelines-title"
                        eyebrow="Operating protocol"
                        title="Build boldly. Play fair."
                        description="These principles set the direction for every CodeUtsava build. Event-specific rules, eligibility, and submission requirements will be published with registration."
                    />
                    <p className="mt-7 inline-flex border border-amber-300/30 bg-amber-300/5 px-3 py-2 font-mono text-[0.65rem] tracking-[0.2em] text-amber-100 uppercase">
                        Draft protocol · Final rules incoming
                    </p>
                </div>

                <ol className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
                    {guidelines.map((guideline, index) => (
                        <li
                            key={guideline.title}
                            className="bg-[#08060e] p-6 sm:p-8"
                        >
                            <div className="flex items-center gap-3">
                                <span className="grid size-8 place-items-center border border-pink-300/40 font-mono text-xs text-pink-200">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="h-px flex-1 bg-white/10"
                                />
                            </div>
                            <h3 className="mt-8 text-xl font-bold text-white">
                                {guideline.title}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-400">
                                {guideline.description}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </SectionShell>
    );
}
