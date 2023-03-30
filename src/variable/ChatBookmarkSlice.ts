import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface struct {
  ClickBookmark: boolean;
  UpdateBookmark: string[];
}

const initialState: struct = {
  ClickBookmark: false,
  UpdateBookmark: [],
};
export const ChatBookmarkSlice = createSlice({
  name: "ChatBookmark",
  initialState,
  reducers: {
    getBookmarkPage: (state, action: PayloadAction<void>) => {
      state.UpdateBookmark.push("df");
      state.UpdateBookmark.pop();
    },
    setClickBookmarkPage: (state, action: PayloadAction<boolean>) => {
      state.ClickBookmark = action.payload;
    },
  },
});

export const { getBookmarkPage, setClickBookmarkPage } = ChatBookmarkSlice.actions;

export default ChatBookmarkSlice.reducer;
