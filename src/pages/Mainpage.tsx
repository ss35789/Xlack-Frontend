import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import UserList from '../components/UserList';

function Mainpage() {
    return (
        <>
            <Header />
            <Sidebar />
            <UserList />
        </>
    );
}

export default Mainpage;
