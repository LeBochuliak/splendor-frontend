import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Splendor',
  description: 'Board game',
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return <div className="container">{children}</div>;
}
