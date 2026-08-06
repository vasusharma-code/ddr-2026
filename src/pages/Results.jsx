import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { FaArrowRight, FaCrown, FaDownload, FaHandshake, FaMedal, FaRocket, FaStar, FaTrophy } from "react-icons/fa";
import {
  Card,
  Container,
  PageHero,
  Section,
  SectionHeader,
  fadeUp,
  staggerContainer,
} from "../components/DesignSystem";
import TournamentBracket from "../components/TournamentBracket";

const RESULT_PDF = "/result-dd-robocon-2026.pdf";
const AWARDS_DOC = "/awards-dd-robocon-2026.docx";

/* ---- Top three ---- */
const PODIUM = [
  {
    rank: "Winner",
    headline: "Prof. Balakrishnan Memorial Award",
    team: "LD College of Engineering, Ahmedabad, Gujarat",
    accent: "gold",
    medal: FaCrown,
    ring: "ring-amber-400/40",
    chip: "bg-amber-500/10 text-amber-700",
    bar: "bg-amber-500",
    icon: "text-amber-500",
    featured: true,
    orderClass: "lg:order-2",
  },
  {
    rank: "First Runner Up",
    team: "MIT World Peace University, Pune, Maharashtra",
    accent: "silver",
    medal: FaMedal,
    ring: "ring-slate-400/40",
    chip: "bg-slate-500/10 text-slate-700",
    bar: "bg-slate-400",
    icon: "text-slate-500",
    orderClass: "lg:order-3",
  },
  {
    rank: "Second Runner Up",
    team: "Institute of Technology, Nirma University",
    accent: "bronze",
    medal: FaMedal,
    ring: "ring-amber-700/20",
    chip: "bg-amber-700/10 text-amber-800",
    bar: "bg-amber-700",
    icon: "text-amber-700",
    orderClass: "lg:order-1",
  },
];

/* ---- Special awards ---- */
const SPECIAL_AWARDS = [
  {
    title: "Best Report Award",
    sponsor: "Sponsored & delivered by Prof. S.K. Saha, IIT Delhi",
    prize: "₹10,000 + book “Introduction to Robotics”",
    winner: "SCTR's Pune Institute of Computer Technology, Maharashtra",
    icon: FaStar,
  },
  {
    title: "IHFC Award",
    sponsor: "Sponsored by IHFC, delivered by Mr. Rohit Batra, IHFC IIT Delhi",
    prize: "₹25,000",
    winner: "Institute of Technology, Nirma University",
    icon: FaHandshake,
  },
];

const READY_INTERNS = [
  "Institute of Technology, Nirma University",
  "L.D. College of Engineering, Ahmedabad, Gujarat",
  "PCET's Pimpri Chinchwad College of Engineering, Pune",
  "MIT World Peace University, Pune",
  "Gujarat Technological University",
  "Government College of Engineering Aurangabad, Chhatrapati Sambhajinagar",
  "SRM University of Science and Technology",
  "Padmabhooshan Vasantdada Patil Institute of Technology, Bavdhan, Pune",
  "Sardar Vallabhbhai National Institute of Technology, Surat",
  "SCTR's Pune Institute of Computer Technology",
  "BRACT's Vishwakarma Institute of Technology, Pune",
  "Marathwada Mitra Mandal's College of Engineering",
];

/* ---- Sponsor awards ---- */
const MATHWORKS_AWARDS = [
  { place: "First", prize: "₹35,000", winner: "K J Somaiya College of Engineering, Mumbai" },
  { place: "Second", prize: "₹20,000", winner: "BRACT's Vishwakarma Institute of Technology, Pune" },
  { place: "Third", prize: "₹15,000", winner: "Padmabhooshan Vasantdada Patil Institute of Technology, Bavdhan, Pune" },
];

