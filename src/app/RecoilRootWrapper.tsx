'use client';

import { RecoilRoot } from 'recoil';
import QueryProvider from './provider';

const RecoilRootWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </QueryProvider>
  );
};

export default RecoilRootWrapper;
