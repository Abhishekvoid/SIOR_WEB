'use client';

import React from 'react';
import { CAPABILITIES_LIST } from '@/lib/constants';

export const CurrentCapabilities: React.FC = () => {
  return (
    <section
      id="current-system"
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
        <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
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
            <span style={{ color: 'var(--sior-zen-coral)', fontWeight: 700 }}>VERIFIED CAPABILITIES</span>
            <span style={{ color: 'var(--sior-text-secondary)' }}>// SYSTEM INTEGRITY MATRIX</span>
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
            Capabilities & Implementation Status
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--sior-text-secondary)', marginBottom: '0.75rem' }}>
            We strictly distinguish working desktop subsystems from in-development multimodal visual grounding.
          </p>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--sior-text-muted)',
              letterSpacing: '0.04em',
            }}
          >
            * LOCAL MEASUREMENTS // APPROXIMATE // HARDWARE + NETWORK DEPENDENT
          </div>
        </div>

        {/* Compact Architectural Trust / State Legend */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1.25rem',
            padding: '0.45rem 1.15rem',
            backgroundColor: 'rgba(10, 13, 22, 0.85)',
            border: '1px solid var(--sior-line)',
            borderRadius: '9999px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
            <span style={{ color: 'var(--sior-zen-coral)', fontWeight: 700 }}>[WORKING]</span>
            <span style={{ color: 'var(--sior-text-secondary)' }}>Implemented & tested</span>
          </span>
          <span style={{ color: 'rgba(234, 231, 225, 0.2)' }}>•</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
            <span style={{ color: 'var(--sior-amber)', fontWeight: 700 }}>[IN DEVELOPMENT]</span>
            <span style={{ color: 'var(--sior-text-secondary)' }}>Partially implemented / active validation</span>
          </span>
          <span style={{ color: 'rgba(234, 231, 225, 0.2)' }}>•</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
            <span style={{ color: 'var(--sior-text-muted)', fontWeight: 700 }}>[NEXT HORIZON]</span>
            <span style={{ color: 'var(--sior-text-secondary)' }}>Planned research direction</span>
          </span>
        </div>

        {/* Architectural Rows (No Cards, No Drop Shadows) */}
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--sior-line)' }}>
          {CAPABILITIES_LIST.map((item) => {
            const isDev = item.status === '[IN DEVELOPMENT]';

            return (
              <div
                key={item.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '50px 220px 1fr 140px',
                  alignItems: 'flex-start',
                  gap: '2.5rem',
                  padding: '1.85rem 0',
                  borderBottom: '1px solid var(--sior-line)',
                  transition: 'all 160ms var(--ease-expo)',
                  backgroundColor: 'transparent',
                }}
                className="capability-architectural-row"
              >
                {/* Row Index */}
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: isDev ? 'var(--sior-amber)' : 'var(--sior-zen-coral)',
                  }}
                >
                  {item.id}
                </span>

                {/* Subsystem Category & Status */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: 'var(--sior-text-muted)',
                      letterSpacing: '0.08em',
                      lineHeight: 1.25,
                    }}
                  >
                    {item.category}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.66rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      color: isDev ? 'var(--sior-amber)' : 'var(--sior-zen-coral)',
                      backgroundColor: isDev ? 'var(--sior-amber-soft)' : 'rgba(247, 111, 83, 0.1)',
                      border: `1px solid ${isDev ? 'var(--sior-amber-border)' : 'rgba(247, 111, 83, 0.28)'}`,
                      padding: '0.12rem 0.45rem',
                      borderRadius: '2px',
                      width: 'fit-content',
                    }}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--sior-stark-white)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.94rem', color: 'var(--sior-text-secondary)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>

                {/* Latency Metric / Delivery Horizon */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      lineHeight: 1.25,
                      color: isDev ? 'var(--sior-amber)' : 'var(--sior-stark-white)',
                    }}
                  >
                    {item.latency}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.64rem',
                      color: 'var(--sior-text-muted)',
                      letterSpacing: '0.06em',
                      lineHeight: 1.2,
                    }}
                  >
                    {item.latencyLabel || 'EXEC LATENCY'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
