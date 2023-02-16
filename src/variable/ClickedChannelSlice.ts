import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatChannelType } from "../components/types";

const initialState: ChatChannelType = {
  id: "",
  name: "",
  hashed_value: "",
  description: "",
  members: [],
  admins: [],
};
export const ClickedChannelSlice = createSlice({
  name: "ClickedChannel",
  initialState,
  reducers: {
    ClickedChannel: (state, action: PayloadAction<ChatChannelType>) => {
      state = action.payload;
    },
  },
});

export const { ClickedChannel } = ClickedChannelSlice.actions;
export default ClickedChannelSlice.reducer;
