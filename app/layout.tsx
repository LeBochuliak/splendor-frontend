import type { Metadata } from 'next';
import { Cormorant, Inter } from 'next/font/google';
import './globals.css';

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

const cormorantMono = Cormorant({
  variable: '--font-cormorant-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Splendor',
  description: 'Board game',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${cormorantMono.variable}`}
    >
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
