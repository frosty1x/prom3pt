import React, { useState } from "react";
import { Key, Plus, List, Loader2, CheckCircle2, AlertCircle, Copy } from "lucide-react";
import { motion } from "motion/react";

export default function AdminPanel() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [codes, setCodes] = useState<any[]>([]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "winners2005") {
      setIsAuthorized(true);
      fetchCodes();
    } else {
      setError("Incorrect password");
    }
  };

  const fetchCodes = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/list-codes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      if (response.ok) {
        setCodes(data.codes);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Failed to fetch codes");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/generate-codes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, count }),
      });
      const data = await response.json();
      if (response.ok) {
        fetchCodes();
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Failed to generate codes");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  if (!isAuthorized) {
    return (
      <div className="max-w-md mx-auto mt-24 p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Key className="w-6 h-6 mr-2 text-emerald-500" />
          Admin Access
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold flex items-center">
          <Shield className="w-8 h-8 mr-3 text-emerald-500" />
          Admin Panel
        </h2>
        <button 
          onClick={() => setIsAuthorized(false)}
          className="text-sm text-gray-500 hover:text-white transition-colors"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Generate Section */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Plus className="w-5 h-5 mr-2 text-emerald-500" />
              Generate Codes
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 uppercase font-bold mb-2 block">Quantity</label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value))}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-white"
                />
              </div>
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all disabled:opacity-50 flex items-center justify-center"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Generate Codes"}
              </button>
            </div>
          </div>
        </div>

        {/* List Section */}
        <div className="md:col-span-2">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <List className="w-5 h-5 mr-2 text-emerald-500" />
              Subscription Codes
            </h3>
            <div className="overflow-hidden rounded-xl border border-white/5">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-gray-400 uppercase text-[10px] font-bold tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Code</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {codes.map((c) => (
                    <tr key={c.code} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-mono text-emerald-400">{c.code}</td>
                      <td className="px-4 py-3">
                        {c.is_used ? (
                          <span className="text-red-400 text-xs bg-red-400/10 px-2 py-0.5 rounded-full border border-red-400/20">Used</span>
                        ) : (
                          <span className="text-emerald-400 text-xs bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">Active</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button 
                          onClick={() => copyToClipboard(c.code)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                        >
                          {copiedCode === c.code ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </td>
                    </tr>
                  ))}
                  {codes.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-4 py-8 text-center text-gray-500 italic">No codes generated yet</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Shield } from "lucide-react";
