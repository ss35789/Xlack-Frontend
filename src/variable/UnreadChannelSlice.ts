import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notification } from "../types/types";

interface struct {
  UnReadChannel: Notification[];
  CompleteGetUnreadChannel: boolean;
}

const initialState: struct = {
  UnReadChannel: [],
  CompleteGetUnreadChannel: false,
  // channel_hashed_value: "",
};

export const UnReadChannelSlice = createSlice({
  name: "unReadChannel",
  initialState,
  reducers: {
    getChannel: (state, action: PayloadAction<Notification>) => {
      state.UnReadChannel.push({
        channel_hashed_value: action.payload.channel_hashed_value,
        count: action.payload.count,
        workspace_hashed_value: action.payload.workspace_hashed_value,
      });
    },
    CompleteGetUnReadChannel: (state, action: PayloadAction<void>) => {
      state.CompleteGetUnreadChannel = true;
    },
  },
});

export const { getChannel, CompleteGetUnReadChannel } = UnReadChannelSlice.actions;
export default UnReadChannelSlice.reducer;
