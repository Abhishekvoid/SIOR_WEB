'use client';

import React from 'react';
import { CornerReticle } from '@/components/ui/CornerReticle';

export const HowItWorks: React.FC = () => {
  const currentLoop = [
    {
      step: '01',
      name: 'VOICE INGESTION',
      desc: 'Silero VAD detects speech activity locally before transcription.',
      badge: '[WORKING]',
    },
    {
      step: '02',
      name: 'UNDERSTAND & COMPILE',
      desc: 'Groq interprets spoken intent and produces structured tool parameters constrained by registered schemas.',
      badge: '[WORKING]',
    },
    {
      step: '03',
      name: 'ACTIVATE SYSTEM',
      desc: 'Validated tools dispatch controlled Windows-native and browser actions.',
      badge: '[WORKING]',
    },
    {
      step: '04',
      name: 'RESPOND BY VOICE',
      desc: 'Sarvam TTS produces spoken feedback based on execution results.',
      badge: '[WORKING]',
    },
  ];

  const futureLoop = [
    {
      step: '01',
      name: 'OBSERVE SCREEN',
      desc: 'Capture the current desktop frame for visual interpretation.',
      badge: '[NEXT HORIZON]',
    },
    {
      step: '02',
      name: 'GROUND COORDINATES',
      desc: 'Map a requested UI target to a specific visual region and coordinate.',
      badge: '[NEXT HORIZON]',
    },
    {
      step: '03',
      name: 'ACT WITH CURSOR',
      desc: 'Dispatch mouse/keyboard input only after a grounded target is selected.',
      badge: '[NEXT HORIZON]',
    },
    {
      step: '04',
      name: 'VERIFY & RECOVER',
      desc: 'Compare post-action state against the intended visual outcome and recover when verification fails.',
      badge: '[NEXT HORIZON]',
    },
  ];

  return (
    <section
      id="how-it-works"
      style={{
        padding: '6.5rem 0',
        backgroundColor: 'var(--sior-void)',
        borderTop: '1px solid var(--sior-line)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.28rem 0.85rem',
              backgroundColor: 'rgba(13, 16, 27, 0.65)',
              border: '1px solid var(--sior-line)',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              marginBottom: '1rem',
            }}
          >
            <span style={{ color: 'var(--sior-zen-coral)', fontWeight: 700 }}>EXECUTION LOOP</span>
            <span style={{ color: 'var(--sior-text-secondary)' }}>// ARCHITECTURAL DICHOTOMY</span>
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
            How SIOR Works: Today vs The Next Horizon
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--sior-text-secondary)' }}>
            We strictly separate the loop running reliably on desktop machines today from our active research into autonomous visual observation.
          </p>
        </div>

        {/* Current Active Loop */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.25rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
            }}
          >
            <span
              style={{
                color: 'var(--sior-zen-coral)',
                fontWeight: 700,
                backgroundColor: 'rgba(247, 111, 83, 0.12)',
                padding: '0.12rem 0.5rem',
                borderRadius: '3px',
                border: '1px solid rgba(247, 111, 83, 0.3)',
              }}
            >
              [ACTIVE TODAY]
            </span>
            <span style={{ color: 'var(--sior-stark-white)', fontWeight: 600 }}>
              Deterministic Tool Loop: VOICE → UNDERSTAND → ACT → RESPOND
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              borderTop: '1px solid var(--sior-line)',
              borderLeft: '1px solid var(--sior-line)',
            }}
          >
            {currentLoop.map((col) => (
              <div
                key={col.step}
                style={{
                  position: 'relative',
                  padding: '2rem 1.75rem',
                  borderRight: '1px solid var(--sior-line)',
                  borderBottom: '1px solid var(--sior-line)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                }}
              >
                <CornerReticle position="top-left" />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--sior-zen-coral)',
                    }}
                  >
                    {col.step}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.64rem',
                      color: 'var(--sior-zen-coral)',
                      backgroundColor: 'rgba(247, 111, 83, 0.08)',
                      padding: '0.1rem 0.4rem',
                      borderRadius: '2px',
                    }}
                  >
                    {col.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--sior-stark-white)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {col.name}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--sior-text-secondary)', lineHeight: 1.6 }}>
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Loop (In Development) */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.25rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
            }}
          >
            <span
              style={{
                color: 'var(--sior-text-secondary)',
                fontWeight: 700,
                backgroundColor: 'rgba(234, 231, 225, 0.08)',
                padding: '0.12rem 0.5rem',
                borderRadius: '3px',
                border: '1px solid rgba(234, 231, 225, 0.2)',
              }}
            >
              [NEXT HORIZON]
            </span>
            <span style={{ color: 'var(--sior-text-secondary)', fontWeight: 600 }}>
              Autonomous Multimodal Loop: OBSERVE → ACT → VERIFY → RECOVER
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              borderTop: '1px solid var(--sior-line)',
              borderLeft: '1px solid var(--sior-line)',
              opacity: 0.9,
            }}
          >
            {futureLoop.map((col) => (
              <div
                key={col.step}
                style={{
                  position: 'relative',
                  padding: '2rem 1.75rem',
                  borderRight: '1px solid var(--sior-line)',
                  borderBottom: '1px solid var(--sior-line)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  backgroundColor: 'rgba(6, 8, 14, 0.4)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--sior-text-secondary)',
                    }}
                  >
                    {col.step}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.64rem',
                      color: 'var(--sior-text-secondary)',
                      backgroundColor: 'rgba(234, 231, 225, 0.06)',
                      border: '1px solid rgba(234, 231, 225, 0.15)',
                      padding: '0.1rem 0.4rem',
                      borderRadius: '2px',
                    }}
                  >
                    {col.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--sior-stark-white)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {col.name}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--sior-text-secondary)', lineHeight: 1.6 }}>
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
