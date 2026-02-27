import React from "react";

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 prose prose-invert">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-gray-400 mb-6">Last updated: February 26, 2026</p>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
        <p className="text-gray-400">
          By accessing or using PromptShield, you agree to be bound by these Terms of Service. 
          If you do not agree, please do not use the service.
        </p>

        <h2 className="text-2xl font-bold">2. Ethical Use Policy</h2>
        <p className="text-gray-400 font-semibold text-emerald-500">
          PromptShield is strictly for educational and responsible security research.
        </p>
        <p className="text-gray-400">
          You agree NOT to use this tool to:
        </p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Plan, facilitate, or commit any illegal activity.</li>
          <li>Bypass security controls of any system without explicit authorization.</li>
          <li>Generate content that violates the safety policies of AI providers.</li>
        </ul>

        <h2 className="text-2xl font-bold">3. Disclaimer of Warranties</h2>
        <p className="text-gray-400">
          The service is provided "as is" without any warranties. We do not guarantee that the reframed 
          prompts will be accepted by all AI systems or that they are legally compliant in all jurisdictions.
        </p>

        <h2 className="text-2xl font-bold">4. Limitation of Liability</h2>
        <p className="text-gray-400">
          PromptShield and its creators shall not be liable for any damages arising from your use of the service, 
          including any legal consequences resulting from your security research activities.
        </p>
      </section>
    </div>
  );
}
