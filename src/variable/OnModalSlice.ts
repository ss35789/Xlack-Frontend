import { createSlice } from "@reduxjs/toolkit";

export const OnModalSlice = createSlice({
  name: "OnModal",
  initialState: {
    OnEditProfilePage: false,
    OnEditContactInfo: false,
    OnChannelSetting: false,
  },
  reducers: {
    EditProfileOnOff: (state) => {
      state.OnEditProfilePage = !state.OnEditProfilePage;
    },
    EditContactInfoOnOff: (state) => {
      state.OnEditContactInfo = !state.OnEditContactInfo;
    },
    ChannelSettingOnOff: (state) => {
      state.OnChannelSetting = !state.OnChannelSetting;
    },
  },
});

export const { EditProfileOnOff, EditContactInfoOnOff, ChannelSettingOnOff } =
  OnModalSlice.actions;

export default OnModalSlice.reducer;
