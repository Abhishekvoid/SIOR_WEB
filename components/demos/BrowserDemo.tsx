'use client';

import React from 'react';
import { ShowDemoStep } from '@/lib/demo-data';
import { SiorState } from '@/components/sior/SiorState';
import { CornerReticle } from '@/components/ui/CornerReticle';

interface BrowserDemoProps {
  currentStep: ShowDemoStep;
  stepIndex: number;
}

export const BrowserDemo: React.FC<BrowserDemoProps> = ({ currentStep, stepIndex }) => {
  return (
    <div
      style={{
        position: 'relative',
        border: '1px solid var(--sior-line)',
        backgroundColor: '#040508',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CornerReticle position="top-left" />
      <CornerReticle position="top-right" />
      <CornerReticle position="bottom-left" />
      <CornerReticle position="bottom-right" />

      {/* Simulated Browser URL Navigation Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '0.65rem 1.25rem',
          backgroundColor: '#0b0e17',
          borderBottom: '1px solid var(--sior-line)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ color: 'var(--sior-text-muted)' }}>←</span>
          <span style={{ color: 'var(--sior-text-muted)' }}>→</span>
          <span style={{ color: 'var(--sior-text-muted)' }}>⟳</span>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.25rem 0.75rem',
            backgroundColor: 'rgba(5, 6, 10, 0.8)',
            border: '1px solid var(--sior-line)',
            borderRadius: '4px',
            color: 'var(--sior-stark-white)',
          }}
        >
          <span style={{ color: 'var(--sior-zen-coral)', fontSize: '0.65rem' }}>🔒</span>
          <span>
            {stepIndex < 2
              ? 'about:blank'
              : 'https://www.google.com/search?q=Sarvam+AI'}
          </span>
        </div>

        <span style={{ color: 'var(--sior-text-secondary)', fontSize: '0.68rem' }}>
          [AUTOMATED TAB]
        </span>
      </div>

      {/* Internal Browser View */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          minHeight: '380px',
        }}
      >
        {/* Left: Google Search Results Canvas */}
        <div
          style={{
            padding: '1.75rem',
            borderRight: '1px solid var(--sior-line)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            backgroundColor: '#020306',
          }}
        >
          {stepIndex < 2 ? (
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--sior-text-muted)',
              }}
            >
              [Awaiting voice parse intent...]
            </div>
          ) : (
            <>
              {/* Simulated Search Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid var(--sior-line)', paddingBottom: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--sior-stark-white)' }}>
                  Google
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--sior-zen-coral)' }}>
                  &ldquo;Sarvam AI&rdquo;
                </span>
                <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--sior-text-muted)' }}>
                  About 48,200 results (0.28 seconds)
                </span>
              </div>

              {/* Result 1 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--sior-text-muted)' }}>
                  https://www.sarvam.ai
                </span>
                <h5 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--sior-stark-white)' }}>
                  Sarvam AI — Sovereign Indic Language Models & Speech Stack
                </h5>
                <p style={{ fontSize: '0.86rem', color: 'var(--sior-text-secondary)', lineHeight: 1.5 }}>
                  Developing foundational generative AI and acoustic streaming speech-to-text models tailored for Indian languages, code-switching, and dialects.
                </p>
              </div>

              {/* Result 2 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--sior-text-muted)' }}>
                  https://github.com/sarvam-ai
                </span>
                <h5 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.98rem', fontWeight: 700, color: 'var(--sior-stark-white)' }}>
                  Open-Source Repositories & Indic Tokenizers
                </h5>
                <p style={{ fontSize: '0.84rem', color: 'var(--sior-text-secondary)', lineHeight: 1.5 }}>
                  Saaras v3 streaming STT, Shuka audio foundation architectures, and high-efficiency Indic tokenizers for multi-language evaluation.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Right: Telemetry & State */}
        <div
          style={{
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            backgroundColor: 'rgba(5, 6, 10, 0.8)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <SiorState state={currentStep.state} showDescription />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--sior-zen-coral)',
                fontWeight: 700,
              }}
            >
              {currentStep.actionBadge}
            </span>
          </div>

          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--sior-stark-white)',
                marginBottom: '0.35rem',
              }}
            >
              {currentStep.title}
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--sior-text-secondary)', lineHeight: 1.5 }}>
              {currentStep.detail}
            </p>
          </div>

          <div
            style={{
              padding: '0.85rem 1rem',
              backgroundColor: 'rgba(234, 231, 225, 0.04)',
              border: '1px solid var(--sior-line)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--sior-stark-white)',
            }}
          >
            <div style={{ color: 'var(--sior-text-muted)', marginBottom: '0.25rem' }}>// BROWSER SESSION TELEMETRY</div>
            <div>{currentStep.uiState}</div>
          </div>

          {currentStep.codeSnippet && (
            <pre
              style={{
                padding: '0.85rem 1rem',
                backgroundColor: '#020306',
                border: '1px solid var(--sior-line)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--sior-text-secondary)',
                overflowX: 'auto',
                lineHeight: 1.5,
              }}
            >
              <code>{currentStep.codeSnippet}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};
