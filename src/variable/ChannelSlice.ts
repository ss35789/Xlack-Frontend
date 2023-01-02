import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomUserType } from "../components/types";

interface Channel {
  name: string;
  channels_value: string;
  members: CustomUserType[];
  //hashed_value, channel들의 hashed_value
}

interface strut {
  hashed: Channel[];
}

const initialState: strut = {
  hashed: [],
};

export const ChannelSlice = createSlice({
  name: "getMyChannel",
  initialState,
  reducers: {
    enterChannel: (
      state,
      action: PayloadAction<[string, string, CustomUserType[]]>
    ) => {
      const m = action.payload;
      state.hashed.push({
        name: m[0],
        channels_value: m[1],
        members: m[2],
      });
    },
  },
});

export const { enterChannel } = ChannelSlice.actions;
export default ChannelSlice.reducer;
