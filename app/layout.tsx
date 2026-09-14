import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SIOR (Σείριος) — Voice AI Agent for Windows & Sovereign Indic Execution',
  description: 'Voice-first Windows desktop assistant for Indian languages with validated structured tool dispatch.',
  keywords: ['Voice AI', 'Windows Desktop Assistant', 'Hinglish AI', 'Sarvam Saaras', 'Groq', 'Silero VAD', 'Windows Win32 Tool Calling', 'Indic AI'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="tech-grid-background" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
