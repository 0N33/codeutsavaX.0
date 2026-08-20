import Link from "next/link";

import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { shortlistedTeams } from "@/data/shortlisted-teams";

export function ShortlistedTeamsSection() {
    return (
        <SectionShell id="shortlisted-teams" className="bg-white/[0.015]">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <SectionHeading
                        id="shortlisted-teams-title"
                        eyebrow="Selection feed"
                        title="Teams moving to the next phase."
                        description="The official shortlist will populate this table after submissions have been reviewed."
                    />
                    <Link
                        href="/events"
                        className="inline-flex min-h-11 shrink-0 items-center justify-center self-start rounded-full border border-white/20 px-5 py-2.5 text-xs font-bold tracking-[0.14em] text-white uppercase transition-colors hover:border-cyan-300/60 hover:bg-cyan-300/10 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
                    >
                        Review event details
                    </Link>
                </div>

                <div
                    aria-label="Shortlisted teams table"
                    className="overflow-x-auto border border-white/10 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:outline-none"
                    role="region"
                    tabIndex={0}
                >
                    <table className="w-full min-w-[42rem] border-collapse text-left">
                        <caption className="sr-only">
                            Teams shortlisted for CodeUtsava X
                        </caption>
                        <thead className="bg-white/[0.04] font-mono text-[0.65rem] tracking-[0.18em] text-zinc-400 uppercase">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-4 font-medium"
                                >
                                    Team
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-4 font-medium"
                                >
                                    Project
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-4 font-medium"
                                >
                                    Track
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-4 font-medium"
                                >
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            {shortlistedTeams.map((team) => {
                                const isPublished = team.status === "published";

                                return (
                                    <tr key={team.id} className="bg-black/15">
                                        <th
                                            scope="row"
                                            className="px-6 py-5 text-sm font-semibold text-white"
                                        >
                                            {team.name}
                                        </th>
                                        <td className="px-6 py-5 text-sm text-zinc-400">
                                            {team.project}
                                        </td>
                                        <td className="px-6 py-5 text-sm text-zinc-400">
                                            {team.track}
                                        </td>
                                        <td className="px-6 py-5">
                                            <span
                                                className={`inline-flex rounded-full border px-3 py-1 font-mono text-[0.6rem] tracking-[0.14em] uppercase ${
                                                    isPublished
                                                        ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-100"
                                                        : "border-amber-300/25 bg-amber-300/5 text-amber-100"
                                                }`}
                                            >
                                                {isPublished
                                                    ? "Selected"
                                                    : "Pending review"}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </SectionShell>
    );
}
