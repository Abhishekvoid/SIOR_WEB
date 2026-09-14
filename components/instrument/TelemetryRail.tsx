'use client';

import React from 'react';

interface TelemetryRailProps {
  status: 'STANDBY' | 'EXEC_OK' | 'DISPATCHED';
  speed: string;
  toolSig: string;
  params: string;
  auth: string;
}

export const TelemetryRail: React.FC<TelemetryRailProps> = ({
  status,
  speed,
  toolSig,
  params,
  auth,
}) => {
  const isExecuting = status === 'EXEC_OK' || status === 'DISPATCHED';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '0.9rem 0',
        borderBottom: '1px solid var(--sior-line)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
      }}
    >
      {/* Hardware Status Bracket */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            padding: '0.16rem 0.55rem',
            borderRadius: '3px',
            backgroundColor: isExecuting ? 'var(--sior-zen-coral)' : 'rgba(234, 231, 225, 0.08)',
            color: isExecuting ? '#05060a' : 'var(--sior-stark-white)',
            border: `1px solid ${isExecuting ? 'var(--sior-zen-coral)' : 'rgba(234, 231, 225, 0.22)'}`,
            transition: 'all 160ms var(--ease-expo)',
          }}
        >
          {isExecuting ? '[EXEC // OK]' : '[STANDBY]'}
        </span>

        <span
          style={{
            color: 'var(--sior-stark-white)',
            fontWeight: 700,
            letterSpacing: '0.06em',
          }}
        >
          {isExecuting ? 'DISPATCHED_200_OK' : 'STANDBY_LISTENING'}
        </span>
      </div>

      {/* Single-Line Telemetry Stream */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          color: 'var(--sior-text-secondary)',
        }}
      >
        <span style={{ color: 'var(--sior-zen-coral)' }}>{toolSig}</span>
        <span style={{ color: 'rgba(234, 231, 225, 0.2)' }}>•</span>
        <span>{params}</span>
        <span style={{ color: 'rgba(234, 231, 225, 0.2)' }}>•</span>
        <span>{auth}</span>
        <span style={{ color: 'rgba(234, 231, 225, 0.2)' }}>•</span>
        <span
          style={{
            color: 'var(--sior-stark-white)',
            backgroundColor: 'rgba(234, 231, 225, 0.08)',
            border: '1px solid rgba(234, 231, 225, 0.18)',
            padding: '0.12rem 0.5rem',
            borderRadius: '3px',
            fontWeight: 600,
            letterSpacing: '0.04em',
          }}
        >
          {speed} (Simulated)
        </span>
      </div>
    </div>
  );
};
