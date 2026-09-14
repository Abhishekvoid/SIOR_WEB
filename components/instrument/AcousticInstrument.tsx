'use client';

import React, { useState } from 'react';
import { Oscilloscope } from './Oscilloscope';
import { TelemetryRail } from './TelemetryRail';
import { PhraseSelector } from './PhraseSelector';
import { INSTRUMENT_PHRASES, InstrumentPhrase } from '@/lib/demo-data';

export const AcousticInstrument: React.FC = () => {
  const [selectedPhrase, setSelectedPhrase] = useState<InstrumentPhrase>(INSTRUMENT_PHRASES[0]);
  const [burstTrigger, setBurstTrigger] = useState<number>(1);
  const [railStatus, setRailStatus] = useState<'STANDBY' | 'EXEC_OK' | 'DISPATCHED'>('STANDBY');
  const [isRecording, setIsRecording] = useState<boolean>(false);

  const handleSelectPhrase = (phrase: InstrumentPhrase) => {
    setSelectedPhrase(phrase);
    setBurstTrigger((prev) => prev + 1);
    setRailStatus('DISPATCHED');

    setTimeout(() => {
      setRailStatus('STANDBY');
    }, 1800);
  };

  const handleToggleMic = () => {
    setIsRecording((prev) => !prev);
    setBurstTrigger((prev) => prev + 1);
    setRailStatus('DISPATCHED');

    setTimeout(() => {
      setRailStatus('STANDBY');
    }, 1500);
  };

  return (
    <section
      id="instrument"
      style={{
        padding: '6.5rem 0',
        backgroundColor: 'var(--sior-instrument-bg)',
        borderTop: '1px solid var(--sior-line)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Section Title */}
        <div style={{ maxWidth: '780px', marginBottom: '3rem' }}>
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
            <span style={{ color: 'var(--sior-zen-coral)', fontWeight: 700 }}>TEENAGE ENGINEERING</span>
            <span style={{ color: 'var(--sior-text-secondary)' }}>// SEIRIOS-01 PHYSICAL CONSOLE</span>
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
            Acoustic Instrument Console
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--sior-text-secondary)' }}>
            Select an authentic spoken Hinglish command to trigger the continuous harmonic sine wave generator and inspect real-time single-line telemetry.
          </p>
        </div>

        {/* Instrument Hardware Stage Container */}
        <div
          style={{
            border: '1px solid var(--sior-line)',
            backgroundColor: 'rgba(5, 6, 10, 0.85)',
          }}
        >
          {/* Top Status Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.85rem 1.5rem',
              borderBottom: '1px solid var(--sior-line)',
              backgroundColor: 'rgba(6, 8, 14, 0.6)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span
                style={{
                  color: 'var(--sior-zen-coral)',
                  backgroundColor: 'rgba(247, 111, 83, 0.12)',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '3px',
                  border: '1px solid rgba(247, 111, 83, 0.3)',
                  fontWeight: 700,
                  fontSize: '0.68rem',
                }}
              >
                [01]
              </span>
              <span style={{ color: 'var(--sior-stark-white)', fontWeight: 700 }}>
                SIOR ACOUSTIC INSTRUMENT // SEIRIOS-01
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                color: 'var(--sior-text-secondary)',
              }}
            >
              <span>MIC: 48kHz → STT: 16kHz</span>
              <span style={{ color: 'rgba(234, 231, 225, 0.2)' }}>/</span>
              <span>SNR: 46 dB</span>
              <span style={{ color: 'rgba(234, 231, 225, 0.2)' }}>/</span>
              <span>DWM: 60 FPS</span>
            </div>
          </div>

          {/* Continuous Mathematical Harmonic Oscilloscope */}
          <Oscilloscope burstTrigger={burstTrigger} />

          <div style={{ padding: '0 1.5rem' }}>
            {/* Single-Line Telemetry Rail */}
            <TelemetryRail
              status={railStatus}
              speed={selectedPhrase.speed}
              toolSig={selectedPhrase.tool}
              params={selectedPhrase.params}
              auth={selectedPhrase.auth}
            />

            {/* Five Full-Width Editorial Phrase Rows */}
            <PhraseSelector
              phrases={INSTRUMENT_PHRASES}
              activeId={selectedPhrase.id}
              onSelect={handleSelectPhrase}
            />
          </div>

          {/* Instrument Control & Hardware Actions Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.25rem 1.5rem',
              borderTop: '1px solid var(--sior-line)',
              backgroundColor: 'rgba(6, 8, 14, 0.6)',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <button
                type="button"
                onClick={handleToggleMic}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.65rem 1.4rem',
                  backgroundColor: isRecording ? 'var(--sior-zen-coral-soft)' : 'rgba(234, 231, 225, 0.05)',
                  border: `1px solid ${isRecording ? 'var(--sior-zen-coral)' : 'var(--sior-line)'}`,
                  color: 'var(--sior-stark-white)',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 160ms var(--ease-expo)',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    backgroundColor: isRecording ? 'var(--sior-amber)' : 'var(--sior-zen-coral)',
                    borderRadius: '50%',
                  }}
                />
                <span>{isRecording ? 'STREAMING ACTIVE (16kHz STT)' : 'TRIGGER AUDIO INGESTION'}</span>
              </button>

              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--sior-text-muted)' }}>
                * Local measurements // Approximate stage execution
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--sior-stark-white)' }}>
                  ~240ms
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--sior-text-secondary)' }}>
                  Stage Latency
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--sior-stark-white)' }}>
                  SCHEMA
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--sior-text-secondary)' }}>
                  Validated AST
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--sior-zen-coral)' }}>
                  Win32
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--sior-text-secondary)' }}>
                  Validated Tool Dispatch
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
