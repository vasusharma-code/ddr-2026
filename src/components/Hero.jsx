import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import stattic from "../assets/Static.png";
import image1 from "../assets/Image1.jpg";
import image2 from "../assets/Image 2.jpg";
import image3 from "../assets/Image 3.jpg";
import poster from "../assets/Poster.jpeg";
import { AnnouncementBanner, ButtonLink, Card, Container, Section, SectionHeader, TimelineCard, fadeUp, staggerContainer } from "./DesignSystem";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const dateEvents = [
  {
    newDate: (
      <>
        <span className="line-through text-slate-400">Till-31 Dec-2025</span>
        <br />
        <span className="font-bold text-slate-900">Till-15 Jan-2026</span>
      </>
    ),
    displayDate: "9",
    description: "Pre-registration form: DD-Robocon 2026",
  },
  {
    newDate: (
      <>
        <span className="line-through text-slate-400">Till-31 Jan-2026</span>
        <br />
        <span className="font-bold text-slate-900">Till-18 Feb-2026</span>
      </>
    ),
    displayDate: "18",
    description: "Submission of Stage 1 (concept note and idea solution)",
  },
  {
    newDate: "10-Mar-2026",
    displayDate: "10",
    description: "Shortlisting for Stage 1",
  },
  {
    newDate: (
      <>
        <span className="font-bold block text-slate-900 text-base md:text-lg mb-1">15-May-2026 (No Fee)</span>
        <span className="font-semibold block text-slate-900 text-sm md:text-base">20-May-2026 (Late fee Rs.5000 + 18% GST)</span>
      </>
    ),
    displayDate: "15",
    description: "Deadline for Stage 2 (video submission)",
  },
  {
    newDate: "31-May-2026",
    displayDate: "31",
    description: "Shortlisting for Stage 2",
  },
  {
    date: "2-5 July-2026",
    displayDate: "2",
    description: "DD-Robocon – The National Robotics Championship 2026 Final Event",
  },
];

const Hero = () => {
  return (
    <div className="page-surface">
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="absolute inset-0 opacity-70 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:42px_42px]" aria-hidden="true" />
        <Container className="relative grid min-h-[calc(100vh-76px)] items-center gap-10 py-12 lg:grid-cols-[1fr_0.92fr] lg:py-16">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} transition={{ duration: 0.4 }} className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Win a Chance to Represent India in Hong Kong!
            </motion.p>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.4 }} className="mt-5 text-4xl font-bold tracking-normal text-slate-900 sm:text-5xl lg:text-6xl">
              Introducing DD Robocon India 2026
            </motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.4 }} className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              DD Robocon India 2026, organized by IIT Delhi, Prasar Bharati, and
              STPI, is the national stage of the prestigious ABU Robocon 2026.
              This thrilling event challenges robots to complete complex tasks
              against the clock while fostering lasting bonds among visionary
              young minds. Join us as we propel engineering and broadcasting
              technologies to new heights. Welcome to the future of innovation!
            </motion.p>
            <motion.p variants={fadeUp} transition={{ duration: 0.4 }} className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
              Showcase your engineering prowess on the global stage! The winner of
              DD Robocon India 2026 will proudly represent the nation in the
              Asia-Pacific Robocon competition, hosted in Hong Kong. Step up to
              the challenge, and let your innovation shine on an international
              platform!
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.4 }} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="https://drive.google.com/file/d/10RstFP8w52A50hK2Y8PvSjbJ_71ASYDe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                🎥 Watch DD ROBOCON Promo Video
              </ButtonLink>
              <ButtonLink href="https://drive.google.com/file/d/1200IWB_iwe2yZF9JuzzGdkh4lIEssx7v/view?usp=sharing" target="_blank" rel="noopener noreferrer" variant="secondary">
                🎥 Watch DD ROBOCON Promo Video(Hindi)
              </ButtonLink>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="min-w-0">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-xl">
              <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} loop={false} className="h-[280px] w-full rounded-md sm:h-[360px] lg:h-[460px]">
                <SwiperSlide>
                  <img src={image1} alt="Robot Basketball Match" className="h-full w-full object-cover" loading="eager" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image2} alt="Robot Court Setup" className="h-full w-full object-cover" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image3} alt="Competing Robots" className="h-full w-full object-cover" loading="lazy" />
                </SwiperSlide>
              </Swiper>
            </div>
          </motion.div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.4fr] lg:items-start">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }}>
              <img src={stattic} alt="Stationary Visual" className="mx-auto w-full max-w-sm rounded-lg object-contain mix-blend-multiply" loading="lazy" />
            </motion.div>

            <div>
              <div className="space-y-4">
                <AnnouncementBanner href="https://drive.google.com/file/d/1hI60BsF9FzvkiyjQ1KZN8WdP_xXzbYn8/view?usp=sharing" variant="warning">
                  📢Result of Stage-II Out Now!
                </AnnouncementBanner>
              </div>

              <SectionHeader title="Important Dates" subtitle="" className="mt-10" />
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {dateEvents.map((event, index) => (
                  <TimelineCard key={index} displayDate={event.displayDate} date={event.newDate || event.date} description={event.description} status={index < 2 ? "Updated" : "Upcoming"} />
                ))}
              </motion.div>

              <div className="mt-8 rounded-lg border border-red-200 bg-red-50 p-5 shadow-sm">
                <div className="text-gray-800 font-semibold mb-1">
                  Have you missed pre-registration to submit proposal in Stage I?
                </div>
                <div className="text-gray-700 mb-2 leading-7">
                  To provide maximum opportunity to participate in DD-Robocon 2026, the organizers have kindly agreed to accept submission of Stage I with a fee of <span className="font-bold">Rs. 5,000 + 18% GST</span> per non-pre-registered team. Pre-registered teams need <span className="font-bold">NOT PAY</span> to submit Stage I proposal.
                </div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScXWMHv4tI9WNenQ6ulciEF-_6f_Wl1CbWlzTVf_Jd4IrIdqA/viewform?usp=sharing&ouid=104266911694900133464" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center justify-center rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700">
                  Submission of Stage 1 (concept note and idea solution)
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <Card className="p-6 sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                <FaPlayCircle aria-hidden="true" className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-3xl font-bold text-slate-900">Technical Doubts?</h2>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Teams are encouraged to ask technical doubts regarding the rulebook and theme on the international ABU Robocon's FAQ section.
              </p>
              <a href="https://app7.rthk.hk/special/aburobocon2026/faq.php" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
                Visit International Robocon FAQ
              </a>
            </Card>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }} className="overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-sm transition hover:shadow-md">
              <img src={poster} alt="DD Robocon Poster" className="h-full w-full rounded-md object-cover" loading="lazy" />
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Hero;