import React from "react";

const Stage1 = () => {
  return (
    <div className="p-8 min-h-screen mt-14">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">
        DD-ROBOCON 2026 Stage I Guidelines
      </h1>

      <p className="mb-4 text-gray-700">
        As a part of Stage I, all teams need to submit the following online
        (Google Form) by the deadline specified on the website:
      </p>

      <ol className="list-decimal list-inside mb-6 text-gray-700">
        <li className="mb-2">
          Please read the “General details” and the “Evaluation criteria”
          provided below carefully.
        </li>
        <li className="mb-2">
          A link to the repository with the CAD models of the robots in STEP and
          STL format must be provided. The same repository should have the
          animation of mechanism involved in avi/mp4 format. If the files are
          uploaded on a cloud-based drive, no passwords/special permissions
          should be enabled. In such a case where passwords/special permissions
          are enabled on the drive link, the files won’t be evaluated. The CAD
          models repository and Design document (in pdf format) as per section
          2, file link should be filled in google form. Any changes to the
          submitted files after the deadline will not be permitted.
        </li>
      </ol>

      <h2 className="text-xl font-semibold mb-4 text-blue-600">
        General details
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>University / Institute / College Name</li>
        <li>Team Name</li>
        <li>Team Leader</li>
        <li>Team Leader Contact Number</li>
        <li>Team Leader E-mail</li>
        <li>Payment / Registration Transaction ID</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 text-blue-600">
        Evaluation Criteria
      </h2>
      <table className="table-auto border-collapse border border-gray-400 w-full mb-6">
        <thead className="bg-blue-100">
          <tr>
            <th className="border border-gray-400 p-2 text-left">
              Description
            </th>
            <th className="border border-gray-400 p-2 text-left">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2">Solution Ideas</td>
            <td className="border border-gray-400 p-2">10</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">
              Design Document, CAD Models and Mechanism Animation
            </td>
            <td className="border border-gray-400 p-2">90</td>
          </tr>
          <tr className="font-bold">
            <td className="border border-gray-400 p-2">Total</td>
            <td className="border border-gray-400 p-2">100</td>
          </tr>
        </tbody>
      </table>

      <ol className="list-decimal list-inside mb-6 text-gray-700" start="1">
        <li className="mb-2">
          Please fill out the linked evaluation form and upload it to the Google
          Form.
        </li>
        <li className="mb-2">
          Please upload your pre-registration/registration proof in the Google
          Form.
        </li>
        <li className="mb-2">
          For the shortlisted teams after Stage I, 1/3rd weightage of Stage I
          score and 2/3rd weightage of Stage II score will be used to select the
          teams for the final competition to be held at IIT Delhi.
        </li>
        <li className="mb-2">
          <strong>Consent:</strong>
          <br />
          By participating in DD-Robocon 2026, teams hereby give their consent
          to receive and acknowledge all official emails and communications from
          the sponsors of DD-Robocon 2026. Such communications may include
          information related to sponsorship commitments, updates, and other
          event related matters.
          <br />
          <br />
          Additionally, participants grant permission to the event organizers to
          use the submitted CAD models, design document, and animation content
          after the event for educational, training, and promotional purposes,
          while ensuring due credit to the respective teams.
        </li>
      </ol>

      <hr className="my-8 border-gray-300" />

      <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">
        DD-Robocon 2026 – Stage I Submission
      </h1>

      <h2 className="text-xl font-semibold mb-4 text-blue-600">
        General Instructions
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>
          It is assumed that:
          <ul className="list-disc list-inside ml-6 mb-2 mt-1">
            <li>Robot 1 (R1) is a manual / autonomous robot</li>
            <li>Robot 2 (R2) is a fully autonomous robot</li>
          </ul>
        </li>
        <li>
          If any of the mechanisms listed in Section 2 (Points 3, 5, and 6) are
          not implemented, please clearly justify the reason.
        </li>
        <li>
          Marks will be awarded strictly based on the clarity and correctness of
          your responses.
        </li>
        <li>
          Do not use any AI-based tools to generate answers. If detected, the
          submission will be rejected and registration cancelled.
        </li>
        <li>
          A PDF file titled “Stage I Document – Team Name” must be submitted and
          should not exceed a maximum of five pages (Section 2).
        </li>
        <li>
          Please refer to the Stage I guidelines on the official website for
          detailed guidelines.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 text-blue-600">
        Section 1: Solution Ideas
      </h2>
      <p className="mb-2 text-gray-700 italic">
        (Answer each question in 15–25 words)
      </p>
      <p className="mb-6 text-gray-700 font-bold">Total Marks: 10</p>

      {/* Robot 1 */}
      <h3 className="text-lg font-semibold mb-2 text-blue-500">
        Robot 1 (R1) – 5 Marks
      </h3>
      <ol className="list-decimal list-inside mb-6 text-gray-700 space-y-4">
        <li>
          <strong>Overall Dimensions and Estimated Weight [1]</strong>
          <br />
          (Provide dimensions in mm and weight in kg)
          <br />
          Ans:
        </li>
        <li>
          <strong>Drive Mechanism [2]</strong>
          <br />
          (e.g., Differential drive, three-wheel drive, four-wheel drive, etc.)
          <br />
          Ans:
        </li>
        <li>
          <strong>Type of Actuators Used [1]</strong>
          <br />
          Ans:
        </li>
        <li>
          <strong>Type of Sensors Integrated [1]</strong>
          <br />
          Ans:
        </li>
      </ol>

      {/* Robot 2 */}
      <h3 className="text-lg font-semibold mb-2 text-blue-500">
        Robot 2 (R2) – 5 Marks
      </h3>
      <ol className="list-decimal list-inside mb-6 text-gray-700 space-y-4">
        <li>
          <strong>Overall Dimensions and Estimated Weight [1]</strong>
          <br />
          Ans:
        </li>
        <li>
          <strong>Drive Mechanism [2]</strong>
          <br />
          Ans:
        </li>
        <li>
          <strong>Type of Actuators Used [1]</strong>
          <br />
          Ans:
        </li>
        <li>
          <strong>Type of Sensors Integrated [1]</strong>
          <br />
          Ans:
        </li>
      </ol>

      <h2 className="text-xl font-semibold mb-4 text-blue-600">
        Section 2: Design Document, CAD Model and Mechanism Explanation
      </h2>
      <p className="mb-2 text-gray-700 italic">
        (Each answer should be within 150 words. Relevant images and CAD views
        must be uploaded.)
      </p>
      <p className="mb-6 text-gray-700 font-bold">Total Marks: 90</p>

      <ol className="list-decimal list-inside mb-6 text-gray-700 space-y-6">
        <li>
          <div className="inline-block align-top">
            <strong>Description of Robot 1 (R1) with CAD Views [5]</strong>
            <p className="mt-1">Provide a brief description of R1 including:</p>
            <ul className="list-disc list-inside ml-6 mt-1 mb-2">
              <li>Functional overview</li>
              <li>Design philosophy</li>
              <li>
                CAD views (Front, Back, Top, Bottom, Isometric, Complete
                Assembly)
              </li>
            </ul>
            Ans:
          </div>
        </li>
        <li>
          <div className="inline-block align-top">
            <strong>Description of Robot 2 (R2) with CAD Views [5]</strong>
            <p className="mt-1">Include:</p>
            <ul className="list-disc list-inside ml-6 mt-1 mb-2">
              <li>Functional overview</li>
              <li>Design philosophy</li>
              <li>
                CAD views (Front, Back, Top, Bottom, Isometric, Complete
                Assembly)
              </li>
            </ul>
            Ans:
          </div>
        </li>
        <li>
          <strong>Game Object Pick-and-Place Mechanism (R1/R2) [25]</strong>
          <ul className="list-[upper-roman] list-inside ml-6 mt-2 space-y-2">
            <li>
              Mechanism Description and Animation Views [15]
              <br />
              Ans:
            </li>
            <li>
              Calculations / Justifications [5]
              <br />
              Ans:
            </li>
            <li>
              CAD Model Views [5]
              <br />
              Ans:
            </li>
          </ul>
        </li>
        <li>
          <strong>Object Detection and Autonomous Navigation (R2) [25]</strong>
          <ul className="list-[upper-roman] list-inside ml-6 mt-2 space-y-2">
            <li>
              System Description and Animation Views
              <ul className="list-[lower-alpha] list-inside ml-6 mt-1 space-y-2">
                <li>
                  Object Detection System [5]
                  <br />
                  Ans:
                </li>
                <li>
                  Algorithm [5]
                  <br />
                  Ans:
                </li>
              </ul>
            </li>
            <li>
              Autonomous Navigation
              <ul className="list-[lower-alpha] list-inside ml-6 mt-1 space-y-2">
                <li>
                  Navigation Algorithm and Software Environment [5]
                  <br />
                  Ans:
                </li>
                <li>
                  Simulation Animation Views [10]
                  <br />
                  Ans:
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Lifting Mechanism [15]</strong>
          <ul className="list-[upper-roman] list-inside ml-6 mt-2 space-y-2">
            <li>
              Mechanism Description and Animation Views [5]
              <br />
              Ans:
            </li>
            <li>
              Calculations / Justifications [5]
              <br />
              Ans:
            </li>
            <li>
              CAD Model Views During Lifting [5]
              <br />
              Ans:
            </li>
          </ul>
        </li>
        <li>
          <strong>Weapon Assembly Mechanism [15]</strong>
          <ul className="list-[upper-roman] list-inside ml-6 mt-2 space-y-2">
            <li>
              Mechanism Description [5]
              <br />
              Ans:
            </li>
            <li>
              CAD Model Views [5]
              <br />
              Ans:
            </li>
            <li>
              Animation Views [5]
              <br />
              Ans:
            </li>
          </ul>
        </li>
      </ol>

      <a
  href="https://drive.google.com/file/d/1s259cy1qb71izri3CxRRYuJcdBzo6Mxr/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="text-center text-3xl font-semibold mb-6 text-blue-600 hover:underline block"
>
  Click here to download the Guidelines PDF
</a>

    </div>
  );
};

export default Stage1;
