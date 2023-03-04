import { createSlice } from "@reduxjs/toolkit";

export const UpdateChannelSlice = createSlice({
  name: "UpdateChannel",
  initialState: {
    title: ["test"],
  },
  reducers: {
    Update: state => {
      state.title.push("asdf");
      state.title.pop();
    },
  },
});

export const { Update } = UpdateChannelSlice.actions;

export default UpdateChannelSlice.reducer;
