'use client';

import React from 'react';
import { SiorStateType } from '@/lib/constants';

interface SiorVisualProps {
  state: SiorStateType;
  sampleRate?: string;
  className?: string;
}

export const SiorVisual: React.FC<SiorVisualProps> = ({
  state,
  sampleRate = '48.0 kHz',
  className = '',
}) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.65rem 1.25rem',
        border: '1px solid var(--sior-line)',
        backgroundColor: 'rgba(6, 8, 14, 0.75)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.74rem',
        color: 'var(--sior-text-secondary)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ color: 'var(--sior-zen-coral)', fontWeight: 700 }}>◈ ENGINE</span>
        <span style={{ color: 'var(--sior-line-bright)' }}>/</span>
        <span>STATE: <span style={{ color: 'var(--sior-stark-white)', fontWeight: 600 }}>{state}</span></span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span>SILERO VAD: <span style={{ color: 'var(--sior-stark-white)' }}>ACTIVE</span></span>
        <span style={{ color: 'var(--sior-line-bright)' }}>/</span>
        <span>RATE: <span style={{ color: 'var(--sior-zen-coral)' }}>{sampleRate}</span></span>
      </div>
    </div>
  );
};
