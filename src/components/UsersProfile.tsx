import React, {useEffect, useState} from 'react';
import {ProfileType, UserDetailsType} from './types';
import styled from 'styled-components';
import axios from 'axios';
import {at, backUrl} from '../features/cookie';

function UserProfile(userProfile: ProfileType) {
    return (
        <UserContainer>
            {userProfile.user.first_name} {userProfile.user.last_name} <br></br>
            {userProfile.user.email}
        </UserContainer>
    );
}

export default UserProfile;

const UserContainer = styled.div`
    color: white;
    display: flex;
    padding: 3px;
    border-bottom: 1px solid #49274b;
`;
