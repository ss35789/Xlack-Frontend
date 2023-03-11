import styled from "styled-components";
import { useState } from "react";

const ChatMentionModal = (props: any) => {
  const [callingMentionArr, setCallingMentionArr] = useState([
    {
      name: "Sangmin",
      state: "good",
    },
    {
      name: "test",
      state: "bad",
    },
  ]);
  return (
    <>
      <div className="text-left">
        <div className="right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {callingMentionArr &&
              callingMentionArr.map((v, i) => {
                return (
                  <a className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                    <span className="flex flex-col">{v.name}</span>
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
