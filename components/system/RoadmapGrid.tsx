'use client';

import React from 'react';
import { CornerReticle } from '@/components/ui/CornerReticle';

interface RoadmapCassette {
  modIndex: string;
  phase: string;
  title: string;
  description: string;
  statusBadge: string;
  timeline: string;
  telemetry: { label: string; value: string }[];
}

const ROADMAP_MODULES: RoadmapCassette[] = [
  {
    modIndex: 'MOD // 01',
    phase: 'PHASE 2 • PERCEPTION',
    title: 'Vision Screen Understanding',
    description: 'Multimodal perception for identifying visible windows, controls, text, and application state from desktop pixels.',
    statusBadge: '[STANDBY // DEV]',
    timeline: 'Q3 2026',
    telemetry: [
      { label: 'INPUT', value: 'DWM Framebuffer' },
      { label: 'PARSER', value: 'Multimodal VLM' },
      { label: 'SCOPE', value: 'Active OS Windows' },
    ],
  },
  {
    modIndex: 'MOD // 02',
    phase: 'PHASE 2 • GROUNDING',
    title: 'UI Element Detection & Coordinate Grounding',
    description: 'Map visual targets to screenshot coordinates with deterministic validation before any input action.',
    statusBadge: '[STANDBY // DEV]',
    timeline: 'Q3 2026',
    telemetry: [
      { label: 'TARGET', value: 'Pixel Bounding Box' },
      { label: 'TOLERANCE', value: '<15px Grounding' },
      { label: 'GUARD', value: 'Schema Bounds Assertion' },
    ],
  },
  {
    modIndex: 'MOD // 03',
    phase: 'PHASE 3 • ASSERTION',
    title: 'Visual Verification & State Assertion',
    description: 'Compare pre-action and post-action screen states to determine whether the intended change actually occurred.',
    statusBadge: '[RESEARCH // LAB]',
    timeline: 'Q4 2026',
    telemetry: [
      { label: 'INPUT', value: 'Pre/Post DWM Frames' },
      { label: 'ASSERTION', value: 'Visual Delta Hashing' },
      { label: 'FALLBACK', value: 'Truthful Spoken Response' },
    ],
  },
  {
    modIndex: 'MOD // 04',
    phase: 'PHASE 3 • CLOSED-LOOP',
    title: 'Autonomous Observe → Act → Observe Loop',
    description: 'Combine visual observation, grounded input, verification, and bounded recovery into a multi-step execution loop.',
    statusBadge: '[RESEARCH // LAB]',
    timeline: 'Q4 2026',
    telemetry: [
      { label: 'LOOP', value: 'Observe → Act → Observe' },
      { label: 'DISPATCH', value: 'Narrow Win32 Surface' },
      { label: 'RECOVERY', value: 'Bounded Subprocess Fallback' },
    ],
  },
];

export const RoadmapGrid: React.FC = () => {
  return (
    <section
      id="roadmap"
      style={{
        padding: '7rem 0',
        backgroundColor: '#040508',
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid var(--sior-line)',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.28rem 0.85rem',
              backgroundColor: 'rgba(13, 16, 27, 0.75)',
              border: '1px solid var(--sior-line)',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              marginBottom: '1.25rem',
            }}
          >
            <span
              style={{
                color: 'var(--sior-amber)',
                backgroundColor: 'var(--sior-amber-soft)',
                padding: '0.1rem 0.45rem',
                borderRadius: '3px',
                border: '1px solid var(--sior-amber-border)',
                fontWeight: 700,
              }}
            >
              [RESEARCH ROADMAP]
            </span>
            <span style={{ color: 'var(--sior-text-secondary)' }}>{'//'} MULTIMODAL PERCEPTION ENGINE</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.4vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.04em',
              color: 'var(--sior-stark-white)',
              marginBottom: '0.85rem',
            }}
          >
            What SIOR Is Learning Next
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--sior-text-secondary)' }}>
            Screen capture is already working infrastructure. The next step is multimodal visual understanding—grounding UI targets to coordinates and verifying state changes before recovery.
          </p>
        </div>

        {/* Teenage Engineering Hardware Module Bento (2x2 Modular Cassettes) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {ROADMAP_MODULES.map((mod) => (
            <div
              key={mod.modIndex}
              className="hardware-cassette"
              style={{
                borderRadius: '6px',
                padding: '2rem 2.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.35rem',
              }}
            >
              <CornerReticle position="top-left" />
              <CornerReticle position="top-right" />
              <CornerReticle position="bottom-left" />
              <CornerReticle position="bottom-right" />

              {/* Hardware Chassis Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(234, 231, 225, 0.08)',
                  paddingBottom: '0.85rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: 'var(--sior-amber)',
                      backgroundColor: 'var(--sior-amber-soft)',
                      padding: '0.12rem 0.45rem',
                      borderRadius: '3px',
                      border: '1px solid var(--sior-amber-border)',
                    }}
                  >
                    {mod.modIndex}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'var(--sior-text-secondary)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {mod.phase}
                  </span>
                </div>

                {/* Hardware Bolt / Status Screws */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'rgba(234, 231, 225, 0.25)' }} />
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'rgba(234, 231, 225, 0.25)' }} />
                </div>
              </div>

              {/* Module Content */}
              <div>
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--sior-stark-white)',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.25,
                    marginBottom: '0.65rem',
                  }}
                >
                  {mod.title}
                </h3>

                <p style={{ fontSize: '0.94rem', color: 'var(--sior-text-secondary)', lineHeight: 1.6 }}>
                  {mod.description}
                </p>
              </div>

              {/* Hardware Telemetry Spec Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  backgroundColor: 'rgba(5, 6, 10, 0.7)',
                  border: '1px solid rgba(234, 231, 225, 0.08)',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                }}
              >
                {mod.telemetry.map((t) => (
                  <div key={t.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <span style={{ color: 'var(--sior-text-muted)', letterSpacing: '0.06em' }}>{t.label}</span>
                    <span style={{ color: 'var(--sior-stark-white)', fontWeight: 600 }}>{t.value}</span>
                  </div>
                ))}
              </div>

              {/* Module Status Footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(234, 231, 225, 0.08)',
                  paddingTop: '0.85rem',
                  marginTop: 'auto',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                }}
              >
                <span
                  style={{
                    color: 'var(--sior-amber)',
                    backgroundColor: 'var(--sior-amber-soft)',
                    border: '1px solid var(--sior-amber-border)',
                    padding: '0.12rem 0.5rem',
                    borderRadius: '3px',
                    fontWeight: 600,
                    fontSize: '0.66rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  {mod.statusBadge}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--sior-text-muted)' }}>
                  <span>TARGET:</span>
                  <span style={{ color: 'var(--sior-stark-white)', fontWeight: 700 }}>{mod.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
