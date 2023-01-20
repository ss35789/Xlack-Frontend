import React, { useEffect } from "react";
import { WorkspaceType } from "../types";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

function Workspace(props: WorkspaceType) {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
}
export function SelectWorkspace(prop: WorkspaceType) {
  return (
    <WorkspaceContainer>
      <OptionWorkspace>
        <WorkspaceButton>{prop.name.slice(0, 1)}</WorkspaceButton>
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
const WorkspaceContainer = styled.div`
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
const OptionWorkspace = styled.div`
  color: white;
`;
const OptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
const WorkspaceButton = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: white;
  border: 3px solid #3f0e40;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 700;
  color: black;
  cursor: pointer;
`;
