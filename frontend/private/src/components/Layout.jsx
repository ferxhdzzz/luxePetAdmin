// components/Layout.jsx
import React from 'react';
import TopBar from './TopBar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <>
            <TopBar />
            <div className='topcontainer'>
                <Sidebar />
                <div className="main-content">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;