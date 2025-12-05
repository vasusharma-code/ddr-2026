import React from "react";
import mathworksLogo from "../assets/MathLogo.png";
import probusLogo from "../assets/ProbusLogo.png";
import fsmLogo from "../assets/FSMLogo.png";
import ihfcLogo from "../assets/IHFCLogo.png";
import namtechLogo from "../assets/NamtechLogo.png";
import maxwellLogo from "../assets/MaxwellLogo.jpeg";
import trsLogo from "../assets/TRSLogo.png";
import amsLogo from "../assets/AMSLogo.png";
import yuvaLogo from "../assets/YuvaLogo.png";
import mctilogo from '../assets/MCITI Logo_B.png';
import vinsyslogo from '../assets/Vinsys Logo-01-01 1.png';
import gslogo from '../assets/GSL Logo.png';
import zeekerslogo from '../assets/ZeekerLogo.png';
import playlogo from '../assets/PlaytoLabs.jpeg';
import pflogo from '../assets/pramith_logo-final 1606.jpg';
import nicolalogo from '../assets/NICOLA LOGO BLUE png.png';

const Sponsorship = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10 px-4 md:px-0 m-2 mt-14">
    <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center tracking-tight">DD Robocon 2026 Sponsorship</h1>
    
    {/* About Knowledge Partners */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-purple-700 mb-3 uppercase tracking-wide">About Knowledge Partners</h2>
      <div className="flex flex-col md:flex-row gap-8 mb-6">
        {/* IHFC Section */}
        <div className="flex flex-row items-center bg-white rounded-lg shadow p-4 flex-1">
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
        <div className="flex flex-row items-center bg-white rounded-lg shadow p-4 flex-1">
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
    
    {/* Sponsorship Matrix */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-purple-600 mb-3 uppercase tracking-wide">Sponsorship Matrix 2026</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1 font-bold">Benefit</th>
              <th className="border px-2 py-1 font-bold">Platinum</th>
              <th className="border px-2 py-1 font-bold">Gold</th>
              <th className="border px-2 py-1 font-bold">Silver</th>
              <th className="border px-2 py-1 font-bold">Bronze</th>
              <th className="border px-2 py-1 font-bold">Stall</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Link on Competition Website", "Yes", "Yes", "Yes", "Yes", "Yes"],
              ["Promotional Emails to Teams", "Yes", "Yes", "Yes", "Yes", "No"],
              ["Booth for Product Display", "Yes", "Yes", "Yes", "No", "Yes"],
              ["Logo on Participant Certificates", "Yes", "Yes", "Yes", "No", "No"],
              ["Ads on Website (3 Months)", "Yes", "Yes", "No", "No", "Yes"],
              ["Entrance Banners with Theme", "Yes", "Yes", "Yes", "No", "No"],
              ["Banners Near Game Field", "Yes", "Yes", "Yes", "No", "No"],
              ["People allowed as a Sponsor in the Event", "Yes", "Yes", "Yes", "No", "Yes"],
              ["Speaking Slot at Inauguration Ceremony", "Yes", "Yes", "No", "No", "No"],
              ["Social Media Promotions Weekly", "Yes", "Yes", "Yes", "No", "No"],
            ].map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {row.map((cell, i) => (
                  <td key={i} className="border px-2 py-1 text-center font-medium">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
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
  </div>
);

export default Sponsorship;