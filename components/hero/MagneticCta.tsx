'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticCtaProps {
  href: string;
  label: string;
  subLabel?: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
}

export const MagneticCta: React.FC<MagneticCtaProps> = ({
  href,
  label,
  subLabel,
  icon = '↗',
  className = '',
  onClick,
}) => {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!btnRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const btn = btnRef.current;
    const text = textRef.current;
    const iconEl = iconRef.current;

    const xTo = gsap.quickTo(btn, 'x', { duration: 0.35, ease: 'power3.out' });
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.35, ease: 'power3.out' });

    let textXTo: ((v: number) => void) | undefined;
    let textYTo: ((v: number) => void) | undefined;
    if (text) {
      textXTo = gsap.quickTo(text, 'x', { duration: 0.45, ease: 'power3.out' });
      textYTo = gsap.quickTo(text, 'y', { duration: 0.45, ease: 'power3.out' });
    }

    let iconXTo: ((v: number) => void) | undefined;
    let iconYTo: ((v: number) => void) | undefined;
    if (iconEl) {
      iconXTo = gsap.quickTo(iconEl, 'x', { duration: 0.4, ease: 'power3.out' });
      iconYTo = gsap.quickTo(iconEl, 'y', { duration: 0.4, ease: 'power3.out' });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      xTo(x * 0.28);
      yTo(y * 0.28);

      if (textXTo && textYTo) {
        textXTo(x * 0.12);
        textYTo(y * 0.12);
      }
      if (iconXTo && iconYTo) {
        iconXTo(x * 0.2);
        iconYTo(y * 0.2);
      }
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      if (textXTo && textYTo) {
        textXTo(0);
        textYTo(0);
      }
      if (iconXTo && iconYTo) {
        iconXTo(0);
        iconYTo(0);
      }
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <a
      ref={btnRef}
      href={href}
      onClick={onClick}
      className={`btn-magnetic-bone ${className}`}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.85rem 2.25rem',
        backgroundColor: 'var(--sior-btn-bone)',
        color: '#08090e',
        borderRadius: '9999px',
        border: '1px solid rgba(234, 231, 225, 0.4)',
        boxShadow: '0 8px 24px -6px rgba(0, 0, 0, 0.7)',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.95rem',
        fontWeight: 700,
        letterSpacing: '-0.01em',
        textDecoration: 'none',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'background-color 160ms var(--ease-expo), border-color 160ms var(--ease-expo)',
      }}
    >
      <span
        ref={textRef}
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <span>{label}</span>
        {subLabel && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.66rem',
              fontWeight: 600,
              color: 'rgba(8, 9, 14, 0.7)',
              letterSpacing: '0.04em',
            }}
          >
            {subLabel}
          </span>
        )}
      </span>

      <span
        ref={iconRef}
        style={{
          position: 'relative',
          zIndex: 2,
          fontSize: '1.05rem',
          fontWeight: 700,
        }}
        aria-hidden="true"
      >
        {icon}
      </span>

      {/* Internal Specular Beam Sweep on Hover */}
      <span
        className="specular-sweep"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, 0.45) 50%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
        aria-hidden="true"
      />
    </a>
  );
};
