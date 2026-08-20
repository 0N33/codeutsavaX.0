import { EventCard } from "@/components/events/event-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { events } from "@/data/events";

export function EventsCatalog() {
    return (
        <section
            aria-labelledby="events-catalog-title"
            className="relative isolate overflow-hidden border-b border-white/10 py-20 sm:py-24 lg:py-28"
        >
            <div
                aria-hidden="true"
                className="absolute top-0 right-0 -z-10 size-80 bg-cyan-300/[0.06] blur-3xl"
            />
            <Container>
                <SectionHeading
                    id="events-catalog-title"
                    eyebrow="Program preview"
                    title="Every challenge starts as an unresolved signal."
                    description="This catalog is ready for the official CodeUtsava X program. Event formats, schedules, venues, and registration links will appear here as they are confirmed."
                />

                <ul className="mt-12 grid gap-6 lg:grid-cols-2">
                    {events.map((event) => (
                        <li key={event.id}>
                            <EventCard event={event} />
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
