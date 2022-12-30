import React from 'react';
import styled, {keyframes} from 'styled-components';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {bounceInRight} from 'react-animations';
function FistPage() {
  return (
    <>
      <LoginContainer>
        <Contents>
          <ImageContainer>
            <img src={xlackLogo} alt="slackLogo" />
          </ImageContainer>
          <Titlemessage>
            Xlack brings the <br /> team together <br /> wherever you are
          </Titlemessage>
          <button
            onClick={e => {
              e.preventDefault();
              window.location.href = '/login';
            }}
          >
            Go to Login
          </button>
          <Submessage>
            Is your team new to Xlack?&nbsp;
            <a href={'/workspace'} style={{color: 'white', fontSize: '20px'}}>
              Create a new Workspace
            </a>
          </Submessage>
        </Contents>
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

const Titlemessage = styled.div`
  color: white;
  font-size: 60px;
  position: relative;
  margin-top: 10px;
  font-weight: bold;
  margin-right: 50%;
  animation: 1s ${rightShift};
`;

const Submessage = styled.div`
  color: white;
  font-size: 20px;
  position: relative;
  margin-top: 10px;
  animation: 1s ${rightShift};
`;

const Contents = styled.div`
  background-color: black;
  width: 1000px;
  height: 400px;
  margin-right: 40%;
  margin-top: 10px;
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
