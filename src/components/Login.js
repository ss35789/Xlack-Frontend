import React from 'react';
import styled from "styled-components";
import {Button} from '@material-ui/core'
import axios from 'axios';
function Login(){
  const headers={
    'accept': 'application/json'

  };
  const onClick = async() => {
    // const{data,status} = await axios.get('https://cors-anywhere.herokuapp.com/https://xlack.kreimben.com/api/authentication/github_login',headers);
              
    const response = await axios.get('https://xlack.kreimben.com/api/authentication/github_login',headers);
    
    console.log(response.data);
    alert(response);

  };
  return <LoginContainer>
    <Button onClick={onClick}>sign in with github</Button>
    
  </LoginContainer>
  
}
export default Login;
const LoginContainer=styled.div`

`;