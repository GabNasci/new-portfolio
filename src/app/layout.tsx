// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { ConstructionNotice } from '@/components/shared/construction-notice';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gabriel Nascimento — Desenvolvedor',
  description: '...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable} ${fraunces.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased min-h-screen flex flex-col selection:bg-accent/20">
        <ConstructionNotice />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}