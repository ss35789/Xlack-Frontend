import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatChannelType, CustomUserType } from "../types/types";

interface struct {
  channel_hv: string;
  channelData: ChatChannelType;
  findUserData: CustomUserType;
}

const initialState: struct = {
  channel_hv: "",
  channelData: {
    id: -1,
    name: "",
    hashed_value: "",
    description: "",
    Chats: [],
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
    setUnClickedChannel: (state, action: PayloadAction<void>) => {
      state.channelData = initialState.channelData;
    },
    setClickedChannel_hv: (state, action: PayloadAction<string>) => {
      state.channel_hv = action.payload;
    },
    setClickedChannel: (state, action: PayloadAction<ChatChannelType>) => {
      state.channel_hv = action.payload.hashed_value;
      state.channelData = action.payload;
    },
    findUserDataInClickedChannel: (state, action: PayloadAction<number>) => {
      state.channelData?.members.forEach(m => {
        if (action.payload === m.id) {
          state.findUserData = m;
        }
      });
    },
    ClickBookMark: (state, action: PayloadAction<string>) => {
      const cid = action.payload;
      state.channelData.Chats?.forEach(c => {
        if (c.id === cid) {
          c.has_bookmarked = !c.has_bookmarked;
        }
      });
    },
  },
});

export const { setUnClickedChannel, setClickedChannel, setClickedChannel_hv, findUserDataInClickedChannel, ClickBookMark } = ClickedChannelSlice.actions;
export default ClickedChannelSlice.reducer;
