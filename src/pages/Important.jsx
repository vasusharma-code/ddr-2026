import React from "react";

const ImportantDates = () => {
  return (
    <section className="bg-white py-8 px-4 md:px-16 min-h-screen mt-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Important Dates</h1>
        <div className="bg-yellow-300 inline-block px-4 py-1 rounded-md">
          <p className="text-gray-800 font-semibold">Mark Your Calendar</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Each Event */}
        {[
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
        ].map((event, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Date Circle */}
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full text-white text-xl font-bold"
              style={{
                background: index < 2 ? "linear-gradient(135deg, #FF6B6B, #FFA07A)" : "#22C55E",
              }}
            >
              {event.displayDate}
            </div>

            {/* Date & Description */}
            <div>
              {event.oldDate ? (
                <>
                  <span className="line-through text-gray-500 block">{event.oldDate}</span>
                  <span className="text-red-500 font-bold block">{event.newDate}</span>
                </>
              ) : (
                <span className="text-lg font-semibold text-gray-800 block">{event.date}</span>
              )}
              <p className="text-gray-600 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImportantDates;
