'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CornerReticle } from '@/components/ui/CornerReticle';
import { MagneticCta } from '@/components/hero/MagneticCta';
import { SIOR_BRAND } from '@/lib/constants';

export const Hero: React.FC = () => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Subtle horizon parallax on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (backdropRef.current) {
        backdropRef.current.style.transform = `translate3d(0, ${scrollY * 0.18}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Monumental split character entrance
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.hero-char');
      gsap.from(chars, {
        y: 36,
        opacity: 0,
        stagger: 0.08,
        duration: 1.0,
        ease: 'power3.out',
        delay: 0.1,
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        zIndex: 10,
        overflow: 'hidden',
        padding: '110px 1.5rem 5rem',
      }}
    >
      {/* Artwork Canvas (Unobstructed: astronaut, planet, meadow visible) */}
      <div
        ref={backdropRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '115%',
          backgroundImage: "url('/assets/sior_astronaut_cosmos.jpg')",
          backgroundPosition: 'center 20%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform',
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Gentle Bottom Horizon Transition into #05060a Void */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '240px',
          background: 'linear-gradient(to bottom, transparent, rgba(5, 6, 10, 0.9) 65%, var(--sior-void) 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* Monumental Stage Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1180px',
          width: '100%',
          margin: '0 auto',
          padding: '2.5rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Architectural Crosshair Reticles */}
        <CornerReticle position="top-left" />
        <CornerReticle position="top-right" />
        <CornerReticle position="bottom-left" />
        <CornerReticle position="bottom-right" />

        {/* Hero Architectural Telemetry Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.35rem 1.15rem',
            backgroundColor: 'rgba(13, 16, 27, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--sior-line)',
            borderRadius: '9999px',
            marginBottom: '1.25rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--sior-zen-coral)',
              backgroundColor: 'rgba(247, 111, 83, 0.12)',
              padding: '0.1rem 0.45rem',
              borderRadius: '3px',
              border: '1px solid rgba(247, 111, 83, 0.3)',
            }}
          >
            [SYSTEM // ACTIVE]
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: 'var(--sior-text-primary)',
            }}
          >
            α CANIS MAJORIS • SOVEREIGN DESKTOP AGENT
          </span>
        </div>

        {/* Monumental Big Bold SIOR Typography (pure typography with zero dark background artifacts) */}
        <div
          style={{
            overflow: 'visible',
            padding: '0.1em 1rem 0.2em',
            marginBottom: '0.75rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <h1
            ref={titleRef}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(5.2rem, 13vw, 11.2rem)',
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: '-0.05em',
              color: 'var(--sior-stark-white)',
              display: 'flex',
              justifyContent: 'center',
              paddingRight: '0.06em',
            }}
          >
            <span className="hero-char" style={{ display: 'inline-block' }}>S</span>
            <span className="hero-char" style={{ display: 'inline-block' }}>I</span>
            <span className="hero-char" style={{ display: 'inline-block' }}>O</span>
            <span className="hero-char" style={{ display: 'inline-block', paddingRight: '0.04em' }}>R</span>
          </h1>
        </div>

        {/* Modern Frontier AI Agent Headline & Value Proposition */}
        <div style={{ maxWidth: '680px', marginBottom: '1.35rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.4rem, 2.7vw, 1.95rem)',
              fontWeight: 700,
              lineHeight: 1.25,
              letterSpacing: '-0.03em',
              color: 'var(--sior-stark-white)',
              marginBottom: '0.65rem',
              textShadow: '0 4px 24px rgba(0, 0, 0, 0.95), 0 1px 4px rgba(0, 0, 0, 1)',
            }}
          >
            The sovereign voice operator for Windows.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.98rem, 1.55vw, 1.12rem)',
              fontWeight: 450,
              lineHeight: 1.55,
              color: 'rgba(234, 231, 225, 0.85)',
              margin: '0 auto',
              maxWidth: '56ch',
              textShadow: '0 3px 18px rgba(0, 0, 0, 0.98), 0 1px 4px rgba(0, 0, 0, 1)',
            }}
          >
            Colloquial Hindi, Hinglish, and English compiled into validated desktop actions.
          </p>
        </div>

        {/* Ultra-Sleek Monospace Architectural Telemetry Bar */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.85rem',
            padding: '0.4rem 1.15rem',
            backgroundColor: 'rgba(5, 6, 10, 0.78)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(234, 231, 225, 0.12)',
            borderRadius: '9999px',
            marginBottom: '1.75rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.07em',
            color: 'var(--sior-text-secondary)',
            flexWrap: 'wrap',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
          }}
        >
          <span style={{ color: 'var(--sior-text-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
            <span style={{ color: 'var(--sior-zen-coral)', fontSize: '0.65rem' }}>◈</span>
            SILERO VAD + SARVAM SAARAS
          </span>
          <span style={{ color: 'rgba(234, 231, 225, 0.25)' }}>•</span>
          <span style={{ color: 'var(--sior-text-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
            GROQ 120B COMPILER
          </span>
          <span style={{ color: 'rgba(234, 231, 225, 0.25)' }}>•</span>
          <span style={{ color: 'var(--sior-zen-coral)', display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
            NATIVE WIN32 EXECUTION
          </span>
        </div>

        {/* CTA Controls Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <MagneticCta
            href="/show"
            label="See SIOR Work"
            subLabel="INTERACTIVE PRODUCT DEMONSTRATION"
            icon="↗"
          />

          <a
            href="#instrument"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.85rem 1.75rem',
              backgroundColor: 'rgba(13, 16, 27, 0.65)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--sior-line)',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              color: 'var(--sior-text-secondary)',
              textDecoration: 'none',
              transition: 'all var(--trans-fast)',
            }}
          >
            <span>◈</span>
            <span>Acoustic Instrument</span>
            <span style={{ color: 'var(--sior-zen-coral)' }}>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};
