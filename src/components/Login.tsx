import React from 'react';
import styled from "styled-components";
import {getAccessTokenWithCode, login} from '../features/login';
import LoginGithub from 'react-login-github';

function Login() {

    const onSuccess = (response: any) => {
        let user_info;
        getAccessTokenWithCode(response['code'])
            .then((res) => {
                user_info = res;
                login(user_info)
                    .then((res) => {
                        /*
                        res안에 토큰 정보가 담겨 있음.
                         */
                        console.log(`res: ${JSON.stringify(res)}`)
                    })
            })
    };
    const onFailure = (response: any) => console.error(response);

    return (
        <LoginGithub
            clientId='9ac10cd868488ad0185b'
            scope='read:user'
            buttonText='Login to GitHub'
            onSuccess={onSuccess}
            onFailure={onFailure}
        />
    )
}

export default Login;
const LoginContainer = styled.div`

`;