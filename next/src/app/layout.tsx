import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthorizedGuard from '@/utils/AuthorizedGuard';
import ModalManager from '@/components/modals/ModalManager';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'test-task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('ROOT layout');

  return (
    <html lang="ru">
      <body className={`${inter.className} bg-slate-100`}>
        <ModalManager />
        <AuthorizedGuard>{children}</AuthorizedGuard>
      </body>
    </html>
  );
}
