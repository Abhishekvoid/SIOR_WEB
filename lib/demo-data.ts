export interface InstrumentPhrase {
  id: string;
  index: string;
  system: string;
  phrase: string;
  fn: string;
  tool: string;
  params: string;
  auth: string;
  speed: string;
  serviceNotice?: string;
}

export const INSTRUMENT_PHRASES: InstrumentPhrase[] = [
  {
    id: "tatkal",
    index: "01",
    system: "CRIS // IRCTC",
    phrase: "IRCTC pe tatkal ticket check karo",
    fn: "irctc.query_tatkal()",
    tool: "EXEC // CRIS_IRCTC.TATKAL_INQUIRY",
    params: "PARAMS: ORIGIN=BCT / DEST=NDLS / TRAIN=12951_RAJDHANI / QUOTA=TATKAL / CLASS=3A",
    auth: "AUTH: DEMO_SESSION_TOKEN_LOCAL",
    speed: "240ms",
    serviceNotice: "Simulated demonstration phrase. External transit reservation requires user auth.",
  },
  {
    id: "upi",
    index: "02",
    system: "NPCI // UPI",
    phrase: "UPI payment status batao",
    fn: "upi.check_status()",
    tool: "EXEC // NPCI_UPI.LEDGER_STATUS",
    params: "PARAMS: VPA=RAMESH@OKHDFCBANK / TXN_ID=UPI-2026-94812 / MODE=INTENT",
    auth: "AUTH: BIOMETRIC_CONSENT_ASSERTED",
    speed: "185ms",
    serviceNotice: "Simulated demonstration phrase. Banking transactions require two-factor authorization.",
  },
  {
    id: "parivahan",
    index: "03",
    system: "MoRTH // PARIVAHAN",
    phrase: "Parivahan pe mera challan check karo",
    fn: "parivahan.query_challan()",
    tool: "EXEC // MoRTH_ECHALLAN.VEHICLE_AUDIT",
    params: "PARAMS: PORTAL=SARATHI_VAHAN / REG=MH-02-EE-4819 / CHASSIS_LAST5=94821",
    auth: "AUTH: DIGILOCKER_CITIZEN_TOKEN",
    speed: "290ms",
    serviceNotice: "Simulated demonstration phrase. Government records accessed via official portal tokens.",
  },
  {
    id: "gst",
    index: "04",
    system: "GSTN // TAX RAIL",
    phrase: "GST portal kholo",
    fn: "browser.open_portal()",
    tool: "EXEC // WIN_DESKTOP.OPEN_URL",
    params: "PARAMS: TARGET=services.gst.gov.in / BROWSER=CHROME / PROFILE=DEFAULT",
    auth: "AUTH: WINDOWS_SUBPROCESS_EXECUTED",
    speed: "220ms",
  },
  {
    id: "blinkit",
    index: "05",
    system: "ONDC // COMMERCE",
    phrase: "Blinkit pe milk search karo",
    fn: "browser.search_catalog()",
    tool: "EXEC // BROWSER_AUTOMATION.CATALOG_SEARCH",
    params: "PARAMS: PORTAL=blinkit.com / QUERY=Amul_Gold_Milk_1L / PINCODE=400001",
    auth: "AUTH: ACTIVE_TAB_INTENT_OK",
    speed: "210ms",
  },
];

export interface ShowDemoStep {
  state: "READY" | "LISTENING" | "THINKING" | "LOOKING" | "SPEAKING";
  actionBadge: string;
  title: string;
  detail: string;
  uiState: string;
  codeSnippet?: string;
  durationMs: number;
}

export interface ShowDemoScenario {
  id: string;
  number: string;
  title: string;
  spokenCommand: string;
  summary: string;
  category: "CURRENTLY WORKING" | "IN DEVELOPMENT";
  steps: ShowDemoStep[];
}

