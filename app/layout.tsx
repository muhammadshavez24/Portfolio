import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Muhammad Shavez | Web Developer',
  description: '3D digital portfolio experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
