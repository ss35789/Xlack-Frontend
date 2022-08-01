import React from 'react';
import styled from "styled-components";
import {getAccessTokenWithCode, login} from '../features/login';
import LoginGithub from 'react-login-github';
import { setCookie } from '../features/cookie';

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
                        const tmp = JSON.stringify(res);
                        const resData = JSON.parse(tmp)
                        AsscessToken(resData);

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
export function AsscessToken(resData: any){
    const access_token = resData.access_token;
    //access_token 존재시 쿠키에 넣어줌
    const refresh_token = resData.refresh_token;
    if (access_token){
        setCookie('access_token',access_token,{
            httpOnly:true
        })
        setCookie('refresh_token',refresh_token,{
            httpOnly:true
        })
    }
}
export default Login;
const LoginContainer = styled.div`
`;