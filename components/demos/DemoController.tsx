'use client';

import React from 'react';
import { ShowDemoScenario } from '@/lib/demo-data';

interface DemoControllerProps {
  scenarios: ShowDemoScenario[];
  activeScenarioId: string;
  onSelectScenario: (id: string) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onReplay: () => void;
  currentStepIndex: number;
}

export const DemoController: React.FC<DemoControllerProps> = ({
  scenarios,
  activeScenarioId,
  onSelectScenario,
  isPlaying,
  onTogglePlay,
  onReplay,
  currentStepIndex,
}) => {
  const currentScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        padding: '1.5rem',
        border: '1px solid var(--sior-line)',
        backgroundColor: 'rgba(6, 8, 14, 0.75)',
      }}
    >
      {/* Scenario Selector Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
        }}
      >
        {scenarios.map((sc) => {
          const isSelected = sc.id === activeScenarioId;
          const isDev = sc.category === 'IN DEVELOPMENT';

          return (
            <button
              key={sc.id}
              type="button"
              onClick={() => onSelectScenario(sc.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0.45rem',
                padding: '1.15rem 1.25rem',
                textAlign: 'left',
                backgroundColor: isSelected ? 'rgba(234, 231, 225, 0.08)' : 'rgba(5, 6, 10, 0.6)',
                border: `1px solid ${isSelected ? (isDev ? 'var(--sior-amber)' : 'var(--sior-zen-coral)') : 'var(--sior-line)'}`,
                cursor: 'pointer',
                transition: 'all 160ms var(--ease-expo)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: isDev ? 'var(--sior-amber)' : 'var(--sior-zen-coral)',
                  }}
                >
                  DEMO {sc.number}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      fontWeight: 600,
                      padding: '0.1rem 0.4rem',
                      borderRadius: '2px',
                      color: isDev ? 'var(--sior-amber)' : 'var(--sior-stark-white)',
                      backgroundColor: isDev ? 'var(--sior-amber-soft)' : 'rgba(234, 231, 225, 0.08)',
                      border: `1px solid ${isDev ? 'var(--sior-amber-border)' : 'rgba(234, 231, 225, 0.2)'}`,
                    }}
                  >
                    {isDev ? '[NEXT HORIZON]' : '[WORKING]'}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.58rem',
                      color: 'var(--sior-text-muted)',
                      border: '1px solid var(--sior-line)',
                      padding: '0.08rem 0.35rem',
                      borderRadius: '2px',
                    }}
                  >
                    [SIMULATED]
                  </span>
                </div>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: 'var(--sior-stark-white)',
                  letterSpacing: '-0.01em',
                }}
              >
                {sc.title}
              </span>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: isSelected ? 'var(--sior-stark-white)' : 'var(--sior-text-secondary)',
                }}
              >
                &ldquo;{sc.spokenCommand}&rdquo;
              </span>
            </button>
          );
        })}
      </div>

      {/* Playback Controls & Progress Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1rem',
          borderTop: '1px solid var(--sior-line)',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            type="button"
            onClick={onTogglePlay}
            style={{
              padding: '0.45rem 1.15rem',
              backgroundColor: isPlaying ? 'var(--sior-zen-coral)' : 'rgba(234, 231, 225, 0.12)',
              color: isPlaying ? '#05060a' : 'var(--sior-stark-white)',
              border: '1px solid var(--sior-line)',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.04em',
            }}
          >
            {isPlaying ? '[PAUSE]' : '[PLAY DEMO]'}
          </button>

          <button
            type="button"
            onClick={onReplay}
            style={{
              padding: '0.45rem 1rem',
              backgroundColor: 'rgba(234, 231, 225, 0.05)',
              color: 'var(--sior-text-secondary)',
              border: '1px solid var(--sior-line)',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              cursor: 'pointer',
              letterSpacing: '0.04em',
            }}
          >
            [REPLAY]
          </button>
        </div>

        {/* Step Progression Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          {currentScenario.steps.map((st, i) => {
            const isCompleted = i < currentStepIndex;
            const isCurrent = i === currentStepIndex;

            return (
              <div
                key={st.title}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '4px',
                    borderRadius: '2px',
                    backgroundColor: isCurrent
                      ? 'var(--sior-zen-coral)'
                      : isCompleted
                      ? 'rgba(234, 231, 225, 0.5)'
                      : 'rgba(234, 231, 225, 0.1)',
                    transition: 'background-color 200ms ease',
                  }}
                  title={`Step ${i + 1}: ${st.title}`}
                />
              </div>
            );
          })}
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--sior-text-muted)',
              marginLeft: '0.5rem',
            }}
          >
            STEP {currentStepIndex + 1}/{currentScenario.steps.length}
          </span>
        </div>
      </div>
    </div>
  );
};
