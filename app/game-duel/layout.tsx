import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Splendor',
  description: 'Board game',
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
    </>
  );
}
