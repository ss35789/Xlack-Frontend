import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ChatChannelType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

function Channel(props: ChatChannelType) {
  const notifi = useSelector((state: RootState) => state.UnReadChannel.UnReadChannel);
  const [count, SetCount] = useState<number>();
  useEffect(() => {
    Object.values(notifi).forEach(c => {
      // console.log("c, count, wh ", c.count, c.channel_hashed_value, props.hashed_value);
      if (c.channel_hashed_value == props.hashed_value) {
        SetCount(c.count);
      }
    });
  }, [notifi]);

  return (
    <ChannelContainer>
      <OptionChannel>
        # {props.name}__ {props.hashed_value} {"  "}
        <div style={{ display: "inline-block", marginLeft: 60, background: "red", borderRadius: "50%", position: "relative", float: "right", alignItems: "center", textAlign: "center" }}>
          <div style={{ fontSize: 20, display: "inline-block", color: "white" }}>{count}</div>
        </div>
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
