import { PushpinOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ChatOption = () => {
  return (
    <>
      chatOPtions
      <Icon>
        <PushpinOutlined />
      </Icon>
    </>
  );
};

export default ChatOption;

const Icon = styled.span`
  :hover {
    cursor: pointer;
    opacity: 0.6;
    background-color: #9ca3af;
  }
`;
