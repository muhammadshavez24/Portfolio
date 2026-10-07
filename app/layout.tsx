import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
