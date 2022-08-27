import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {at, backUrl} from '../features/cookie';
import User from './User';
import {UserDetailsType} from './types';

function UserList() {
    const [userList, setUserList] = useState<UserDetailsType[]>([]);
    const getAllUser = async (at: string) => {
        try {
            const UsersData = await axios.get(`${backUrl}accounts/user/`, {
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
            {/* {userList.map(user => {
                return <User pk={user.pk} username={user.username} email={user.email} first_name={user.first_name} last_name={user.last_name}></User>;
            })} */}
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
