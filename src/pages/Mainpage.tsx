import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import UserList from '../components/UserList';
import Chat from '../components/Chat';
import Logout from '../components/Logout';
function Mainpage() {
    return (
        <>
            <Logout />
            <Header />
            <Sidebar />
            <Chat />
            <UserList />
        </>
    );
}

export default Mainpage;
