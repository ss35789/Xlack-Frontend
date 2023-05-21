import React from "react";
import { WorkspaceType } from "../../types/types";
import styled, { DefaultTheme, ThemedStyledProps } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { CallClickedWorkSpace, SetClickedWorkSpace } from "../../variable/WorkSpaceSlice";
import { RootState } from "../../app/store";
interface WorkspaceButtonProps {
  hasNotification: boolean;
}
function Workspace(props: WorkspaceType) {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
}

export function SelectWorkspace(prop: WorkspaceType) {
  const notifi = useSelector((state: RootState) => state.UnReadChannel.UnReadChannel);
  const hasUnreadNotification = notifi.some(notification => notification.workspace_hashed_value === prop.hashed_value);

  const dispatch = useDispatch();
  // const getChannelListInCurrentWorkspace = async (workspace_hv: string) => {
  //   await axios
  //     .get(`${backUrl}channel/${workspace_hv}/`, {
  //       headers: {
  //         Authorization: `Bearer ${at}`,
  //       },
  //     })
  //     .then(res => {
  //       dispatch(getChannelList(res.data));
  //     })
  //     .catch(err => {
  //       console.log("getChannelListInCurrentWorkspace err : ", err);
  //     });
  // };

  return (
    <WorkspaceContainer>
      <OptionWorkspace>
        <WorkspaceButton
          hasNotification={hasUnreadNotification}
          onClick={() => {
            dispatch(SetClickedWorkSpace(prop.hashed_value));
            dispatch(CallClickedWorkSpace());
          }}
        >
          {prop.name.slice(0, 1).toUpperCase()}
        </WorkspaceButton>
      </OptionWorkspace>
    </WorkspaceContainer>
  );
}

export default Workspace;

const ChannelContainer = styled.div`
  display: flex;
  font-size: 12px;
  padding: 10px;
  align-items: center;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;
const WorkspaceContainer = styled.div``;
const OptionWorkspace = styled.div`
  color: white;
`;
const OptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
const WorkspaceButton = styled.button<ThemedStyledProps<WorkspaceButtonProps, DefaultTheme>>`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgb(89, 87, 87);
  border: 3px solid ${props => (props.hasNotification ? "white" : "#3f0e40")};
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 700;
  color: white;
  cursor: pointer;

  &:hover {
    border-color: lightgray;
  }
`;
