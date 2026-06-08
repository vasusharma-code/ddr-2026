import React from "react";
import { Card, Container, PageHero, Section } from "../components/DesignSystem";

const Stage3 = () => (
  <div className="page-surface text-slate-900">
    <PageHero title="Guidelines for NATIONAL DD-ROBOCON 2026 on July 4-5, 2026" />
    <Section>
      <Container className="max-w-4xl">
        <Card as="article" className="document-flow space-y-6 p-5 sm:p-8 lg:p-10">

      <p className="text-lg font-semibold text-red-600 text-center">
        Note: DD-Robocon 2026 will be held physically at IIT Delhi, New Delhi.
      </p>

      <h2 className="text-2xl font-bold text-blue-700">Section-A</h2>

      <div className="space-y-4 text-lg leading-8">
        <p>1. Team Registration</p>
        <p>· Mandatory: All qualified teams must fill the Participation Form after payment of non-refundable registration fee</p>
        <p>· Registration Fee for Core Members (6+1)*: ₹50,000/- + 18% GST (Total: ₹59,000/-).</p>
        <p>* Each team can have a maximum of 6 student members including team leader and one faculty mentor</p>
        <p>o Includes:</p>
        <div className="ml-8 space-y-1">
          <p>▪ Participation for the team</p>
          <p>▪ Local transportation (Railway Station ⇄ IIT Delhi).</p>
          <p>▪ One faculty mentor (if any).</p>
          <p>▪ Refreshments at the venue</p>
        </div>

        <p className="font-semibold">Note: No boarding or lodging is included in this fee.</p>

        <p>2. Additional Team Members</p>
        <p>· Additional members can join the team.</p>
        <p>· Fee: ₹6,500/- + 18% GST per person (Total: ₹7,670/- per person).</p>
        <p>o Includes:</p>
        <div className="ml-8 space-y-1">
          <p>▪ Participation.</p>
          <p>▪ Local transportation (Railway Station ⇄ IIT Delhi).</p>
          <p>▪ Refreshments at the venue</p>
        </div>
        <p>o Excludes: Boarding and lodging.</p>

        <p>3. Accommodation (Optional)</p>
        <p>· On-campus Hostel Accommodation (IIT Delhi):</p>
        <p>o Fee: ₹3,250/- + 18% GST per person (Total: ₹3,835/- per person for 4 Nights).</p>
        <p>o Includes: Boarding and lodging are arranged during July 2-5, 2026 (4 nights).</p>

        <p>4. Important Deadline:</p>
        <p>The total registration fee must be paid by June 10, 2026 (11:59 PM).</p>

        <p>The account details for the payment of the fees are given below:</p>
        <div className="ml-6 space-y-1 text-base">
          <p>Account Name: I HUB FOUNDATION FOR COBOTICS</p>
          <p>Account number: 50100581989912</p>
          <p>Account type: Saving Account</p>
          <p>IFSC Code: HDFC0000032</p>
          <p>Branch: SDA, New Delhi</p>
        </div>

        <p>* Please include the names of the team leader and the institute/college name in the participation form while completing the transaction.</p>
        <p>* Attach a copy of the transaction receipt as payment proof while completing the registration form.</p>

        <h2 className="text-2xl font-bold text-blue-700 mt-8">Section-B</h2>

        <p>1. Permission Letter from your Institute to participate is to be filled in and submitted in the <a href="https://docs.google.com/forms/d/1ESONas0xzns_onGy-FfyvAjJIutZxQoqti_MmQ5jeVE/viewform?edit_requested=true" target="_blank" rel="noreferrer" className="text-blue-700 underline">Participation form</a> by June 10, 2026 (11:59 PM) for successful confirmation of physical participation during July 2-5, 2026.</p>

        <p>2. The Permission Letter is to be obtained from the Director/Principal/HOD with their signature in original with seal (<a href="https://docs.google.com/document/d/19giW5RNXlVvfAS2DRneMOoBJUy4v8VLe/edit?usp=sharing&ouid=104266911694900133464&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="text-blue-700 underline">click here for the format</a>).</p>

        <p>3. Each qualifying team MUST also fill up their travel plan by filling up another form for their pick-up and drop from nearby stations only (New Delhi, Old Delhi and Hazrat Nizamuddin). Google Form (travel plan) is to be filled and submitted by June 15, 2026 (11:59 PM)</p>

        <div className="rounded-lg border border-blue-200 bg-blue-50 p-5 shadow-sm">
          <p className="text-xl font-bold text-blue-800">Travel Form for DD-Robocon 2026</p>
          <p className="mt-2 text-base leading-7 text-gray-700">
            Submit your pick-up and drop details for nearby stations through the official travel form by June 15, 2026 at 11:59 PM.
          </p>
          <a
            href="https://docs.google.com/forms/d/1vPqU6nUzbfQvSTM2Bl_I9qcUYkFFfAo2-bLccwTU9do/edit"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-11 items-center rounded-md bg-blue-700 px-5 py-2 font-semibold !text-white no-underline transition hover:bg-blue-800 hover:!text-white"
          >
            Open Travel Form
          </a>
        </div>

        <p className="font-bold text-green-700">ALL THE BEST!</p>
      </div>
        </Card>
      </Container>
    </Section>
  </div>
);

export default Stage3;
