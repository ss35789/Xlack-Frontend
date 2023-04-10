import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface struct {
  SendMessage: {
    //file: File | null;
    file_id: number | null;
  };
}

const initialState: struct = {
  SendMessage: {
    //file: null,
    file_id: null,
  },
};
export const ChatSlice = createSlice({
  name: "Chat",
  initialState,
  reducers: {
    // setFile: (state, action: PayloadAction<File>) => {
    //   state.SendMessage.file = action.payload;
    // },
    setFileId: (state, action: PayloadAction<number>) => {
      state.SendMessage.file_id = action.payload;
    },
  },
});

export const { setFileId } = ChatSlice.actions;
export default ChatSlice.reducer;
