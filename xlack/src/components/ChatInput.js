import React from 'react'
import styled from 'styled-components';

function ChatInput({channelName, channelId}) {

    const sendMessage=e=>{
        e.preventDefault();
    }

  return (
    <ChatInputContainer>
        <form>
          <input className='text'placeholder={'Message #Room'} />
          <input className='btn'type='button' value='send' onClick={sendMessage}/>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer=styled.div`
  border-radius: 20px;

  >form{
    position: relative;
    display: flex;
    justify-content: center;
  }
  >form >.text{
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  >form > .btn{
    display: none !important;
  }
`;