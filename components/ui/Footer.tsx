'use client';

import React from 'react';
import Link from 'next/link';
import { SIOR_BRAND } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--sior-line)',
        backgroundColor: '#020306',
        padding: '5rem 0 3rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3.5rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid var(--sior-line)',
          }}
        >
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: '1px solid var(--sior-zen-coral-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--sior-zen-coral)',
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--sior-stark-white)',
                  letterSpacing: '-0.04em',
                }}
              >
                SIOR (Σείριος)
              </span>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--sior-text-secondary)', lineHeight: 1.6 }}>
              Voice-first Windows desktop assistant for Indian languages with validated structured tool dispatch.
            </p>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--sior-text-muted)',
                lineHeight: 1.6,
              }}
            >
              <div>{SIOR_BRAND.astronomy}</div>
              <div>COORDINATES: {SIOR_BRAND.coordinates}</div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--sior-stark-white)',
                letterSpacing: '0.08em',
              }}
            >
              ARCHITECTURE
            </span>
            <a href="#instrument" style={{ fontSize: '0.88rem', color: 'var(--sior-text-secondary)' }}>
              Acoustic Oscilloscope
            </a>
            <a href="#how-it-works" style={{ fontSize: '0.88rem', color: 'var(--sior-text-secondary)' }}>
              Execution Loop
            </a>
            <a href="#architecture" style={{ fontSize: '0.88rem', color: 'var(--sior-text-secondary)' }}>
              10-Stage Pipeline
            </a>
            <a href="#current-system" style={{ fontSize: '0.88rem', color: 'var(--sior-text-secondary)' }}>
              Verified Core
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--sior-stark-white)',
                letterSpacing: '0.08em',
              }}
            >
              SHOWCASE & REPO
            </span>
            <Link href="/show" style={{ fontSize: '0.88rem', color: 'var(--sior-zen-coral)', fontWeight: 600 }}>
              Interactive Demo (/show) ↗
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.88rem', color: 'var(--sior-text-secondary)' }}
            >
              GitHub Repository ↗
            </a>
            <a href="#roadmap" style={{ fontSize: '0.88rem', color: 'var(--sior-text-secondary)' }}>
              Vision Roadmap
            </a>
            <a href="/DESIGN.md" style={{ fontSize: '0.88rem', color: 'var(--sior-text-secondary)' }}>
              DESIGN.md Specification
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--sior-stark-white)',
                letterSpacing: '0.08em',
              }}
            >
              SOVEREIGNTY & LOCAL PRIVACY
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--sior-text-secondary)' }}>
              100% On-Device Windows Subprocesses
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--sior-text-secondary)' }}>
              India DPDP Act 2023 Compliant Local SQLite Logs
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--sior-text-secondary)' }}>
              Silero VAD Local Pre-Classification
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '2rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            color: 'var(--sior-text-muted)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span>© 2026 SIOR Systems. Built for sovereign Windows desktop voice execution.</span>
          <span>DEPLOYMENT: SEIRIOS_TEENAGE_INSTRUMENT_NEXTJS // ARCH: WIN32</span>
        </div>
      </div>
    </footer>
  );
};
