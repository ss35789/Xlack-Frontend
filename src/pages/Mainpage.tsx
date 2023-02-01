import React, { useCallback, useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat/Chat";
import Logout from "../components/Logout";
import styled from "styled-components";
import axios from "axios";
import { at, AtVerify, backUrl, removeCookie } from "../variable/cookie";
import { useDispatch, useSelector } from "react-redux";
import { clearWorkSpace, getWorkSpace } from "../variable/WorkSpaceSlice";
import { WorkspaceType } from "../components/types";
import { RootState } from "../app/store";
import Profile from "../components/Profile/Profile";
import { getMyProfile } from "../variable/MyProfileSlice";
import { SelectWorkspace } from "../components/Workspace/Workspace";
import PlusModal from "../components/Workspace/PlusModal";

const Mainpage = () => {
  const dispatch = useDispatch();
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [channels, setChannels] = useState<string[]>([]);
  const Workspace = useSelector(
    (state: RootState) => state.getMyWorkSpace.hashed
  );
  const getMyUser = async () => {
    if ((await AtVerify()) == 200) {
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
    } else {
      //행동할 때만 유지시키기 위해서 이미 만료됐으면 재로그인
      removeCookie();
      // TODO document why this block is empty
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
        dispatch(clearWorkSpace());
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
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);
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
          <PlusButton onClick={onClickToggleModal}>
            +
            {isOpenModal && (
              <PlusModal onClickToggleModal={onClickToggleModal}></PlusModal>
            )}
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
