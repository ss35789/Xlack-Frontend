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
import { Link } from "react-router-dom";
import { SelectWorkspace } from "../components/Workspace/Workspace";

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
        <SelectWorkspaces>
          {Workspace.map((element, i) => {
            // console.log(element);
            return <SelectWorkspace {...element} />;
          })}
          <PlusButton>
            +
            {}
          </PlusButton>
        </SelectWorkspaces>
        <Sidebar />
        <Profile />
        <Chat />
      </AppBody>
    </>
  );
};

export default Mainpage;
const SelectWorkspaces = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: top;
  text-align: center;
  padding: 15px 0 0;
  background-color: var(--slack-color);
  border-right-width: 1px;
  border-right-style: solid;
  border-top-width: 1px;
  border-top-color: rgb(73, 39, 75);
  border-right-color: rgb(73, 39, 75);
  top: 60px;
  position: relative;
  width: 60px;
  align-content: center;
`;
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
const PlusButton = styled.div`
  color: white;
  font-size: 30px;
  //margin-top: -10px;
  align-items: center;
  text-align: center;
  width: fit-content;
  height: fit-content;
  display: inline-block;
`;
