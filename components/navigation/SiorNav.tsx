'use client';

import React from 'react';
import Link from 'next/link';

export const SiorNav: React.FC = () => {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: 'rgba(5, 6, 10, 0.72)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--sior-line)',
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0.85rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Link */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '26px',
              height: '26px',
              border: '1px solid var(--sior-zen-coral-border)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: 'var(--sior-zen-coral)',
                borderRadius: '50%',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: '1.05rem',
                letterSpacing: '-0.04em',
                color: 'var(--sior-stark-white)',
                lineHeight: 1,
              }}
            >
              SIOR
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                color: 'var(--sior-text-secondary)',
                letterSpacing: '0.04em',
                marginTop: '2px',
              }}
            >
              Σείριος • Desktop Voice AI
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            letterSpacing: '0.04em',
            color: 'var(--sior-text-secondary)',
          }}
          className="nav-links-desktop"
        >
          <a href="/#instrument" style={{ transition: 'color var(--trans-fast)' }}>
            Instrument
          </a>
          <a href="/#how-it-works" style={{ transition: 'color var(--trans-fast)' }}>
            Loop
          </a>
          <a href="/#architecture" style={{ transition: 'color var(--trans-fast)' }}>
            Architecture
          </a>
          <a href="/#current-system" style={{ transition: 'color var(--trans-fast)' }}>
            Capabilities
          </a>
          <a href="/#roadmap" style={{ transition: 'color var(--trans-fast)' }}>
            Roadmap
          </a>
          <Link
            href="/show"
            style={{
              color: 'var(--sior-zen-coral)',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <span>Showcase</span>
            <span style={{ fontSize: '0.68rem' }}>↗</span>
          </Link>
        </nav>

        {/* Telemetry Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.3rem 0.75rem',
              backgroundColor: 'rgba(13, 16, 27, 0.6)',
              border: '1px solid var(--sior-line)',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              color: 'var(--sior-text-secondary)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: 'var(--sior-zen-coral)',
                backgroundColor: 'rgba(247, 111, 83, 0.12)',
                padding: '0.1rem 0.4rem',
                borderRadius: '3px',
                border: '1px solid rgba(247, 111, 83, 0.28)',
                lineHeight: 1.1,
              }}
            >
              [LIVE]
            </span>
            <span>HINGLISH // 240ms</span>
          </div>

          <Link
            href="/show"
            style={{
              padding: '0.45rem 1.15rem',
              backgroundColor: 'rgba(234, 231, 225, 0.08)',
              color: 'var(--sior-stark-white)',
              border: '1px solid var(--sior-line)',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
              textDecoration: 'none',
              transition: 'all var(--trans-fast)',
            }}
          >
            See SIOR Work ↗
          </Link>
        </div>
      </div>
    </header>
  );
};
