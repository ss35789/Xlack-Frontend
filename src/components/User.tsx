import React from 'react';
import {UserDetailsType} from './types';
import styled from 'styled-components';

function User({pk, username, email, first_name, last_name}: UserDetailsType) {
    return (
        <UserContainer>
            user: {username},email: {email}
        </UserContainer>
    );
}

export default User;

const UserContainer = styled.div`
    color: purple;
    display: flex;
    border-bottom: 1px solid #49274b;
`;
