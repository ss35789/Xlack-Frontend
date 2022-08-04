import React from 'react';
import styled from "styled-components";
import {getAccessTokenWithCode, login} from '../features/login';
import LoginGithub from 'react-login-github';
import {setCookie} from '../features/cookie';

function Login() {

    const onSuccess = (response: any) => {
        let user_info;
        getAccessTokenWithCode(response['code'])
            .then((res) => {
                //console.log(res);
                user_info = res;
                login(user_info)
                    .then((res) => {
                        console.log(`res: ${JSON.stringify(res)}`)
                        /*
                        Axios는 then혹은 await으로 객체를 받으면 자동으로 json parsing 이 되기 때문에
                        resData로 따로 parsing 해줄 이유가 없습니다.
                         */
                        AsscessToken(res);
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
        setCookie('access_token',access_token,{})
        setCookie('refresh_token',refresh_token,{})
    }
}
export default Login;
const LoginContainer = styled.div`
`;