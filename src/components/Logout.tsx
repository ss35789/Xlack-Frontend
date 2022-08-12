import {Button} from '@material-ui/core';
import React from 'react';
import {removeCookie} from '../features/cookie';

function Logout() {
    const logoutFC = () => {
        removeCookie();
        window.location.href = 'http://localhost:3000';
    };
    return <Button onClick={logoutFC}>Logout</Button>;
}
export default Logout;
