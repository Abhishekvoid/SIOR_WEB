/**
 * SIOR (Σείριος) — Teenage Engineering Acoustic Instrument & Kinetic Engine
 * Fluid Mathematical Canvas Oscilloscope, Single-Line Hardware Telemetry,
 * GSAP Split-Character Typography, and Magnetic Cursor Physics.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize GSAP & ScrollTrigger
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    initHeroKineticTimeline();
    initMagneticCTAButtons();
    initMagneticCursorFollower();
    initScrollTriggerChoreography();
  }

  // 2. Ambient Canvas & Mathematical Oscilloscope
  initPetalCanvas();
  initAcousticOscilloscope();
  initInstrumentPhrases();
});

/* ==========================================================================
   1. GSAP Split-Character & Hero Entrance Timeline
   ========================================================================== */
function initHeroKineticTimeline() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  tl.from('#hero-badge', {
    y: -24,
    opacity: 0,
    duration: 0.9,
    delay: 0.15
  });

  tl.from('.hero-big-sior .char', {
    yPercent: 125,
    opacity: 0,
    duration: 1.15,
    stagger: 0.08,
    ease: 'power4.out'
  }, '-=0.6');

  tl.from('#hero-statement', {
    y: 20,
    opacity: 0,
    duration: 0.85
  }, '-=0.65');

  tl.from('#hero-meta', {
    y: 16,
    opacity: 0,
    duration: 0.8
  }, '-=0.6');

  tl.from('#hero-actions', {
    y: 20,
    opacity: 0,
    duration: 0.85
  }, '-=0.55');

  tl.from('.telemetry-bracket', {
    scale: 0.6,
    opacity: 0,
    stagger: 0.05,
    duration: 0.7
  }, '-=0.7');
}

/* ==========================================================================
   2. GSAP Magnetic Cursor Physics on Interactive Buttons
   ========================================================================== */
function initMagneticCTAButtons() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const magneticBtns = document.querySelectorAll('.btn-magnetic');

  magneticBtns.forEach(btn => {
    const text = btn.querySelector('.btn-text');
    const icon = btn.querySelector('.btn-icon');

    const xTo = gsap.quickTo(btn, 'x', { duration: 0.35, ease: 'power3.out' });
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.35, ease: 'power3.out' });

    let textXTo, textYTo;
    if (text) {
      textXTo = gsap.quickTo(text, 'x', { duration: 0.45, ease: 'power3.out' });
      textYTo = gsap.quickTo(text, 'y', { duration: 0.45, ease: 'power3.out' });
    }

    let iconXTo, iconYTo;
    if (icon) {
      iconXTo = gsap.quickTo(icon, 'x', { duration: 0.4, ease: 'power3.out' });
      iconYTo = gsap.quickTo(icon, 'y', { duration: 0.4, ease: 'power3.out' });
    }

    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * 0.35;
      const deltaY = (e.clientY - centerY) * 0.35;

      const boundedX = Math.max(-18, Math.min(18, deltaX));
      const boundedY = Math.max(-14, Math.min(14, deltaY));

      xTo(boundedX);
      yTo(boundedY);

      if (textXTo && textYTo) {
        textXTo(boundedX * 0.5);
        textYTo(boundedY * 0.5);
      }

      if (iconXTo && iconYTo) {
        iconXTo(boundedX * 0.75);
        iconYTo(boundedY * 0.75);
      }
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.75, ease: 'elastic.out(1, 0.4)' });
      if (text) gsap.to(text, { x: 0, y: 0, duration: 0.65, ease: 'elastic.out(1, 0.4)' });
      if (icon) gsap.to(icon, { x: 0, y: 0, duration: 0.65, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

/* ==========================================================================
   3. Interactive Magnetic Cursor Follower
   ========================================================================== */
function initMagneticCursorFollower() {
  const cursor = document.getElementById('magnetic-cursor');
  if (!cursor || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cursorX = gsap.quickTo(cursor, 'left', { duration: 0.18, ease: 'power3.out' });
  const cursorY = gsap.quickTo(cursor, 'top', { duration: 0.18, ease: 'power3.out' });

  window.addEventListener('mousemove', e => {
    cursorX(e.clientX);
    cursorY(e.clientY);
  });

  const interactives = document.querySelectorAll('button, a, .phrase-row');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-active'));
  });
}

/* ==========================================================================
   4. GSAP ScrollTrigger Horizon Parallax
   ========================================================================== */
function initScrollTriggerChoreography() {
  if (typeof ScrollTrigger === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.to('#hero-backdrop', {
    scale: 1.08,
    yPercent: 10,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.2
    }
  });

  gsap.to('#hero-stage', {
    y: -80,
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'center top',
      end: 'bottom top',
      scrub: 0.8
    }
  });
}

