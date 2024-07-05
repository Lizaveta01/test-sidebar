import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import AuthorizedGuard from '@/utils/AuthorizedGuard';
import ModalManager from '@/components/modals/ModalManager';

import QueryProvider from './queryProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'test-task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru">
      <body className={`${inter.className} bg-slate-100`}>
        <QueryProvider>
          <ModalManager />
          <AuthorizedGuard>{children}</AuthorizedGuard>
        </QueryProvider>
      </body>
    </html>
  );
}
