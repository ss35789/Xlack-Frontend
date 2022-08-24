import axios from 'axios';
import {useState} from 'react';
import {Cookies} from 'react-cookie';
import {UserDetailsType} from '../components/types';
import {useLocation} from 'react-router-dom';

async function updateRt() {
    const check = await getCookie('access_token');

    if (check) {
        //already has accessToken.
        //code=74bbb79c0c3ac4820035
        const res = await axios.post(
            `${backUrl}/accounts/token/refresh/`,
            {
                refresh: check,
            },
            {
                validateStatus: function (status: number) {
                    return status < 500;
                },
            },
        );
        return res.data;
    }
}

const cookies = new Cookies();

export const backUrl = 'https://xlack-backend.herokuapp.com/';
export const WsUrl = 'ws://xlack-backend.herokuapp.com/ws/chat/';
export const setCookie = (name: string, value: string, option?: any) => {
    return cookies.set(name, value, {});
};
const getCookie = (name: string) => {
    return cookies.get(name);
};
export const removeCookie = () => {
    cookies.remove('access_token');
    cookies.remove('refresh_token');
};
export const at = getCookie('access_token');
export const rt = getCookie('refresh_token');
//export const searchParams = useLocation().search;
