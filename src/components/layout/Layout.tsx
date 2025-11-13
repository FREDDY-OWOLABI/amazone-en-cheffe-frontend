import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  footerBgColor?: string;
}

export const Layout = ({ children, footerBgColor }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer bgColor={footerBgColor} />
    </div>
  );
};
