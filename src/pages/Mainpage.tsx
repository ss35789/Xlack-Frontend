import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import UserList from '../components/UserList';
import Chat from '../components/Chat';
function Mainpage() {
    return (
        <>
            <Header />
            <Sidebar />
            <Chat />
            <UserList />
        </>
    );
}

export default Mainpage;
