import React from "react";
import { Link } from "react-router-dom";
import mathworksLogo from "../assets/MathLogo.png";
import autodeskLogo from "../assets/autodesk-logo-primary-rgb-white-small.png";
import fsmLogo from "../assets/FSMLogo.png";
import ihfcLogo from "../assets/IHFCLogo.png";
import namtechLogo from "../assets/NamtechLogo.png";
import { Container, PageHero, Section } from "../components/DesignSystem";

const Sponsorship = () => (
  <div className="page-surface">
    <PageHero title="DD Robocon 2026 Sponsorship" />
    <Section>
      <Container className="space-y-10">
    
    {/* About Knowledge Partners */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-purple-700 mb-3 uppercase tracking-wide">About Knowledge Partners</h2>
      <div className="flex flex-col md:flex-row gap-8 mb-6">
        {/* IHFC Section */}
        <div className="flex flex-col items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center flex-1">
          <img
            src={ihfcLogo}
            alt="IHFC"
            className="object-contain h-20 w-32 mr-4"
            style={{ minWidth: "80px" }}
          />
          <p className="text-gray-700 leading-relaxed font-medium">
            The I-Hub Foundation for Cobotics (IHFC) is the TIH
            of IIT Delhi in partnership with the Department of
            Science and Technology (DST), Government of India,
            under the National Mission on Interdisciplinary
            Cyber Physical Systems. Founded in June 2020 as a
            section 8 company, IHFC focuses on R&amp;D,
            entrepreneurship, skills training, and international
            collaborations in the areas of Medical, Agriculture,
            Industry, and Defence. It combines expertise from
            academia, government, and industry to drive
            innovation. IHFC supports and nurtures young
            minds in the fields of deeptech, AI, and robotics.
          </p>
        </div>
        {/* FSM Section */}
        <div className="flex flex-col items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center flex-1">
          <img
            src={fsmLogo}
            alt="FSM"
            className="object-contain h-20 w-32 mr-4"
            style={{ minWidth: "80px" }}
          />
          <p className="text-gray-700 leading-relaxed font-medium">
            Indian Institute of Technology Delhi (IITD) and
            Automation Industry Association (AIA) partnered in
            May 2017 to establish a center under the auspices of
            the Samarth Udyog initiative—a project of the
            Ministry of Heavy Industries (MHI). The center,
            known as the Foundation for Smart Manufacturing
            (FSM), supports the development of technologies
            for the effective adoption and implementation of
            smart manufacturing concepts.
          </p>
        </div>
      </div>
    </section>
    
    {/* Welcome Section */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-green-700 mb-3 uppercase tracking-wide">WELCOME TO DD-ROBOCON 2026</h2>
      <p className="text-gray-700 mb-2 font-semibold">Pioneering Innovation in Robotics and Engineering</p>
      <p className="text-gray-700 mb-2">
        DD-Robocon 2026 (The National Robotics Championship) is India’s premier robotics competition, bringing together the brightest minds from across the nation to design, innovate, and compete in a thrilling showcase of engineering excellence.
      </p>
      <p className="text-gray-700 mb-2">
        This year’s theme, “Kung Fu Quest,” symbolizes the journey of a martial-arts disciple striving toward mastery through discipline, strategy, teamwork, and harmony. It fuses traditional Chinese martial arts culture with advanced robotics—inviting teams to explore not only mechanical and electronic design, but also intelligent coordination, adaptability, and strategic execution.
      </p>
    </section>
    
    {/* Event Details */}
    <section className="mb-10">
      <h3 className="text-xl font-bold text-blue-600 mb-2 uppercase tracking-wide">EVENT DETAILS</h3>
      <ul className="list-disc ml-6 text-gray-700 mb-2 font-medium">
        <li>National Finals: 2nd–5th July 2026</li>
        <li>Venue: IIT Delhi, New Delhi</li>
      </ul>
      <p className="text-gray-700 mb-2">
        Indian Institute of Technology Delhi (IITD) and the Automation Industry Association (AIA) partnered in May 2017 to establish a center under the Samarth Udyog initiative, a project of the Ministry of Heavy Industries (MHI). The center, known as the Foundation for Smart Manufacturing (FSM), supports the development and adoption of smart manufacturing concepts and advanced technologies in industry.
      </p>
      <p className="text-gray-700 mb-2">
        The winning team will represent India at the prestigious international competition ABU Robocon 2026, to be held in Hong Kong on 23 August 2026, bringing global recognition to their innovative engineering and design.
      </p>
      <h4 className="text-lg font-bold text-blue-600 mt-4 mb-2 uppercase tracking-wide">Event Reach</h4>
      <ul className="list-disc ml-6 text-gray-700 font-medium">
        <li>Colleges Participating: 75+ top institutions from India.</li>
        <li>Expected Attendees: 1,000+ students, professors, and industry experts.</li>
        <li>Media Coverage: National TV (Doordarshan) and other digital platforms and social media.</li>
      </ul>
    </section>
    
    {/* Why Sponsor */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-yellow-600 mb-3 uppercase tracking-wide">Why Sponsor DD-Robocon 2026?</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-2 font-medium">
        <li>Unparalleled Brand Visibility: Reach a diverse audience, including leading academic institutions, professors, researchers, students, industry experts, and media outlets.</li>
        <li>Foster Innovation: Be part of a transformative event that inspires the next generation of engineers and roboticists.</li>
        <li>Recruit Top Talent: Engage with some of India's brightest minds and future innovators.</li>
        <li>Showcase Your Commitment: Demonstrate your organization's dedication to advancing science, technology, and innovation in India.</li>
      </ul>
    </section>

    {/* MathWorks Modeling Award CTA */}
    <section className="mb-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-blue-700 mb-3 uppercase tracking-wide">MathWorks Modeling Award</h2>
      <p className="text-gray-700 mb-2">
        Learn how teams can participate in the MathWorks Modeling Award 2026 and submit their Phase 1 report by June 14, 2026.
      </p>
      <p className="text-gray-700 mb-4">
        Click below to read the complete details and submission process.
      </p>
      <Link to="/mathworks" className="inline-flex min-h-11 items-center rounded-md bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700">MathWorks Modeling Award Details</Link>
    </section>

    <section className="mb-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-cyan-700 mb-3 uppercase tracking-wide">Autodesk Fusion Award</h2>
      <p className="text-gray-700 mb-2">
        Explore the Autodesk Fusion Generative Design Challenge 2026, including registration, awards, task structure, PPT requirements, and workshop schedule.
      </p>
      <p className="text-gray-700 mb-4">
        Click below to read the complete challenge details and access the official registration link.
      </p>
      <Link to="/autodesk-fusion-award" className="inline-flex min-h-11 items-center rounded-md bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700">Autodesk Fusion Award Details</Link>
    </section>

    {/* Sponsorship Matrix */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-purple-600 mb-3 uppercase tracking-wide">DD Robocon 2026 Sponsorship Matrix</h2>
      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
          <thead className="bg-blue-100 text-gray-900">
            <tr>
              <th className="border border-gray-300 px-3 py-3 font-semibold">Item Code</th>
              <th className="border border-gray-300 px-3 py-3 font-semibold">Opportunity</th>
              <th className="border border-gray-300 px-3 py-3 font-semibold">Platinum</th>
              <th className="border border-gray-300 px-3 py-3 font-semibold">Gold</th>
              <th className="border border-gray-300 px-3 py-3 font-semibold">Silver</th>
              <th className="border border-gray-300 px-3 py-3 font-semibold">Bronze</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["RCON 1", "Link to Company website through Competition website", "Yes", "Yes", "Yes", "Yes"],
              ["RCON 2", "Promotional E-mail Communication to all registered Members", "Yes", "Yes", "Yes", "Yes"],
              ["RCON 3", "Stall to display products on 4-5 July", "6m x 2m", "4m x 2m", "3m x 2m", "2m x 2m"],
              ["RCON 4", "Sponsor Logo on Participant Certificates", "Yes", "Yes", "No", "No"],
              ["RCON 5", "Company Advertisement on Competition Website (May-June-July)", "Yes", "Yes", "Yes", "Yes"],
              ["RCON 6", "Banner at Venue Entry Gate", "Yes", "Yes", "Yes", "Yes"],
              ["RCON 7", "No. Banner Inside Competition Venue (3x2)", "5", "3", "2", "1"],
              ["RCON 8", "ID Card Sponsorship (with logo) with an additional 200000 cost", "Yes", "Yes", "Yes", "Yes"],
              ["RCON 9", "Company Video during the event duration", "10 min", "5 min", "3 min", "2 min"],
              ["RCON 10", "Speaking slot at Inauguration Ceremony", "Yes", "No", "No", "No"],
              ["RCON 11", "Digital Promotion on Social Media", "Yes", "Yes", "Yes", "Yes"],
              ["RCON 12", "No. of Banners around Practice Field (3x2)", "3", "2", "1", "1"],
              ["RCON 13", "1 Judge for the Event", "Yes", "No", "No", "No"],
              ["RCON 14", "Stage Seating at the opening ceremony", "Yes", "No", "No", "No"],
              ["RCON 15", "Number of members allowed at the event", "5", "3", "2", "2"],
              ["Sponsorship Cost", "", "1200000", "600000", "400000", "300000"],
              ["Discounted Early Bird Package Till 15 June", "", "1000000", "500000", "300000", "250000"],
            ].map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {row.map((cell, i) => (
                  <td key={i} className="border border-gray-300 px-3 py-3 text-center text-sm font-medium">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-700">
        ID Card Sponsorship is available at an additional cost of 200000 separate from the sponsorship cost.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-green-600 mb-6 uppercase tracking-wide">DD-Robocon 2026 Sponsors</h2>
      <div className="mb-8">
        {/* <h3 className="text-xl font-bold text-yellow-600 mb-4 text-center">Gold Sponsors</h3> */}
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <img
              src={mathworksLogo}
              alt="MathWorks"
              className="object-contain"
              style={{ height: "120px", width: "240px" }}
            />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-slate-900 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <img
              src={autodeskLogo}
              alt="Autodesk"
              className="object-contain"
              style={{ height: "120px", width: "240px" }}
            />
          </div>
          {/* <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <img
              src={namtechLogo}
              alt="NAMTECH"
              className="object-contain"
              style={{ height: "120px", width: "240px" }}
            />
          </div> */}
        </div>
      </div>
    </section>
    
    {/* Sponsors Section */}
    {/* <section className="mb-10">
      <h2 className="text-2xl font-bold text-green-600 mb-6 uppercase tracking-wide">DD-Robocon 2025 Sponsors</h2>
      
     
      <div className="mb-8">
        <h3 className="text-xl font-bold text-yellow-600 mb-4 text-center">Gold Sponsors</h3>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <div className="flex items-center justify-center bg-white rounded-lg shadow p-4">
            <img
              src={mathworksLogo}
              alt="MathWorks"
              className="object-contain"
              style={{ height: "120px", width: "240px" }}
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg shadow p-4">
            <img
              src={namtechLogo}
              alt="NAMTECH"
              className="object-contain"
              style={{ height: "120px", width: "240px" }}
            />
          </div>
        </div>
      </div>
      
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-amber-700 mb-4 text-center">Bronze Sponsors</h3>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <div className="flex items-center justify-center bg-white rounded-lg shadow p-3">
            <img
              src={probusLogo}
              alt="Probus"
              className="object-contain"
              style={{ height: "100px", width: "180px" }}
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg shadow p-3">
            <img
              src={maxwellLogo}
              alt="Maxwell"
              className="object-contain"
              style={{ height: "100px", width: "180px" }}
            />
          </div>
        </div>
      </div>
      
      
      <div className="mb-8">
       
        <div className="flex flex-wrap justify-center gap-6 items-center">
          
        </div>
      </div>
      
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">Other Sponsors</h3>
        <div className="flex flex-wrap justify-center gap-4 items-center">
          <div className="flex items-center justify-center bg-white rounded-lg shadow p-2">
            <img
              src={amsLogo}
              alt="AMS Pvt. Ltd"
              className="object-contain"
              style={{ height: "70px", width: "120px" }}
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg shadow p-2">
            <img
              src={yuvaLogo}
              alt="Yuva Mindshare"
              className="object-contain"
              style={{ height: "70px", width: "120px" }}
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg shadow p-2">
            <img
              src={trsLogo}
              alt="TRS"
              className="object-contain"
              style={{ height: "70px", width: "120px" }}
            />
          </div>
        </div>
      </div>
      
      
      <div>
        <h3 className="text-xl font-bold text-purple-600 mb-4 text-center">Knowledge Partners</h3>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <div className="flex items-center justify-center bg-white rounded-lg shadow p-3">
            <img
              src={ihfcLogo}
              alt="IHFC"
              className="object-contain"
              style={{ height: "90px", width: "160px" }}
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg shadow p-3">
            <img
              src={fsmLogo}
              alt="FSM"
              className="object-contain"
              style={{ height: "90px", width: "160px" }}
            />
          </div>
        </div>
      </div>

      
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">Small Sponsors</h3>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <div className="flex items-center justify-center bg-white rounded-lg shadow p-3">
            <img
              src={mctilogo}
              alt="MCITI"
              className="object-contain"
              style={{ height: "70px", width: "120px" }}
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg shadow p-3">
            <img
              src={vinsyslogo}
              alt="Vinsys"
              className="object-contain"
              style={{ height: "70px", width: "120px" }}
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg shadow p-3">
            <img
              src={gslogo}
              alt="GSL"
              className="object-contain"
              style={{ height: "70px", width: "120px" }}
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg shadow p-3">
            <img
              src={zeekerslogo}
              alt="Zeekers"
              className="object-contain"
              style={{ height: "70px", width: "120px" }}
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg shadow p-3">
            <img
              src={playlogo}
              alt="Playto Labs"
              className="object-contain"
              style={{ height: "70px", width: "120px" }}
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg shadow p-3">
            <img
              src={pflogo}
              alt="Pramith"
              className="object-contain"
              style={{ height: "70px", width: "120px" }}
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg shadow p-3">
            <img
              src={nicolalogo}
              alt="Nicola"
              className="object-contain"
              style={{ height: "70px", width: "120px" }}
            />
          </div>
        </div>
      </div>
    </section> */}
    
    {/* Contact Us */}
    <section>
      <h2 className="text-2xl font-bold text-blue-700 mb-3 uppercase tracking-wide">Contact Us</h2>
      <div className="text-gray-700 mb-2 font-medium">
        <p>Email: <a href="mailto:ddroboconiitd@gmail.com" className="text-blue-600 underline font-semibold">ddroboconiitd@gmail.com</a></p>
        <p>Phone: 9811512965, 8116435875, 9013899145</p>
        <p>Website: <a href="https://ddrobocon.iitd.ac.in" className="text-blue-600 underline font-semibold">ddrobocon.iitd.ac.in</a></p>
        <p>DD Robocon 2026 Secretariat</p>
        <p>Department of Mechanical Engineering, IIT Delhi, Hauz Khas, New Delhi - 110016, India</p>
      </div>
    </section>
      </Container>
    </Section>
  </div>
);

export default Sponsorship;