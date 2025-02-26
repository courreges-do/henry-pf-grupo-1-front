import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Information Collection and Use
        </h2>
        <p className="mb-4">
          We collect and maintain the following information for the purpose of
          providing our pet boarding services:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pet owner contact information</li>
          <li>Emergency contact details</li>
          <li>Pet medical records and vaccination history</li>
          <li>Veterinary contact information</li>
          <li>Payment information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Medical Information Sharing
        </h2>
        <p className="mb-4">
          In case of medical emergencies, we may share your pet`s medical
          information with:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your designated veterinarian</li>
          <li>Emergency veterinary services</li>
          <li>Your emergency contacts</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal
          information and your pet`s medical records. Your information will
          never be sold or shared with third parties except as required for
          medical care or legal purposes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access your personal information</li>
          <li>Request corrections to your information</li>
          <li>
            Request deletion of your information (subject to legal requirements)
          </li>
          <li>Receive a copy of your information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our privacy policy or how we handle
          your information, please contact us at fancybox@gmail.com.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
