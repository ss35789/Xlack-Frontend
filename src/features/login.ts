import axios from 'axios';
import qs from 'query-string';
import {useSearchParams, useLocation} from 'react-router-dom';
import {Url} from 'url';
import {AsscessToken} from '../pages/Login';
import {backUrl} from './cookie';
// function login() {
//     //getCode();
//     console.dir(keywords);
//     return keywords;
// }

export async function LoginDjango(code: string): Promise<JSON> {
    const url = `${backUrl}token/github/`;
    const config = {
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': 'NJfuIPmycNBlby6TW4r5xirFqq23915KBfU0h4jekTz8JDmpcPRD2z6MaIOCHYGL',
        },
    };
    const data = {
        access_token: '',
        code: `${code}`,
        id_token: '',
    };
    const res = await axios.post(url, data, config);
    return res.data;
}

async function getAccessTokenWithCode(code: string): Promise<JSON> {
    const res = await axios.get(`${backUrl}authentication/redirect/github?code=${code}`, {
        validateStatus(status) {
            return status < 500;
        },
    });
    return res.data.github_info;
}

async function checkUser(github_id: number): Promise<boolean> {
    const res = await axios.get(`${backUrl}authentication/user_check?github_id=${github_id}`, {
        validateStatus: function (status) {
            return status < 500;
        },
    });
    return res.data.success;
}

export function replacer(key: string, value: any) {
    if (key === 'success' || key === 'message') return undefined;
    else return value;
}

//export {login};
