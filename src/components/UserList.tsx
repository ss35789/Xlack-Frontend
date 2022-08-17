import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {at, rt} from '../features/cookie';
import User from './User';
import {UserInformationTypes} from './types';
import {backUrl} from '../features/cookie';
function UserList() {
    const [userList, setUserList] = useState<UserInformationTypes[]>([]);
    const getAllUser = async () => {
        try {
            const UsersData = await axios.get(`${backUrl}profile/`);
            setUserList(UsersData.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getAllUser();
    }, []);
    return (
        <UserListContainer>
            {userList.map(user => {
                return (
                    <User id={user.id} user={user.user} github_id={user.github_id} bio={user.bio} thumbnail_url={user.thumbnail_url} created_at={user.created_at} updated_at={user.updated_at}></User>
                );
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
