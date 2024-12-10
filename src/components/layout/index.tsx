import { ReactNode } from 'react';

import Footer from '../footer';
import Header from '../header';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            <div style={{ height: '80px' }} id="header-placeholder" /* Placeholder for fixed header */ />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
