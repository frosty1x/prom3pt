import React from "react";
import { Link } from "react-router-dom";
import { Shield, Lock, Search, BookOpen, ArrowRight, CheckCircle2, Zap, Coffee } from "lucide-react";
import { motion } from "motion/react";
import AdBanner from "../components/AdBanner";

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/10 blur-[120px] -z-10" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium mb-6">
            <Shield className="w-3 h-3" />
            <span>Ethical Security Research Tools</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Unlock the Power of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Premium AI Reframing</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop getting blocked by AI filters. Use PromptShield to transform your security prompts into professional, high-quality research requests instantly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/dashboard" 
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all flex items-center justify-center group shadow-lg shadow-emerald-900/20"
            >
              Start Reframing Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="https://t.me/promp3t" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2 text-yellow-400" />
              Get Pro Access
            </a>
          </div>
        </motion.div>

        <div className="mt-16">
          <AdBanner id="ads-hero" className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Lock className="w-6 h-6 text-emerald-500" />}
            title="Ethical Reframing"
            description="Automatically converts malicious-sounding intent into professional security research terminology."
          />
          <FeatureCard 
            icon={<Search className="w-6 h-6 text-cyan-500" />}
            title="Vulnerability Focus"
            description="Shifts focus from 'attacks' to 'vulnerability assessment' and 'security posture analysis'."
          />
          <FeatureCard 
            icon={<BookOpen className="w-6 h-6 text-purple-500" />}
            title="Educational Guidance"
            description="Provides context and safe alternatives for security researchers to learn responsibly."
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Premium Access Plans</h2>
          <p className="text-gray-400">Choose the plan that fits your professional needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
            <h3 className="text-xl font-bold mb-2">Free User</h3>
            <div className="text-3xl font-bold mb-6">$0<span className="text-sm text-gray-500 font-normal">/day</span></div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-sm text-gray-400">
                <Shield className="w-4 h-4 mr-2 text-emerald-500" />
                5 rewrites per day
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Shield className="w-4 h-4 mr-2 text-emerald-500" />
                Standard AI model
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Shield className="w-4 h-4 mr-2 text-emerald-500" />
                Ad-supported experience
              </li>
            </ul>
            <Link to="/dashboard" className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-center font-bold transition-all">
              Use Free Version
            </Link>
          </div>
          <div className="p-8 rounded-2xl bg-emerald-600 border border-emerald-500 flex flex-col relative overflow-hidden shadow-2xl shadow-emerald-900/40">
            <div className="absolute top-0 right-0 p-3 bg-emerald-500 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">Best Value</div>
            <h3 className="text-xl font-bold mb-2">Pro Researcher</h3>
            <div className="text-3xl font-bold mb-6">$5<span className="text-sm text-emerald-200 font-normal">/month</span></div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-sm text-emerald-50">
                <Zap className="w-4 h-4 mr-2 fill-current" />
                Unlimited daily rewrites
              </li>
              <li className="flex items-center text-sm text-emerald-50">
                <Zap className="w-4 h-4 mr-2 fill-current" />
                Zero advertisements
              </li>
              <li className="flex items-center text-sm text-emerald-50">
                <Zap className="w-4 h-4 mr-2 fill-current" />
                Priority AI processing
              </li>
              <li className="flex items-center text-sm text-emerald-50">
                <Zap className="w-4 h-4 mr-2 fill-current" />
                Exclusive research templates
              </li>
            </ul>
            <a 
              href="https://t.me/promp3t" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-white text-emerald-600 text-center font-bold hover:bg-emerald-50 transition-all shadow-lg"
            >
              Get Instant Access via Telegram
            </a>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">Want to support the project without a subscription?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://www.buymeacoffee.com/prom3pt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all"
            >
              <Coffee className="w-5 h-5 mr-2" />
              Buy me a coffee
            </a>
            <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <span className="text-orange-500 font-bold text-xs">BTC</span>
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Bitcoin Address</p>
                <p className="text-xs font-mono text-gray-300">12DraAGCYeYkRr9366xeEMPyrbB8C5zhsZ</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
