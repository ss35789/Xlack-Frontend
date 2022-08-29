import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {at, backUrl} from '../features/cookie';
import {ProfileType, UserDetailsType} from './types';
import UserProfile from './UsersProfile';

function UserList() {
    const [userList, setUserList] = useState<ProfileType[]>([]);
    const getAllUser = async (at: string) => {
        try {
            const UsersData = await axios.get(`${backUrl}profile/`, {
                headers: {
                    Authorization: `Bearer ${at}`,
                },
            });
            setUserList(UsersData.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getAllUser(at);
    }, []);
    return (
        <UserListContainer>
            {userList.map(user => {
                return <UserProfile userProfile={user}></UserProfile>;
            })}
        </UserListContainer>
    );
}

export default UserList;

const UserListContainer = styled.div`
    padding: 5px;
    margin-top: 60px;
    position: 'absolute';
    top: 200;
    left: 200;
`;
