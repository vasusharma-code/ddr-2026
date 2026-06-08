import React, { useId, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

export const Section = ({ children, className = "" }) => (
  <section className={`py-8 sm:py-12 lg:py-20 ${className}`}>{children}</section>
);

export const SectionHeader = ({ eyebrow, title, subtitle, align = "left", className = "" }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
  >
    {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{eyebrow}</p> : null}
    <h2 className={`${eyebrow ? "mt-3" : ""} text-2xl font-bold tracking-normal text-slate-900 sm:text-3xl lg:text-4xl`}>{title}</h2>
    {subtitle ? <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{subtitle}</p> : null}
  </motion.div>
);

export const PageHero = ({ eyebrow, title, subtitle, children, className = "" }) => (
  <div className={`relative overflow-hidden border-b border-slate-200 bg-slate-50 ${className}`}>
    <div className="absolute inset-0 opacity-[0.45] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:44px_44px]" aria-hidden="true" />
    <Container className="relative py-8 sm:py-10 lg:py-12">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-4xl"
      >
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{eyebrow}</p> : null}
        <h1 className={`${eyebrow ? "mt-3" : ""} text-3xl font-bold tracking-normal text-slate-900 sm:text-4xl lg:text-5xl`}>{title}</h1>
        {subtitle ? <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{subtitle}</p> : null}
        {children ? <div className="mt-6">{children}</div> : null}
      </motion.div>
    </Container>
  </div>
);

export const Card = ({ children, className = "", as: Component = motion.div, ...props }) => (
  <Component
    {...props}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className={`rounded-lg border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${className}`}
  >
    {children}
  </Component>
);

export const ButtonLink = ({ href, to, children, variant = "primary", className = "", ...props }) => {
  const base = "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants = {
    primary: "bg-blue-600 text-white shadow-sm hover:bg-blue-700 focus-visible:outline-blue-600",
    secondary: "border border-slate-300 bg-white text-slate-900 hover:border-blue-300 hover:text-blue-700 focus-visible:outline-blue-600",
    gold: "bg-amber-600 text-white shadow-sm hover:bg-amber-700 focus-visible:outline-amber-600",
    dark: "bg-slate-900 text-white shadow-sm hover:bg-slate-800 focus-visible:outline-slate-900",
  };
  const content = (
    <>
      <span>{children}</span>
      <FaArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
    </>
  );

  if (to) {
    return props.LinkComponent ? (
      <props.LinkComponent to={to} className={`${base} ${variants[variant]} ${className}`} {...props}>{content}</props.LinkComponent>
    ) : null;
  }

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {content}
    </a>
  );
};

export const AnnouncementBanner = ({ children, href, variant = "info", className = "" }) => {
  const variants = {
    info: "border-blue-200 bg-blue-50 text-blue-950",
    success: "border-green-200 bg-green-50 text-green-950",
    warning: "border-amber-200 bg-amber-50 text-amber-950",
  };
  const body = (
    <div className={`flex items-center gap-3 rounded-lg border p-4 shadow-sm ${variants[variant]} ${className}`}>
      <FaInfoCircle aria-hidden="true" className="h-5 w-5 shrink-0" />
      <div className="min-w-0 text-sm font-semibold leading-6 sm:text-base">{children}</div>
    </div>
  );
  if (!href) return body;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
      {body}
    </a>
  );
};

export const TimelineCard = ({ displayDate, date, description, status = "Upcoming" }) => (
  <Card className="flex h-full gap-4 p-5">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-slate-900 text-2xl font-bold text-white shadow-sm">
      {displayDate}
    </div>
    <div className="min-w-0">
      <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">{status}</span>
      <div className="mt-3 text-base font-bold leading-6 text-slate-900">{date}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  </Card>
);

export const DownloadCard = ({ title, description, href, children }) => (
  <Card className="p-5">
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-700">
        <FaDownload aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        {description ? <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p> : null}
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 underline-offset-4 hover:underline">
            {children || "Download"}
            <FaExternalLinkAlt aria-hidden="true" className="h-3 w-3" />
          </a>
        ) : null}
      </div>
    </div>
  </Card>
);

export const VideoCard = ({ title, src, link }) => (
  <Card className="overflow-hidden p-4 sm:p-6">
    <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
    <div className="mt-5 aspect-video overflow-hidden rounded-lg border border-slate-200 bg-slate-900 shadow-sm">
      <iframe
        width="100%"
        height="100%"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
    {link ? <div className="mt-4 text-center">{link}</div> : null}
  </Card>
);

export const FAQAccordion = ({ items }) => (
  <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
    {items.map((item, index) => (
      <FAQItem key={item.question} item={item} index={index} />
    ))}
  </div>
);

const FAQItem = ({ item, index }) => {
  const [open, setOpen] = useState(index === 0);
  const panelId = useId();
  return (
    <div>
      <button
        type="button"
        className="flex min-h-11 w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-900 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-blue-600"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{index + 1}. {item.question}</span>
        <span aria-hidden="true" className="text-xl text-blue-700">{open ? "-" : "+"}</span>
      </button>
      <motion.div
        id={panelId}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 leading-7 text-slate-600">{item.answer}</p>
      </motion.div>
    </div>
  );
};