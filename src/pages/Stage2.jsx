import React from "react";
import driveScreenshot from "../assets/DriveSS.png";

const Stage2 = () => {
  return (
    <div className="p-8 min-h-screen mt-14 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-8 leading-snug">
          Guidelines for the Evaluation of
          <br />
          DD-ROBOCON 2026 (Stage-II)
        </h1>

        <p className="mb-6 text-lg leading-8">
          As part of Stage-II, all qualified teams from Stage-I need to submit the
          following videos by the deadline specified on the website while adhering to the
          offline rulebook (the link for submitting the videos will be shared soon):
        </p>

        <ol className="list-decimal ml-8 space-y-6 text-lg leading-8">
          <li>
            <span className="font-semibold">Measurements: (maximum 120 seconds) - - -</span>
            <div className="mt-2 ml-2">
              <p>Measurement of the robot’s (R-1and R-2) complete dimensions (initial and extended), including length, width, height, and weight.</p>
              <p>Measurement of Staffs, Spearheads and Kung-Fu Scrolls (KFS) used in the demonstration</p>
              <p>Measurement of the Game Field(length, width, etc), Meihua Forest, Tic-Tac-Toe Rack</p>
              <p>All measurements must be completed within the allotted time.</p>
            </div>
          </li>

          <li>
            <div>
              <span className="font-semibold">Mechanisms (70 points)</span>
              <div>(Maximum 120 seconds)</div>
            </div>

            <div className="mt-4 ml-2 space-y-4">
              <div>
                <p className="font-semibold">2.1 Weapon Assembly [20 Points]</p>
                <p>(a) R1 picking up a Staff and R2 picking up a Spearhead [10 Points]</p>
                <p>(b) The successful collaboration to assemble a weapon without physical contact between the two robots [10 Points]</p>
              </div>

              <div>
                <p className="font-semibold">2.2 R1 Picks Up Game Object [10 Points]</p>
                <p>R1 manoeuvres along the Pathway and picks up and stores an R1 KFS</p>
              </div>

              <div>
                <p className="font-semibold">2.3 R2 Picks Up Game Object [20 Points]</p>
                <p>(a) R2 autonomously navigates forest block and picks up and stores an R2 KFS [15 points]</p>
                <p>(b) Demonstration of R2&apos;s autonomous object (KFS) identification [5 points]</p>
              </div>

              <div>
                <p className="font-semibold">2.4 Arena Entry and KFS Placement [20 Points]</p>
                <p>(a) R1 carries an assembled weapon and enters the Arena via the Ramp [5 points]</p>
                <p>(b) R1 places KFS in bottom Tic-Tac-Toe Rack slot [5 points]</p>
                <p>(c) R2 places KFS in middle Tic-Tac-Toe Rack slot [10 points]</p>
              </div>
            </div>
          </li>

          <li>
            <div>
              <span className="font-semibold">Lifting and Weapon Utilization (30 points)</span>
              <div>(Maximum 60 seconds)</div>
            </div>

            <div className="mt-4 ml-2 space-y-4">
              <div>
                <p className="font-semibold">3.1 R1 lifts R2 to place Top Row KFS [15 Points]</p>
                <p>(a) R1 lifts or carries R2 to place a KFS into the Top Row of Tic-Tac-Toe Rack [8 Points]</p>
                <p>(b) R2 places KFS in Top row [7 Points]</p>
              </div>

              <div>
                <p className="font-semibold">3.2 Weapon Utilization [15 Points]</p>
                <p>(a) R1 using an assembled weapon to displace an already placed KFS in the rack [10 Points]</p>
                <p>(b) Demonstration of placing the used weapon parts into the Used Weapon Area [5 Points]</p>
              </div>
            </div>
          </li>
        </ol>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Submission Details:</h2>
          <p className="text-lg leading-8 mb-4">
            For each mechanism, one separate video must be prepared. Additional instructions for all videos:
          </p>

          <ol className="list-decimal ml-8 space-y-5 text-lg leading-8">
            <li>
              <p>All the files should be uploaded to a single Google Drive folder which will be accessible by the judges. Only the link should be submitted via a Google Form (to be released soon).</p>
              <p className="mt-3">Please note the following requirements for Stage-II submission:</p>
              <div className="mt-2 ml-6 space-y-2">
                <p>(i) The team folder should contain Measurements Video as stated in point 1.</p>
                <p>(i) Two distinct folders must be created within the team folder demonstrating the following:</p>
                <div className="ml-6">
                  <p>○ Mechanisms (This should contain separate videos for mechanisms as stated in Point 2: 2.1, 2.2 , 2.3 and 2.4)</p>
                  <p>○ Lifting and Weapon Utilization  (This should contain separate videos for mechanisms as stated in Point 3: 3.1 and 3.2)</p>
                </div>
                <p>(ii) A separate video must be submitted for each individual mechanism.</p>
                <p>
                  (iii) All videos should be named as {"<Team Name> - <demonstrated mechanism>"} to ensure proper evaluation and be in the .mp4 or .avi format only.
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <img
                  src={driveScreenshot}
                  alt="Google Drive submission format"
                  className="w-full max-w-2xl border border-gray-200 shadow-sm"
                />
              </div>
            </li>

            <li>
              The combined size of all the files should not exceed 1 GB. The total video duration (All 7 videos) must not exceed 5 minutes.
            </li>
            <li>
              Robot functionality for each mechanism demonstration should be in a single, continuous shot.
            </li>
            <li>
              Use multiple cameras for better visualization with one camera showing the complete view.
            </li>
            <li>
              Compliance with competition rules will be considered during evaluation.
            </li>
          </ol>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScSwROPlVp0oGLrlgoxyWsyaGigIkuMmOKQkL-ZCwIhWihKuQ/viewform?fbzx=-7565858004056651111"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-xl text-center bg-blue-700 hover:bg-blue-800 text-white text-xl font-semibold py-5 px-8 rounded-2xl shadow-lg transition-colors duration-200"
          >
           Stage II Submission
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stage2;