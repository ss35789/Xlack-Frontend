import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {enterRoom} from '../features/EnterChannelSlice';
import {RootState} from '../app/store';

function showChannelUser() {
    const enterRoomId = useSelector((state: RootState) => state.enterRoom.roomId);

    return (
        <UserList>
            <User></User>
        </UserList>
    );
}

export default showChannelUser;

const UserList = styled.div``;
const User = styled.div``;
