import styled from "styled-components";
import { useEffect, useState } from "react";
import { Mention, MentionProps } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const ChatMentionModal = (props: MentionProps) => {
  const Clicked_channel = useSelector((state: RootState) => state.ClickedChannel.channelData);
  let CalleverDataArr: Mention[] = [];

  const [callingMentionArr, setCallingMentionArr] = useState<Mention[]>(CalleverDataArr);
  useEffect(() => {
    CalleverDataArr = [];
    Clicked_channel.members.forEach(m => {
      const user: Mention = {
        name: m.display_name,
      };
      CalleverDataArr.push(user);
    });
  }, [Clicked_channel]);
  useEffect(() => {
    if (props.inputMsg.length == 1) {
      setCallingMentionArr(CalleverDataArr);
    } else {
      const tmpArr: Mention[] = [];
      CalleverDataArr.forEach(v => {
        if (v.name.startsWith(props.inputMsg.split("@")[1])) {
          tmpArr.push(v);
        }
      });
      setCallingMentionArr(tmpArr);
    }
  }, [props.inputMsg]);

  return (
    <>
      <div className="text-left">
        <div className="right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {callingMentionArr &&
              callingMentionArr.map((v, i) => {
                return (
                  <a className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                    <span
                      key={i}
                      className="flex flex-col hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        props.Choose(v.name);
                      }}
                    >
                      {v.name}
                    </span>
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatMentionModal;
const Op = styled.span`
  border-bottom: 1px solid #49274b;
`;
