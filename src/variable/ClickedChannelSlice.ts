import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatChannelType, ChatType, CustomUserType, ReactionFetchType } from "../types/types";

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
    setClickedChannel: (state, action: PayloadAction<ChatChannelType>) => {
      state.channelData = action.payload;
    },
    findUserDataInClickedChannel: (state, action: PayloadAction<number>) => {
      state.channelData?.members.forEach(m => {
        if (action.payload === m.id) {
          state.findUserData = m;
        }
      });
    },
    findChannelHV: (state, action: PayloadAction<string>) => {
      state.channelData.hashed_value = action.payload.toString();
    },
    saveReaction: (state, action: PayloadAction<ReactionFetchType>) => {
      const reaction = action.payload;
      state.channelData.Chats.forEach(c => {
        if (Number(c.id) === reaction.chat_id) {
          if (reaction.reactors?.length) {
            c.reactions = (c.reactions || []).filter(r => r.icon !== reaction.icon);
            c.reactions.push(reaction);
          } else {
            c.reactions = (c.reactions || []).filter(r => r.icon !== reaction.icon);
          }
        }
      });
    },
  },
});

export const { setUnClickedChannel, setClickedChannel, findUserDataInClickedChannel, findChannelHV, saveReaction } = ClickedChannelSlice.actions;
export default ClickedChannelSlice.reducer;
