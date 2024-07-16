import Menu from '@/components/layout/Menu';

export default function NoMenuLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Menu />
    </>
  );
}
