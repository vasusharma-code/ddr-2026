import React from "react";

const lightweightMetrics = [
  "Original mass",
  "Optimized mass",
  "Percentage weight reduction",
];

const consolidationMetrics = [
  "Original part count",
  "Final part count",
];

const faqItems = [
  {
    question: "Can teams use the same subsystem for both exercises?",
    answer:
      "Yes. Teams may use the same subsystem provided both exercises demonstrate different engineering objectives.",
  },
  {
    question: "Is physical fabrication mandatory?",
    answer:
      "No. Submission focuses on design and Generative Design workflows. Only Fusion Generative Design is to be used.",
  },
  {
    question: "Can concept models be submitted?",
    answer:
      "No. Entries must originate from actual DD Robocon robot development.",
  },
  {
    question: "Are both tasks to be done?",
    answer:
      "Yes. Both tasks are part of the competition. Strictly follow the given PPT guidelines.",
  },
  {
    question: "What designs are not allowed?",
    answer:
      "Generic CAD practice models, internet-sourced designs, non-Robocon components, pure aesthetic topology studies, unrelated concept parts, and designs not linked to actual competition robots.",
  },
  {
    question: "How do I get more help or information?",
    answer:
      "Attend the Fusion workshop series to interact with the organizers and get technical assistance.",
  },
];

