import React from "react";
import { Coffee, Heart, User, Shield, Globe, Gamepad2, Copy, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const [copied, setCopied] = React.useState(false);
  const btcAddress = "12DraAGCYeYkRr9366xeEMPyrbB8C5zhsZ";

  const copyBtc = () => {
    navigator.clipboard.writeText(btcAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        {/* About Me Section */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <User className="w-64 h-64" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-500">
                <User className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                Hey! I'm 17, from Morocco 🇲🇦, and I've been diving into bug bounty hunting since 2024. 
                When I'm not gaming 🎮 or exploring new vulnerabilities, I'm usually deep in penetration 
                testing and trying to understand how systems can be broken (ethically, of course).
              </p>
              <p>
                Cybersecurity has become my biggest passion, and I love sharing what I learn along the way. 
                If you're around my age and curious about hacking, tech, or just want to see what this 
                bug bounty journey looks like from someone still figuring it out—you're in the right place.
              </p>
              <p>
                I'm still learning every day, and I hope my experiences can help or inspire others who 
                are starting their own path in security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center space-x-3">
                <Globe className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium">Morocco 🇲🇦</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center space-x-3">
                <Shield className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium">Bug Hunter</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center space-x-3">
                <Gamepad2 className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium">Gamer 🎮</span>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-yellow-500/20 text-yellow-500">
                  <Coffee className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Support My Work</h2>
              </div>
              <p className="text-gray-400 mb-8">
                If PromptShield has helped you in your research, consider supporting my journey with a coffee. 
                Every bit helps me keep the servers running and the tools updated.
              </p>
            </div>
            <a 
              href="https://www.buymeacoffee.com/prom3pt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all flex items-center justify-center group"
            >
              <Coffee className="w-5 h-5 mr-2" />
              Buy Me a Coffee
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-orange-500/20 text-orange-500">
                  <Heart className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Bitcoin Donation</h2>
              </div>
              <p className="text-gray-400 mb-8">
                Prefer crypto? You can send a direct donation to my Bitcoin address below. 
                Thank you for being part of this journey!
              </p>
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
                <div className="truncate mr-4">
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">BTC Address</p>
                  <p className="text-sm font-mono text-gray-300 truncate">{btcAddress}</p>
                </div>
                <button 
                  onClick={copyBtc}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all flex-shrink-0"
                >
                  {copied ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
