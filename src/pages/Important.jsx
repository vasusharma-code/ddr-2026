import React from "react";
import { Container, PageHero, Section, TimelineCard } from "../components/DesignSystem";

const events = [
  {
    oldDate: "31-Jan-2025",
    newDate: "16-Feb-2025",
    displayDate: "16",
    description: "Solution ideas (Proposal) submission",
  },
  {
    oldDate: "15-Feb-2025",
    newDate: "28-Feb-2025",
    displayDate: "28",
    description: "Shortlisting of Stage – 1 Proposals",
  },
  {
    date: "15-Apr-2025",
    displayDate: "15",
    description: "Proof of Concept (video) submission",
  },
  {
    date: "15-May-2025",
    displayDate: "15",
    description: "Stage – 2 Shortlisting",
  },
  {
    date: "12-13 July-2025",
    displayDate: "12",
    description: "National DD Robocon 2025",
  },
];

const ImportantDates = () => {
  return (
    <div className="page-surface">
      <PageHero title="Important Dates" subtitle="Mark Your Calendar" />
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <TimelineCard
                key={index}
                displayDate={event.displayDate}
                date={event.oldDate ? (
                  <>
                    <span className="line-through text-slate-400">{event.oldDate}</span>
                    <br />
                    <span className="text-slate-900 font-bold">{event.newDate}</span>
                  </>
                ) : event.date}
                description={event.description}
                status={event.oldDate ? "Updated" : "Upcoming"}
              />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ImportantDates;