const AutodeskFusionAward = () => {
  return (
    <div className="min-h-screen mt-14 bg-white px-6 py-10 text-gray-900 md:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-sky-900 to-cyan-700 text-white shadow-xl">
          <div className="grid gap-6 px-6 py-8 md:grid-cols-[1.4fr_1fr] md:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
                DD Robocon 2026
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
                Autodesk Fusion Award - Generative Design Challenge
              </h1>
              <p className="mt-4 text-lg font-semibold text-cyan-100">
                Optimize ▶ Consolidate ▶ Perform
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-100 md:text-base">
                The Autodesk Fusion Generative Design Challenge 2026 invites DD Robocon teams to
                showcase engineering optimization and manufacturing-driven design using real
                robot components and assemblies developed for the competition.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-100">Submission Deadline</p>
              <p className="mt-3 text-2xl font-bold">24 June 2026</p>
              <p className="text-sm text-cyan-100">23:00 India Time</p>
              <p className="mt-4 text-sm leading-6 text-slate-100">
                The submission link will be shared after registration. Please read the
                participation guidelines and terms before you submit your entry.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd62wrCImwSb8DAshwaZK_VqYP190A_VEn8WOiaJM5v_z5i6g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Register Now
                </a>
                <a
                  href="/autodesk-fusion-generative-design-challenge-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View PDF
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Challenge Overview</h2>
          <div className="mt-4 space-y-4 leading-7 text-gray-700">
            <p>
              Calling all DD Robocon 2026 teams. Participate and win exciting awards while
              applying AI-assisted generative design workflows to robot components and
              assemblies already being developed for your competition robot.
            </p>
            <p>
              Modern competition robots require lightweight structures, efficient assemblies,
              and rapid manufacturing. Generative Design helps teams explore optimized
              solutions that can improve robot performance while reducing weight, complexity,
              and manufacturing effort.
            </p>
            <p>
              Participants will demonstrate lightweight engineering, assembly optimization,
              manufacturability, and performance improvement using real robotics applications.
            </p>
            <p>
              Learn more about Autodesk Fusion at {" "}
              <a
                href="https://www.autodesk.com/products/fusion-360"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Autodesk Fusion
              </a>
              {" "}and training resources at{" "}
              <a
                href="https://www.autodesk.com/learn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Autodesk Learning
              </a>
              .
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-amber-700">Awards</h2>
            <div className="mt-4 space-y-4 text-gray-800">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Main Awards</h3>
                <p className="text-sm text-gray-600">
                  Eligible only for teams attending the DD Robocon event.
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  <li>1st Prize: INR 25,000</li>
                  <li>2nd Prize: INR 15,000</li>
                  <li>3rd Prize: INR 10,000</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Recognition Awards</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  <li>Promising Innovation Award: INR 5,000</li>
                  <li>Best Engineering Application Award: INR 5,000</li>
                  <li>Best Manufacturable Design Award: INR 5,000</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-200 bg-cyan-50 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-cyan-800">How To Enter</h2>
            <div className="mt-4 space-y-3 leading-7 text-gray-700">
              <p>Each participating team must complete and submit both Generative Design tasks.</p>
              <p>Submissions must be based on components or assemblies from the team&apos;s actual DD Robocon 2026 robot design.</p>
              <p>Each team must submit one PPT file with precisely 6 slides following the required structure.</p>
              <p className="font-semibold text-cyan-900">
                Registration is required before the final submission link is shared.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">Task 1</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Lightweight Optimization</h2>
            <p className="mt-4 leading-7 text-gray-700">
              Teams shall select one existing robot component and optimize it using Generative
              Design.
            </p>
            <p className="mt-3 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
              Original Robot Component → GD Study → Optimized Design → Final Submission
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              Suggested applications include manipulator arms, gripper supports, wheel hubs,
              launcher brackets, structural members, end effectors, drive supports, or any
              other relevant robot component.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-slate-900">Required in the PPT</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                  <li>Original component design</li>
                  <li>Final optimized GD part</li>
                  <li>Fusion public link</li>
                  <li>Render images</li>
                  <li>Design description</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Mandatory metrics</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                  {lightweightMetrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Task 2</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Part Consolidation</h2>
            <p className="mt-4 leading-7 text-gray-700">
              Teams shall select one existing robot assembly and redesign it into an integrated
              single-part solution using Generative Design. The minimum requirement is an
              assembly with three or more original parts consolidated into one.
            </p>
            <p className="mt-3 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
              Multi-Part Assembly → GD Study → Integrated Design → Final Submission
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              Suggested applications include end effector systems, sensor mounting assemblies,
              manipulator joints, drive supports, structural interfaces, robotic subassemblies,
              or any other relevant robot assembly.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-slate-900">Required in the PPT</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                  <li>Original assembly</li>
                  <li>Consolidated design</li>
                  <li>Fusion public link</li>
                  <li>Render images</li>
                  <li>Design description</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Mandatory metrics</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                  {consolidationMetrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Submission Requirements</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Slide 1</p>
              <p className="mt-2 font-semibold text-slate-900">Introduction</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Institute Name</li>
                <li>Team Name</li>
                <li>DD Robocon ID</li>
                <li>Team Photo</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Slides 2-3</p>
              <p className="mt-2 font-semibold text-slate-900">Task 1: Lightweight Optimization</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Original component image</li>
                <li>Optimized GD component image</li>
                <li>Mass comparison</li>
                <li>Design explanation</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Slides 4-6</p>
              <p className="mt-2 font-semibold text-slate-900">Task 2 and Fusion Links</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Original assembly image</li>
                <li>Consolidated part image</li>
                <li>Part count comparison</li>
                <li>Design explanation</li>
                <li>Fusion links for both entries and Robot 1 / Robot 2</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="mt-5 space-y-4">
            {faqItems.map((item, index) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">
                  {index + 1}. {item.question}
                </p>
                <p className="mt-2 leading-7 text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Fusion Workshop Series</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-700">Workshop 1</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">10 June 2026, 4:30 PM to 5:30 PM</p>
              <p className="mt-3 text-slate-700">Competition Launch and Submission Guidelines</p>
              <a
                href="https://meet.google.com/wih-bnpz-avm"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-cyan-700 underline"
              >
                Join video call
              </a>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-700">Workshop 2</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">17 June 2026, 4:30 PM to 5:30 PM</p>
              <p className="mt-3 text-slate-700">AI and Generative Design for Robotics Applications</p>
              <a
                href="https://meet.google.com/zke-hdko-wmf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-cyan-700 underline"
              >
                Join video call
              </a>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                <li>Lightweight optimization workflow and component selection</li>
                <li>Preserve geometry, constraints, and load definition</li>
                <li>Part consolidation methods and integrated design strategies</li>
                <li>Manufacturing considerations and Robocon applications</li>
              </ul>
            </div>
          </div>
          <p className="mt-5 text-slate-700">
            For queries, contact {" "}
            <a
              href="mailto:autodesk-partner@curiosity3d.com"
              className="text-cyan-700 underline"
            >
              autodesk-partner@curiosity3d.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default AutodeskFusionAward;