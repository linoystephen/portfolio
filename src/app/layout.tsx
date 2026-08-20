import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Linoy Stephen | Senior Graphic Designer & Creative Director Dubai',
  description:
    'Senior Graphic Designer & Web Designer in Dubai, UAE with 20+ years of experience in corporate marketing, brand guidelines, pharmaceutical packaging (Rx/OTC), exhibition booth design, video reels, and WordPress websites.',
  keywords: [
    'Linoy Stephen',
    'Senior Graphic Designer Dubai',
    'Creative Director Dubai',
    'Web Designer Dubai',
    'Pharmaceutical Packaging Designer',
    'Brand Identity Guidelines',
    'Exhibition Booth Designer Dubai',
    'WHX 2026 CPHI Packaging',
    'After Effects Video Editor',
    'WordPress Developer Dubai',
  ],
  authors: [{ name: 'Linoy Stephen' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#030304] text-zinc-100 antialiased studio-canvas selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
