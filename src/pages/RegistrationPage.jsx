import React from "react";
import { Card, Container, PageHero, Section } from "../components/DesignSystem";

const RegistrationPage = () => {
  return (
    <div className="page-surface">
      <PageHero title="Pre Registration" />
      <Section>
        <Container>
          <Card className="mx-auto max-w-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Registration Details</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-green-200 bg-green-50 p-5 text-center">
                <span className="text-xl font-bold text-green-700">Price</span>
                <div className="text-lg font-medium mt-2">₹3,000 + 18% GST</div>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-5 text-center">
                <span className="text-xl font-bold text-blue-700">Date</span>
                <div className="text-lg font-medium mt-2">
                  <span className="line-through text-slate-400">Till 31st December 2025</span>
                  <br />
                  <span className="font-bold text-blue-700">Till 15th January 2026</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold text-slate-800 mb-3 text-center">Account Details</h3>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="mb-2"><span className="font-semibold">Account Name:</span> I HUB FOUNDATION FOR COBOTICS</div>
                <div className="mb-2"><span className="font-semibold">Account Number:</span> 50100581989912</div>
                <div className="mb-2"><span className="font-semibold">Account Type:</span> Saving Account</div>
                <div className="mb-2"><span className="font-semibold">IFSC Code:</span> HDFC0000032</div>
                <div className="mb-2"><span className="font-semibold">Branch:</span> SDA, New Delhi</div>
              </div>
            </div>
            <div className="mt-8 text-slate-700 text-base md:text-lg font-semibold text-center">
              Pre-registration is mandatory before the submission of the concept note. Without completing the pre-registration, Stage-1 concept notes will not be considered for Stage-1 evaluation.
            </div>
          </Card>
        </Container>
      </Section>
    </div>
  );
};

export default RegistrationPage;
