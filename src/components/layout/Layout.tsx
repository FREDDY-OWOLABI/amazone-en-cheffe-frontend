import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  footerBgColor?: string;
  hideHeader?: boolean; 
  hideFooter?: boolean;
}

export const Layout = ({ children, footerBgColor, hideHeader = false , hideFooter = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {!hideHeader && <Header />}
      
      <main className="flex-1">
        {children}
      </main>
      
      
       {!hideFooter && <Footer bgColor={footerBgColor} />}
    </div>
  );
};