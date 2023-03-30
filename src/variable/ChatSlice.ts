import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface struct {
  SendMessage: {
    message: string;
    fileData: File | null;
  };
}
const initialState: struct = {
  SendMessage: {
    message: File.name,
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
