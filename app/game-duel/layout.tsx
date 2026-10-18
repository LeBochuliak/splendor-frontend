import type { Metadata } from 'next';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'Splendor',
  description: 'Board game',
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
