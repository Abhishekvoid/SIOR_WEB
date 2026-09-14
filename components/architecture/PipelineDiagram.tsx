'use client';

import React from 'react';
import { CornerReticle } from '@/components/ui/CornerReticle';

interface PipelineStage {
  step: string;
  name: string;
  component: string;
  description: string;
  category: 'CURRENT' | 'DEVELOPMENT';
}

export const PipelineDiagram: React.FC = () => {
  const stages: PipelineStage[] = [
    {
      step: '01',
      name: 'VOICE ACTIVATION',
      component: 'Local Mic Ingestion',
      description: 'Local audio buffer capturing microphone stream with zero unnecessary cloud transmission.',
      category: 'CURRENT',
    },
    {
      step: '02',
      name: 'VAD FILTERING',
      component: 'Silero VAD Engine',
      description: 'Silero VAD detects speech activity locally before audio is dispatched for transcription.',
      category: 'CURRENT',
    },
    {
      step: '03',
      name: 'SPEECH-TO-TEXT',
      component: 'Sarvam Saaras v3 STT',
      description: 'Sarvam Saaras v3 transcription calibrated for mixed Hindi-English code-switching and dialect variations.',
      category: 'CURRENT',
    },
    {
      step: '04',
      name: 'LLM COMPILATION',
      component: 'Groq GPT-OSS 120B',
      description: 'Transforms spoken requests into validated JSON tool parameters before deterministic OS dispatch.',
      category: 'CURRENT',
    },
    {
      step: '05',
      name: 'TOOL DISPATCHER',
      component: 'Schema Boundary Guard',
      description: 'Asserts schema validation and safety boundaries before any OS dispatch.',
      category: 'CURRENT',
    },
    {
      step: '06',
      name: 'DESKTOP / WEB ACTION',
      component: 'Win32 Subprocess & Browser',
      description: 'Windows-native application launching, mouse control, keyboard input, and browser actions through a narrow validated tool surface.',
      category: 'CURRENT',
    },
    {
      step: '07',
      name: 'SCREEN CAPTURE',
      component: 'Win32 DWM Framebuffer',
      description: 'High-resolution desktop frame capture used as the input layer for upcoming visual understanding.',
      category: 'CURRENT',
    },
    {
      step: '08',
      name: 'VISION UNDERSTANDING',
      component: 'Multimodal UI Parser',
      description: 'Multimodal screen interpretation for identifying visible UI elements and application state.',
      category: 'DEVELOPMENT',
    },
    {
      step: '09',
      name: 'VERIFICATION',
      component: 'Visual State Assertion',
      description: 'Visual comparison of pre-action and post-action states to determine whether an intended desktop change occurred.',
      category: 'DEVELOPMENT',
    },
    {
      step: '10',
      name: 'RECOVERY & TTS',
      component: 'Sarvam TTS + Fallback Handler',
      description: 'Tool failure handling with spoken fallback responses when execution cannot be completed.',
      category: 'CURRENT',
    },
  ];

  return (
    <section
      id="architecture"
      style={{
        padding: '6.5rem 0',
        backgroundColor: 'var(--sior-void)',
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid var(--sior-line)',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
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
            <span style={{ color: 'var(--sior-zen-coral)', fontWeight: 700 }}>ARCHITECTURE</span>
            <span style={{ color: 'var(--sior-text-secondary)' }}>// END-TO-END PIPELINE</span>
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
            10-Stage Deterministic Execution Pipeline
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--sior-text-secondary)', marginBottom: '0.75rem' }}>
            From acoustic microphone input to Windows Win32 API execution, SQLite audit logging, and Sarvam spoken feedback.
          </p>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--sior-text-muted)',
              letterSpacing: '0.04em',
            }}
          >
            * LOCAL STAGE MEASUREMENTS // APPROXIMATE // HARDWARE + NETWORK DEPENDENT
          </div>
        </div>

        {/* 4-Column Swiss Architectural Matrix */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            borderTop: '1px solid var(--sior-line)',
            borderLeft: '1px solid var(--sior-line)',
          }}
        >
          {stages.map((stage) => {
            const isDev = stage.category === 'DEVELOPMENT';

            return (
              <div
                key={stage.step}
                style={{
                  position: 'relative',
                  padding: '2.25rem 2rem',
                  borderRight: '1px solid var(--sior-line)',
                  borderBottom: '1px solid var(--sior-line)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.9rem',
                  backgroundColor: isDev ? 'var(--sior-amber-glow)' : 'transparent',
                }}
              >
                <CornerReticle position="top-left" />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: isDev ? 'var(--sior-amber)' : 'var(--sior-zen-coral)',
                    }}
                  >
                    {stage.step}
                  </span>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.64rem',
                      fontWeight: 600,
                      padding: '0.12rem 0.45rem',
                      borderRadius: '2px',
                      color: isDev ? 'var(--sior-amber)' : 'var(--sior-stark-white)',
                      backgroundColor: isDev ? 'var(--sior-amber-soft)' : 'rgba(234, 231, 225, 0.08)',
                      border: `1px solid ${isDev ? 'var(--sior-amber-border)' : 'rgba(234, 231, 225, 0.18)'}`,
                    }}
                  >
                    {isDev ? '[IN DEVELOPMENT]' : '[WORKING]'}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--sior-stark-white)',
                    lineHeight: 1.25,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stage.name}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--sior-text-secondary)', lineHeight: 1.6, flex: 1 }}>
                  {stage.description}
                </p>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: isDev ? 'var(--sior-amber)' : 'var(--sior-zen-coral)',
                    borderTop: '1px solid var(--sior-line)',
                    paddingTop: '0.75rem',
                  }}
                >
                  {stage.component}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
