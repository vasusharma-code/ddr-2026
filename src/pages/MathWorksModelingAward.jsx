import React from 'react';
import mathlogo from '../assets/MathLogo.png';

const MathWorksModelingAward = () => {
  return (
    <div className='p-8 min-h-screen mt-14 bg-white text-gray-900'>
      <div className='flex justify-center items-center mb-6'>
        <img src={mathlogo} alt='MathWorks Logo' className='h-52' />
      </div>
      <h1 className='text-3xl font-bold mb-6 text-blue-700 text-center'>
        DD Robocon India 2026: MathWorks Modeling Award
      </h1>

      <section className='mb-6'>
        <p><strong>Event Name:</strong> DD Robocon India 2026: MathWorks Modeling Award</p>
        <p><strong>MathWorks Point-of-Contact:</strong> Manavendra Desai-Deodhar (<a className='text-blue-600 underline' href='mailto:mdesaide@mathworks.com'>mdesaide@mathworks.com</a>)</p>
        <p><strong>Date of Announcement:</strong> April 2026</p>
        <p className='mt-3 italic'><strong>Please refer to this document for detailed information:</strong>{' '}
          <a href='https://drive.google.com/file/d/1W-SiH7o0rCOe7Bt5l7H4_4DXSSSGmF4u/view?usp=sharing' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>MathWorks_Modeling_Award_DD_Robocon_India_2026.pdf</a>
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>A. Award overview</h2>
        <p>The MathWorks Modeling Award is designed to recognize the teams that demonstrate the best use of MathWorks tools in DD Robocon India 2026. Winners will be selected through a two-phase evaluation process, details of which can be found in Section B.</p>
        <p className='mt-3'>The teams securing first, second, and third place will receive cash prizes of INR 35000, INR 20000, and INR 15000, respectively. These prizes will be conferred during the DD Robocon India 2026 award ceremony.</p>
        <p className='mt-3 font-semibold'>Important Note: As per the Income Tax Act 1961, MathWorks India is required to deduct Tax at source from this token of our appreciation. This Tax deduction will be at the rate of 30%. The amount of Tax deducted at Source will be available in your PAN number and can be utilized against your Tax liability for the year or otherwise can be claimed as a refund from the Government of India by timely filing of the Income Tax return for the year.</p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>B. Procedure for participation</h2>
        <ul className='list-disc ml-6 space-y-2'>
          <li>Participation in this competition is free.</li>
          <li>
            <strong>Phase 1:</strong>
            <ul className='list-disc ml-6 mt-2 space-y-1'>
              <li>The teams must submit their entries by 11:30 p.m. IST on June 14, 2026. Only one entry can be submitted by each team.</li>
              <li>The required contents and format of this submission are provided in Sections C and D. The teams must use the form provided in Section E to submit their entry.</li>
              <li>All entries will be judged by MathWorks engineers on a 100-point scale. The distribution of points is provided in Section C.</li>
              <li>The result for Phase 1 will be announced on June 18, 2026.</li>
              <li>No more than ten teams will qualify for Phase 2 of the MathWorks Modeling Award.</li>
              <li>A team must be shortlisted for Stage-2 of DD Robocon India 2026 to be eligible for Phase 2 of the MathWorks Modeling Award.</li>
            </ul>
          </li>
          <li>
            <strong>Phase 2:</strong>
            <ul className='list-disc ml-6 mt-2 space-y-1'>
              <li>The teams will be invited to deliver a formal presentation of their work to the MathWorks judges. The dates and a WebEx link for this online presentation will be sent to the qualified teams on June 18, 2026.</li>
              <li>During the online presentation, teams will use the report they submitted in Phase 1 and keep relevant drawings, simulations and/or demonstrations prepared, to facilitate Q&As.</li>
            </ul>
          </li>
          <li>The teams securing first, second, and third place will be announced during the award ceremony of DD Robocon India 2026.</li>
          <li>The judges’ decisions are final.</li>
        </ul>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>C. Content for Phase 1 submission</h2>
        <p>Points (100 available) will be awarded to submissions in Phase 1 based on the criteria given below.</p>

        <h3 className='text-xl font-semibold mt-4'>(I) Application of Model-Based Design (15 pts)</h3>
        <ul className='list-disc ml-6 mt-2 space-y-1'>
          <li>Please describe how the team has implemented core principles of Model-Based Design using MathWorks tools to address the problem statement of the DD Robocon India 2026 competition.</li>
          <li>Summarize the role that MathWorks tools played in achieving the objectives of the DD Robocon India 2026 competition.</li>
          <li>Define and explain how MathWorks tools were integrated into each stage of the development process: requirements analysis; designing through modelling and simulation; verification and validation.</li>
          <li>Learn about Model-Based Design here: <a href='https://www.mathworks.com/solutions/model-based-design' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>https://www.mathworks.com/solutions/model-based-design</a></li>
        </ul>

        <h3 className='text-xl font-semibold mt-4'>(II) Utilization of MathWorks tools for robot development (75 pts):</h3>
        <p className='ml-6 mt-2'>In relation to the problem statement of DD Robocon India 2026, please describe how the team has utilized MathWorks tools for</p>
        <ol className='list-[lower-alpha] ml-10 mt-2 space-y-4'>
          <li>
            <strong>Modeling the robot (15 pts):</strong>
            <ol className='list-decimal ml-6 mt-2 space-y-1'>
              <li>Development of models for different components of the robot</li>
              <li>Validation of models developed, and their degree of correlation with real-world behavior</li>
              <li>Steps taken in designing the models to ensure usability, clarity, extensibility, and efficient execution</li>
            </ol>
            <p className='mt-2 ml-6 italic'>Example: Modeling mechanisms and actuators in the robot, with appropriate kinematics and dynamics included, using Simscape Multibody.</p>
          </li>
          <li>
            <strong>Image processing and computer vision (10 pts):</strong>
            <p className='mt-1'>Describe the image processing and computer vision methodologies developed to facilitate decision-making and navigation of the robot</p>
            <p className='mt-2 ml-6 italic'>Example: Object-detection using convolution neural networks in the Computer Vision Toolbox.</p>
          </li>
          <li>
            <strong>Path-planning and navigation (15 pts):</strong>
            <ol className='list-decimal ml-6 mt-2 space-y-1'>
              <li>Describe the decision-making logic developed for different actions performed by the robot</li>
              <li>Describe the algorithms implemented and/or developed for robot navigation and how data from the image-processing and computer-vision methodologies was used.</li>
            </ol>
            <p className='mt-2 ml-6 italic'>Example: Programming the decision-making logic using Stateflow and using the RRT algorithm in the Robotics Systems Toolbox for collision-free path-planning and navigation.</p>
          </li>
          <li>
            <strong>Control Design and Tuning (10 pts):</strong>
            <ol className='list-decimal ml-6 mt-2 space-y-1'>
              <li>Describe the control algorithms utilized and/or developed to control the robot and its components</li>
              <li>Describe the plant models used in developing these controllers</li>
              <li>Describe the method used for tuning these controllers</li>
              <li>Describe how the plant models and control algorithms were validated, and the level of correlation between simulated and real-world performance of the robot</li>
              <li>Describe the steps taken in designing the plant models to ensure usability, clarity, extensibility, and efficient execution of the control algorithm.</li>
            </ol>
            <p className='mt-2 ml-6 italic'>Example: Creating a linear model for your control algorithm using the Control System Toolbox, and Tuning a PID controller using the PID Tuner app.</p>
          </li>
          <li>
            <strong>Data Analysis (10 pts):</strong>
            <p className='mt-1'>Describe how data on the deployed robot is acquired, analyzed, and visualized.</p>
            <p className='mt-2 ml-6 italic'>Example: Acquiring and visualizing sensor data from the robot on a dashboard created using the MATLAB App Designer.</p>
          </li>
          <li>
            <strong>Embedded systems and deployment on hardware (15 pts):</strong>
            <ol className='list-decimal ml-6 mt-2 space-y-1'>
              <li>Describe how the models and algorithms, developed and tested in simulation, were deployed on the physical robot</li>
              <li>Describe how the automatic code-generation capability in MATLAB and Simulink was used in deploying models and algorithms on the physical robot and its embedded hardware</li>
              <li>Explain how the physical robot is being tested and tuned for the DD Robocon India 2026 competition.</li>
            </ol>
            <p className='mt-2 ml-6 italic'>Example: Using MATLAB Coder to automatically convert functions of the Robotics System Toolbox into C/C++ code for deployment on hardware.</p>
          </li>
        </ol>

        <h3 className='text-xl font-semibold mt-4'>(III) Quality, presentation, and readability, of information, schematics, and code snippets, in your submission (5 pts)</h3>

        <h3 className='text-xl font-semibold mt-4'>(IV) A brief discussion on your plans for next year based on the lessons already learnt this year (5 pts)</h3>
        <p className='ml-6'>Example: What would you do differently next time and what more would you like in the current MathWorks tools you have access to.</p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>D. Format for Phase 1 submission</h2>
        <p className='ml-6'>Your entry must be in the form of a report with a two-column layout, maximum five pages, submitted as PDF.</p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>E. Phase 1 submission</h2>
        <p className='ml-6'>Submit your entry for Phase 1 of the MathWorks Modeling Award using this Microsoft Form: <a href='https://forms.office.com/r/SNKLRTgJkz' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Report Submission for DD Robocon India 2026 - MathWorks Modeling Award</a></p>
        <p className='ml-6 mt-2'>Please name your entry using the following format: <em>TeamName_MathWorks_2026_Version_#</em>. For example: <em>TeamRobotSquad_MathWorks_2026_Version_1</em>.</p>
        <p className='ml-6 font-bold'>To avoid download errors, please submit the file as a PDF with a '.pdf' file extension.</p>
        <p className='ml-6'>The deadline for submitting your entry is <strong>11:30 p.m. IST on June 14, 2026.</strong></p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>F. Resources to get started</h2>
        <ul className='list-disc ml-6 space-y-3'>
          <li><strong>Recommended self-paced tutorials</strong>
            <ul className='list-disc ml-6 mt-1'>
              <li><a href='https://www.mathworks.com/learn/tutorials/matlab-onramp.html' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>MATLAB Onramp</a></li>
              <li><a href='https://www.mathworks.com/learn/tutorials/simulink-onramp.html' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Simulink Onramp</a></li>
              <li><a href='https://www.mathworks.com/learn/tutorials/stateflow-onramp.html' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Stateflow Onramp</a></li>
            </ul>
          </li>
          <li><strong>Modeling physical systems</strong>
            <ul className='list-disc ml-6 mt-1'>
              <li><a href='https://www.youtube.com/watch?v=g_TeErlJJX0' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Simulating Pneumatic Robot Actuators</a></li>
              <li><a href='https://www.youtube.com/watch?v=EvBOd1t97kE' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Simulating Robot Throwing Mechanisms</a></li>
              <li><a href='https://www.youtube.com/watch?v=1yQ8iuHAm0o' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Control Design for Robot Throwing Systems</a></li>
              <li><a href='https://www.mathworks.com/help/robotics/ug/model-and-control-a-manipulator-arm-with-simscape.html' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Model and Control a Manipulator Arm with Robotics and Simscape - MATLAB &amp; Simulink</a></li>
              <li><a href='https://www.mathworks.com/help/robotics/ug/design-and-simulate-a-warehouse-pick-and-place-application-using-a-mobile-manipulator.html' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Design and Simulate Warehouse Pick-and-Place Application Using Mobile Manipulator in Simulink and Gazebo - MATLAB &amp; Simulink</a></li>
              <li><a href='https://github.com/mathworks/Industrial-Robots-Simscape' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>GitHub - mathworks/Industrial-Robots-Simscape</a></li>
            </ul>
          </li>
          <li><strong>Practical approaches to robot perception</strong>
            <ul className='list-disc ml-6 mt-1'>
              <li><a href='https://www.mathworks.com/help/images/basic-operations-on-images.html' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Basic Operations on Images</a></li>
              <li><a href='https://www.mathworks.com/help/images/image-segmentation-and-analysis.html' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Image Segmentation and Analysis</a></li>
              <li><a href='https://www.mathworks.com/help/vision/feature-matching-and-tracking.html' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Feature Matching and Tracking</a></li>
            </ul>
          </li>
          <li><a href='https://in.mathworks.com/matlabcentral/fileexchange/118630-matlab-and-simulink-ros-tutorials' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>MATLAB and Simulink ROS Tutorials</a></li>
          <li><a href='https://in.mathworks.com/videos/mapping-for-mobile-robots-and-ugv-1633683705814.html' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Mapping for Mobile Robots and UGV</a></li>
          <li><a href='https://www.youtube.com/playlist?list=PLn8PRpmsu08oBSjfGe8WIMN-2_rwWFSgr' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>‘How To’ – Videos using MATLAB and Simulink</a></li>
          <li><strong>Robot manipulation and locomotion</strong>
            <ul className='list-disc ml-6 mt-1'>
              <li><a href='https://www.mathworks.com/solutions/robotics/robot-manipulators.html' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Robot Manipulators - MATLAB &amp; Simulink</a></li>
              <li><a href='https://www.mathworks.com/help/robotics/ug/perform-pick-and-place-with-collision-object-based-obstacle-avoidance-in-robot-scenario.html' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Perform Pick and Place with Collision-Object-Based Obstacle Avoidance in Robot Scenario - MATLAB &amp; Simulink</a></li>
              <li><a href='https://www.mathworks.com/matlabcentral/fileexchange/64227-matlab-and-simulink-robotics-arena-walking-robot' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>MATLAB and Simulink Robotics Arena: Walking Robot - File Exchange - MATLAB Central</a></li>
              <li><a href='https://www.mathworks.com/matlabcentral/fileexchange/64237-running-robot-model-in-simscape' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Running Robot Model in Simscape - File Exchange - MATLAB Central</a></li>
            </ul>
          </li>
          <li><strong>Navigation</strong>
            <ul className='list-disc ml-6 mt-1'>
              <li><a href='https://www.mathworks.com/solutions/robotics/mobile-robots.html' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Mobile Robots - MATLAB &amp; Simulink</a></li>
              <li><a href='https://www.mathworks.com/help/nav/ug/obstacle-avoidance-with-turtlebot-and-vfh.html' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Obstacle Avoidance with TurtleBot and VFH - MATLAB &amp; Simulink</a></li>
              <li><a href='https://www.mathworks.com/help/robotics/ug/a-star-path-planning-and-obstacle-avoidance.html' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>A* Path Planning and Obstacle Avoidance in a Warehouse - MATLAB &amp; Simulink</a></li>
              <li><a href='https://www.mathworks.com/help/robotics/ug/perform-obstacle-avoidance-in-warehouse-scenario-with-mobile-robots.html' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Perform Obstacle Avoidance in Warehouse Scenario with Mobile Robots - MATLAB &amp; Simulink</a></li>
            </ul>
          </li>
          <li><strong>Code generation</strong>
            <ul className='list-disc ml-6 mt-1'>
              <li><a href='https://www.mathworks.com/academia/students/tutorials-videos.html#codegeneration' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Tutorials and Videos - MATLAB &amp; Simulink</a></li>
            </ul>
          </li>
          <li><strong>Published Videos/Blogs by Teams</strong>
            <ul className='list-disc ml-6 mt-1'>
              <li><a href='https://blogs.mathworks.com/student-lounge/2025/12/15/dd-robocon-india-2025-mathworks-modeling-award-from-simulation-to-the-real-world-with-bracts-vit-pune/' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>DD ROBOCON India 2025 MathWorks Modeling Award: From Simulation to the Real-World with BRACT’s VIT Pune » Student Lounge - MATLAB &amp; Simulink</a></li>
              <li><a href='https://blogs.mathworks.com/student-lounge/2024/12/09/rescue-on-mars-rtc-gransee-teams-journey-in-the-robocup-junior-onstage/' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Rescue on Mars: RTC Gransee team’s journey in the RoboCup Junior Onstage</a></li>
              <li><a href='https://blogs.mathworks.com/student-lounge/2024/02/01/climb-stairs-and-shoot-the-target-a-student-robotics-project/' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Climb stairs and shoot the target: A Student Robotics Project!</a></li>
              <li><a href='https://blogs.mathworks.com/student-lounge/2021/12/07/designing-arrow-throwing-robots-by-team-djs-robocon/' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Designing Arrow Throwing Robots by Team DJS Robocon</a></li>
              <li><a href='https://blogs.mathworks.com/student-lounge/2021/06/07/designing-robots-to-play-rugby-by-team-kjsce-robocon/' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Designing Robots to Play Rugby by Team KJSCE Robocon</a></li>
              <li><a href='https://blogs.mathworks.com/student-lounge/2019/08/14/quadruped-robot-for-robocon-2019/?s_tid=srchtitle' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Team Automatons Builds a Quadruped Robot for the ABU Robocon 2019 Task</a></li>
            </ul>
          </li>
          <li><strong>General resources</strong>
            <ul className='list-disc ml-6 mt-1'>
              <li><a href='https://www.mathworks.com/solutions/robotics.html' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>Robotics and Autonomous Systems - MATLAB &amp; Simulink</a></li>
              <li><a href='https://github.com/mathworks-robotics/awesome-matlab-robotics' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>GitHub - mathworks-robotics/awesome-matlab-robotics</a></li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MathWorksModelingAward;
