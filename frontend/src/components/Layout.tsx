import { ReactNode } from 'react';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen" style={{ paddingTop: '50px' }}>
        <main className="flex-grow">
          {children}
          <Footer /> {/* Add this here */}
        </main>
      </div>
      
    </>
    
    
  );
};

export default Layout;
