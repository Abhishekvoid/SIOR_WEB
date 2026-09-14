'use client';

import React from 'react';
import { InstrumentPhrase } from '@/lib/demo-data';

interface PhraseSelectorProps {
  phrases: InstrumentPhrase[];
  activeId: string;
  onSelect: (phrase: InstrumentPhrase) => void;
}

export const PhraseSelector: React.FC<PhraseSelectorProps> = ({
  phrases,
  activeId,
  onSelect,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0' }}>
      {phrases.map((item) => {
        const isActive = item.id === activeId;

        return (
          <div
            key={item.id}
            onClick={() => onSelect(item)}
            style={{
              display: 'grid',
              gridTemplateColumns: '130px 1fr auto',
              alignItems: 'center',
              gap: '1.5rem',
              padding: '1.4rem 0',
              borderBottom: '1px solid var(--sior-line)',
              cursor: 'pointer',
              transition: 'padding-left 160ms var(--ease-expo), background-color 160ms var(--ease-expo)',
              paddingLeft: isActive ? '0.75rem' : '0',
            }}
            className="phrase-editorial-row"
          >
            {/* Meta: Index & System Tag */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: isActive ? 'var(--sior-zen-coral)' : 'var(--sior-text-muted)',
                  transition: 'color 160ms var(--ease-expo)',
                }}
              >
                {item.index}
              </span>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: isActive ? 'var(--sior-zen-coral)' : 'var(--sior-text-secondary)',
                  transition: 'color 160ms var(--ease-expo)',
                }}
              >
                {item.system}
              </span>
            </div>

            {/* Spoken Hinglish Quote */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1.2rem, 1.8vw, 1.55rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.35,
                  color: isActive ? 'var(--sior-stark-white)' : '#8c8983',
                  transition: 'color 160ms var(--ease-expo)',
                }}
              >
                &ldquo;{item.phrase}&rdquo;
              </span>
              {item.serviceNotice && (
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--sior-text-muted)',
                  }}
                >
                  * {item.serviceNotice}
                </span>
              )}
            </div>

            {/* Function Dispatch Signature */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: isActive ? 'var(--sior-zen-coral)' : 'var(--sior-text-secondary)',
                transition: 'color 160ms var(--ease-expo)',
              }}
            >
              <span>{item.fn}</span>
              <span style={{ fontSize: '0.95rem' }}>→</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
