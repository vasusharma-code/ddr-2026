import React from "react";

const RegistrationPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6 flex flex-col items-center mt-12">
      {/* Page Header */}
      <header className="w-full py-8 bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-md text-center rounded-lg mb-12">
        <h1 className="text-4xl font-bold">Registration</h1>
      </header>

      <section className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Registration Details</h2>
        <div className="mb-6 text-center">
          <span className="text-xl font-bold text-green-600">Price</span>
          <div className="text-lg font-medium mt-2">₹3,000 + 18% GST</div>
        </div>
        <div className="mb-6 text-center">
          <span className="text-xl font-bold text-blue-600">Date</span>
          <div className="text-lg font-medium mt-2">Till 31st December 2025</div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-700 mb-2 text-center">Account Details</h3>
          <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
            <div className="mb-2"><span className="font-semibold">Account Name:</span> I HUB FOUNDATION FOR COBOTICS</div>
            <div className="mb-2"><span className="font-semibold">Account Number:</span> 50100581989912</div>
            <div className="mb-2"><span className="font-semibold">Account Type:</span> Saving Account</div>
            <div className="mb-2"><span className="font-semibold">IFSC Code:</span> HDFC0000032</div>
            <div className="mb-2"><span className="font-semibold">Branch:</span> SDA, New Delhi</div>
          </div>
        </div>
        {/* Mandatory pre-registration note */}
        <div className="mt-8 text-gray-700 text-base md:text-lg font-semibold text-center">
          Pre-registration is mandatory before the submission of the concept note. Without completing the pre-registration, Stage-1 concept notes will not be considered for Stage-1 evaluation.
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;
