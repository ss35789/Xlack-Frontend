import React from 'react';
import {UserInformationTypes} from './types';
import styled from 'styled-components';

function User({email, name, thumbnail_url, authorization}: UserInformationTypes) {
    return (
        <UserContainer>
            name: {name},email: {email}
        </UserContainer>
    );
}

export default User;

const UserContainer = styled.div`
    color: purple;
    display: flex;
    border-bottom: 1px solid #49274b;
`;
