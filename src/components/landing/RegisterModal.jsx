import React, { useState } from "react";
import confetti from "canvas-confetti";
import { X, Sparkles, CheckCircle2, Trophy, Users, QrCode, ArrowRight, ShieldCheck } from "lucide-react";
import { playSound } from "../../utils/audioEngine";
import { SheepBit } from "../comic/ComicCharacters";

export default function RegisterModal({ isOpen, onClose }) {
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [track, setTrack] = useState("AI & Agentic ML");
  const [teamSize, setTeamSize] = useState("4");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    playSound("keyClack");

    const newErrors = {};
    if (!teamName.trim()) newErrors.teamName = "Team name is required";
    if (!leaderName.trim()) newErrors.leaderName = "Leader name is required";
    if (!college.trim()) newErrors.college = "College name is required";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email is required";
    if (!phone.trim() || phone.length < 10) newErrors.phone = "Valid 10-digit phone number is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      playSound("bugAlert");
      return;
    }

    setSubmitted(true);
    playSound("compileSuccess");

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#FF9820", "#FF528F", "#FFD028", "#2958FF", "#48D17E"]
      });
    } catch {}
  };

  const handleReset = () => {
    setSubmitted(false);
    setTeamName("");
    setLeaderName("");
    setCollege("");
    setEmail("");
    setPhone("");
    setErrors({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-comic-dark/75 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out] select-none font-comic">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#FFFDF7] comic-border-thick rounded-3xl comic-shadow-lg p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={() => {
            playSound("pop");
            onClose();
          }}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-comic-pink-light comic-border flex items-center justify-center hover:bg-comic-pink-hot hover:text-white transition-all comic-shadow-sm active:scale-90 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Success Ticket Pass View */
          <div className="text-center py-4 space-y-4 animate-[panelPop_0.4s_ease-out]">
            <div className="w-16 h-16 rounded-full bg-comic-green comic-border mx-auto flex items-center justify-center text-comic-dark comic-shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h2 className="text-3xl font-bangers text-comic-dark">
              REGISTRATION TICKET UNLOCKED!
            </h2>
            <p className="text-sm font-comic text-zinc-600 max-w-md mx-auto">
              Your application for <strong>CodeUtsava 10.0</strong> at NIT Raipur has been successfully logged.
            </p>

            {/* Comic Hackathon Pass */}
            <div className="bg-[#FFF3D6] p-5 rounded-2xl comic-border-thick comic-shadow text-left border-dashed border-4 border-comic-dark space-y-3">
              <div className="flex items-center justify-between border-b-2 border-comic-border/30 pb-2">
                <div>
                  <div className="text-[10px] font-mono font-bold text-zinc-500">OFFICIAL PARTICIPANT PASS</div>
                  <div className="text-xl font-bangers text-comic-dark">{teamName.toUpperCase()}</div>
                </div>
                <div className="px-2.5 py-1 bg-comic-pink-hot text-white rounded-md font-mono text-xs font-bold">
                  VERIFIED
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div>
                  <span className="text-zinc-500">LEADER:</span>
                  <div className="font-bold text-comic-dark">{leaderName}</div>
                </div>
                <div>
                  <span className="text-zinc-500">COLLEGE:</span>
                  <div className="font-bold text-comic-dark truncate">{college}</div>
                </div>
                <div>
                  <span className="text-zinc-500">TRACK:</span>
                  <div className="font-bold text-comic-blue">{track}</div>
                </div>
                <div>
                  <span className="text-zinc-500">VENUE:</span>
                  <div className="font-bold text-comic-dark">NIT RAIPUR (CCC)</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-comic-border/20 text-[10px] font-mono text-zinc-500">
                <span>OCT 26-27, 2026</span>
                <span className="text-comic-pink-hot font-bold">PERKS: FREE STAY & FOOD</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  playSound("pop");
                  onClose();
                }}
                className="px-6 py-2.5 bg-comic-yellow text-comic-dark font-bangers text-base rounded-full comic-border comic-shadow hover:comic-shadow-pink comic-btn"
              >
                RETURN TO HACKATHON ARENA
              </button>
            </div>
          </div>
        ) : (
          /* Application Form View */
          <div>
            {/* Modal Header */}
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-comic-yellow comic-border rounded-full text-xs font-bangers text-comic-dark mb-1.5 comic-shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                DEVFOLIO FAST-TRACK APPLICATION
              </div>
              <h2 className="text-3xl font-bangers text-comic-dark">
                JOIN CODEUTSAVA 10.0
              </h2>
              <p className="text-xs font-comic text-zinc-600">
                Fill in your team details below. 100% Free registration!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Team Name */}
                <div>
                  <label className="block text-xs font-mono font-bold text-comic-dark mb-1">
                    TEAM NAME *
                  </label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="e.g. ByteBusters"
                    className="w-full px-3 py-2 text-sm bg-white rounded-xl comic-border focus:outline-none focus:ring-2 focus:ring-comic-pink-hot font-comic"
                  />
                  {errors.teamName && <p className="text-[10px] font-mono text-red-500 mt-0.5">{errors.teamName}</p>}
                </div>

                {/* Team Leader Name */}
                <div>
                  <label className="block text-xs font-mono font-bold text-comic-dark mb-1">
                    TEAM LEADER NAME *
                  </label>
                  <input
                    type="text"
                    value={leaderName}
                    onChange={(e) => setLeaderName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-3 py-2 text-sm bg-white rounded-xl comic-border focus:outline-none focus:ring-2 focus:ring-comic-pink-hot font-comic"
                  />
                  {errors.leaderName && <p className="text-[10px] font-mono text-red-500 mt-0.5">{errors.leaderName}</p>}
                </div>
              </div>

              {/* College */}
              <div>
                <label className="block text-xs font-mono font-bold text-comic-dark mb-1">
                  COLLEGE / INSTITUTE NAME *
                </label>
                <input
                  type="text"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  placeholder="e.g. National Institute of Technology, Raipur"
                  className="w-full px-3 py-2 text-sm bg-white rounded-xl comic-border focus:outline-none focus:ring-2 focus:ring-comic-pink-hot font-comic"
                />
                {errors.college && <p className="text-[10px] font-mono text-red-500 mt-0.5">{errors.college}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Email */}
                <div>
                  <label className="block text-xs font-mono font-bold text-comic-dark mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="leader@college.edu"
                    className="w-full px-3 py-2 text-sm bg-white rounded-xl comic-border focus:outline-none focus:ring-2 focus:ring-comic-pink-hot font-comic"
                  />
                  {errors.email && <p className="text-[10px] font-mono text-red-500 mt-0.5">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-mono font-bold text-comic-dark mb-1">
                    WHATSAPP / PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 9876543210"
                    className="w-full px-3 py-2 text-sm bg-white rounded-xl comic-border focus:outline-none focus:ring-2 focus:ring-comic-pink-hot font-comic"
                  />
                  {errors.phone && <p className="text-[10px] font-mono text-red-500 mt-0.5">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Track Preference */}
                <div>
                  <label className="block text-xs font-mono font-bold text-comic-dark mb-1">
                    PREFERRED TRACK
                  </label>
                  <select
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white rounded-xl comic-border focus:outline-none focus:ring-2 focus:ring-comic-pink-hot font-comic cursor-pointer"
                  >
                    <option value="AI & Agentic ML">AI & Agentic ML</option>
                    <option value="Web3 & DeFi (Polygon)">Web3 & DeFi (Polygon)</option>
                    <option value="FinTech & Digital Commerce">FinTech & Digital Commerce</option>
                    <option value="HealthTech & BioInformatics">HealthTech & BioInformatics</option>
                    <option value="Hardware & IoT Edition">Hardware & IoT Edition</option>
                    <option value="Open Innovation">Open Innovation</option>
                  </select>
                </div>

                {/* Team Size */}
                <div>
                  <label className="block text-xs font-mono font-bold text-comic-dark mb-1">
                    TEAM MEMBERS (2 - 4)
                  </label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white rounded-xl comic-border focus:outline-none focus:ring-2 focus:ring-comic-pink-hot font-comic cursor-pointer"
                  >
                    <option value="2">2 Members</option>
                    <option value="3">3 Members</option>
                    <option value="4">4 Members (Recommended)</option>
                  </select>
                </div>
              </div>

              {/* Devfolio Direct Link notice */}
              <div className="p-3 bg-[#FFF3D6] rounded-xl comic-border flex items-center gap-2 text-xs font-comic text-zinc-700">
                <ShieldCheck className="w-5 h-5 text-comic-dark shrink-0" />
                <span>Registrations are verified via Devfolio. Shortlisting results will be mailed by 21st Oct.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-comic-yellow text-comic-dark font-bangers text-xl tracking-wider rounded-2xl comic-border comic-shadow hover:comic-shadow-pink comic-btn flex items-center justify-center gap-2 mt-2"
              >
                <Sparkles className="w-5 h-5 text-comic-pink-hot" />
                <span>SUBMIT TEAM APPLICATION</span>
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
