import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatChannelType, CustomUserType } from "../types/types";

interface struct {
  channelData: ChatChannelType;
  findUserData: CustomUserType;
}

const initialState: struct = {
  channelData: {
    id: -1,
    name: "",
    hashed_value: "",
    description: "",
    members: [],
    admins: [],
  },
  findUserData: {
    id: -1,
    username: "",
    email: "",
    display_name: "",
    title: "",
    phone_number: "",
    profile_image: "",
  },
};
export const ClickedChannelSlice = createSlice({
  name: "ClickedChannel",
  initialState,
  reducers: {
    setClickedChannel: (state, action: PayloadAction<ChatChannelType>) => {
      state.channelData = action.payload;
    },
    findUserDataInClickedChannel: (state, action: PayloadAction<number>) => {
      state.channelData.members.forEach(m => {
        if (action.payload === m.id) {
          state.findUserData = m;
        }
      });
    },
  },
});

export const { setClickedChannel, findUserDataInClickedChannel } = ClickedChannelSlice.actions;
export default ClickedChannelSlice.reducer;