export const SHOW_DEMOS: ShowDemoScenario[] = [
  {
    id: "demo-notepad",
    number: "01",
    title: "Windows Desktop Control: Notepad Task",
    spokenCommand: "Notepad kholo aur likho meeting at 4 PM.",
    summary: "From spoken colloquial Hinglish to controlled Windows process launch, window focus, and direct keyboard input.",
    category: "CURRENTLY WORKING",
    steps: [
      {
        state: "LISTENING",
        actionBadge: "[LISTENING]",
        title: "Local Voice Ingestion (Silero VAD + Sarvam Saaras v3)",
        detail: "Acoustic buffer detected speech activity locally before dispatching 16kHz audio to Sarvam Saaras v3 STT engine.",
        uiState: "Acoustic audio buffer locked. Transcription: 'Notepad kholo aur likho meeting at 4 PM.'",
        codeSnippet: `vad.detect_voice_activity(sample_rate=16000)\nsarvam.stream_stt(model="saaras-v3", language_code="hi-IN")`,
        durationMs: 2500,
      },
      {
        state: "THINKING",
        actionBadge: "[THINKING]",
        title: "Structured Schema Compilation (Groq GPT-OSS 120B)",
        detail: "Synthesizes intent into validated tool pipeline: windows.launch_app followed by windows.type_string.",
        uiState: "Schema asserted: tool='launch_and_type', app='notepad.exe', payload='Meeting at 4:00 PM.'",
        codeSnippet: `{\n  "tool": "desktop_control",\n  "calls": [\n    { "fn": "launch_app", "target": "notepad.exe" },\n    { "fn": "type_keys", "text": "Meeting at 4:00 PM\\n" }\n  ]\n}`,
        durationMs: 2500,
      },
      {
        state: "READY",
        actionBadge: "[OPEN APPLICATION]",
        title: "Windows Subprocess Execution",
        detail: "Spawns native Windows notepad process and brings window into foreground focus via Win32 API.",
        uiState: "Process PID: 18420 [notepad.exe] foreground focus acquired.",
        codeSnippet: `import subprocess\nsubprocess.Popen(["notepad.exe"])\nwin32gui.SetForegroundWindow(hwnd)`,
        durationMs: 2000,
      },
      {
        state: "READY",
        actionBadge: "[KEYBOARD]",
        title: "Direct Keystroke Injection",
        detail: "Dispatches virtual key event buffer into active document buffer through validated input controls.",
        uiState: "Typed: 'Meeting at 4:00 PM' (19 keystrokes, 42ms stage execution).",
        codeSnippet: `pyautogui.write("Meeting at 4:00 PM\\n", interval=0.01)`,
        durationMs: 2200,
      },
      {
        state: "SPEAKING",
        actionBadge: "[SPEAKING // OK]",
        title: "Auditory Confirmation (Sarvam TTS)",
        detail: "Spoken feedback confirming task execution in natural bilingual Indian accent.",
        uiState: "Audio Output: 'Notepad khol diya aur meeting note likh diya hai.'",
        codeSnippet: `sarvam.text_to_speech(\n  text="Notepad khol diya aur meeting note likh diya hai.",\n  speaker="meera",\n  accent="hinglish"\n)`,
        durationMs: 2500,
      },
    ],
  },
  {
    id: "demo-browser",
    number: "02",
    title: "Browser Actions & Web Search Retrieval",
    spokenCommand: "Google kholo aur Sarvam AI search karo.",
    summary: "Natural spoken query compiled into controlled browser tab launch, google.com navigation, and keyword search.",
    category: "CURRENTLY WORKING",
    steps: [
      {
        state: "LISTENING",
        actionBadge: "[LISTENING]",
        title: "Voice Audio Ingestion",
        detail: "Acoustic audio buffer captured. Multi-lingual intent tokenized via Saaras v3 STT.",
        uiState: "Captured: 'Google kholo aur Sarvam AI search karo.'",
        codeSnippet: `audio_stream.consume_chunk()\ntranscript = sarvam.stt(chunk)`,
        durationMs: 2200,
      },
      {
        state: "THINKING",
        actionBadge: "[UNDERSTAND]",
        title: "Browser Tool Routing",
        detail: "Groq compiler maps spoken request to browser_action with search query 'Sarvam AI'.",
        uiState: "Action: browser.search(engine='google', query='Sarvam AI')",
        codeSnippet: `{\n  "action": "browser.search",\n  "engine": "google",\n  "query": "Sarvam AI"\n}`,
        durationMs: 2200,
      },
      {
        state: "READY",
        actionBadge: "[OPEN BROWSER]",
        title: "Controlled Browser Launch",
        detail: "Attaches to default Windows browser instance and navigates to target query URL.",
        uiState: "GET https://www.google.com/search?q=Sarvam+AI (Status: 200 OK)",
        codeSnippet: `webbrowser.open("https://www.google.com/search?q=Sarvam+AI")`,
        durationMs: 2400,
      },
      {
        state: "READY",
        actionBadge: "[SEARCH // RESULT]",
        title: "Page Render & Result Extraction",
        detail: "Search results loaded. Top result identified: Sarvam AI Sovereign Indic Models.",
        uiState: "Top heading: 'Sarvam AI — Sovereign LLMs and Speech for India'",
        codeSnippet: `results = parse_serp(driver.page_source)\nlog.record_action(results[0])`,
        durationMs: 2400,
      },
      {
        state: "SPEAKING",
        actionBadge: "[SPEAKING // OK]",
        title: "Spoken Response",
        detail: "SIOR speaks aloud confirming search completion with top overview.",
        uiState: "Spoken: 'Google par Sarvam AI search kar diya hai. Page open ho gaya hai.'",
        codeSnippet: `sarvam.synthesize_speech("Google par Sarvam AI search kar diya hai.")`,
        durationMs: 2500,
      },
    ],
  },
  {
    id: "demo-vision",
    number: "03",
    title: "Next Horizon: Autonomous Observe → Act → Verify Loop",
    spokenCommand: "Settings mein jaake dark mode on karo.",
    summary: "Active research prototype: Screen capture inspection, element visual bounding box detection, coordinate grounding, and post-action verification.",
    category: "IN DEVELOPMENT",
    steps: [
      {
        state: "LOOKING",
        actionBadge: "[SCREEN CAPTURE]",
        title: "Full-Desktop Pixel Sampling",
        detail: "Captures high-resolution frame buffer from Windows Desktop Window Manager (DWM).",
        uiState: "Screen resolution: 3840x2160 @ 60Hz. Raw frame RGB buffer loaded.",
        codeSnippet: `frame = win32_screen_capture.grab_frame()\n# Visual understanding currently in active research`,
        durationMs: 2400,
      },
      {
        state: "LOOKING",
        actionBadge: "[VISION // ELEMENT]",
        title: "UI Element Grounding & Coordinate Mapping",
        detail: "Visual bounding box models predict precise pixel coordinates of 'Dark Mode' toggle switch.",
        uiState: "Target region mapped: [ToggleSwitch 'Dark Mode'] at X: 1420, Y: 680",
        codeSnippet: `bbox = vision_model.ground_element(frame, "Dark Mode toggle")\n# Expected: Phase 2 Delivery`,
        durationMs: 2400,
      },
      {
        state: "READY",
        actionBadge: "[ACTION // CLICK]",
        title: "Grounded Cursor Dispatch (Simulated)",
        detail: "Hardware cursor movement to grounded coordinate (1420, 680) followed by primary button click.",
        uiState: "Mouse cursor dispatched to (1420, 680). Left-click event asserted.",
        codeSnippet: `mouse.move_to(1420, 680, duration=0.2)\nmouse.click()`,
        durationMs: 2200,
      },
      {
        state: "LOOKING",
        actionBadge: "[VERIFY]",
        title: "State Observation & Visual Assertion",
        detail: "Captures subsequent screen frame to visually verify toggle changed state to 'ON'.",
        uiState: "Observation verified: Background shifted to dark theme.",
        codeSnippet: `post_frame = win32_screen_capture.grab_frame()\nassert vision_model.verify_state(post_frame, "dark_mode_active")`,
        durationMs: 2600,
      },
      {
        state: "SPEAKING",
        actionBadge: "[CONFIRMED // 200]",
        title: "Verified Acoustic Confirmation",
        detail: "Confirming state change was visually validated on screen before completion.",
        uiState: "Spoken: 'Dark mode visually verify ho gaya hai aur on ho chuka hai.'",
        codeSnippet: `tts.speak("Dark mode visually verify ho gaya hai aur on ho chuka hai.")`,
        durationMs: 2500,
      },
    ],
  },
];
