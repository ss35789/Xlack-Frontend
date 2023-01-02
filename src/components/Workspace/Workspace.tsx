import React from "react";
import { WorkspaceType } from "../types";
import styled from "styled-components";
import Channel from "../Channel/Channel";

function Workspace(props: WorkspaceType) {
  return (
    <>
      <h1>{props.name}</h1>
      {props.chat_channel.map((c, i) => {
        return <Channel {...c} key={i} />;
      })}
    </>
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

const OptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
