import React from 'react';
import {UserInformationTypes} from './types';

function User({email, name, thumbnail_url, authorization}: UserInformationTypes) {
    return (
        <h3 style={{color: 'red'}}>
            name: {name},email: {email}
        </h3>
    );
}

export default User;
