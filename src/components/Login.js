import React, { useState } from 'react';
import styled from "styled-components";
import {Button} from '@material-ui/core'
import axios from 'axios';

const Login = () => {
  
  const headers = {
    'accept': 'application/json',
  }
  const onClick = async() => {
    // const{data,status} = await axios.get('https://cors-anywhere.herokuapp.com/https://xlack.kreimben.com/api/authentication/github_login',headers);
    
    try {
      const response = await axios.get('https://cors-anywhere.herokuapp.com/https://xlack.kreimben.com/api/authentication/github_login',headers);
      
    } catch (e) {
      console.log(e);
    }
  };
  return <LoginContainer>
    <Button onClick={onClick}>sign in with github</Button>
    
  </LoginContainer>
  
}
export default Login;

const LoginContainer=styled.div`

`;