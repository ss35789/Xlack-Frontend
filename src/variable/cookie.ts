import axios from "axios";
import { Cookies } from "react-cookie";
import { AccessToken } from "../pages/Login";

export function UpdateToken() {
  const check = rt;
  if (check) {
    let token_info;
    //already has accessToken.

    axios
      .post(
        `${backUrl}accounts/token/refresh/`,
        {
          refresh: check,
        },
        {
          validateStatus: function (status: number) {
            return status < 500;
          },
        }
      )
      .then((res) => {
        token_info = res;
        AccessToken(token_info, null);
      });
  }
}

export async function AtVerify() {
  const check = await axios.post(
    `${backUrl}accounts/token/verify/`,
    { token: at },
    {
      validateStatus: function (status: number) {
        return status < 500;
      },
    }
  );
  return check.status;
}

const cookies = new Cookies();

export const backUrl = "https://api.xlack.kreimben.com/";
export const WsUrl = "wss://api.xlack.kreimben.com/ws/chat/";
export const setCookie = (name: string, value: string, option?: any) => {
  return cookies.set(name, value, {});
};
const getCookie = (name: string) => {
  return cookies.get(name);
};
export const removeCookie = () => {
  cookies.remove("access_token");
  cookies.remove("refresh_token");
};
export const at = getCookie("access_token");
export const rt = getCookie("refresh_token");
export const exp = getCookie("exp");
//export const searchParams = useLocation().search;
