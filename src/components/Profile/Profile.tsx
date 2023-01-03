import User from "./MyProfile";
import styled from "styled-components";
import axios from "axios";
import { at, backUrl } from "../../variable/cookie";
import { useEffect, useState } from "react";
import { UserDetailsType } from "../types";
import { useDispatch } from "react-redux";
import { switchOnOff } from "../../variable/OnEditProfileSlice";

const Profil = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<UserDetailsType>();
  const getMyUser = async (at: string) => {
    try {
      const UsersData = await axios.get(`${backUrl}accounts/user/`, {
        headers: {
          Authorization: `Bearer ${at}`,
        },
      });
      setUser(UsersData.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMyUser(at);
  }, []);
  return (
    <>
      {user && (
        <div className="relative inline-block text-left">
          <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
            <div
              className="py-1 "
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="#"
                className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                role="menuitem"
              >
                <span className="flex flex-col">
                  <User
                    first_name={user.first_name}
                    email={user?.email}
                    last_name={user?.last_name}
                    pk={user?.pk}
                    username={user?.username}
                  />
                </span>
              </a>
              <a
                href="#"
                className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                role="menuitem"
              >
                <span className="flex flex-col">
                  <Op>자신을 활성으로 설정</Op>
                </span>
              </a>
              <a
                href="#"
                className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                role="menuitem"
              >
                <span className="flex flex-col">
                  <span>알람 일시정지</span>
                </span>
              </a>
              <a
                href="#"
                className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                role="menuitem"
              >
                <span
                  className="flex flex-col"
                  onClick={() => {
                    dispatch(switchOnOff());
                  }}
                >
                  <Op>프로필</Op>
                </span>
              </a>

              <a
                href="#"
                className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 "
                role="menuitem"
              >
                <span className="flex flex-col">
                  <Op>
                    <span>환경설정</span>
                  </Op>
                </span>
              </a>
              <a
                href="#"
                className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                role="menuitem"
              >
                <span className="flex flex-col">
                  <span>다운로드</span>
                </span>
              </a>
              <a
                href="#"
                className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                role="menuitem"
              >
                <span className="flex flex-col">
                  <span>''에서 로그아웃</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Profil;

const Op = styled.span`
  border-bottom: 1px solid #49274b;
`;
