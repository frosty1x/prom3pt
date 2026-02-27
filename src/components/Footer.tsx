import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">PROMPTSHIELD</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering the next generation of cybersecurity researchers with ethical and professional communication tools.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About & Donate</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Ethics</h4>
            <p className="text-xs text-gray-500 italic">
              "PromptShield is for educational and responsible security research only. Do not use it to plan or commit illegal activity. Always follow responsible disclosure guidelines."
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PromptShield. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
