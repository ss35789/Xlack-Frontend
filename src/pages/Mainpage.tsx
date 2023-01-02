import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat/Chat";
import Logout from "../components/Logout";
import styled from "styled-components";
import axios from "axios";
import { at, backUrl } from "../variable/cookie";
import { useDispatch } from "react-redux";
import { enterWorkSpace } from "../variable/WorkSpaceSlice";
import { ChatChannelType, WorkspaceType } from "../components/types";

const Mainpage = () => {
  const dispatch = useDispatch();
  const [channels, setChannels] = useState<string[]>([]);
  const getChannelsInWorkspace = async (hashed_value: string) => {
    await axios
      .get(`${backUrl}channel/${hashed_value}`, {
        headers: {
          Authorization: `Bearer ${at}`,
        },
      })
      .then((res) => {
        res.data.map((c: ChatChannelType) => {
          setChannels([...channels, c.hashed_value]);
        });
        dispatch(enterWorkSpace([hashed_value, channels]));
      });
  };

  const getMyWorkspace = async () => {
    await axios
      .get(`${backUrl}workspace/`, {
        headers: {
          Authorization: `Bearer ${at}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        res.data.map((value: WorkspaceType) => {
          getChannelsInWorkspace(value.hashed_value);
          //dispatch(enterWorkSpace(value.hashed_value));
        });
      })
      .catch((e) => console.log("getWorkspace error : ", e));
  };
  useEffect(() => {
    getMyWorkspace();
  }, []);
  return (
    <>
      <Logout />
      <AppBody>
        <Header />
        <Sidebar />
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
