import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 prose prose-invert">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-400 mb-6">Last updated: February 26, 2026</p>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">1. Information We Collect</h2>
        <p className="text-gray-400">
          PromptShield is designed with privacy in mind. We do not store your prompts on our servers permanently. 
          Prompts are processed in real-time to provide the reframing service and are then discarded.
        </p>

        <h2 className="text-2xl font-bold">2. How We Use Information</h2>
        <p className="text-gray-400">
          We use the information you provide solely to:
        </p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Provide the prompt reframing service.</li>
          <li>Track daily usage limits (stored locally on your device).</li>
          <li>Improve our rule-based sanitization logic.</li>
        </ul>

        <h2 className="text-2xl font-bold">3. Third-Party Services</h2>
        <p className="text-gray-400">
          We use OpenRouter to access AI models for reframing. Your prompts are sent to OpenRouter for processing. 
          Please refer to OpenRouter's privacy policy for information on how they handle data.
        </p>

        <h2 className="text-2xl font-bold">4. Advertising</h2>
        <p className="text-gray-400">
          We may use Google AdSense to display advertisements. Google may use cookies to serve ads based on your 
          prior visits to this or other websites.
        </p>
      </section>
    </div>
  );
}
