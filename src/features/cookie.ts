import {Cookies} from 'react-cookie';

const cookies = new Cookies();
export const backUrl = 'https://xlack.kreimben.com';
export const setCookie = (name: string, value: string, option?: any) => {
    return cookies.set(name, value, {});
};
const getCookie = (name: string) => {
    return cookies.get(name);
};
export const removeCookie = () => {
    cookies.remove('cookies');
};

export const at = getCookie('access_token');
export const rt = getCookie('refresh_token');
