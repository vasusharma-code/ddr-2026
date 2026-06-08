import React from "react";
import driveScreenshot from "../assets/DriveSS.png";
import { Container, PageHero, Section } from "../components/DesignSystem";

const stage2Results = [
  { id: 1, institute: "A.D. Patel Institute of Technology", team: "Team Prabal", stage1: "93", stage2: "20", total: "44" },
  { id: 2, institute: "AISSMS College Of Engineering", team: "Team RoboVyu", stage1: "87", stage2: "68", total: "74" },
  { id: 3, institute: "Bannari Amman Institute Of technology", team: "TeamBit", stage1: "90", stage2: "20", total: "43" },
  { id: 4, institute: "Birla Vishvakarma Mahavidyalaya", team: "Panchjanya", stage1: "61.5", stage2: "87", total: "79" },
  { id: 5, institute: "BRACT's VISHWAKARMA INSTITUTE OF TECHNOLOGY, PUNE", team: "BRACT's VISHWAKARMA INSTITUTE OF TECHNOLOGY, PUNE", stage1: "100", stage2: "100", total: "100" },
  { id: 6, institute: "COEP Technological University", team: "Team COEP", stage1: "98", stage2: "77", total: "84" },
  { id: 7, institute: "Fr. Conceicao Rodrigues Institute of Technology(FCRIT), Vashi, Navi Mumbai", team: "Agnel Robotics Club", stage1: "88", stage2: "65", total: "73" },
  { id: 8, institute: "G H PATEL COLLEGE OF ENGINEERING AND TECHNOLOGY", team: "Team GCET Robocon", stage1: "88", stage2: "83", total: "85" },
  { id: 9, institute: "Government College of Engineering Aurangabad, Chhatrapati Sambhajinagar", team: "Team GECA-CS", stage1: "98", stage2: "98", total: "98" },
  { id: 10, institute: "Government College of Engineering, Amravati", team: "THE ROBO-TECH FORUM", stage1: "100", stage2: "100", total: "100" },
  { id: 11, institute: "GUJARAT TECHNOLOGICAL UNIVERSITY", team: "GTU ROBOTICS CLUB", stage1: "97", stage2: "95", total: "96" },
  { id: 12, institute: "IIT Jodhpur", team: "Robotics IITJ", stage1: "82", stage2: "25", total: "44" },
  { id: 13, institute: "Indian Institute of Gandhinagar", team: "Team RUDRA", stage1: "99", stage2: "10", total: "40" },
  { id: 14, institute: "Indian Institute of Technology Patna", team: "Team Phoenix", stage1: "98", stage2: "68", total: "78" },
  { id: 15, institute: "Indian Institute of Technology Delhi", team: "Robotics Club IIT Delhi", stage1: "93", stage2: "58", total: "70" },
  { id: 16, institute: "Institute of Technology, Nirma University", team: "Team Nirma Robocon", stage1: "96", stage2: "100", total: "99" },
  { id: 17, institute: "Islamic University of Science and Technology awantipora kashmir", team: "TEAM IUST MECHBOTS", stage1: "68", stage2: "60", total: "63" },
  { id: 18, institute: "JSPM Rajarshi Shahu College of Engineering, Pune", team: "Team CiPHER", stage1: "89.5", stage2: "37", total: "55" },
  { id: 19, institute: "K J Somaiya Institute of Technology", team: "Team KJSIT Robocon", stage1: "89", stage2: "70", total: "76" },
  { id: 20, institute: "K.J. Somaiya School of Engineering", team: "Team (KJSSE) Robocon - KJ Somaiya School of Engineering", stage1: "96", stage2: "70", total: "79" },
  { id: 21, institute: "KIET Deemed to be university", team: "Team Dinobots", stage1: "93", stage2: "95", total: "94" },
  { id: 22, institute: "Kumaraguru College of Technology", team: "Team Q-botix", stage1: "94", stage2: "90", total: "91" },
  { id: 23, institute: "LD COLLEGE OF ENGINEERING", team: "TEAM ROBOCON LDCE", stage1: "97.5", stage2: "100", total: "99" },
  { id: 24, institute: "LJ INSTITUTES OF ENGINEERING AND TECHNOLOGY", team: "TEAM FALCON", stage1: "83", stage2: "68", total: "73" },
  { id: 25, institute: "Marathwada Mitramandal's College of Engineering", team: "Team Rudra", stage1: "86", stage2: "95", total: "92" },
  { id: 26, institute: "MIT World Peace University", team: "MIT-WPU Robocon Club", stage1: "87", stage2: "100", total: "96" },
  { id: 27, institute: "Modern Education Society's Wadia College of Engineering", team: "Team Anonymous", stage1: "70", stage2: "26", total: "41" },
  { id: 28, institute: "Muffakham Jah College of Engineering & Technology (MJCET)", team: "Team Robocon MJCET", stage1: "77", stage2: "50", total: "59" },
  { id: 29, institute: "National Institute of Technology Karnataka", team: "CSD Robocon NITK", stage1: "85", stage2: "80", total: "82" },
  { id: 30, institute: "P.E.S.'s Modern College of Engineering", team: "Team Vulcans", stage1: "95", stage2: "95", total: "95" },
  { id: 31, institute: "PADMABHOOSHAN VASANTDADA PATIL INSTITUTE OF TECHNOLOGY (PVPIT)", team: "Team Tech-Titans", stage1: "92", stage2: "96", total: "95" },
  { id: 32, institute: "Parul Institute of Technology, Parul University", team: "PU Robocon", stage1: "74", stage2: "70", total: "71" },
  { id: 33, institute: "PCET's Pimpri Chinchwad College of Engineering, Pune", team: "Team Automatons", stage1: "98", stage2: "85", total: "89" },
  { id: 34, institute: "Rajarambapu Institute of Technology", team: "AMX_ROBOCON_RIT", stage1: "74.5", stage2: "40", total: "52" },
  { id: 35, institute: "SARDAR PATEL COLLEGE OF ENGINEERING", team: "SPCE ROBOCON", stage1: "94", stage2: "90", total: "91" },
  { id: 36, institute: "Sardar Vallabhbhai National Institute of Technology, Surat", team: "Team Drishti", stage1: "93", stage2: "85", total: "88" },
  { id: 37, institute: "SCR's Pune Institute of Computer Technology", team: "PICT Robotics", stage1: "98", stage2: "100", total: "99" },
  { id: 38, institute: "SRM University of Science and Technology", team: "SRM TEAM ROBOCON", stage1: "97", stage2: "100", total: "99" },
  { id: 39, institute: "St. Francis Institute of Technology", team: "Team RAW", stage1: "82", stage2: "65", total: "71" },
  { id: 40, institute: "SVKM Mukesh Patel School of Technology Management & Engineering, Mumbai", team: "Team Technotix", stage1: "95", stage2: "90", total: "92" },
  { id: 41, institute: "Symbiosis Institute of Technology,Pune", team: "Robo Minds", stage1: "90", stage2: "18", total: "42" },
  { id: 42, institute: "Vellore Institute of Technology, Chennai", team: "Technocrats Robotics", stage1: "93", stage2: "100", total: "98" },
];