/* ==========================================================================
   5. Teenage Engineering Mathematical Fluid Oscilloscope
   ========================================================================== */
let triggerAcousticBurst = null;

function initAcousticOscilloscope() {
  const canvas = document.getElementById('oscilloscope-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.offsetWidth);
  let height = (canvas.height = canvas.offsetHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  });

  let phase = 0;
  let burstEnergy = 0;

  triggerAcousticBurst = function() {
    burstEnergy = 1.0;
  };

  function renderWave() {
    ctx.clearRect(0, 0, width, height);

    const centerY = height / 2;
    phase += 0.04 + burstEnergy * 0.08;

    // Decay burst energy smoothly
    burstEnergy *= 0.94;
    const baseAmp = 12 + burstEnergy * 42;

    // Draw primary stark harmonic waveform
    ctx.beginPath();
    ctx.lineWidth = 1.8;
    ctx.strokeStyle = burstEnergy > 0.1 ? '#f76f53' : 'rgba(234, 231, 225, 0.85)';

    for (let x = 0; x <= width; x += 3) {
      const progress = x / width;
      // Multi-harmonic sine superposition
      const harmonic1 = Math.sin(progress * 8 + phase);
      const harmonic2 = Math.sin(progress * 18 - phase * 1.5) * 0.45;
      const harmonic3 = Math.sin(progress * 32 + phase * 2.2) * (0.2 + burstEnergy * 0.5);

      // Envelope window (tapers at edges)
      const envelope = Math.sin(progress * Math.PI);
      const y = centerY + (harmonic1 + harmonic2 + harmonic3) * baseAmp * envelope;

      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Draw secondary subtle Zen Coral harmonic reflection
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = burstEnergy > 0.1 ? 'rgba(247, 111, 83, 0.4)' : 'rgba(234, 231, 225, 0.16)';

    for (let x = 0; x <= width; x += 4) {
      const progress = x / width;
      const subHarmonic = Math.cos(progress * 12 + phase * 0.8);
      const envelope = Math.sin(progress * Math.PI);
      const y = centerY + subHarmonic * (baseAmp * 0.55) * envelope;

      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    requestAnimationFrame(renderWave);
  }

  renderWave();
}

/* ==========================================================================
   6. Large Editorial Phrase Selector & Single-Line Telemetry Rail
   ========================================================================== */
function initInstrumentPhrases() {
  const phraseRows = document.querySelectorAll('.phrase-row');
  const railStatusBadge = document.getElementById('rail-status-badge');
  const railStatusTag = document.getElementById('rail-status-tag');
  const railToolSig = document.getElementById('rail-tool-sig');
  const railParamMatrix = document.getElementById('rail-param-matrix');
  const railAuthTag = document.getElementById('rail-auth-tag');
  const railSpeedTag = document.getElementById('rail-speed-tag');
  const btnMic = document.getElementById('btn-inst-mic');
  const sampleRateTag = document.getElementById('inst-sample-rate');

  const telemetryData = {
    hi_tatkal: {
      tool: 'EXEC // CRIS_IRCTC.TATKAL',
      params: 'PARAMS: ORIGIN=BCT / DEST=NDLS / TRAIN=12951_RAJDHANI / QUOTA=TATKAL / CLASS=3A',
      auth: 'AUTH: BHIM_UPI_₹2,850_SETTLED',
      speed: '240ms'
    },
    hi_upi: {
      tool: 'EXEC // NPCI_UPI.INSTANT_PAY',
      params: 'PARAMS: PAYEE=RAMESH@OKHDFCBANK / AMOUNT=₹1,500.00 / MODE=GPay_INTENT',
      auth: 'AUTH: VOICE_BIOMETRIC_TOKEN_VALID',
      speed: '185ms'
    },
    hi_parivahan: {
      tool: 'EXEC // MoRTH_PARIVAHAN.STATUS',
      params: 'PARAMS: PORTAL=SARATHI_SEWA / DOC=DL_RENEWAL / ID=MH-2026-048192',
      auth: 'AUTH: DIGILOCKER_CONSENT_OK',
      speed: '290ms'
    },
    hi_gst: {
      tool: 'EXEC // GSTN_EWB.AUDIT_R1',
      params: 'PARAMS: GSTIN=27AAACB2212R1Z0 / PERIOD=2026-08 / ACTION=RECONCILE_AND_FILE',
      auth: 'AUTH: GST_EVC_SECURE_TOKEN',
      speed: '220ms'
    },
    hi_quick: {
      tool: 'EXEC // ONDC_BLINKIT.CHECKOUT',
      params: 'PARAMS: CART=[MILK_1L, BREAD_400G] / ADDR=DEFAULT_HOME / ETA=9_MIN',
      auth: 'AUTH: AUTO_DEBIT_UPI_PINLESS',
      speed: '210ms'
    }
  };

  function selectPhrase(key) {
    phraseRows.forEach(row => {
      row.classList.toggle('active', row.getAttribute('data-lang') === key);
    });

    // Trigger physical oscilloscope harmonic wave burst
    if (triggerAcousticBurst) triggerAcousticBurst();

    const data = telemetryData[key] || telemetryData.hi_tatkal;

    // Update single-line hardware telemetry
    if (railStatusBadge) {
      railStatusBadge.classList.add('active');
      railStatusBadge.textContent = '[EXEC // OK]';
    }
    if (railStatusTag) railStatusTag.textContent = 'DISPATCHED_200_OK';
    if (railToolSig) railToolSig.textContent = data.tool;
    if (railParamMatrix) railParamMatrix.textContent = data.params;
    if (railAuthTag) railAuthTag.textContent = data.auth;
    if (railSpeedTag) railSpeedTag.textContent = data.speed;
    if (sampleRateTag) sampleRateTag.textContent = 'BURST: 48.0 kHz • STREAM_ACTIVE';

    setTimeout(() => {
      if (railStatusBadge) {
        railStatusBadge.classList.remove('active');
        railStatusBadge.textContent = '[ACTIVE]';
      }
      if (sampleRateTag) sampleRateTag.textContent = 'SAMPLE: 48.0 kHz';
    }, 1200);
  }

  phraseRows.forEach(row => {
    row.addEventListener('click', () => {
      const key = row.getAttribute('data-lang');
      selectPhrase(key);
    });
  });

  if (btnMic) {
    btnMic.addEventListener('click', () => {
      btnMic.classList.toggle('recording');
      const activeRow = document.querySelector('.phrase-row.active');
      const allKeys = Object.keys(telemetryData);
      let nextKey = 'hi_tatkal';
      if (activeRow) {
        const curKey = activeRow.getAttribute('data-lang');
        const nextIdx = (allKeys.indexOf(curKey) + 1) % allKeys.length;
        nextKey = allKeys[nextIdx];
      }
      selectPhrase(nextKey);
    });
  }
}

/* ==========================================================================
   7. Drifting Flower Petal Ambient Canvas Physics
   ========================================================================== */
function initPetalCanvas() {
  const canvas = document.getElementById('petal-canvas');
  if (!canvas) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petals = [];
  const petalCount = Math.min(26, Math.floor(width / 55));
  const colors = [
    'rgba(244, 114, 182, 0.65)',
    'rgba(249, 168, 212, 0.60)',
    'rgba(232, 121, 249, 0.55)',
    'rgba(251, 207, 232, 0.50)'
  ];

  class Petal {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -20;
      this.size = 5 + Math.random() * 7;
      this.speedY = 0.45 + Math.random() * 0.7;
      this.speedX = -0.25 + Math.random() * 0.5;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      this.oscillationSpeed = 0.015 + Math.random() * 0.02;
      this.oscillationDistance = 0.6 + Math.random() * 1.2;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.time = Math.random() * 100;
    }

    update() {
      this.time += this.oscillationSpeed;
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.time) * this.oscillationDistance;
      this.rotation += this.rotationSpeed;

      if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
        this.reset(false);
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size * 0.5, this.size, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < petalCount; i++) {
    petals.push(new Petal());
  }

  let animationFrameId;
  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < petals.length; i++) {
      petals[i].update();
      petals[i].draw();
    }
    animationFrameId = requestAnimationFrame(animate);
  }

  animate();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animate();
    }
  });
}
