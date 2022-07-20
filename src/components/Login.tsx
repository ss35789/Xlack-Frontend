import {React} from 'react';
import styled from "styled-components";
import {Button} from '@material-ui/core'
import axios from 'axios';

function Login(){
  const onClick=async()=>{
    const headers={
      'accept': 'application/json',
    }
    try{
      axios.get(
        'https://xlack.kreimben.com/api/authentication/github_login',{headers})
      .then((response)=>{
        console.log(response.data.result);
      })
    }
    catch(e){
      console.log(e);
    }
  };

  return <LoginContainer>
    <Button onClick={onClick}>sign in with github</Button>
  </LoginContainer>
}
export default Login;

const LoginContainer = styled.div`

`;