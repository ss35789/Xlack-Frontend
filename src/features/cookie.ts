import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name:string, value: string, option?:any)=>{
    return cookies.set(name,value,{})
}
export const getCookie = (name:string)=>{
    return cookies.get(name)
}
export const removeCookie=()=>{
    cookies.remove('access_token');
    cookies.remove('refresh_token');

}