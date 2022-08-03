import { Button } from '@material-ui/core';
import React from 'react'
import { removeCookie } from '../features/cookie';


function Logout() {
      
    return (
        
    <Button onClick={removeCookie}>Logout</Button>
        
    );
}
export default Logout;