import { ReactNode } from 'react';

import Footer from '../footer';
import Header from '../header';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
