import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Health Requirements</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            All cats over 6 months of age must be neutered to reduce stress
            levels among other boarding cats.
          </li>
          <li>
            Mandatory annual vaccinations must be current:
            <ul className="list-disc pl-6 mt-2">
              <li>Rabies vaccine</li>
              <li>
                Triple Feline vaccine (Rhinotracheitis, Calicivirus,
                Panleukopenia)
              </li>
              <li>
                Vaccinations must be administered at least 15 days prior to
                check-in
              </li>
            </ul>
          </li>
          <li>Leukemia vaccine is required for cats under 3 years old</li>
          <li>Recent negative blood tests for FIV and FELV are required</li>
          <li>Flea treatment must be administered prior to admission</li>
          <li>Health certificate from a veterinarian is required</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Booking and Payment</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>A non-refundable deposit is required at the time of booking</li>
          <li>
            First-time clients must pay 50% of total boarding fees upon
            admission
          </li>
          <li>Full payment is required for stays less than 4 days</li>
          <li>We accept cash,debit or credit cards only - no checks</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Multiple Cat Policy</h2>
        <p className="mb-4">
          Multiple cats from the same household may board together upon owner`s
          request. If cats become stressed, they will be separated into
          individual cabins with adjusted charges.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Abandonment Policy</h2>
        <p className="mb-4">
          Cats not collected within 14 days after the scheduled check-out date,
          with no communication from the owner or emergency contact, will be
          considered abandoned and may be surrendered to a registered rescue
          center.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Required Documentation</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Neutering certificate</li>
          <li>Valid vaccination records</li>
          <li>Leukemia vaccine certificate </li>
          <li>Recent fecal test results</li>
          <li>FIV and FELV blood test results</li>
          <li>Flea treatment certificate</li>
          <li>Veterinary health certificate</li>
        </ul>
      </section>
    </div>
  );
};

export default TermsAndConditions;
