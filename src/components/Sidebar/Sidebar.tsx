import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import AddChannel from "../Channel/AddChannel";
import { RootState } from "../../app/store";
import ChannelMenu from "../Channel/ChannelMenu";
import User from "../Profile/MyProfile";
import { ClickedChannel } from "../../variable/ClickedChannelSlice";
import Workspace from "../Workspace/Workspace";
import Channel from "../Channel/Channel";

function Sidebar() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const dispatch = useDispatch();
  const WorkspaceData = useSelector(
    (state: RootState) => state.getMyWorkSpace.hashed
  );

  const UpdateChannel = useSelector(
    (state: RootState) => state.UpdateChannel.title
  );
  const [ChannelList, setChannelList] = useState<string[]>([]); // 기존에 가입되어있던 채널들 정보
  // const [showProfileMenu, setshowProfileMenu] = useState(false);
  const [showChannelMenu, setshowChannelMenu] = useState(false);
  const [showChannels, setshowChannels] = useState(false);
  const channelMenuRef = useRef<HTMLDivElement>(null);
  // const editProfile = async () => {
  //     try {
  //         const res = await axios.patch(`${backUrl}accounts/user/`,
  //         {
  //             username : `${userName}`,
  //             first_name: `${firstName}`.
  //             last_name: `${lastName}`
  //         },
  //         {
  //             headers: {
  //                 Authorization: `Bearer ${at}`
  //             }
  //         });

  //     } catch (err) {
  //         console.log(err);
  //     }
  // };

  useEffect(() => {
    if (WorkspaceData !== null) {
      console.log(
        "내 workspace와 내부 channle들의 hashed_value : ",
        WorkspaceData
      );
    }
    WorkspaceData.forEach((element) => {
      element.chat_channel.forEach((cha) => {
        setChannelList([...ChannelList, cha.hashed_value]);
      });
    });
  }, [WorkspaceData]);
  useEffect(() => {
    // channelMenuRef 를 이용해 이외의 영역이 클릭되면 채널메뉴 없애기
    function handleClickOutside(e: MouseEvent): void {
      if (
        channelMenuRef.current &&
        !channelMenuRef.current.contains(e.target as Node)
      ) {
        setshowChannelMenu(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [channelMenuRef]);

  const onClickshowChannelMenu = useCallback(() => {
    setshowChannelMenu((prev) => !prev);
  }, []);

  const onClickshowChannels = useCallback(() => {
    setshowChannels((prev) => !prev);
  }, []);
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <div>
            <User></User>
          </div>
        </SidebarInfo>
        {/* <span onClick={editProfile}>
                    <CreateIcon />
                </span> */}
      </SidebarHeader>

      <hr />
      <span onClick={onClickshowChannels}>
        <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      </span>
      <hr />
      {showChannels && <AddChannel Icon={AddIcon} title="Add Channel" />}
      {showChannels &&
        WorkspaceData.map((element, i) => {
          return (
            <>
              <Workspace {...element} key={i} />
              {element.chat_channel.map((c, i) => {
                return (
                  <span
                    key={i}
                    ref={channelMenuRef}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(ClickedChannel(c.hashed_value)); //enterRoomId 를 channel id로 변경
                      //connectChat(enterRoomId)
                    }}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      dispatch(ClickedChannel(c.hashed_value));

                      console.log("채널 메뉴열기!");
                      setx(e.clientX);
                      sety(e.clientY);
                      showChannelMenu && onClickshowChannelMenu(); //새로 우클릭 한 곳에 메뉴가 다시 나오게 초기화
                      onClickshowChannelMenu();
                    }}
                  >
                    <Channel {...c} key={i} />
                  </span>
                );
              })}
            </>
          );
        })}

      {showChannelMenu && (
        <div style={{ position: "absolute", top: y, left: x }}>
          <ChannelMenu />
        </div>
      )}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  justify-content: space-between;
  align-items: center;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;

    :hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  //???
  > div > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > div > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > div > h3 > .MuiSvgIcon-root {
    font-size: 13px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;

    :hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
`;
