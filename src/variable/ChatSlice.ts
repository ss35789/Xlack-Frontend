import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface struct {
  SendMessage: {
    fileData: File | null;
  };
}

const initialState: struct = {
  SendMessage: {
    fileData: null,
  },
};
export const ChatSlice = createSlice({
  name: "Chat",
  initialState,
  reducers: {
    setFile: (state, action: PayloadAction<File>) => {
      state.SendMessage.fileData = action.payload;
    },
  },
});

export const { setFile } = ChatSlice.actions;
export default ChatSlice.reducer;
