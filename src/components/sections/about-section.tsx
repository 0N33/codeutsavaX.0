import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

const principles = [
    {
        index: "01",
        title: "Build with purpose",
        description:
            "Start with a real problem, test the assumptions, and let usefulness guide the technology.",
    },
    {
        index: "02",
        title: "Learn in public",
        description:
            "Trade ideas, ask difficult questions, and make every iteration visible to the people around you.",
    },
    {
        index: "03",
        title: "Ship as a team",
        description:
            "Bring different disciplines together and turn a rough signal into something people can experience.",
    },
] as const;

export function AboutSection() {
    return (
        <SectionShell
            id="about"
            className="bg-[radial-gradient(circle_at_10%_20%,rgba(54,241,205,0.08),transparent_30%)]"
        >
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
                <SectionHeading
                    id="about-title"
                    eyebrow="About the signal"
                    title="A festival for ideas that refuse to stay theoretical."
                    description="CodeUtsava X is the tenth edition of NIT Raipur’s student-led technology festival—a shared space to learn, collaborate, and build meaningful digital experiences."
                />

                <ol className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                    {principles.map((principle) => (
                        <li
                            key={principle.index}
                            className="group relative overflow-hidden border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-cyan-300/30 hover:bg-cyan-300/[0.04] sm:p-7"
                        >
                            <div className="flex gap-5">
                                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-pink-300">
                                    {principle.index}
                                </span>
                                <div>
                                    <h3 className="text-lg font-bold text-white">
                                        {principle.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                                        {principle.description}
                                    </p>
                                </div>
                            </div>
                            <span
                                aria-hidden="true"
                                className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-300/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </SectionShell>
    );
}
