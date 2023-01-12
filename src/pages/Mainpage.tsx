import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat/Chat";
import Logout from "../components/Logout";
import styled from "styled-components";
import axios from "axios";
import { at, backUrl } from "../variable/cookie";
import { useDispatch, useSelector } from "react-redux";
import { getWorkSpace } from "../variable/WorkSpaceSlice";
import { WorkspaceType } from "../components/types";
import { RootState } from "../app/store";
import Profile from "../components/Profile/Profile";
import { getMyProfile } from "../variable/MyProfileSlice";

const Mainpage = () => {
  const dispatch = useDispatch();

  const [channels, setChannels] = useState<string[]>([]);
  const Workspace = useSelector(
    (state: RootState) => state.getMyWorkSpace.hashed
  );
  const getMyUser = async () => {
    try {
      const UsersData = await axios.get(`${backUrl}profile/`, {
        headers: {
          Authorization: `Bearer ${at}`,
        },
      });
      dispatch(getMyProfile(UsersData.data));
    } catch (err) {
      console.log(err);
    }
  };
  const getMyWorkspace = async () => {
    await axios
      .get(`${backUrl}workspace/`, {
        headers: {
          Authorization: `Bearer ${at}`,
        },
      })
      .then((res) => {
        res.data.map((value: WorkspaceType) => {
          dispatch(getWorkSpace(value));
        });
      })
      .catch((e) => console.log("getWorkspace error : ", e));
  };

  useEffect(() => {
    getMyUser();
    getMyWorkspace();
  }, []);
  return (
    <>
      <Logout />
      <AppBody>
        <Header />
        <Sidebar />
        <Profile />
        <Chat />
      </AppBody>
    </>
  );
};

export default Mainpage;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
