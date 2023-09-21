import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='container mx-auto h-full px-6 flex flex-col leading-relaxed tracking-wide'>
      <Navbar />
      <div className='flex-1 flex justify-center'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
