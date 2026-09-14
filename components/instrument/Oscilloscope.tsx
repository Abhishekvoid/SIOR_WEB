'use client';

import React, { useEffect, useRef } from 'react';

interface OscilloscopeProps {
  burstTrigger?: number;
  className?: string;
}

export const Oscilloscope: React.FC<OscilloscopeProps> = ({
  burstTrigger = 0,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const burstEnergyRef = useRef<number>(0);

  // Trigger acoustic energy burst when burstTrigger changes
  useEffect(() => {
    if (burstTrigger > 0) {
      burstEnergyRef.current = 1.0;
    }
  }, [burstTrigger]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let phase = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const centerY = height / 2;
      const energy = burstEnergyRef.current;

      phase += 0.035 + energy * 0.07;
      burstEnergyRef.current *= 0.945; // Smooth exponential decay

      const baseAmp = 14 + energy * 46;

      // 1. Primary Stark Harmonic Waveform
      ctx.beginPath();
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = energy > 0.08 ? '#f76f53' : 'rgba(234, 231, 225, 0.85)';

      for (let x = 0; x <= width; x += 3) {
        const progress = x / width;
        // Multi-frequency harmonic sine superposition: y = Σ A_i sin(k_i * x ± ω_i * t)
        const h1 = Math.sin(progress * 8 + phase);
        const h2 = Math.sin(progress * 18 - phase * 1.4) * 0.45;
        const h3 = Math.sin(progress * 34 + phase * 2.2) * (0.2 + energy * 0.5);

        // Envelope window (tapers cleanly to 0 at edges)
        const envelope = Math.sin(progress * Math.PI);
        const y = centerY + (h1 + h2 + h3) * baseAmp * envelope;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // 2. Secondary Sub-Harmonic Reflection
      ctx.beginPath();
      ctx.lineWidth = 1.0;
      ctx.strokeStyle = energy > 0.08 ? 'rgba(247, 111, 83, 0.4)' : 'rgba(234, 231, 225, 0.18)';

      for (let x = 0; x <= width; x += 4) {
        const progress = x / width;
        const subH = Math.cos(progress * 12 + phase * 0.85);
        const envelope = Math.sin(progress * Math.PI);
        const y = centerY + subH * (baseAmp * 0.55) * envelope;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        height: '190px',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderBottom: '1px solid var(--sior-line)',
        overflow: 'hidden',
      }}
    >
      {/* Precision Mathematical Crosshairs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} aria-hidden="true">
        {/* Horizontal reference line */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(234, 231, 225, 0.05)',
          }}
        />
        {/* Vertical center axis */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            width: '1px',
            height: '100%',
            backgroundColor: 'rgba(234, 231, 225, 0.05)',
          }}
        />

        {/* Precision mathematical labels */}
        <span
          style={{
            position: 'absolute',
            top: '8px',
            left: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.64rem',
            color: 'rgba(234, 231, 225, 0.3)',
          }}
        >
          +1.0 FS
        </span>
        <span
          style={{
            position: 'absolute',
            top: '52%',
            left: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.64rem',
            color: 'rgba(234, 231, 225, 0.3)',
          }}
        >
          0.0 REF
        </span>
        <span
          style={{
            position: 'absolute',
            bottom: '8px',
            left: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.64rem',
            color: 'rgba(234, 231, 225, 0.3)',
          }}
        >
          -1.0 FS
        </span>
        <span
          style={{
            position: 'absolute',
            bottom: '8px',
            right: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.64rem',
            color: 'var(--sior-zen-coral)',
            opacity: 0.75,
          }}
        >
          HARMONIC AST FFT // 48.0 kHz
        </span>
      </div>

      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
};
