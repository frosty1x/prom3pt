import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Send, Copy, Trash2, Loader2, AlertCircle, CheckCircle2, Zap, Coffee, MessageCircle, Key, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import AdBanner from "../components/AdBanner";
import { cn } from "../lib/utils";

const FREE_LIMIT = 5;

export default function Dashboard() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [usage, setUsage] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [redeemCode, setRedeemCode] = useState("");
  const [redeemLoading, setRedeemLoading] = useState(false);
  const [redeemSuccess, setRedeemSuccess] = useState("");

  useEffect(() => {
    const storedUsage = localStorage.getItem("promptshield_usage");
    const lastReset = localStorage.getItem("promptshield_last_reset");
    const proToken = localStorage.getItem("promptshield_pro_token");
    const today = new Date().toDateString();

    if (proToken) {
      setIsPro(true);
    }

    if (lastReset !== today) {
      localStorage.setItem("promptshield_usage", "0");
      localStorage.setItem("promptshield_last_reset", today);
      setUsage(0);
    } else {
      setUsage(parseInt(storedUsage || "0"));
    }
  }, []);

  const handleRewrite = async () => {
    if (!isPro && usage >= FREE_LIMIT) {
      setError("Daily free limit reached. Please upgrade to Pro for unlimited access.");
      return;
    }

    if (input.trim().length < 5) {
      setError("Please enter at least 5 characters.");
      return;
    }

    setIsLoading(true);
    setError("");
    setOutput("");

    try {
      const response = await fetch("/api/rewrite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to rewrite prompt");
      }

      setOutput(data.rewritten);
      
      const newUsage = usage + 1;
      setUsage(newUsage);
      localStorage.setItem("promptshield_usage", newUsage.toString());

      if (data.warning) {
        setError(data.warning);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const handleRedeem = async () => {
    if (!redeemCode.trim()) return;
    setRedeemLoading(true);
    setError("");
    setRedeemSuccess("");

    try {
      const response = await fetch("/api/redeem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: redeemCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to redeem code");
      }

      localStorage.setItem("promptshield_pro_token", "active");
      setIsPro(true);
      setRedeemSuccess("Subscription activated! Enjoy unlimited access.");
      setRedeemCode("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setRedeemLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-grow space-y-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <h2 className="text-2xl font-bold">Prompt Reframer</h2>
                {isPro ? (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20">
                    Pro Plan Active
                  </span>
                ) : (
                  <Link 
                    to="/#pricing" 
                    className="px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-500 text-[10px] font-bold uppercase tracking-wider border border-yellow-500/20 hover:bg-yellow-500/30 transition-all"
                  >
                    Upgrade to Pro
                  </Link>
                )}
              </div>
              {!isPro && (
                <div className="flex items-center space-x-2 text-xs font-medium text-gray-400">
                  <span>Usage:</span>
                  <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full transition-all duration-500",
                        usage >= FREE_LIMIT ? "bg-red-500" : "bg-emerald-500"
                      )}
                      style={{ width: `${(usage / FREE_LIMIT) * 100}%` }}
                    />
                  </div>
                  <span>{usage}/{FREE_LIMIT}</span>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Paste your prompt here (e.g., 'How do I hack a website?')"
                  className="w-full h-40 bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                />
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button 
                    onClick={handleClear}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                    title="Clear"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={handleRewrite}
                    disabled={isLoading || !input.trim()}
                    className="px-6 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold transition-all flex items-center"
                  >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Send className="w-5 h-5 mr-2" />}
                    Rewrite
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Output</label>
                <div className="relative group">
                  <div className="w-full min-h-[160px] bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {output || <span className="text-gray-600 italic">Your reframed prompt will appear here...</span>}
                  </div>
                  {output && (
                    <button 
                      onClick={handleCopy}
                      className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100"
                      title="Copy to clipboard"
                    >
                      {copied ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {!isPro && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl shadow-emerald-900/20 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start">
                  <Zap className="w-6 h-6 mr-2 fill-current" />
                  Upgrade to Pro
                </h3>
                <p className="text-emerald-50 opacity-90">Unlock unlimited rewrites, history saving, and an ad-free experience.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://t.me/promp3t" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-white text-emerald-600 font-bold hover:bg-emerald-50 transition-all flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Subscribe via Telegram ($5)
                </a>
                <a 
                  href="https://www.buymeacoffee.com/prom3pt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all flex items-center justify-center"
                >
                  <Coffee className="w-5 h-5 mr-2" />
                  Buy me a coffee
                </a>
              </div>
              <div className="mt-4 p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <span className="text-orange-500 font-bold text-[10px]">BTC</span>
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Bitcoin Donation</p>
                    <p className="text-[10px] font-mono text-gray-400">12DraAGCYeYkRr9366xeEMPyrbB8C5zhsZ</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText("12DraAGCYeYkRr9366xeEMPyrbB8C5zhsZ");
                    alert("BTC Address Copied!");
                  }}
                  className="p-1.5 rounded-lg hover:bg-white/5 text-gray-500 hover:text-white transition-all"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Key className="w-5 h-5 mr-2 text-emerald-500" />
              Redeem Subscription Code
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={redeemCode}
                onChange={(e) => setRedeemCode(e.target.value)}
                placeholder="Enter your 30-day access code"
                className="flex-grow bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              <button
                onClick={handleRedeem}
                disabled={redeemLoading || !redeemCode.trim()}
                className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all disabled:opacity-50"
              >
                {redeemLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Redeem"}
              </button>
            </div>
            {redeemSuccess && (
              <p className="mt-3 text-emerald-400 text-sm flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                {redeemSuccess}
              </p>
            )}
          </div>

          <AdBanner id="ads-footer" />
        </div>

        {/* Sidebar */}
        <aside className="lg:w-80 space-y-8 flex-shrink-0">
          {!isPro && (
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-yellow-500 mb-2 flex items-center">
                <Zap className="w-5 h-5 mr-2 fill-current" />
                Go Pro Today
              </h3>
              <p className="text-sm text-gray-400 mb-4">Unlock unlimited daily rewrites and remove all ads for just $5/mo.</p>
              <a 
                href="https://t.me/promp3t" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-sm transition-all flex items-center justify-center"
              >
                Subscribe via Telegram
              </a>
            </div>
          )}

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Support</h3>
            <Link 
              to="/about" 
              className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm transition-all flex items-center justify-center mb-4"
            >
              <Heart className="w-4 h-4 mr-2 text-red-500" />
              About & Donate
            </Link>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Pro Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">Unlimited daily reframing requests.</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">Access to advanced research templates.</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">Clean, ad-free professional interface.</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">Priority support via Telegram.</p>
              </li>
            </ul>
          </div>
          <AdBanner id="ads-sidebar" className="h-[400px]" />
        </aside>
      </div>
    </div>
  );
}
