import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaCrown } from "react-icons/fa";
import { fadeUp } from "./DesignSystem";

/*
 * DD-Robocon 2026 — National knockout bracket.
 * Four rounds: Pre Quarter Finals -> Quarter Finals -> Semi Finals -> Final.
 * Teams marked `seed` were shortlisted directly to the Quarter Finals based on
 * their league match total score (denoted * on the official result sheet).
 */
const ROUNDS = [
  {
    label: "Pre Quarter Finals",
    matches: [
      {
        id: "M1",
        top: { name: "Marathwada Mitra Mandal's College of Engineering", winner: false },
        bottom: { name: "Gujarat Technological University", winner: true },
      },
      {
        id: "M2",
        top: { name: "Government College of Engineering Aurangabad, Chhatrapati Sambhajinagar", winner: false },
        bottom: { name: "BRACT's Vishwakarma Institute of Technology, Pune", winner: true },
      },
      {
        id: "M3",
        top: { name: "SCTR's Pune Institute of Computer Technology", winner: false },
        bottom: { name: "SRM University of Science and Technology", winner: true },
      },
      {
        id: "M4",
        top: { name: "Padmabhooshan Vasantdada Patil Institute of Technology, Bavdhan, Pune", winner: false },
        bottom: { name: "Sardar Vallabhbhai National Institute of Technology, Surat", winner: true },
      },
    ],
  },
  {
    label: "Quarter Finals",
    matches: [
      {
        id: "Q1",
        top: { name: "MIT World Peace University, Pune", winner: true, seed: true },
        bottom: { name: "Gujarat Technological University", winner: false },
      },
      {
        id: "Q2",
        top: { name: "PCET's Pimpri Chinchwad College of Engineering, Pune", winner: true, seed: true },
        bottom: { name: "BRACT's Vishwakarma Institute of Technology, Pune", winner: false },
      },
      {
        id: "Q3",
        top: { name: "LD College of Engineering, Ahmedabad", winner: true, seed: true },
        bottom: { name: "SRM University of Science and Technology", winner: false },
      },
      {
        id: "Q4",
        top: { name: "Institute of Technology, Nirma University", winner: true, seed: true },
        bottom: { name: "Sardar Vallabhbhai National Institute of Technology, Surat", winner: false },
      },
    ],
  },
  {
    label: "Semi Finals",
    matches: [
      {
        id: "S1",
        top: { name: "MIT World Peace University, Pune", winner: true },
        bottom: { name: "Institute of Technology, Nirma University", winner: false },
      },
      {
        id: "S2",
        top: { name: "PCET's Pimpri Chinchwad College of Engineering, Pune", winner: false },
        bottom: { name: "LD College of Engineering, Ahmedabad", winner: true },
      },
    ],
  },
  {
    label: "Final",
    matches: [
      {
        id: "F1",
        top: { name: "MIT World Peace University, Pune", winner: false },
        bottom: { name: "LD College of Engineering, Ahmedabad", winner: true },
        champion: "LD College of Engineering, Ahmedabad",
      },
    ],
  },
];

const FLOW_EDGES = [
  { from: "M1-bottom", to: "Q1-bottom" },
  { from: "M2-bottom", to: "Q2-bottom" },
  { from: "M3-bottom", to: "Q3-bottom" },
  { from: "M4-bottom", to: "Q4-bottom" },
  { from: "Q1-top", to: "S1-top" },
  { from: "Q4-top", to: "S1-bottom" },
  { from: "Q2-top", to: "S2-top" },
  { from: "Q3-top", to: "S2-bottom" },
  { from: "S1-top", to: "F1-top" },
  { from: "S2-bottom", to: "F1-bottom", champion: true },
];

