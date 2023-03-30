import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const UpdateChannelSlice = createSlice({
  name: "UpdateChannel",
  initialState: {
    title: ["test"],
    lastAddedChannel_hv: "",
  },
  reducers: {
    Update: state => {
      state.title.push("asdf");
      state.title.pop();
    },
    ConnectWebSocketAddedChannel: (state, action: PayloadAction<string>) => {
      const AddedChannel_hv = action.payload;
      state.lastAddedChannel_hv = AddedChannel_hv;
    },
  },
});

export const { Update, ConnectWebSocketAddedChannel } = UpdateChannelSlice.actions;

export default UpdateChannelSlice.reducer;
