import React from "react";
import styled from "styled-components";
import { ChatChannelType } from "../types";

function Channel(props: ChatChannelType) {
  return (
    <ChannelContainer>
      <OptionChannel>
        # {props.name}__ {props.hashed_value}
      </OptionChannel>
    </ChannelContainer>
  );
}

export default Channel;

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
