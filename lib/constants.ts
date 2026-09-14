export const SIOR_BRAND = {
  name: "SIOR",
  greek: "Σείριος",
  title: "Voice AI Agent for Windows & Sovereign Indic Execution",
  astronomy: "α CANIS MAJORIS (SIRIUS) • SPECTRAL CLASS A1V",
  coordinates: "RA 06h 45m 09s | Dec -16° 42′ 58″",
  description: "Voice-first Windows desktop assistant for Indian languages with validated structured tool dispatch.",
};

export interface CapabilityItem {
  id: string;
  category: string;
  title: string;
  description: string;
  status: "[WORKING]" | "[IN DEVELOPMENT]" | "[NEXT HORIZON]";
  latency?: string;
  latencyLabel?: string;
}

export const CAPABILITIES_LIST: CapabilityItem[] = [
  {
    id: "01",
    category: "VOICE & SPEECH",
    title: "Silero VAD & Sarvam Saaras v3 STT",
    description: "Local voice activity detection followed by Sarvam Saaras v3 transcription for Hindi, Hinglish, and English speech.",
    status: "[WORKING]",
    latency: "~180ms",
    latencyLabel: "EXEC LATENCY",
  },
  {
    id: "02",
    category: "COGNITIVE COMPILER",
    title: "Groq GPT-OSS 120B Structured Compiler",
    description: "Converts spoken intent into structured tool calls constrained by registered schemas.",
    status: "[WORKING]",
    latency: "~60ms",
    latencyLabel: "EXEC LATENCY",
  },
  {
    id: "03",
    category: "DESKTOP CONTROL",
    title: "Windows Native Application & Input Automation",
    description: "Controlled Windows application launching, mouse input, keyboard input, and hotkey primitives.",
    status: "[WORKING]",
    latency: "~45ms",
    latencyLabel: "EXEC LATENCY",
  },
  {
    id: "04",
    category: "WEB ENGINE",
    title: "Browser Actions & Google Search",
    description: "Controlled browser opening, URL navigation, and Google search retrieval.",
    status: "[WORKING]",
    latency: "~320ms",
    latencyLabel: "EXEC LATENCY",
  },
  {
    id: "05",
    category: "AUDIT & RECOVERY",
    title: "SQLite History & Tool Failure Recovery",
    description: "Local task/tool history with bounded failure handling and truthful spoken fallback responses.",
    status: "[WORKING]",
    latency: "~12ms",
    latencyLabel: "EXEC LATENCY",
  },
  {
    id: "06",
    category: "VOICE SYNTHESIS",
    title: "Sarvam Indic TTS",
    description: "Spoken execution feedback generated through Sarvam TTS.",
    status: "[WORKING]",
    latency: "~210ms",
    latencyLabel: "EXEC LATENCY",
  },
  {
    id: "07",
    category: "DISPLAY INGESTION",
    title: "Screen Capture",
    description: "High-resolution desktop frame capture used as the input layer for visual understanding.",
    status: "[WORKING]",
    latency: "~35ms",
    latencyLabel: "EXEC LATENCY",
  },
  {
    id: "08",
    category: "VISUAL PERCEPTION",
    title: "Vision Understanding",
    description: "Multimodal screen interpretation for identifying visible UI elements and application state.",
    status: "[IN DEVELOPMENT]",
    latency: "Q3 2026",
    latencyLabel: "TARGET HORIZON",
  },
  {
    id: "09",
    category: "STATE ASSERTION",
    title: "Verification",
    description: "Visual comparison of pre-action and post-action states to determine whether an intended desktop change occurred.",
    status: "[IN DEVELOPMENT]",
    latency: "Q4 2026",
    latencyLabel: "TARGET HORIZON",
  },
  {
    id: "10",
    category: "FAULT RECOVERY",
    title: "Recovery & TTS",
    description: "Tool failure handling with spoken fallback responses when execution cannot be completed.",
    status: "[WORKING]",
    latency: "~15ms",
    latencyLabel: "EXEC LATENCY",
  },
];

// Backward-compatibility alias
export const CAPABILITIES_WORKING = CAPABILITIES_LIST;

export const CAPABILITIES_IN_DEVELOPMENT = [
  {
    phase: "PHASE 2",
    title: "Vision Screen Understanding",
    description: "Multimodal perception for identifying visible windows, controls, text, and application state from desktop pixels.",
    status: "[IN DEVELOPMENT]",
    timeline: "Q3 2026",
  },
  {
    phase: "PHASE 2",
    title: "UI Element Detection & Coordinate Grounding",
    description: "Map visual targets to screenshot coordinates with deterministic validation before any input action.",
    status: "[IN DEVELOPMENT]",
    timeline: "Q3 2026",
  },
  {
    phase: "PHASE 3",
    title: "Visual Verification & State Assertion",
    description: "Compare pre-action and post-action screen states to determine whether the intended change actually occurred.",
    status: "[IN DEVELOPMENT]",
    timeline: "Q4 2026",
  },
  {
    phase: "PHASE 3",
    title: "Autonomous Observe → Act → Observe Loop",
    description: "Combine visual observation, grounded input, verification, and bounded recovery into a multi-step execution loop.",
    status: "[IN DEVELOPMENT]",
    timeline: "Q4 2026",
  },
];

export type SiorStateType = "READY" | "LISTENING" | "THINKING" | "LOOKING" | "SPEAKING";

export const SIOR_STATES: Record<SiorStateType, { label: string; desc: string; glyph: string }> = {
  READY: { label: "READY", desc: "Acoustic hardware listening for hotword", glyph: "◈" },
  LISTENING: { label: "LISTENING", desc: "Detecting speech activity locally before transcription", glyph: "▶" },
  THINKING: { label: "THINKING", desc: "Compiling structured tool calls via Groq", glyph: "∷" },
  LOOKING: { label: "LOOKING", desc: "Screen capture inspection (Input layer)", glyph: "⌖" },
  SPEAKING: { label: "SPEAKING", desc: "Sarvam Indic TTS playback stream", glyph: "≈" },
};