const AUTODESK_AWARDS = [
  { title: "Autodesk Fusion Award", tier: "Gold", deliveredBy: "Mr. Raunaq Dua", prize: "₹25,000", winner: "COEP Technological University, Pune" },
  { title: "Autodesk Fusion Award", tier: "Silver", deliveredBy: "Mr. Raunaq Dua", prize: "₹15,000", winner: "Gujarat Technological University" },
  { title: "Autodesk Fusion Award", tier: "Bronze", deliveredBy: "Mr. Raunaq Dua", prize: "₹10,000", winner: "Krishna Institute of Engineering and Technology (KIET), Ghaziabad" },
  { title: "Autodesk Promising Innovation Award", tier: null, deliveredBy: "Mr. Pratyush", prize: "₹5,000", winner: "Parul Institute of Technology" },
  { title: "Autodesk Best Engineering Application Award", tier: null, deliveredBy: "Mr. Pratyush", prize: "₹5,000", winner: "Marathwada Mitra Mandal's College of Engineering, Pune" },
  { title: "Autodesk Best Manufacturing Design Award", tier: null, deliveredBy: "Mr. Pratyush", prize: "₹5,000", winner: "Govt. College of Engineering Aurangabad, Chhatrapati Sambhajinagar" },
];

const tierStyle = (tier) => {
  switch (tier) {
    case "Gold":
      return "bg-amber-500/10 text-amber-700 ring-amber-500/30";
    case "Silver":
      return "bg-slate-400/10 text-slate-600 ring-slate-400/30";
    case "Bronze":
      return "bg-orange-500/10 text-orange-700 ring-orange-500/30";
    default:
      return "bg-blue-500/10 text-blue-700 ring-blue-500/30";
  }
};

