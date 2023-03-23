import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notification } from "../types/types";

interface struct {
  UnReadChannel: Notification[];
  channel: Notification;
}

const initialState: struct = {
  UnReadChannel: [],
  // channel_hashed_value: "",
  channel: {
    channel_hashed_value: "",
    workspace_hashed_value: "",
    count: 0,
  },
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
  },
});

export const { getChannel } = UnReadChannelSlice.actions;
export default UnReadChannelSlice.reducer;
