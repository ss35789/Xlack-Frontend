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
    setClickedChannel: (state, action: PayloadAction<ChatChannelType>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.hashed_value = action.payload.hashed_value;
      state.description = action.payload.description;
      state.members = action.payload.members;
      state.admins = action.payload.admins;
    },
  },
});

export const { setClickedChannel } = ClickedChannelSlice.actions;
export default ClickedChannelSlice.reducer;
