import axios from 'axios';
import {useState} from 'react';
import {Cookies} from 'react-cookie';
import {UserDetailsType} from '../components/types';

const cookies = new Cookies();
export const backUrl = 'https://xlack-backend.herokuapp.com/';
export const [MyUserDetails, setMyUserDetails] = useState<UserDetailsType>();
async () => {
    try {
        const getdata = await axios.get(`${backUrl}accounts/user`);
        setMyUserDetails(getdata.data);
    } catch (err) {
        console.log(err);
    }
};

export const WsUrl = 'ws://xlack.kreimben.com/ws/chat/';
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
