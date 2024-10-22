import './globals.css';
import { ToastContainer } from 'react-toastify';
import QueryProvider from './provider';
import RecoilRootWrapper from './RecoilRootWrapper';
import 'react-toastify/dist/ReactToastify.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <RecoilRootWrapper>
            <ToastContainer />
            {children}
          </RecoilRootWrapper>
        </QueryProvider>
      </body>
    </html>
  );
}
