'use client';

import React from 'react';
import { ShowDemoStep } from '@/lib/demo-data';
import { SiorState } from '@/components/sior/SiorState';
import { CornerReticle } from '@/components/ui/CornerReticle';

interface VisionPreviewProps {
  currentStep: ShowDemoStep;
  stepIndex: number;
}

export const VisionPreview: React.FC<VisionPreviewProps> = ({ currentStep, stepIndex }) => {
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

      {/* Titlebar with Research Badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.65rem 1.25rem',
          backgroundColor: '#0b0e17',
          borderBottom: '1px solid var(--sior-line)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ color: 'var(--sior-amber)', fontWeight: 700 }}>[NEXT MILESTONE]</span>
          <span style={{ color: 'var(--sior-line-bright)' }}>/</span>
          <span style={{ color: 'var(--sior-stark-white)' }}>
            VISUAL COORDINATE GROUNDING & POST-ACTION VERIFICATION
          </span>
        </div>

        <span
          style={{
            color: 'var(--sior-amber)',
            backgroundColor: 'var(--sior-amber-soft)',
            border: '1px solid var(--sior-amber-border)',
            padding: '0.1rem 0.45rem',
            borderRadius: '2px',
            fontSize: '0.66rem',
            fontWeight: 700,
          }}
        >
          ACTIVE RESEARCH
        </span>
      </div>

      {/* Internal Display View */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          minHeight: '380px',
        }}
      >
        {/* Left: Pixel Bounding Box Inspector Canvas */}
        <div
          style={{
            position: 'relative',
            padding: '1.75rem',
            borderRight: '1px solid var(--sior-line)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            backgroundColor: '#020306',
            overflow: 'hidden',
          }}
        >
          {/* Simulated Settings Window Canvas */}
          <div
            style={{
              padding: '1.25rem',
              border: '1px solid rgba(234, 231, 225, 0.12)',
              backgroundColor: stepIndex >= 3 ? '#080a12' : '#141824',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              transition: 'background-color 400ms ease',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--sior-stark-white)' }}>
                Windows Settings // Personalization
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--sior-text-muted)' }}>
                DWM BUFFER 3840x2160
              </span>
            </div>

            {/* Target Element with Grounding Reticle */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                backgroundColor: 'rgba(234, 231, 225, 0.04)',
                border: stepIndex >= 1 ? '1px dashed var(--sior-amber)' : '1px solid var(--sior-line)',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--sior-stark-white)' }}>
                  Dark Mode Theme
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--sior-text-muted)' }}>
                  Choose your system color preference
                </div>
              </div>

              {/* Simulated Toggle Switch */}
              <div
                style={{
                  width: '42px',
                  height: '22px',
                  backgroundColor: stepIndex >= 2 ? 'var(--sior-zen-coral)' : 'rgba(234, 231, 225, 0.2)',
                  borderRadius: '11px',
                  position: 'relative',
                  transition: 'background-color 200ms ease',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '2px',
                    left: stepIndex >= 2 ? '22px' : '2px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    transition: 'left 200ms ease',
                  }}
                />
              </div>

              {/* Coordinate Grounding Box Callout */}
              {stepIndex >= 1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '-8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    color: '#05060a',
                    backgroundColor: 'var(--sior-amber)',
                    padding: '0.1rem 0.35rem',
                    borderRadius: '2px',
                  }}
                >
                  X:1420 Y:680 (0.94)
                </div>
              )}
            </div>

            {/* Verification Check Notice */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: stepIndex >= 3 ? 'var(--sior-stark-white)' : 'var(--sior-text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>{stepIndex >= 3 ? '◈ ASSERTION SUCCESS:' : '∷ AWAITING ACTION:'}</span>
              <span>
                {stepIndex >= 3
                  ? 'Visual contrast shift validated on screen buffer.'
                  : 'Look before act pipeline active.'}
              </span>
            </div>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--sior-text-muted)',
              lineHeight: 1.5,
            }}
          >
            * Note: Visual grounding and autonomous observe-act-observe are currently under active development. This simulation demonstrates our architectural design for Phase 2/3.
          </div>
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
                color: 'var(--sior-amber)',
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
            <div style={{ color: 'var(--sior-text-muted)', marginBottom: '0.25rem' }}>// VISION INFERENCE LOG</div>
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
