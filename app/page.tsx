'use client';

import React from 'react';
import { SiorNav } from '@/components/navigation/SiorNav';
import { Hero } from '@/components/hero/Hero';
import { AcousticInstrument } from '@/components/instrument/AcousticInstrument';
import { HowItWorks } from '@/components/architecture/HowItWorks';
import { PipelineDiagram } from '@/components/architecture/PipelineDiagram';
import { CurrentCapabilities } from '@/components/system/CurrentCapabilities';
import { RoadmapGrid } from '@/components/system/RoadmapGrid';
import { Footer } from '@/components/ui/Footer';

export default function HomePage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--sior-void)' }}>
      {/* 00 — Fixed Navigation */}
      <SiorNav />

      {/* 01 — Hero Stage (Unobstructed Artwork Canvas) */}
      <main>
        <Hero />

        {/* 02 — Acoustic Instrument (Oscilloscope, Telemetry Rail, Phrase Selector) */}
        <AcousticInstrument />

        {/* 03 — How SIOR Works (Current Loop vs Next Horizon) */}
        <HowItWorks />

        {/* 04 — Architecture (10-Stage Deterministic Pipeline) */}
        <PipelineDiagram />

        {/* 05 — Current System (Verified Working Windows Capabilities) */}
        <CurrentCapabilities />

        {/* 06 — Roadmap (Multimodal Vision & Verification Milestones) */}
        <RoadmapGrid />
      </main>

      {/* 07 — Technical Footer */}
      <Footer />
    </div>
  );
}
