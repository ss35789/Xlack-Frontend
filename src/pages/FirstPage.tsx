import React from 'react';
import styled, {keyframes} from 'styled-components';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {bounceInRight} from 'react-animations';

function FistPage() {
  return (
    <>
      <LoginContainer>
        <button
          onClick={e => {
            e.preventDefault();
            window.location.href = '/login';
          }}
        >
          Go to Login
        </button>
        <LoginMessage>First Page</LoginMessage>
        <LoginMessage>
          Is your team new to Xlack?&nbsp;
          <a href={'/workspace'} style={{color: 'white', fontSize: '20px'}}>
            Create a new Workspace
          </a>
        </LoginMessage>
      </LoginContainer>
    </>
  );
}

export default FistPage;

const rightShift = keyframes`${bounceInRight}`;
const LoginContainer = styled.div`
  background-color: #3f0f40;
  height: 100vh;
  display: grid;
  place-items: center;

  > button {
    margin-top: 300px;
    align-self: center;
    width: 500px;
    height: 60px;
    background-color: #457359;
    font-size: 30px;
    font-weight: bolder;
    color: white;
    border: none;
    border-radius: 5px;
    animation: 1s ${rightShift};
  }
`;

const LoginImageContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: #3f0f40;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
  }

  margin-top: -500px;
  margin-bottom: -700px;
`;

const LoginMessage = styled.div`
  color: white;
  font-size: 20px;
  position: relative;
  margin-top: 10px;
  animation: 1s ${rightShift};
`;
