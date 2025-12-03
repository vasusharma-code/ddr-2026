import React from "react";

const GameVideoPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6 flex flex-col items-center mt-12">
      {/* Page Header */}
      <header className="w-full py-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md text-center rounded-lg mb-12">
        <h1 className="text-4xl font-bold">Game Video</h1>
      </header>

      {/* Game Video Section */}
      <section className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Game Video
        </h2>
        <div className="relative w-full h-auto flex justify-center">
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/R9sRH5YIItM?si=iypiGSsQ8svqvvRU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            If the video doesn't play, watch it on YouTube:
          </p>
          <a
            href="https://youtu.be/R9sRH5YIItM?si=iypiGSsQ8svqvvRU"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-medium"
          >
            Watch on YouTube
          </a>
        </div>
      </section>

      {/* Game Theme Section */}
      <section className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Game Theme
        </h2>
        <h3 className="text-xl font-bold text-center text-gray-700 mb-4">
          “Robot Basketball”
        </h3>
        <p className="text-gray-700 text-justify leading-7">
          The ABU-Robocon 2025 competition centers around an exciting new theme:
          Robot Basketball. Teams from across Asia-Pacific will design and build
          robots capable of dribbling, passing, and shooting a basketball through
          various stages of a simulated court. Each team’s robot must demonstrate
          precise coordination and agility to complete tasks autonomously, mirroring
          real basketball moves. The challenge emphasizes speed, accuracy, and
          teamwork as robots attempt to outscore their opponents. This unique event
          fosters innovation and brings together the top engineering talents in an
          intense yet friendly contest to push the limits of robotics and sports.
        </p>
      </section>
    </div>
  );
};

export default GameVideoPage;
