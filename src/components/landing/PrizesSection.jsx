import React from "react";
import { Trophy, Medal, Gift, Award, Sparkles, Plane, Utensils, Home, Star } from "lucide-react";
import { playSound } from "../../utils/audioEngine";
import { ComicSfxSticker } from "../comic/ComicCharacters";

export default function PrizesSection() {
  const prizeTiers = [
    {
      place: "2ND PLACE",
      title: "FIRST RUNNER UP",
      amount: "₹1,00,000",
      cash: "₹1,00,000 Cash Prize",
      perks: ["Silver CodeUtsava 10.0 Trophy", "Direct Interview Fast-Tracks", "Exclusive Champion Swag Kit", "Polygon Track Eligible"],
      bg: "bg-[#E8F4FF]",
      accent: "text-comic-blue",
      badge: "SILVER MEDAL",
      badgeColor: "bg-comic-blue text-white",
      height: "lg:translate-y-4"
    },
    {
      place: "1ST PLACE",
      title: "OVERALL GRAND CHAMPION",
      amount: "₹1,50,000",
      cash: "₹1,50,000 Direct Cash Prize",
      perks: ["Gold CodeUtsava 10.0 Trophy", "Direct Angel Pitch & VC Connect", "Premium Mechanical Keyboards & Gear", "Guaranteed Internship Referrals"],
      bg: "bg-[#FFF3D6]",
      accent: "text-comic-dark",
      badge: "GOLDEN CHAMPION",
      badgeColor: "bg-comic-yellow text-comic-dark font-black",
      height: "lg:-translate-y-2 ring-4 ring-comic-dark"
    },
    {
      place: "3RD PLACE",
      title: "SECOND RUNNER UP",
      amount: "₹50,000",
      cash: "₹50,000 Cash Prize",
      perks: ["Bronze CodeUtsava 10.0 Trophy", "Sponsor Special Bounty Baskets", "Official Certificate of Excellence", "TCP VIP Community Access"],
      bg: "bg-[#FFE5EF]",
      accent: "text-comic-pink-hot",
      badge: "BRONZE MEDAL",
      badgeColor: "bg-comic-pink-hot text-white",
      height: "lg:translate-y-6"
    }
  ];

  const categoryAwards = [
    { title: "Best All-Women Team", prize: "₹25,000 + Swags", desc: "Empowering female tech innovators" },
    { title: "Best UI/UX & Comic Design", prize: "₹20,000 + Figma Pro", desc: "Most intuitive, delightful frontend interface" },
    { title: "Best Hardware / IoT Prototype", prize: "₹25,000 + Dev Kits", desc: "Excellence in electronics & physical computing" },
    { title: "Best Beginner / Freshers Team", prize: "₹15,000 + Mentorship", desc: "Highest scoring 1st/2nd year undergraduate team" },
  ];

  return (
    <section id="prizes" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7] border-b-[3px] border-comic-border select-none">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-comic-yellow comic-border rounded-full text-xs font-bangers text-comic-dark mb-2 comic-shadow-sm">
            <Trophy className="w-3.5 h-3.5" />
            REWARDS & LOOT
          </div>
          <h2 className="text-4xl sm:text-5xl font-bangers text-comic-dark tracking-wide">
            ₹5,00,000+ PRIZE POOL & PERKS
          </h2>
          <p className="mt-2 text-base sm:text-lg font-hand font-bold text-zinc-600">
            Massive cash bounties, trophies, schwag kits, and comprehensive travel reimbursements!
          </p>
        </div>

        {/* 3 Podium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 items-stretch">
          {prizeTiers.map((tier, idx) => (
            <div
              key={idx}
              onMouseEnter={() => playSound("blip")}
              className={`relative ${tier.bg} ${tier.height} p-6 sm:p-8 rounded-3xl comic-border comic-shadow hover:comic-shadow-lg transition-all duration-200 flex flex-col justify-between`}
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bangers tracking-wider comic-border ${tier.badgeColor}`}>
                    {tier.badge}
                  </span>
                  <Trophy className="w-7 h-7 text-comic-dark" />
                </div>

                {/* Amount */}
                <div className={`text-4xl sm:text-5xl font-bangers ${tier.accent} tracking-wide`}>
                  {tier.amount}
                </div>
                <div className="text-xs font-mono font-bold text-zinc-600 uppercase mt-0.5">
                  {tier.cash}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bangers text-comic-dark tracking-wide mt-4 pb-2 border-b border-comic-border/30">
                  {tier.title}
                </h3>

                {/* Perks list */}
                <ul className="mt-4 space-y-2 text-xs sm:text-sm font-comic text-zinc-700">
                  {tier.perks.map((perk, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <Star className="w-3.5 h-3.5 fill-comic-yellow text-comic-dark shrink-0" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-comic-border/20 text-center">
                <span className="font-hand font-bold text-sm text-zinc-500">
                  + Official CodeUtsava 10.0 Certificate
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Category Special Awards */}
        <div className="mb-12">
          <h3 className="text-2xl font-bangers text-comic-dark mb-4 text-center">
            SPECIAL CATEGORY BOUNTIES
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categoryAwards.map((cat, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl comic-border comic-shadow-sm hover:comic-shadow transition-all">
                <div className="flex items-center gap-2 font-bangers text-base text-comic-dark">
                  <Award className="w-4 h-4 text-comic-pink-hot" />
                  <span>{cat.title}</span>
                </div>
                <div className="text-lg font-bangers text-comic-green mt-1">
                  {cat.prize}
                </div>
                <p className="text-xs font-comic text-zinc-600 mt-0.5">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* NIT Raipur Travel & Stay Perks Box (From PDF Requirements) */}
        <div className="bg-[#FFF3D6] p-6 sm:p-8 rounded-3xl comic-border comic-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-comic-yellow comic-border flex items-center justify-center">
              <Gift className="w-5 h-5 text-comic-dark" />
            </div>
            <div>
              <h3 className="text-2xl font-bangers text-comic-dark">
                FREE PARTICIPANT HOSPITALITY & PERKS
              </h3>
              <p className="text-xs font-mono font-bold text-zinc-600">
                PROVIDED FREE OF COST BY NIT RAIPUR FOR SHORTLISTED TEAMS
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-4 rounded-2xl comic-border flex items-start gap-3">
              <Utensils className="w-6 h-6 text-comic-orange shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bangers text-base text-comic-dark">FREE MEALS & REFRESHMENTS</h4>
                <p className="text-xs font-comic text-zinc-600 mt-1">
                  Breakfast, lunch, midnight pizza snacks, unlimited tea/coffee and energy drinks throughout the 36 hours.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl comic-border flex items-start gap-3">
              <Home className="w-6 h-6 text-comic-pink-hot shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bangers text-base text-comic-dark">FREE CAMPUS ACCOMMODATION</h4>
                <p className="text-xs font-comic text-zinc-600 mt-1">
                  Comfortable hostel and guest house stay arranged inside NIT Raipur campus for outstation teams.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl comic-border flex items-start gap-3">
              <Plane className="w-6 h-6 text-comic-blue shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bangers text-base text-comic-dark">₹1,500 TRAVEL REIMBURSEMENT</h4>
                <p className="text-xs font-comic text-zinc-600 mt-1">
                  To & fro travel expenses up to ₹1,500 per person will be reimbursed with valid train/bus booking tickets.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
