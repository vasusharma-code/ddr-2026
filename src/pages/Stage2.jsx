import React from "react";

const Stage2Guidelines = () => {
  return (
    <div className="p-8 min-h-screen mt-14 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
        Guidelines for the Evaluation of DD-ROBOCON 2025 (Stage-2)
      </h1>

      <section className="mb-8">
        <p className="text-gray-800 mb-4">
          As part of Stage-2, all qualified teams from Stage-1 need to submit the following videos by the deadline specified on the website while adhering to the offline rulebook (the link for submitting the videos will be shared soon):
        </p>

        <ol className="list-decimal ml-6 text-gray-800 space-y-4">
          <li>
            <span className="font-semibold">Measurement (maximum 120 seconds):</span> Measurement of the robot’s (R-1 and R-2) complete dimensions, including length, width, height, and weight. Measurement of the ball’s diameter and weight. Measurement of the basket’s diameter and height. Measurement of the 3-point zone and 2-point zone. Measurement of the basketball court (length, width, etc). All measurements must be completed within the allotted time.
          </li>
          <li>
            <span className="font-semibold">Mechanisms [70 points]:</span> In this video (maximum duration: 120 seconds), the following functionalities must be demonstrated:
            <ol className="list-lowerAlpha ml-6 mt-2 space-y-2">
              <li>
                <span className="font-semibold">(a)</span> Ball is picked up by Robot-1 (R-1) or Robot-2 (R-2) from the ground [10 Points]
              </li>
              <li>
                <span className="font-semibold">(b)</span> R-1/R-2 will pass ball to the other robot or dribble, and then perfectly thrown into the basket. [30+30 points]
              </li>
              <li className="mt-2 italic">OR</li>
              <li>
                Robot-1 (R-1) or Robot-2 (R-2) pick up or load the ball into the robot.
                <ol className="list-lowerAlpha ml-6 mt-2 space-y-2">
                  <li>
                    <span className="font-semibold">(a)</span> Upon gaining control of the ball, the robot must immediately pass it, either without changing its location or while in the air, to the teammate robot from a distance of at least 1000 mm. [40 points]
                  </li>
                  <li>
                    <span className="font-semibold">(b)</span> The teammate robot must then successfully throw the ball into the basket. [30 points]
                  </li>
                </ol>
              </li>
              <li className="mt-2 italic">OR</li>
              <li>
                Robot-1 (R-1) or Robot-2 (R-2) load the ball into the robot.
                <ol className="list-lowerAlpha ml-6 mt-2 space-y-2">
                  <li>
                    <span className="font-semibold">(a)</span> Either robot then dribble the ball from a height of at least 700 mm above the playing surface. [30 points]
                  </li>
                  <li>
                    <span className="font-semibold">(b)</span> After dribbling, the robot must successfully throw the ball into the basket. [40 points]
                  </li>
                </ol>
              </li>
              <li className="mt-2">
                <span className="font-semibold">Additional Points:</span> All the above processes must be performed at least twice. For every passing, the ball must be thrown to the teammate robot from a distance of at least 1000 mm, measured from the nearest points of the robots. A robot may successfully shoot the ball without dribbling if it does so immediately upon gaining control of the ball without changing its location or while in the air.
              </li>
            </ol>
          </li>
          <li>
            <span className="font-semibold">Jumping and Shooting Mechanism [30 points]:</span> Show the following (maximum 60 seconds):
            <ol className="list-lowerAlpha ml-6 mt-2 space-y-2">
              <li>
                <span className="font-semibold">(a)</span> Jumping Mechanism – The robot should demonstrate a stable and controlled jump at least twice. [10 points]
              </li>
              <li>
                <span className="font-semibold">(b)</span> Shooting Mechanism –
                <ol className="list-lowerAlpha ml-6 mt-1 space-y-1">
                  <li>
                    <span className="font-semibold">(i)</span> Shoot from the 3-Point Zone – The shot must be taken from the designated 3-point zone and successfully reach the basket at least twice. [12 points]
                  </li>
                  <li>
                    <span className="font-semibold">(ii)</span> Shoot from the 2-Point Zone – The shot must be taken from the designated 2-point zone and successfully reach the basket at least twice. [8 points]
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Note 1:</h2>
        <p className="text-gray-800 ml-6">
          Measurement of distances of the game field should be clearly shown in the videos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Submission Details:</h2>
        <p className="text-gray-800 mb-4">
          For each mechanism, one separate video must be prepared. Additional instructions for all videos:
        </p>
        <ol className="list-decimal ml-6 text-gray-800 space-y-2">
          <li>
            All the files should be uploaded to a single Google Drive folder which will be accessible by the judges. Only the link should be submitted via a Google Form (to be released soon).
          </li>
          <li>
            The combined size of all the files should not exceed 1 GB. The total video duration must not exceed 5 minutes.
          </li>
          <li>
            Robot functionality should be demonstrated in a single, continuous shot.
          </li>
          <li>
            Use multiple cameras for better visualization with one camera showing the complete view.
          </li>
          <li>
            Compliance with competition rules will be considered during evaluation.
          </li>
          <li>
            All videos should be named as “Team Name demonstrated mechanism” to ensure proper evaluation and be in the .mp4 or .avi format only.
          </li>
        </ol>
      </section>

      <section>
        
        <div className="flex justify-center">
          <a
            href="https://drive.google.com/file/d/1hQlK2cM1NxtTTscVtoNggKhk3ETadPbq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white text-2xl  py-4 px-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-center"
          >
            Stage 2 Result Out Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Stage2Guidelines;