const Results = () => {
  const location = useLocation();

  useEffect(() => {
    const requestedSection = new URLSearchParams(location.search).get("section");
    if (requestedSection !== "results") return;

    window.requestAnimationFrame(() => {
      document.getElementById("results")?.scrollIntoView({ block: "start" });
    });
  }, [location.search]);

  return (
    <div id="results" className="page-surface scroll-mt-20 text-slate-900">
      <PageHero
        eyebrow="National DD-Robocon 2026 · IIT Delhi · July 4–5"
        title="Results & Awards"
        subtitle="The national championship has concluded. Explore the champions, the full knockout bracket, and every award winner from DD-Robocon India 2026."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={RESULT_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <FaDownload aria-hidden="true" className="h-3.5 w-3.5" /> Download Result (PDF)
          </a>
          <a
            href={AWARDS_DOC}
            download
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:text-blue-700"
          >
            <FaDownload aria-hidden="true" className="h-3.5 w-3.5" /> Download Awards List (DOCX)
          </a>
        </div>
      </PageHero>

      {/* Podium */}
      <Section className="bg-white">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="The Champions"
            title="Top Three of DD-Robocon India 2026"
            subtitle="From twelve national finalists to a single champion — the podium at IIT Delhi."
            className="mx-auto"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid grid-cols-1 items-end gap-6 md:grid-cols-3"
          >
            {PODIUM.map((p) => {
              const Icon = p.medal;
              return (
                <motion.div
                  key={p.rank}
                  variants={fadeUp}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className={`relative flex flex-col rounded-xl border bg-white p-6 text-center shadow-sm ring-1 ${p.ring} ${p.orderClass} ${
                    p.featured ? "md:-mt-6 md:scale-[1.04] md:shadow-lg" : ""
                  }`}
                >
                  <span className={`mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm ring-1 ${p.ring} ${p.icon}`}>
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </span>
                  <span className={`mx-auto inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${p.chip}`}>
                    {p.rank}
                  </span>
                  {p.headline ? (
                    <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-500">{p.headline}</p>
                  ) : null}
                  <h3 className="mt-2 text-lg font-bold leading-snug text-slate-900">{p.team}</h3>
                  <span className={`mt-5 h-1.5 w-full rounded-full ${p.bar}`} aria-hidden="true" />
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </Section>

      {/* Bracket */}
      <Section className="bg-slate-50">
        <Container>
          <SectionHeader
            eyebrow="Knockout Stage"
            title="The Road to the Championship"
            subtitle="Twelve teams. Four rounds. One national champion. Follow each match-up from the Pre Quarter Finals to the Final."
          />
          <div className="mt-10 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
            <TournamentBracket />
          </div>
        </Container>
      </Section>

      {/* Special awards */}
      <Section className="bg-white">
        <Container>
          <SectionHeader
            eyebrow="Recognition"
            title="Special Awards"
            subtitle="Honouring excellence across engineering, documentation, and innovation — presented by IIT Delhi and IHFC."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {SPECIAL_AWARDS.map((award) => {
              const Icon = award.icon;
              return (
                <motion.div key={award.title} variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
                  <Card className="h-full p-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">{award.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-500">{award.sponsor}</p>
                    <p className="mt-3 text-sm font-semibold text-slate-700">Prize: <span className="text-slate-900">{award.prize}</span></p>
                    <div className="mt-5 rounded-md border border-slate-200 bg-slate-50 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Recipient</p>
                      <p className="mt-1 text-base font-bold text-slate-900">{award.winner}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* IHFC READY interns */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
          >
            <div className="flex items-start gap-3 border-b border-slate-100 bg-slate-50/60 p-5 sm:p-6">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                <FaRocket aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">IHFC READY Internship Programme — Direct Selection</h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Teams selected for direct entry into the IHFC READY internship programme, alongside the IHFC Award.
                </p>
              </div>
            </div>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 gap-x-6 gap-y-1 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-3"
            >
              {READY_INTERNS.map((team) => (
                <motion.li
                  key={team}
                  variants={fadeUp}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex items-start gap-2 py-2 text-sm leading-6 text-slate-700"
                >
                  <FaArrowRight aria-hidden="true" className="mt-1 h-3 w-3 shrink-0 text-blue-500" />
                  <span>{team}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </Container>
      </Section>

      {/* Sponsor awards */}
      <Section className="bg-slate-50">
        <Container>
          <SectionHeader
            eyebrow="Sponsor Awards"
            title="MathWorks & Autodesk Honours"
            subtitle="Celebrating the best in modelling, simulation, and design — presented by our sponsors."
          />

          {/* MathWorks */}
          <div className="mt-10">
            <div className="flex items-center gap-2">
              <FaTrophy aria-hidden="true" className="h-5 w-5 text-amber-500" />
              <h3 className="text-xl font-bold text-slate-900">MathWorks Modelling Award</h3>
              <span className="text-sm text-slate-400">· Delivered by the MathWorks team</span>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"
            >
              {MATHWORKS_AWARDS.map((award) => {
                const tone =
                  award.place === "First"
                    ? "border-amber-300 ring-1 ring-amber-200"
                    : "border-slate-200";
                return (
                  <motion.div key={award.place} variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
                    <Card className={`h-full p-6 ${tone}`}>
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm font-bold uppercase tracking-wide text-blue-700">{award.place}</span>
                        <span className="text-sm font-bold text-slate-900">{award.prize}</span>
                      </div>
                      <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-slate-400">Winner</p>
                      <p className="mt-1 text-base font-bold leading-snug text-slate-900">{award.winner}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Autodesk */}
          <div className="mt-12">
            <div className="flex items-center gap-2">
              <FaTrophy aria-hidden="true" className="h-5 w-5 text-amber-500" />
              <h3 className="text-xl font-bold text-slate-900">Autodesk Awards</h3>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {AUTODESK_AWARDS.map((award) => (
                <motion.div key={`${award.title}-${award.tier || "x"}`} variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
                  <Card className="flex h-full flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-base font-bold leading-snug text-slate-900">{award.title}</h4>
                      {award.tier ? (
                        <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ring-1 ${tierStyle(award.tier)}`}>
                          {award.tier}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-500">Delivered by {award.deliveredBy} · Prize {award.prize}</p>
                    <div className="mt-auto pt-4">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Winner</p>
                      <p className="mt-1 text-sm font-bold leading-snug text-slate-900">{award.winner}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Closing */}
      <Section className="bg-white">
        <Container className="max-w-3xl text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-500 ring-1 ring-amber-200">
              <FaTrophy aria-hidden="true" className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">Congratulations to all winners &amp; participants</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Thank you to every team, mentor, and sponsor who made DD-Robocon India 2026 unforgettable.
              The champion will go on to represent India at the ABU Robocon 2026 in Hong Kong.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={RESULT_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                <FaDownload aria-hidden="true" className="h-3.5 w-3.5" /> Official Result Sheet
              </a>
              <a
                href={AWARDS_DOC}
                download
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:text-blue-700"
              >
                <FaDownload aria-hidden="true" className="h-3.5 w-3.5" /> Awards &amp; Recognition (DOCX)
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};

export default Results;
