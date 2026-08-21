import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Linoy Stephen | Senior Graphic Designer — Dubai, UAE',
  description:
    '20+ years Senior Graphic Designer & Web Designer in Dubai, UAE. Expert in brand identity, pharmaceutical packaging (Rx/OTC), exhibition booth design, After Effects video reels, and WordPress web design. Open to new opportunities.',
  keywords: [
    'Senior Graphic Designer Dubai',
    'Brand Identity Designer UAE',
    'Pharmaceutical Packaging Designer',
    'Exhibition Booth Design Dubai',
    'Motion Graphics After Effects',
    'WordPress Designer Dubai',
    'Creative Director UAE',
    'Linoy Stephen',
  ],
  authors: [{ name: 'Linoy Stephen' }],
  openGraph: {
    title: 'Linoy Stephen | Senior Graphic Designer — Dubai, UAE',
    description: '20+ years of creative excellence across branding, packaging, exhibitions, video & web.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#07070A] text-[#F2F0EB] antialiased">
        {children}
      </body>
    </html>
  );
}
