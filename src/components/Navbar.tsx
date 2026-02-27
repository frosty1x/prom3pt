import React from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Shield className="w-8 h-8 text-emerald-500 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold tracking-tight">PROMPT<span className="text-emerald-500">SHIELD</span></span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About & Donate</Link>
            <Link to="/dashboard" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Dashboard</Link>
            <Link to="/dashboard" className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-sm font-semibold transition-all shadow-lg shadow-emerald-900/20">
              Go Pro
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