const specialCaseTeams = [
  { id: 1, institute: "Amrita Vishwa Vidyapeetham Bengaluru #", team: "Amrita Robotics", stage1: "82", stage2: "5", total: "31" },
  { id: 2, institute: "Dharmsinh Desai University #", team: "STEEL CRANE", stage1: "70.5", stage2: "5", total: "27" },
  { id: 3, institute: "Mahindra University #", team: "ROBOVERSE", stage1: "85", stage2: "5", total: "32" },
];

const Stage2 = () => {
  return (
    <div className="page-surface text-slate-800">
      <PageHero title="DD-ROBOCON 2026 Stage II Results" />
      <Section>
      <Container>

        <div className="mb-10 rounded-lg border border-amber-200 bg-amber-50 p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-700 font-semibold mb-2">
                Stage II results are out now
              </p>
              <p className="text-xl font-semibold text-gray-900">Download the official Stage II result sheet from the link below.</p>
            </div>
            <a
              href="https://drive.google.com/file/d/1hI60BsF9FzvkiyjQ1KZN8WdP_xXzbYn8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow hover:bg-amber-700 transition-colors duration-200"
            >
              View Stage II Results
            </a>
          </div>
        </div>

        <div className="mb-10 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
            <thead className="bg-yellow-300 text-gray-900">
              <tr>
                <th className="whitespace-nowrap border-b border-gray-300 px-4 py-4 text-center font-semibold">S.No.</th>
                <th className="border-b border-gray-300 px-4 py-4 font-semibold">University/College/Institute Name</th>
                <th className="border-b border-gray-300 px-4 py-4 font-semibold">Name of Team</th>
                <th className="whitespace-nowrap border-b border-gray-300 px-4 py-4 text-center font-semibold">Stage 1 Marks (100)</th>
                <th className="whitespace-nowrap border-b border-gray-300 px-4 py-4 text-center font-semibold">Stage 2 Marks (100)</th>
                <th className="whitespace-nowrap border-b border-gray-300 px-4 py-4 text-center font-semibold">Grand Total (1/3 of Stage-1 and 2/3 of Stage-2)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-emerald-100 text-emerald-900">
                <td colSpan="6" className="border-b border-emerald-200 px-4 py-3 text-center font-semibold text-lg">
                  FOLLOWING TEAMS ARE SHORTLISTED FOR FINAL
                </td>
              </tr>
              {stage2Results.map((row, index) => (
                <tr key={row.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border-b border-gray-200 px-4 py-4 text-center font-medium text-gray-700">{row.id}</td>
                  <td className="border-b border-gray-200 px-4 py-4 text-gray-800">{row.institute}</td>
                  <td className="border-b border-gray-200 px-4 py-4 text-gray-800">{row.team}</td>
                  <td className="border-b border-gray-200 px-4 py-4 text-center text-gray-800">{row.stage1}</td>
                  <td className="border-b border-gray-200 px-4 py-4 text-center text-white">
                    <span className="inline-flex rounded-full bg-green-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]">{row.stage2}</span>
                  </td>
                  <td className="border-b border-gray-200 px-4 py-4 text-center text-gray-800">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-gray-900">
            In order to encourage following teams to participate in DD-Robocon 2026, the national evaluation committee has kindly decided to permit them as a special case to participate in National event if they submit improved version of their Robots video and demonstrate tasks by 04-June-2026, 11:59 PM. Once the committee clears revised video they MUST register for final event by 10-June-2026.
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
              <thead className="bg-yellow-300 text-gray-900">
                <tr>
                  <th className="whitespace-nowrap border-b border-gray-300 px-4 py-4 text-center font-semibold">S.No.</th>
                  <th className="border-b border-gray-300 px-4 py-4 font-semibold">University/College/Institute Name</th>
                  <th className="border-b border-gray-300 px-4 py-4 font-semibold">Name of Team</th>
                  <th className="whitespace-nowrap border-b border-gray-300 px-4 py-4 text-center font-semibold">Stage 1 Marks (100)</th>
                  <th className="whitespace-nowrap border-b border-gray-300 px-4 py-4 text-center font-semibold">Stage 2 Marks (100)</th>
                  <th className="whitespace-nowrap border-b border-gray-300 px-4 py-4 text-center font-semibold">Grand Total</th>
                </tr>
              </thead>
              <tbody>
                {specialCaseTeams.map((row, index) => (
                  <tr key={row.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border-b border-gray-200 px-4 py-4 text-center font-medium text-gray-700">{row.id}</td>
                    <td className="border-b border-gray-200 px-4 py-4 text-gray-800">{row.institute}</td>
                    <td className="border-b border-gray-200 px-4 py-4 text-gray-800">{row.team}</td>
                    <td className="border-b border-gray-200 px-4 py-4 text-center text-gray-800">{row.stage1}</td>
                    <td className="border-b border-gray-200 px-4 py-4 text-center text-white">
                      <span className="inline-flex rounded-full bg-green-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]">{row.stage2}</span>
                    </td>
                    <td className="border-b border-gray-200 px-4 py-4 text-center text-gray-800">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-card p-5 sm:p-8 document-flow">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">Stage II Evaluation Guidelines</h2>

        <p className="mb-6 text-lg leading-8">
          As part of Stage-II, all qualified teams from Stage-I need to submit the following videos by the deadline specified on the website while adhering to the offline rulebook (the link for submitting the videos will be shared soon):
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
                <p>(b) Demonstration of R2;&apos;s autonomous object (KFS) identification [5 points]</p>
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
                  className="w-full max-w-2xl rounded-lg border border-gray-200 shadow-sm"
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
        </div>
      </Container>
      </Section>
    </div>
  );
};

export default Stage2;
