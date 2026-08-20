import type { Statistic } from "@/types/content";

export const stats: readonly Statistic[] = [
    {
        id: "participants",
        label: "Participants",
        value: "To be announced",
        description:
            "Participation figures will be published after registration.",
        status: "to-be-announced",
    },
    {
        id: "teams",
        label: "Teams",
        value: "To be announced",
        description: "Team figures will be published after registration.",
        status: "to-be-announced",
    },
    {
        id: "institutions",
        label: "Institutions",
        value: "To be announced",
        description:
            "Institution figures will be shared with the event update.",
        status: "to-be-announced",
    },
    {
        id: "hours",
        label: "Hours of building",
        value: "To be announced",
        description:
            "The event duration will be shared with the official schedule.",
        status: "to-be-announced",
    },
];
