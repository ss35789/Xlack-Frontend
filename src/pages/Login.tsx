import React, {useEffect} from 'react';
import styled from 'styled-components';
import {getAccessTokenWithCode, login} from '../features/login';
import LoginGithub from 'react-login-github';
import {setCookie} from '../features/cookie';
import {Navigate} from 'react-router-dom';

function Login() {
    const onSuccess = (response: any) => {
        let user_info;
        getAccessTokenWithCode(response['code']).then(res => {
            user_info = res;
            login(user_info).then(res => {
                /*
                        res안에 토큰 정보가 담겨 있음.
                         */
                console.log(`res: ${JSON.stringify(res)}`);
                const tmp = JSON.stringify(res);
                const resData = JSON.parse(tmp);
                AsscessToken(resData);
            });
        });
    };

    const onFailure = (response: any) => console.error(response);

    return (
        <>
            <LoginContainer>
                <LoginImageContainer>
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                </LoginImageContainer>
                <LoginGithub clientId="9ac10cd868488ad0185b" scope="read:user" buttonText="Login to GitHub" onSuccess={onSuccess} onFailure={onFailure}></LoginGithub>
            </LoginContainer>
        </>
    );
}
export function AsscessToken(resData: any) {
    const access_token = resData.access_token;
    //access_token 존재시 쿠키에 넣어줌
    const refresh_token = resData.refresh_token;
    if (access_token) {
        window.location.href = 'http://localhost:3000';
        setCookie('access_token', access_token, {
            httpOnly: true,
        });
        setCookie('refresh_token', refresh_token, {
            httpOnly: true,
        });
    }
}
export default Login;

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
    > button {
        width: 300px;
        margin-top: -459px;
    }
`;

const LoginImageContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    > img {
        object-fit: contain;
        height: 100px;
    }
    margin-top: -500px;
    margin-bottom: -700px;
`;
