'use client';

import React, { useState, useEffect, useRef } from 'react';
import { SiorNav } from '@/components/navigation/SiorNav';
import { Footer } from '@/components/ui/Footer';
import { SHOW_DEMOS } from '@/lib/demo-data';
import { DemoController } from '@/components/demos/DemoController';
import { DesktopDemo } from '@/components/demos/DesktopDemo';
import { BrowserDemo } from '@/components/demos/BrowserDemo';
import { VisionPreview } from '@/components/demos/VisionPreview';
import { CornerReticle } from '@/components/ui/CornerReticle';

export default function ShowPage() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('demo-notepad');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentScenario = SHOW_DEMOS.find((s) => s.id === activeScenarioId) || SHOW_DEMOS[0];
  const currentStep = currentScenario.steps[currentStepIndex] || currentScenario.steps[0];

  // Auto-progression through demo steps
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    const duration = currentStep.durationMs || 2500;
    timerRef.current = setTimeout(() => {
      setCurrentStepIndex((prev) => {
        if (prev < currentScenario.steps.length - 1) {
          return prev + 1;
        } else {
          setIsPlaying(false);
          return prev;
        }
      });
    }, duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, currentStepIndex, currentScenario, currentStep]);

  const handleSelectScenario = (id: string) => {
    setActiveScenarioId(id);
    setCurrentStepIndex(0);
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    if (currentStepIndex >= currentScenario.steps.length - 1 && !isPlaying) {
      setCurrentStepIndex(0);
    }
    setIsPlaying((prev) => !prev);
  };

  const handleReplay = () => {
    setCurrentStepIndex(0);
    setIsPlaying(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--sior-void)' }}>
      {/* Fixed Nav */}
      <SiorNav />

      <main style={{ paddingTop: '110px', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Showcase Opening Lockup */}
          <div
            style={{
              position: 'relative',
              maxWidth: '840px',
              margin: '2rem 0 3.5rem',
              padding: '2rem 0',
            }}
          >
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
                marginBottom: '1.25rem',
              }}
            >
              <span style={{ color: 'var(--sior-zen-coral)', fontWeight: 700 }}>[SIMULATED DEMONSTRATION]</span>
              <span style={{ color: 'var(--sior-text-secondary)' }}>// ARCHITECTURAL PLAYBACK</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(3rem, 5.5vw, 5rem)',
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: '-0.05em',
                color: 'var(--sior-stark-white)',
                marginBottom: '1rem',
              }}
            >
              SEE SIOR WORK.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                color: 'var(--sior-text-secondary)',
                lineHeight: 1.5,
                maxWidth: '46ch',
                marginBottom: '1.25rem',
              }}
            >
              From a spoken command to a validated desktop action.
            </p>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--sior-text-muted)',
                backgroundColor: 'rgba(234, 231, 225, 0.04)',
                border: '1px solid var(--sior-line)',
                padding: '0.5rem 0.85rem',
                borderRadius: '4px',
                width: 'fit-content',
              }}
            >
              * [SIMULATED DEMONSTRATION]: Controlled frontend playback reproducing SIOR&apos;s real Windows agent pipelines. Visual perception is an active research prototype for the Next Horizon roadmap.
            </div>
          </div>

          {/* Interactive Controller & Scenario Switcher */}
          <div style={{ marginBottom: '2rem' }}>
            <DemoController
              scenarios={SHOW_DEMOS}
              activeScenarioId={activeScenarioId}
              onSelectScenario={handleSelectScenario}
              isPlaying={isPlaying}
              onTogglePlay={handleTogglePlay}
              onReplay={handleReplay}
              currentStepIndex={currentStepIndex}
            />
          </div>

          {/* Active Interactive Stage */}
          <div style={{ position: 'relative' }}>
            {activeScenarioId === 'demo-notepad' && (
              <DesktopDemo currentStep={currentStep} stepIndex={currentStepIndex} />
            )}

            {activeScenarioId === 'demo-browser' && (
              <BrowserDemo currentStep={currentStep} stepIndex={currentStepIndex} />
            )}

            {activeScenarioId === 'demo-vision' && (
              <VisionPreview currentStep={currentStep} stepIndex={currentStepIndex} />
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
