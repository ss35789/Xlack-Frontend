import axios from "axios";

async function getAccessTokenWithCode(code: string): Promise<JSON> {
    const res = await axios.get(`https://xlack.kreimben.com/api/authentication/redirect/github?code=${code}`);
    return res.data.github_info;
}

async function checkUser(github_id: number): Promise<boolean> {
    const res = await axios.get(`https://xlack.kreimben.com/api/authentication/user_check?github_id=${github_id}`, {
        validateStatus: function (status) {
            return status < 500;
        }
    });
    return res.data.success;
}

async function login(user_info: any): Promise<JSON> {
    const check = await checkUser(user_info['id']);

    if (check) {
        // Already has account.
        const github_id = user_info['id'];
        const res = await axios.post(
            `https://xlack.kreimben.com/api/authentication/issue_tokens?github_id=${github_id}`,
            null,
            {
                validateStatus: function (status) {
                    return status < 500;
                }
            });
        return res.data;
    } else {
        // Not yet registered.
        const res = await axios.post(`https://xlack.kreimben.com/api/user/`, {
            "email": user_info['email'],
            "name": user_info['name'],
            "thumbnail_url": user_info['avatar_url'],
            "authorization": 'guest',
            "github_id": user_info['id']
        }, {
            validateStatus: function (status) {
                return status < 500;
            }
        });
        return res.data;
    }
}

export {getAccessTokenWithCode, login};