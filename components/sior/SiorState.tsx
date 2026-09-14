import React from 'react';
import { SiorStateType, SIOR_STATES } from '@/lib/constants';

interface SiorStateProps {
  state: SiorStateType;
  showDescription?: boolean;
  className?: string;
}

export const SiorState: React.FC<SiorStateProps> = ({
  state,
  showDescription = false,
  className = '',
}) => {
  const current = SIOR_STATES[state] || SIOR_STATES.READY;

  const stateColors: Record<SiorStateType, { border: string; bg: string; text: string }> = {
    READY: {
      border: 'rgba(234, 231, 225, 0.25)',
      bg: 'rgba(234, 231, 225, 0.05)',
      text: 'var(--sior-text-secondary)',
    },
    LISTENING: {
      border: 'var(--sior-zen-coral-border)',
      bg: 'var(--sior-zen-coral-soft)',
      text: 'var(--sior-zen-coral)',
    },
    THINKING: {
      border: 'rgba(192, 132, 252, 0.4)',
      bg: 'rgba(192, 132, 252, 0.12)',
      text: 'var(--sior-amethyst-radiance)',
    },
    LOOKING: {
      border: 'var(--sior-amber-border)',
      bg: 'var(--sior-amber-soft)',
      text: 'var(--sior-amber)',
    },
    SPEAKING: {
      border: 'rgba(234, 231, 225, 0.45)',
      bg: 'rgba(234, 231, 225, 0.15)',
      text: 'var(--sior-stark-white)',
    },
  };

  const colors = stateColors[state];

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.65rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.2rem 0.6rem',
          borderRadius: '3px',
          border: `1px solid ${colors.border}`,
          backgroundColor: colors.bg,
          color: colors.text,
          fontWeight: 700,
          letterSpacing: '0.08em',
        }}
      >
        <span style={{ fontSize: '0.75rem' }}>{current.glyph}</span>
        <span>[{current.label}]</span>
      </div>

      {showDescription && (
        <span style={{ color: 'var(--sior-text-muted)', fontSize: '0.75rem' }}>
          // {current.desc}
        </span>
      )}
    </div>
  );
};
