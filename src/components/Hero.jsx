import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import stattic from "../assets/Static.png";
import image1 from "../assets/Image1.jpg";
import image2 from "../assets/Image 2.jpg";
import image3 from "../assets/Image 3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className="bg-white min-h-screen mt-14">
      {/* Mongolia Highlight Section */}
      <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Win a Chance to Represent India in Hong Kong!
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Showcase your engineering prowess on the global stage! The winner of
            DD Robocon India 2026 will proudly represent the nation in the
            Asia-Pacific Robocon competition, hosted in Hong Kong. Step up to
            the challenge, and let your innovation shine on an international
            platform!
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          {/* Swiper Section */}
          <div className="w-full md:w-1/2 h-[300px]">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={false}
              className="w-full h-full"
            >
              <SwiperSlide>
                <div className="flex justify-center items-center h-full">
                  <img
                    src={image1}
                    alt="Robot Basketball Match"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center h-full">
                  <img
                    src={image2}
                    alt="Robot Court Setup"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center h-full">
                  <img
                    src={image3}
                    alt="Competing Robots"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">
              Introducing DD Robocon India 2026
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              DD Robocon India 2026, organized by IIT Delhi, Prasar Bharati, and
              STPI, is the national stage of the prestigious ABU Robocon 2026.
              This thrilling event challenges robots to complete complex tasks
              against the clock while fostering lasting bonds among visionary
              young minds. Join us as we propel engineering and broadcasting
              technologies to new heights. Welcome to the future of innovation!
            </p>
          </div>
        </div>
      </div>

      {/* Video Link Section */}
      <div className="md:mr-12 bg-blue-500 text-white text-center py-3 px-6 rounded-lg shadow-lg mb-6 transition-transform hover:scale-105 hover:shadow-2xl max-w-lg mx-auto">
        <a
          href="https://drive.google.com/file/d/10RstFP8w52A50hK2Y8PvSjbJ_71ASYDe/view?usp=sharing"
          className="text-lg font-bold cursor-pointer hover:underline flex items-center justify-center space-x-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-3.197-1.86A1 1 0 0010 10.07v3.86a1 1 0 001.555.832l3.197-1.86a1 1 0 000-1.732z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
            />
          </svg>
          <span>🎥 Watch DD ROBOCON Promo Video</span>
        </a>
      </div>

      {/* New Alert Box for Stage-2 Guidelines */}
      <a href="https://drive.google.com/file/d/1200IWB_iwe2yZF9JuzzGdkh4lIEssx7v/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      >
        <div className="md:mr-12 bg-green-500 text-white text-center py-3 px-6 rounded-lg shadow-lg mb-6 transition-transform hover:scale-105 hover:shadow-2xl max-w-lg mx-auto cursor-pointer">
          <span className="text-lg font-bold">🎥 Watch DD ROBOCON Promo Video(Hindi)</span>
        </div>
      </a>

      {/* Stationary Image + Guidelines + Important Dates */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            {/* Static Image */}
            <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
              <img
                src={stattic}
                alt="Stationary Visual"
                className="w-3/4 md:w-full h-auto rounded-lg mix-blend-multiply"
              />
            </div>

            {/* Important Dates Section */}
            <div className="w-full md:w-2/3">
              {/* Alert Box for Guidelines */}
              <div className="bg-yellow-500 text-white text-center py-3 px-6 rounded-lg shadow-lg mb-6 transition-transform hover:scale-105 hover:shadow-2xl">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScAmtcvwztv9Lcv_iVmPfFjlNJeEsSGdxXTnYtqzx3aN2qe-w/viewform?usp=dialog" className="text-lg font-bold cursor-pointer hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 📢Pre Register!
                </a>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Important Dates
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Each Date */}
                { [
                  {
                    // Show old date struck through and new date
                    newDate: (
                      <>
                        <span className="line-through text-gray-400">Till-31 Dec-2025</span>
                        <br />
                        <span className="font-bold text-[#EF4444]">Till-9 Jan-2026</span>
                      </>
                    ),
                    displayDate: "9",
                    description: "Pre-registration form: DD-Robocon 2026",
                  },
                  {
                    newDate: "31-Jan-2026",
                    displayDate: "31",
                    description: "Submission of Stage 1 (concept note and idea solution)",
                  },
                  {
                    newDate: "28-Feb-2026",
                    displayDate: "28",
                    description: "Shortlisting for Stage 1",
                  },
                  {
                    newDate: "15-May-2026",
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
                    description:
                      "DD-Robocon – The National Robotics Championship 2026 Final Event",
                  },
                ].map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Date Circle */}
                    <div
                      className="flex flex-col items-center justify-center"
                      style={{ minWidth: "56px" }}
                    >
                      <div
                        className="w-14 h-14 flex items-center justify-center rounded-full font-extrabold text-white text-2xl shadow"
                        style={{
                          background: "#22C55E",
                          boxShadow: "0 2px 8px 0 rgba(34,197,94,0.15)",
                        }}
                      >
                        {event.displayDate}
                      </div>
                    </div>
                    {/* Date & Description */}
                    <div>
                      {event.newDate ? (
                        <span className="font-bold block text-[#EF4444] text-base md:text-lg mb-1">
                          {event.newDate}
                        </span>
                      ) : (
                        <span className="text-lg font-semibold text-gray-800 block mb-1">
                          {event.date}
                        </span>
                      )}
                      <p className="text-sm text-gray-600 font-medium">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Add mandatory pre-registration note */}
              <div className="mt-8 text-gray-700 text-base md:text-lg font-semibold">
                Pre-registration is mandatory before the submission of the
                concept note. Without completing the pre-registration, Stage-1
                concept notes will not be considered for Stage-1 evaluation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
