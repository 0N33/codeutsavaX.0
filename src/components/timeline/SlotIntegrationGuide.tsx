'use client';

import React, { useState } from 'react';
import { Copy, Check, Terminal, Code2, CheckCircle2 } from 'lucide-react';
import { retroAudio } from '@/utils/audioEffects';

export const SlotIntegrationGuide: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyCode = (code: string, idx: number) => {
    retroAudio.playXPClick();
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const importSnippet = `import { TimelineRoad } from '@/components/timeline/TimelineRoad';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#05040A] text-white">
      {/* 1. Teammate's Hero Section */}
      <HeroSection />

      {/* 2. Plug-and-Play Timeline Slot Component */}
      <TimelineRoad />

      {/* 3. Prizes / Sponsors / Footer */}
      <PrizesSection />
    </main>
  );
}`;

  return (
    <div className="max-w-5xl mx-auto my-12 bg-[#090614] rounded-2xl border border-white/15 p-6 sm:p-8 font-mono shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-2 text-[#FFE279]">
          <Terminal className="w-5 h-5 text-[#FFE279]" />
          <h3 className="text-base sm:text-lg font-black tracking-wider text-white">
            TEAMMATE SLOT COMPONENT HANDOFF GUIDE
          </h3>
        </div>
        <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
          ZERO-CONFIG INTEGRATION
        </span>
      </div>

      <div className="space-y-6 text-xs text-gray-300">
        <p className="text-sm font-sans text-gray-200">
          This timeline road is packaged as a modular, standalone Next.js slot component. Your team members can drop <code className="text-[#FF5FCF] font-mono bg-black/50 px-1.5 py-0.5 rounded">&lt;TimelineRoad /&gt;</code> into any page without modifying their hero or navigation logic.
        </p>

        {/* Code Snippet Box */}
        <div className="relative bg-black/80 rounded-xl border border-white/10 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10 text-[11px] text-gray-400">
            <div className="flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-[#FF5FCF]" />
              <span>app/page.tsx or components/LandingPage.tsx</span>
            </div>
            <button
              type="button"
              onClick={() => copyCode(importSnippet, 1)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-bold cursor-pointer transition-colors"
            >
              {copiedIndex === 1 ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedIndex === 1 ? 'Copied' : 'Copy Snippet'}</span>
            </button>
          </div>
          <pre className="p-4 overflow-x-auto text-[11px] leading-relaxed text-[#00F0FF]">
            <code>{importSnippet}</code>
          </pre>
        </div>

        {/* Integration Features checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-[11px]">
          <div className="p-3 rounded-lg bg-white/5 border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-[#FF5FCF] font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>3-Lane Pattern</span>
            </div>
            <p className="text-gray-400 font-sans">
              Middle → Left → Right sequence mapped across 12 authentic stages.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-white/5 border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-[#FFE279] font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Windows XP Dialogs</span>
            </div>
            <p className="text-gray-400 font-sans">
              Replaces generic cards with authentic XP draggable dialogue boxes.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-white/5 border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-[#00F0FF] font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>3D Highway Engine</span>
            </div>
            <p className="text-gray-400 font-sans">
              Museum of the World perspective canvas with buttery smooth 60fps scrub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
