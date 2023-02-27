import { createSlice } from "@reduxjs/toolkit";

export const ChatBookmarkSlice = createSlice({
  name: "ChatBookmark",
  initialState: {
    receiveMessage: false, // 바뀌면 새로운 메세지가 수신되었다는 것
  },
  reducers: {
    getChatBookmark: state => {
      state.receiveMessage = !state.receiveMessage;
    },
  },
});

export const { getChatBookmark } = ChatBookmarkSlice.actions;

export default ChatBookmarkSlice.reducer;
