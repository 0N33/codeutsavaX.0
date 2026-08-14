import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ArrowUp, 
  Heart, 
  Sparkles, 
  ShieldAlert,
  GitBranch,
  BookOpen
} from "lucide-react";
import { playSound } from "../../utils/audioEngine";
import tcpLogoOfficial from "../../assets/tcp_logo_official.png";

export default function ComicFooter({ onPlayIntro, onRegisterClick }) {
  // Dummy Contact Personas
  const managers = [
    { name: "ALEX RIVERS (OPERATIONS LEAD)", phone: "+91 98000 00001", role: "Manager", github: "alex-operations" },
    { name: "JORDAN LEE (TECHNICAL HEAD)", phone: "+91 98000 00002", role: "Manager", github: "jordan-tech" },
    { name: "SAM MORGAN (SPONSORSHIP LEAD)", phone: "+91 98000 00003", role: "Manager", github: "sam-relations" },
    { name: "RILEY CHEN (LOGISTICS LEAD)", phone: "+91 98000 00004", role: "Manager", github: "riley-logistics" },
    { name: "TAYLOR BROOKS (PUBLIC RELATIONS)", phone: "+91 98000 00005", role: "Manager", github: "taylor-pr" }
  ];

  const githubAccounts = [
    "https://github.com/TCP-Tech/codeutsava10.0",
    "https://github.com/TCP-Tech/evaluation-hub",
    "https://github.com/TCP-Tech/dev-panel"
  ];

  const scrollToTop = () => {
    playSound("pop");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#18181B] text-white border-t-[4px] border-comic-border pt-16 pb-12 px-4 sm:px-6 lg:px-8 select-none font-comic">
      
      {/* Halftone Overlay */}
      <div className="absolute inset-0 bg-halftone-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Info & Manager Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column: Brand & TCP Vision (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-comic-yellow comic-border flex items-center justify-center">
                <img src={tcpLogoOfficial} alt="TCP" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-3xl font-bangers text-white tracking-wide">
                  CODEUTSAVA <span className="text-comic-pink-hot">10.0</span>
                </h3>
                <p className="text-xs font-mono font-bold text-comic-yellow">
                  TURING CLUB OF PROGRAMMERS • NIT RAIPUR
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-comic text-zinc-300 leading-relaxed">
              CodeUtsava 10.0 is the premier annual hackathon of the National Institute of Technology, Raipur. Designed with passion to bring together creators, problem-solvers, and digital architects in a unique comic universe.
            </p>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => {
                  playSound("pageTurn");
                  onPlayIntro();
                }}
                className="px-3.5 py-1.5 bg-[#FFFDF7] text-comic-dark font-bangers text-sm rounded-full comic-border comic-shadow-sm hover:comic-shadow comic-btn flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-comic-orange" />
                <span>READ INTRO COMIC</span>
              </button>

              <button
                onClick={() => {
                  playSound("pop");
                  onRegisterClick();
                }}
                className="px-3.5 py-1.5 bg-comic-yellow text-comic-dark font-bangers text-sm rounded-full comic-border comic-shadow-sm hover:comic-shadow comic-btn flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-comic-pink-hot" />
                <span>REGISTER NOW</span>
              </button>
            </div>

            {/* Venue & Location */}
            <div className="pt-2 text-xs font-mono text-zinc-400 space-y-1">
              <div className="flex items-center gap-2 text-zinc-200">
                <MapPin className="w-4 h-4 text-comic-pink-hot" />
                <span>National Institute of Technology, Raipur, CG - 492010</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-200">
                <Mail className="w-4 h-4 text-comic-yellow" />
                <span>contact@codeutsava.com • support@codeutsava.com</span>
              </div>
            </div>
          </div>

          {/* Right Column: Manager Contacts & GitHub Access Table (7 Cols) */}
          <div className="lg:col-span-7 bg-[#27272A] p-5 sm:p-6 rounded-3xl comic-border border-zinc-700">
            
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-700">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-comic-yellow" />
                <h4 className="font-bangers text-xl text-white tracking-wide">
                  COORDINATION & SUPPORT DESK
                </h4>
              </div>
              <span className="text-[10px] font-mono bg-comic-pink-hot text-white px-2.5 py-0.5 rounded-full font-bold">
                WHATSAPP / HELPLINE
              </span>
            </div>

            {/* Table of Dummy Managers */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="text-zinc-400 border-b border-zinc-700 pb-1">
                    <th className="py-1 font-bold">COORDINATOR</th>
                    <th className="py-1 font-bold">HELPLINE CONTACT</th>
                    <th className="py-1 font-bold text-right">COMMUNITY HUB</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {managers.map((m, i) => (
                    <tr key={i} className="hover:bg-zinc-800/50 transition-colors">
                      <td className="py-2.5 font-bold text-comic-yellow">
                        {m.name}
                      </td>
                      <td className="py-2.5 text-zinc-300">
                        <span className="text-zinc-300 flex items-center gap-1">
                          {m.phone}
                        </span>
                      </td>
                      <td className="py-2.5 text-right text-zinc-400">
                        <span className="text-comic-pink-hot">
                          @{m.github}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Instruction Warning Box */}
            <div className="mt-4 p-3 bg-zinc-900/90 rounded-2xl border border-amber-500/40 text-[11px] font-comic text-amber-200 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Note:</strong> All queries submitted via the helpdesk or official Discord channels will be answered promptly by the team.
              </span>
            </div>

          </div>

        </div>

        {/* GitHub Repository Guidelines Box */}
        <div className="bg-[#27272A] p-5 sm:p-6 rounded-3xl comic-border border-zinc-700 mb-12">
          <div className="flex items-center gap-2 mb-3">
            <GitBranch className="w-5 h-5 text-comic-blue" />
            <h4 className="font-bangers text-xl text-white tracking-wide">
              SUBMISSION & REPOSITORY PROTOCOL
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-comic text-zinc-300">
            <div className="space-y-1.5 bg-zinc-900/60 p-3.5 rounded-2xl border border-zinc-800">
              <div className="font-mono font-bold text-comic-yellow text-xs">
                1. REPOSITORY SETUP
              </div>
              <p>
                Create a private repository named <code>"codeutsava 10.0"</code> and grant review access:
              </p>
              <div className="flex flex-wrap gap-1 pt-1 font-mono text-[10px]">
                <span className="px-2 py-0.5 bg-zinc-800 rounded text-zinc-200">
                  @TCP-Tech-Evaluator
                </span>
                <span className="px-2 py-0.5 bg-zinc-800 rounded text-zinc-200">
                  @CodeUtsava-Reviewer
                </span>
              </div>
            </div>

            <div className="space-y-1.5 bg-zinc-900/60 p-3.5 rounded-2xl border border-zinc-800">
              <div className="font-mono font-bold text-comic-yellow text-xs">
                2. README.MD MANDATORY CHECKLIST
              </div>
              <ul className="grid grid-cols-2 gap-1 font-mono text-[10px] text-zinc-300">
                <li>• Team Name</li>
                <li>• Branch & Year</li>
                <li>• Contact Number</li>
                <li>• Contact Email</li>
                <li>• Live Deployed URL</li>
                <li>• Working Demo Video</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Socials & Back To Top */}
        <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          
          <div className="flex items-center gap-2">
            <span>© 2026 CodeUtsava 10.0 • Turing Club of Programmers (TCP)</span>
          </div>

          {/* Social Links (Custom SVG Icons) */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/TCP-Tech"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound("pop")}
              className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-comic-yellow hover:text-comic-dark flex items-center justify-center transition-colors"
              title="TCP GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/tcp-nitrr"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound("pop")}
              className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-comic-blue hover:text-white flex items-center justify-center transition-colors"
              title="TCP LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/tcp_nitrr"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound("pop")}
              className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-comic-pink-hot hover:text-white flex items-center justify-center transition-colors"
              title="TCP Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-comic-yellow text-comic-dark comic-border flex items-center justify-center hover:bg-white transition-colors ml-2"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
}
