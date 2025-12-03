import React from 'react';
import mathlogo from '../assets/MathWorks_Logo_Colour_page-0001.jpg';

const MathWorksModelingAward = () => {
  return (
    <div className="p-8 min-h-screen mt-14 bg-white">
      {/* MathWorks Logo Placeholder */}
      <div className="flex justify-center items-center mb-6">
        <img
          src={mathlogo}
          alt="MathWorks Logo"
          className="h-52"
        />
      </div>
      <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">
        DD Robocon India 2025: MathWorks Modeling Award
      </h1>

      <section className="mb-6">
        <p><strong>Event Name:</strong> DD Robocon India 2025: MathWorks Modeling Award</p>
        <p>
          <strong>MathWorks Point of Contact:</strong> Veer Alakshendra (
          <a className="text-blue-600 underline" href="mailto:valakshe@mathworks.com">
            valakshe@mathworks.com
          </a>
          )
        </p>
        <p><strong>Date of Announcement:</strong> February 2025</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">A. Award Overview</h2>
        <p>
          The MathWorks Modeling Award is structured to provide awards to the team
          that best applies The MathWorks tools in the DD Robocon India 2025. The
          award will be decided based on two stages and will be judged based on slides
          and formal presentation. Refer to Section B for more details.
        </p>
        <p className='mt-3'>
          The <strong>1st, 2nd, and 3rd</strong> place teams will each receive <strong>Cash Prizes</strong> of 
           <strong> 35000 INR, 20000 INR and 15000 INR</strong>, respectively. These awards will be presented at
          the DD Robocon 2025 award ceremony.
        </p>

        <p className="mt-3">
          <strong>Important Note: As per the Income Tax Act 1961, MathWorks India is
            required to deduct Tax at source from this token of our appreciation. This Tax
            deduction will be at the rate of 30%. The amount of Tax deducted at Source will be
            available in your PAN number and can be utilized against your Tax liability for the
            year or otherwise can be claimed as a refund from the Government of India by timely
            filling of the Income Tax return for the year.</strong>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">B. Procedure</h2>
        <ul className="list-disc ml-6">
          <li>Participation in this competition is free.</li>
          <li>
            <strong>Phase 1:</strong>
            <ul className="list-disc ml-6 mt-2">
              <li>
                The teams will need to submit their slides in PDF format to the organizers by
                <strong> June 22, 2025, 11:30 p.m. IST</strong>. Only one entry may be submitted by each team. The
                details of submission are provided in Section <strong>E.</strong>
              </li>
              <li>
                All entries will be judged by MathWorks engineers on a 100-point scale. The scoring
                criteria is provided in Section <strong>C</strong>.
              </li>
              <li>Create original slides as per the format mentioned in Section <strong>D.</strong></li>
              <li>Up to <strong>ten teams</strong> will be selected to participate in Phase 2 of the Competition.</li>
              <li>The result for Phase 1 will be announced on <strong>June 24, 2025.</strong></li>
              <li>
                <strong>A team must be shortlisted for Stage -2 for main DD Robocon India 2025 competition to be
                  eligible for Phase 2 of the MathWorks Modeling Award.</strong>
              </li>
            </ul>
          </li>
          <li>
            <strong>Phase 2:</strong> The teams that qualify Phase 1 will be invited for a formal
            presentation and must present their work to the MathWorks judges. The dates and the
            WebEx link for the presentation will be sent to the qualified teams by the <strong>4th week of
              June 2025.</strong>
          </li>
          <li>
            The 1st, 2nd, and 3rd winners will be announced at the DD Robocon India 2025 award ceremony.
          </li>
          <li><strong>Judges’ decisions are final.</strong></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">C. Content</h2>
        <p>
          Points <strong>(100 available)</strong> will be awarded based on the submitted slides and
          scripts/models (optional) based on the following criteria:
        </p>
        <ol className="list-decimal ml-6 mt-2">
          <li>
            <strong>(15 pts)</strong> How has the team applied the core concepts of Model-Based Design with MathWorks’
            tools to help achieve the overall competition objectives?
          </li>
          <li>
            Summarize the application of MathWorks’ tools to the competition objectives.
            <ul className="list-disc ml-6 mt-2">
              <li>
                Define and describe how The MathWorks’ tools fit into the overall development process
                followed:
                <ol className="list-disc ml-6 mt-1">
                  <li>Requirements</li>
                  <li>Design using modelling and simulation</li>
                  <li>Testing</li>
                  <li>Verification and Validation</li>
                </ol>
              </li>
              <li>
                To learn more about Model-Based Design, please visit this link:{' '}
                <a
                  className="text-blue-600 underline"
                  href="https://www.mathworks.com/solutions/model-based-design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.mathworks.com/solutions/model-based-design
                </a>
              </li>
            </ul>
          </li>
          <li>
            Relating overall competition objectives, how has the team applied The MathWorks’ tools
            to the task of:
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>(15 pts) Robot Modeling</strong>
                <ol className="list-disc ml-6 mt-1">
                  <li>How were the plant models developed using MATLAB and Simulink?</li>
                  <li>
                    How were the plant models validated and what level of correlation to real-world
                    results was obtained?
                  </li>
                  <li>
                    Are the models architected in a way that provides for ease of use, understanding,
                    extensibility and fast execution?
                    <br />
                    <em>Example:</em> Robot Modeling using Simscape and Simscape Multibody, modeling
                    kinematics and dynamics, etc.
                  </li>
                </ol>
              </li>
              <li>
                <strong>(15 pts) Navigation and Path Planning</strong>
                <ol className="list-disc ml-6 mt-1">
                  <li>
                    How were MATLAB and Simulink used to design and plan the robot’s navigation?
                  </li>
                  <li>
                    How did you design, visualize, and debug the supervisory logic?
                    <br />
                    <em>Example:</em> Programming robot behavior using Stateflow, using ROS Toolbox for
                    navigation, etc.
                  </li>
                </ol>
              </li>
              <li>
                <strong>(10 pts) Control Design and Tuning</strong>
                <ol className="list-disc ml-6 mt-1">
                  <li>How were the control models developed using MATLAB and Simulink?</li>
                  <li>
                    How were the control models validated and what level of correlation to real-world
                    results was obtained?
                  </li>
                  <li>
                    Are the models architected in a way that provides for ease of use, understanding,
                    extensibility, and fast execution?
                    <br />
                    <em>Example:</em> Selection of PID parameters using PID Tuner App, design of adaptive
                    controller, etc.
                  </li>
                </ol>
              </li>
              <li>
                <strong>(10 pts) Image Processing</strong>
                <ol className="list-disc ml-6 mt-1">
                  <li>How were MATLAB and Simulink used for image processing and computer vision?</li>
                  <li>
                    How was the information from image processing incorporated in designing the robot’s
                    behavior?
                    <br />
                    <em>Example:</em> Color-based segmentation, object detection using deep learning, etc.
                  </li>
                </ol>
              </li>
              <li>
                <strong>(10 pts) Data Analysis</strong>
                <ol className="list-disc ml-6 mt-1">
                  <li>
                    How were MATLAB and Simulink used to acquire, analyze, and visualize data?
                    <br />
                    <em>Example:</em> Acquiring and visualizing sensor data from the robot, identifying object
                    parameters using post-processing of acquired information, etc.
                  </li>
                </ol>
              </li>
              <li>
                <strong>(15 pts) Embedded Systems</strong>
                <ol className="list-disc ml-6 mt-1">
                  <li>
                    How were MATLAB and Simulink used to design the algorithm deployed on the embedded
                    system?
                  </li>
                  <li>How was the simulation model integrated with the actual robot?</li>
                  <li>
                    Was the auto-code generation capability in MATLAB and Simulink used on the embedded
                    hardware?
                    <br />
                    <em>Example:</em> Deployment of Simulink model to hardware, code generation and deployment
                    ROS nodes on hardware, etc.
                  </li>
                </ol>
              </li>
            </ul>
          </li>
          <li><strong>(5 pts) Overall quality of the slides.</strong></li>
          <li>
            <strong>(5 pts) </strong>Plan for next year/ Lessons learnt– what would you do differently next time and
            what is missing from the tools that would have helped you?
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">D. Slides Format</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Slide 1</strong>
            <ul className="list-disc ml-6 mt-1">
              <li>Institute name</li>
              <li>Team name</li>
            </ul>
          </li>
          <li>
            <strong>Slide 2</strong>
            <ul className="list-disc ml-6 mt-1">
              <li>
                Briefly describe how you have applied the core concepts of Model-Based Design with
                MathWorks’ tools.
              </li>
              <li>
                Refer to points 1 (a) and 1(b) of Section C for more details on the content
              </li>
            </ul>
          </li>
          <li>
            <strong>Slide 3</strong>
            <ul className="list-disc ml-6 mt-1">
              <li>Plant Modeling</li>
              <li>Refer to point 2(a) of Section C for more details on the content</li>
            </ul>
          </li>
          <li>
            <strong>Slide 4</strong>
            <ul className="list-disc ml-6 mt-1">
              <li>Navigation and Path Planning</li>
              <li>Refer to point 2(b) of Section C for more details on the content</li>
            </ul>
          </li>
          <li>
            <strong>Slide 5</strong>
            <ul className="list-disc ml-6 mt-1">
              <li>Control Design and Tuning</li>
              <li>Refer to point 2(c) of Section C for more details on the content</li>
            </ul>
          </li>
          <li>
            <strong>Slide 6</strong>
            <ul className="list-disc ml-6 mt-1">
              <li>Image Processing</li>
              <li>Refer to point 2(d) of Section C for more details on the content</li>
            </ul>
          </li>
          <li>
            <strong>Slide 5</strong>
            <ul className="list-disc ml-6 mt-1">
              <li>Data Analysis</li>
              <li>Refer to point 2(e) of Section C for more details on the content</li>
            </ul>
          </li>
          <li>
            <strong>Slide 7</strong>
            <ul className="list-disc ml-6 mt-1">
              <li>Embedded Systems</li>
              <li>Refer to point 2(f) of Section C for more details on the content</li>
            </ul>
          </li>
          <li>
            <strong>Slide 8</strong>
            <ul className="list-disc ml-6 mt-1">
              <li>Lesson learned</li>
              <li>Refer to point 4 of Section C for more details on the content</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">E. Submission</h2>
        <ul className="list-disc ml-6">
          Fill out the following Microsoft Form to submit the report:
          <br/>
          <a className='text-blue-600' href="https://forms.office.com/pages/responsepage.aspx?id=ETrdmUhDaESb3eUHKx3B5kykBjkQSVRPkHxdE3KJ3QRUQ1hKMlhTQzNGTDNKMkJRT0I2NUE3RkY0VC4u&route=shorturl" target="_blank" rel="noopener noreferrer">
            Report Submission for DD Robocon India 2025 - MathWorks Modeling Award
          </a>
          <li>
            Please name your file in the following manner: TeamName_MathWorks_2025_V#. <em>For example:</em> TeamRobotSquad_MathWorks_2025_V1
          </li>
          <li>To avoid download errors, please submit the file as a '.pdf'.</li>
          <li>The deadline for submission is <strong>June 22, 2025, 11:30 p.m.</strong></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">F. Reference Materials</h2>
        <ul className="list-disc ml-6">
          <li>
            Recommended Tutorials:
            <ul className="list-disc ml-6 mt-1">
              <li><a href="https://matlabacademy.mathworks.com/details/matlab-onramp/gettingstarted" target="_blank" rel="noopener noreferrer" className="text-blue-600">MATLAB Onramp</a></li>
              <li><a href="https://matlabacademy.mathworks.com/details/simulink-onramp/simulink" target="_blank" rel="noopener noreferrer" className="text-blue-600">Simulink Onramp</a></li>
              <li><a href="https://matlabacademy.mathworks.com/details/stateflow-onramp/stateflow" target="_blank" rel="noopener noreferrer" className="text-blue-600">Stateflow Onramp</a></li>
              <li>Modeling Physical Systems:
                <ul className="list-disc ml-6 mt-1">
                  <li><a href="https://www.youtube.com/watch?v=g_TeErlJJX0" target="_blank" rel="noopener noreferrer" className="text-blue-600">Simulating Pneumatic Robot Actuators</a></li>
                  <li><a href="https://www.youtube.com/watch?v=EvBOd1t97kE" target="_blank" rel="noopener noreferrer" className="text-blue-600">Simulating Robot Throwing Mechanisms</a></li>
                  <li><a href="https://www.youtube.com/watch?v=1yQ8iuHAm0o" target="_blank" rel="noopener noreferrer" className="text-blue-600">Control Design for Robot Throwing Systems</a></li>
                </ul>
              </li>
              <li>Practical Approaches to Robot Perception:
                <ul className="list-disc ml-6 mt-1">
                  <li><a href="https://www.youtube.com/watch?v=GKVLY0iFyK0" target="_blank" rel="noopener noreferrer" className="text-blue-600">Basic Operations on Images</a></li>
                  <li><a href="https://www.youtube.com/watch?v=-bYKl64vpGY" target="_blank" rel="noopener noreferrer" className="text-blue-600">Image Segmentation and Analysis</a></li>
                  <li><a href="https://www.youtube.com/watch?v=rbjybw9UyOg" target="_blank" rel="noopener noreferrer" className="text-blue-600">Feature Matching and Tracking</a></li>
                </ul>
              </li>
              <li><a href="https://in.mathworks.com/matlabcentral/fileexchange/118630-matlab-and-simulink-ros-tutorials" target="_blank" rel="noopener noreferrer" className="text-blue-600">MATLAB and Simulink ROS Tutorials</a></li>
              <li><a href="https://in.mathworks.com/videos/mapping-for-mobile-robots-and-ugv-1633683705814.html" target="_blank" rel="noopener noreferrer" className="text-blue-600">Mapping for Mobile Robots and UGV</a></li>
              <li><a href="https://www.youtube.com/playlist?list=PLn8PRpmsu08oBSjfGe8WIMN-2_rwWFSgr" target="_blank" rel="noopener noreferrer" className="text-blue-600">‘How To’ – Videos using MATLAB and Simulink</a></li>
            </ul>
          </li>
          <li>
            Published Videos/Blogs by Teams:
            <ul className="list-disc ml-6 mt-1">
              <li><a href="https://blogs.mathworks.com/student-lounge/2024/12/09/rescue-on-mars-rtc-gransee-teams-journey-in-the-robocup-junior-onstage/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Rescue on Mars: RTC Gransee team’s journey in the RoboCup Junior Onstage</a></li>
              <li><a href="https://blogs.mathworks.com/student-lounge/2024/02/01/climb-stairs-and-shoot-the-target-a-student-robotics-project/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Climb stairs and shoot the target: A Student Robotics Project!</a></li>
              <li><a href="https://blogs.mathworks.com/student-lounge/2021/12/07/designing-arrow-throwing-robots-by-team-djs-robocon/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Designing Arrow Throwing Robots by Team DJS Robocon</a></li>
              <li><a href="https://blogs.mathworks.com/student-lounge/2021/06/07/designing-robots-to-play-rugby-by-team-kjsce-robocon/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Designing Robots to Play Rugby by Team KJSCE Robocon</a></li>
              <li><a href="https://blogs.mathworks.com/student-lounge/2019/08/14/quadruped-robot-for-robocon-2019/?s_tid=srchtitle" target="_blank" rel="noopener noreferrer" className="text-blue-600">Team Automatons Builds a Quadruped Robot for the ABU Robocon 2019 Task</a></li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">G. Reference Document</h2>
        <p className="mb-2">
          Please refer to the document for detailed information:
          <br/>
          <a
            href="https://docs.google.com/document/d/1Ly1P1mnf3XneE5MarhoBPle8bmVWofoo/edit?usp=sharing&ouid=104037063664267952590&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold"
          >
            MathWorks Modeling Award_DD Robocon India 2025.docx
          </a>
        </p>
      </section>


    </div>
  );
};

export default MathWorksModelingAward;