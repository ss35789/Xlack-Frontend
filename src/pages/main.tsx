import React from 'react';
import Header from '../components/Header';
import Logout from '../components/Logout';
import Sidebar from '../components/Sidebar';

function Main() {
    return (
        <>
            <Logout />
            <Header />
            <Sidebar />
        </>
    );
}

export default Main;
