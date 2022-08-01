import React from 'react'
import styled from 'styled-components';
import { removeCookie } from '../features/cookie';
function ProfileMenu() {


  return (
    <Menu>
        <span>ProfileMenu</span>
        <ul>
            
            <li onClick={removeCookie}>Logout</li>
        </ul>
        
    </Menu>
        
    
    

  )
}

export default ProfileMenu

const Menu=styled.div`


justify-content: space-between;
border-bottom: 1px solid #49274b;
padding: 13px;
>ul>li{
    :hover{
        cursor:pointer;
        opacity:0.6;
    }
}


`