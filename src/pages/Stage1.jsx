import React from "react";

const Stage1 = () => {
  return (
    <div className="p-8 min-h-screen mt-14">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">
        DD-ROBOCON 2025 Stage-1 Evaluation
      </h1>

      <p className="mb-4 text-gray-700">
        As a part of Stage I, all teams need to submit the following online
        (Google Form) by the deadline specified on the website:
      </p>
      <ol className="list-decimal list-inside mb-6 text-gray-700">
        <li>“Solution Ideas (Form 1)” in the following format given below.
        </li>
        <li>
          A PDF file titled “Design Details Document team name” with a maximum
          of 5 pages (with Times New Roman normal font size 12) to expand their
          points/claims given in the Solution Ideas (Form 1). The Images should
          be clear and readable.
        </li>
        <li>
          A link to the repository with the CAD models of the robots in STEP
          and STL format must be provided. The same repository should have the
          animation of mechanism involved in avi/mp4 format. If the files are
          uploaded on a cloud-based drive, no passwords/special permissions
          should be enabled. In such a case where passwords/special permissions
          are enabled on the drive link, the files won’t be evaluated. The CAD
          models repository and PDF file link should be filled in form 1. No
          changes in the CAD models will be allowed after the deadline.
        </li>
      </ol>

      <h2 className="text-xl font-semibold mb-4 text-blue-600">“Solution Ideas (Form 1)”</h2>
      <div className="mb-6">
        <p className="text-gray-700">University/Institute/College Name:</p>
        <p className="text-gray-700">Team Name:</p>
        <p className="text-gray-700">Team Leader:</p>
        <p className="text-gray-700">Mobile number of the team leader:</p>
        <p className="text-gray-700">E-mail address of the team leader:</p>
        <p className="text-gray-700">
          Transaction (Registration fee) unique number:
        </p>
      </div>

      <h2 className="text-xl font-semibold mb-4 text-blue-600">
        Design of Robot-1
      </h2>
      <table className="table-auto border-collapse border border-gray-400 w-full mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="border border-gray-400 p-2 text-left">Robot-1</th>
            <th className="border border-gray-400 p-2 text-left">Marks (10 points)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2">
              Overall dimensions (in mm) and estimated weight (in Kgs)
            </td>
            <td className="border border-gray-400 p-2">1</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">
              Type of Drive (differential, three/four wheel etc.)
            </td>
            <td className="border border-gray-400 p-2">2</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">
              Type of Actuators integrated
            </td>
            <td className="border border-gray-400 p-2">1</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">
              Type of sensors integrated
            </td>
            <td className="border border-gray-400 p-2">1</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">
              Brief description of Ball Handling and Passing Mechanism
            </td>
            <td className="border border-gray-400 p-2">2</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">
              Brief description of Dribbling, Jumping and shooting Mechanism
            </td>
            <td className="border border-gray-400 p-2">3</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mb-4 text-blue-600">
        Design of Robot-2
      </h2>
      <table className="table-auto border-collapse border border-gray-400 w-full mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="border border-gray-400 p-2 text-left">Robot-2</th>
            <th className="border border-gray-400 p-2 text-left">Marks (10 points)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2">
              Overall dimensions (in mm) and estimated weight (in Kgs)
            </td>
            <td className="border border-gray-400 p-2">1</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">
              Type of Drive (differential, three/four wheel etc.)
            </td>
            <td className="border border-gray-400 p-2">2</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">
              Type of Actuators integrated
            </td>
            <td className="border border-gray-400 p-2">1</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">
              Type of sensors integrated
            </td>
            <td className="border border-gray-400 p-2">1</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">
              Brief description of Ball Handling and Passing Mechanism
            </td>
            <td className="border border-gray-400 p-2">2</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">
              Brief description of Dribbling, Jumping and Shooting Mechanism
            </td>
            <td className="border border-gray-400 p-2">3</td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-700">
        Note: Please ensure all submissions are completed as per the guidelines
        provided.
      </p>
      {/* Continue adding other sections similarly */}
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Evaluation Criteria
      </h1>

      <table className="table-auto border-collapse border border-gray-400 w-full mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="border border-gray-400 p-2 text-left">Points</th>
            <th className="border border-gray-400 p-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2">Solution Ideas</td>
            <td className="border border-gray-400 p-2">20</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">
              Design Document, CAD Models and Mechanism Animation
            </td>
            <td className="border border-gray-400 p-2">80</td>
          </tr>
          <tr className="font-bold">
            <td className="border border-gray-400 p-2">Total</td>
            <td className="border border-gray-400 p-2">100</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4 text-gray-700">
        1. The Solution Ideas (Form 1) is worth a maximum of 20 points.
      </p>
      <p className="mb-4 text-gray-700">
        2. The Design Document should detail the ideas proposed in the Solution
        Ideas form. It should be a technical document that describes proposed
        mechanism for achieving the different tasks. The document should also
        include relevant calculations/justifications for the proposed mechanism
        and demonstrate a clear understanding of the task’s objectives. Design
        Document, along with the CAD models of the proposed mechanism and their
        animations, is worth a maximum of 80 points. The individual sections
        will be evaluated as follows:
      </p>

      <h2 className="text-xl font-semibold mb-4 text-blue-600">
        Points Breakup for Design Document and CAD Models
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400 w-full mb-6">
          <thead className="bg-blue-100">
            <tr>
              <th className="border border-gray-400 p-2 text-left">Task</th>
              <th className="border border-gray-400 p-2 text-left">
                Mechanism Description (50%) & Animations (50%)
              </th>
              <th className="border border-gray-400 p-2 text-left">
                Calculations/ Justifications
              </th>
              <th className="border border-gray-400 p-2 text-left">CAD Models</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2">
                Ball Handling, Passing and Shooting Mechanism
              </td>
              <td className="border border-gray-400 p-2">10</td>
              <td className="border border-gray-400 p-2">15</td>
              <td className="border border-gray-400 p-2">14</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">
                Dribbling Mechanism
              </td>
              <td className="border border-gray-400 p-2">10</td>
              <td className="border border-gray-400 p-2">5</td>
              <td className="border border-gray-400 p-2">8</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">
                Jumping Mechanism
              </td>
              <td className="border border-gray-400 p-2">5</td>
              <td className="border border-gray-400 p-2">5</td>
              <td className="border border-gray-400 p-2">8</td>
            </tr>
          </tbody>
        </table>
      </div>


      <p className="mb-4 text-gray-700">
        3. For the shortlisted teams after Stage I, 1/3rd weightage of Stage I
        score and 2/3rd weightage of Stage II score will be used to select the
        teams for the final competition to be held at IIT Delhi.
      </p>
      <p className="mb-4 text-gray-700">
        4. Note: All mail and communications received from sponsors of
        DD-Robocon 2025 addressed to participants will be considered
        acceptable. This encompasses any correspondence related to sponsorship
        commitments, updates, or other relevant information pertaining to the
        event.
      </p>
      <p className="text-gray-700">
        We believe that being well-informed is integral to your success in this
        competition, and sponsors play a crucial role in supporting our
        collective journey. As such, we encourage you to actively engage with
        and acknowledge communications from our esteemed sponsors.
      </p>
      <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center mt-8">
        Payment Instructions
      </h1>

      <p className="mb-4 text-gray-700">
        For DD Robocon 2025, a non-refundable registration fee of Rs. 3000/-
        plus 18% GST per team is mandatory for consideration in Stage-I. The
        fees must be paid by the Stage-I registration deadline.
      </p>

      <h2 className="text-xl font-semibold mb-4 text-blue-600">
        Account Details for Payment
      </h2>
      <table className="table-auto border-collapse border border-gray-400 w-full mb-6">
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold text-gray-700">
              Account Name
            </td>
            <td className="border border-gray-400 p-2 text-gray-700">
              I HUB FOUNDATION FOR COBOTICS
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold text-gray-700">
              Account Number
            </td>
            <td className="border border-gray-400 p-2 text-gray-700">
              50100581989912
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold text-gray-700">
              Account Type
            </td>
            <td className="border border-gray-400 p-2 text-gray-700">
              Saving Account
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold text-gray-700">
              IFSC Code
            </td>
            <td className="border border-gray-400 p-2 text-gray-700">
              HDFC0000032
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 font-semibold text-gray-700">
              Branch
            </td>
            <td className="border border-gray-400 p-2 text-gray-700">
              SDA, New Delhi
            </td>
          </tr>
        </tbody>
      </table>

      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>
          Please include the names of the team leader, his/her mobile number,
          and the institute/college name in the participation form while
          completing the transaction.
        </li>
        <li>
          Attach a copy of the transaction receipt as payment proof while
          completing the registration form.
        </li>
        <li>
          Please include the institute/college and team leader’s name in the
          remarks section while completing the transaction.
        </li>
        <li>
          Attach a copy of the transaction receipt as payment proof while
          completing the Stage-I registration form.
        </li>

      </ul>
      <a
        href="https://drive.google.com/file/d/1j3d28wzG1g4AyOGzMkwAMuVTSuJ093EE/view?usp=sharing"
        className="text-center text-3xl font-semibold mb-6 text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Stage 1 Result Click Here to Download
      </a>
      <br />
      {/* <a
        href="https://drive.google.com/file/d/1j3d28wzG1g4AyOGzMkwAMuVTSuJ093EE/view?usp=sharing"
        className="text-center text-3xl font-semibold mb-6 text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to Download fee receipt
      </a> */}

      <div id="non-competitive-presentations" className="mt-10">
        <h2 className="text-2xl font-semibold mb-2 text-red-600">
          Announcement: DD-Robocon 2025 Non-Competitive Presentations
        </h2>
        <p className="mb-4">
          Dear Robotic Enthusiasts,
        </p>
        <p className="mb-2">
          We extend our heartfelt congratulations to all the teams who participated in
          Stage-1 of DD-Robocon 2025. Your dedication, creativity, and hard work are truly commendable.
          Robotics is a journey of innovation, perseverance, and continuous learning, and every step you take
          brings you closer to excellence.
        </p>
        <p className="mb-2">
          For the teams that did not qualify for Stage-2, we sincerely appreciate your efforts and
          the passion you have shown throughout this stage. Every challenge is an opportunity to learn and grow,
          and we encourage you to keep pushing forward. We hope to see you back, stronger than ever, in future competitions.
          Your journey in robotics does not end here—this is just the beginning!
        </p>
        <p className="mb-2">
          To provide you with an opportunity to showcase your innovations, we are inviting you to present
          your developments of robots in the form of a presentation which can include videos of the robots.
          Submissions must be completed before the deadline of <strong>April 15, 2025</strong>.
          Selected presentations will be shortlisted to be shown to the teams of judges in a special session
          during <strong>July 12-13, 2025</strong>, at Thyagaraj Stadium, New Delhi. Some of the best will be
          recognized during the <strong>DD-Robocon 2025 Award Ceremony on July 13, 2025</strong>.
        </p>
        <p className="mb-2">
          The special <strong>“Non-Competitive Presentation Category”</strong> has been conceptualized this year
          to encourage those who could not qualify for Stage-2. Those who did not participate in Stage-1
          can also take part in this non-competitive event by paying a nominal registration fee of
          <strong>Rs. 3000/- plus 18% GST</strong> and submitting their presentation by
          <strong>April 15, 2025</strong>. Like DD-Robocon 2025 teams, all participants in this category will
          receive a <strong>Certificate of Participation</strong>.
        </p>
        <p className="mb-4">
          We appreciate your enthusiasm and look forward to an incredible DD-Robocon 2025!
        </p>
        <p className="mb-2">
          For any queries, feel free to reach out to us.
        </p>
      </div>

    </div>

  );
};

export default Stage1;