const TeamRow = ({ team, rowRef }) => {
  const champion = team.winner && team.champion;
  return (
    <div
      ref={rowRef}
      className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[12.5px] leading-tight transition sm:text-[13.5px] ${
        team.winner
          ? champion
            ? "bg-amber-50 text-amber-900"
            : "bg-blue-50 text-blue-900"
          : "text-slate-500"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 shrink-0 rounded-full ${
          team.winner ? (champion ? "bg-amber-500" : "bg-blue-500") : "bg-slate-300"
        }`}
      />
      <span
        title={team.name}
        className={`clamp-2 min-w-0 flex-1 ${team.winner ? "font-bold" : "font-medium"}`}
      >
        {team.name}
      </span>
      {team.seed ? (
        <span
          className="shrink-0 rounded bg-slate-900/5 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-slate-500"
          title="Shortlisted directly to Quarter Finals based on league match total score"
        >
          QF*
        </span>
      ) : null}
      {team.winner ? (
        <span
          aria-hidden="true"
          className={`shrink-0 text-[10px] font-extrabold uppercase tracking-wide ${
            champion ? "text-amber-600" : "text-blue-500"
          }`}
        >
          {champion ? "Champ" : "Adv"}
        </span>
      ) : null}
    </div>
  );
};

const MatchCard = ({ match, registerRow }) => {
  const topTeam = { ...match.top, champion: Boolean(match.champion) && match.top.winner };
  const bottomTeam = { ...match.bottom, champion: Boolean(match.champion) && match.bottom.winner };
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`rounded-lg border bg-white p-2 shadow-sm ${
        match.champion ? "border-amber-300 ring-1 ring-amber-200 champion-glow" : "border-slate-200"
      }`}
    >
      <div className="flex flex-col gap-1">
        <TeamRow team={topTeam} rowRef={registerRow(`${match.id}-top`)} />
        <div className="flex items-center gap-2 px-2" aria-hidden="true">
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">vs</span>
          <span className="h-px flex-1 bg-slate-100" />
        </div>
        <TeamRow team={bottomTeam} rowRef={registerRow(`${match.id}-bottom`)} />
      </div>
      {match.champion ? (
        <div className="mt-2 flex items-center justify-center gap-1.5 rounded-md bg-amber-500 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
          <FaCrown aria-hidden="true" className="h-3 w-3" /> National Champion
        </div>
      ) : null}
    </motion.div>
  );
};

const RoundColumn = ({ round, index, registerRow }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.45, delay: index * 0.12, ease: "easeOut" }}
    className="relative z-10 flex w-full flex-col lg:min-h-[650px] lg:w-auto lg:min-w-[220px] lg:max-w-[240px] lg:flex-1"
  >
    <div className="mb-3 flex flex-wrap items-center gap-2">
      <span className="rounded-full bg-slate-900 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
        {round.label}
      </span>
      <span className="text-[11px] font-medium text-slate-400">
        {round.matches.length} {round.matches.length === 1 ? "match" : "matches"}
      </span>
    </div>
    <motion.div
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="flex flex-1 flex-col gap-2.5 lg:justify-around"
    >
      {round.matches.map((match) => (
        <MatchCard key={match.id} match={match} registerRow={registerRow} />
      ))}
    </motion.div>
  </motion.div>
);

const ChevronDivider = () => (
  <div className="flex items-center justify-center py-1 lg:hidden" aria-hidden="true">
    <FaChevronDown className="h-4 w-4 text-slate-300 lg:hidden" />
  </div>
);

const FlowConnectors = ({ canvasRef, rowNodes }) => {
  const [paths, setPaths] = useState([]);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const measure = () => {
      const canvasRect = canvas.getBoundingClientRect();
      const nextPaths = FLOW_EDGES.map((edge) => {
        const source = rowNodes.current[edge.from];
        const target = rowNodes.current[edge.to];
        if (!source || !target) return null;

        const sourceRect = source.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const startX = sourceRect.right - canvasRect.left;
        const startY = sourceRect.top + sourceRect.height / 2 - canvasRect.top;
        const endX = targetRect.left - canvasRect.left;
        const endY = targetRect.top + targetRect.height / 2 - canvasRect.top;
        const bend = Math.max(24, (endX - startX) * 0.48);

        return {
          ...edge,
          d: `M ${startX} ${startY} C ${startX + bend} ${startY}, ${endX - bend} ${endY}, ${endX} ${endY}`,
        };
      }).filter(Boolean);
      setPaths(nextPaths);
    };

    const animationFrame = requestAnimationFrame(measure);
    const animationTimer = window.setTimeout(measure, 900);
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(canvas);
    Object.values(rowNodes.current).forEach((node) => resizeObserver.observe(node));

    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(animationTimer);
      resizeObserver.disconnect();
    };
  }, [canvasRef, rowNodes]);

  return (
    <svg className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full overflow-visible lg:block" aria-hidden="true">
      <defs>
        <marker id="bracket-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L7,3 z" fill="#2563eb" />
        </marker>
        <marker id="champion-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L7,3 z" fill="#d97706" />
        </marker>
      </defs>
      {paths.map((path) => (
        <g key={`${path.from}-${path.to}`}>
          <path d={path.d} fill="none" stroke="#cbd5e1" strokeWidth="2" />
          <path
            d={path.d}
            fill="none"
            stroke={path.champion ? "#d97706" : "#2563eb"}
            strokeWidth="2.5"
            strokeLinecap="round"
            markerEnd={path.champion ? "url(#champion-arrow)" : "url(#bracket-arrow)"}
            className="bracket-flow-line"
          />
        </g>
      ))}
    </svg>
  );
};

const TournamentBracket = () => {
  const canvasRef = useRef(null);
  const rowNodes = useRef({});
  const registerRow = useCallback(
    (key) => (node) => {
      if (node) rowNodes.current[key] = node;
    },
    []
  );

  return (
    <div>
      <div className="results-scroll overflow-x-auto pb-3">
        <div ref={canvasRef} className="relative flex flex-col gap-3 lg:min-w-[1120px] lg:flex-row lg:items-stretch lg:gap-12">
          <FlowConnectors canvasRef={canvasRef} rowNodes={rowNodes} />
          {ROUNDS.map((round, index) => (
            <React.Fragment key={round.label}>
              <RoundColumn round={round} index={index} registerRow={registerRow} />
              {index < ROUNDS.length - 1 ? <ChevronDivider /> : null}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-start gap-2 text-xs leading-6 text-slate-500">
        <span className="mt-2.5 hidden h-0.5 w-8 shrink-0 bg-blue-600 lg:block" aria-hidden="true" />
        <p>
          Follow the animated blue paths to see each winning team advance. The amber path marks the
          championship run. <span className="font-semibold text-slate-600">QF*</span> identifies teams
          shortlisted directly to the Quarter Finals based on league match total score.
        </p>
      </div>
    </div>
  );
};

export default TournamentBracket;
