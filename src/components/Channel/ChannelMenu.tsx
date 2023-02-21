import { useDispatch, useSelector } from "react-redux";
import React from "react";
import styled from "styled-components";
import { RootState } from "../../app/store";
import { UpdateRoom } from "../../variable/UpdateChannelSlice";
import axios from "axios";
import { at, backUrl } from "../../variable/cookie";
import { ChannelSettingOnOff } from "../../variable/OnModalSlice";

const ChannelMenu = (props: any) => {
  const enterRoomId = useSelector((state: RootState) => state.ClickedChannel.hashed_value); // 현재 우리가 클릭한 채널id
  const dispatch = useDispatch();
  const editChannelName = async () => {
    try {
      const newChannelName: string | null = prompt("Please enter the channel name");
      await axios.put(
        `${backUrl}channel/${enterRoomId}/`,
        {
          name: newChannelName,
        },
        {
          headers: {
            Authorization: `Bearer ${at}`,
          },
        },
      );
      dispatch(UpdateRoom());
    } catch (err) {
      console.log(err);
    }
  };

  const exitChannel = async () => {
    // 내 토큰으로 접근 되는 채널중 채널id 값의 채널 삭제

    console.log("exit test");

    try {
      await axios.delete(`${backUrl}channel/${enterRoomId}/`, {
        headers: {
          Authorization: `Bearer ${at}`,
        },
      });
    } catch (err) {
      console.log(err);
    }

    dispatch(UpdateRoom());
  };

  return (
    <>
      <Menu>
        <h3>분활 화면으로 열기</h3>
        <h3
          onClick={() => {
            dispatch(ChannelSettingOnOff());
          }}
        >
          채널 세부정보로 보기
        </h3>
        <h3>복사</h3>
        <h3>채널 음소거</h3>
        <h3>알림변경</h3>
        <h3>채널을 즐겨찾기에 추가</h3>
        <h3 onClick={editChannelName}>채널이름 바꾸기</h3>
        <h3 onClick={exitChannel}>나가기</h3>
      </Menu>
    </>
  );
};

export default ChannelMenu;

const Menu = styled.div`
  background-color: white;
  color: black;
  border-radius: 5px;
  text-align: center;

  > h3 {
    border-bottom: 1px solid #49274b;
  }

  > h3:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
