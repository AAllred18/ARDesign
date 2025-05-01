import { ReactNode } from 'react';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div style={{ paddingTop: '50px' }}>
        {children}
      </div>
      <Footer /> {/* Add this here */}
    </>
    
    
  );
};

export default Layout;
