'use client';

import React from 'react';
import { ShowDemoStep } from '@/lib/demo-data';
import { SiorState } from '@/components/sior/SiorState';
import { CornerReticle } from '@/components/ui/CornerReticle';

interface DesktopDemoProps {
  currentStep: ShowDemoStep;
  stepIndex: number;
}

export const DesktopDemo: React.FC<DesktopDemoProps> = ({ currentStep, stepIndex }) => {
  // Compute typed document text based on step
  const getDocumentText = () => {
    if (stepIndex < 2) return '';
    if (stepIndex === 2) return 'Opening Untitled - Notepad...';
    if (stepIndex === 3) return 'Meeting at 4:00 PM\nAgenda:\n- Sovereign Indic Voice Architecture Review\n- Windows Desktop DWM Framebuffer Validation';
    return 'Meeting at 4:00 PM\nAgenda:\n- Sovereign Indic Voice Architecture Review\n- Windows Desktop DWM Framebuffer Validation\n\n[Task executed and verified locally in 42ms]';
  };

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

      {/* Simulated Windows App Window Titlebar */}
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
          <span style={{ color: 'var(--sior-zen-coral)', fontWeight: 700 }}>◈ WIN32 PROCESS</span>
          <span style={{ color: 'var(--sior-line-bright)' }}>/</span>
          <span style={{ color: 'var(--sior-stark-white)' }}>notepad.exe (PID: 18420)</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '10px', height: '1px', backgroundColor: 'rgba(234, 231, 225, 0.4)' }} />
          <span style={{ width: '8px', height: '8px', border: '1px solid rgba(234, 231, 225, 0.4)' }} />
          <span style={{ color: 'rgba(234, 231, 225, 0.4)', fontSize: '0.8rem' }}>×</span>
        </div>
      </div>

      {/* Internal Demo Stage */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          minHeight: '380px',
        }}
      >
        {/* Left: Notepad Canvas */}
        <div
          style={{
            padding: '1.75rem',
            borderRight: '1px solid var(--sior-line)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            backgroundColor: '#020306',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--sior-text-muted)',
              borderBottom: '1px solid rgba(234, 231, 225, 0.05)',
              paddingBottom: '0.5rem',
            }}
          >
            <span>File  Edit  View  Insert  Format</span>
            <span>UTF-8 // Windows (CRLF)</span>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              color: 'var(--sior-stark-white)',
              lineHeight: 1.6,
              whiteSpace: 'pre-wrap',
              flex: 1,
            }}
          >
            {getDocumentText()}
            {stepIndex >= 2 && (
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1em',
                  backgroundColor: 'var(--sior-zen-coral)',
                  marginLeft: '2px',
                  verticalAlign: 'middle',
                }}
              />
            )}
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--sior-text-muted)',
              borderTop: '1px solid rgba(234, 231, 225, 0.05)',
              paddingTop: '0.5rem',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>STATUS: {stepIndex >= 2 ? 'FOCUSED_ACTIVE' : 'IDLE'}</span>
            <span>ENCODING: UTF-8</span>
          </div>
        </div>

        {/* Right: Telemetry & State Telemetry */}
        <div
          style={{
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            backgroundColor: 'rgba(5, 6, 10, 0.8)',
          }}
        >
          {/* Current SiorState */}
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

          {/* Real-time UI State readout */}
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
            <div style={{ color: 'var(--sior-text-muted)', marginBottom: '0.25rem' }}>// TELEMETRY SNAPSHOT</div>
            <div>{currentStep.uiState}</div>
          </div>

          {/* Code/Pipeline Assertion */}
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
