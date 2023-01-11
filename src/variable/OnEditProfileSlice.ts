import { createSlice } from "@reduxjs/toolkit";

export const OnEditProfileSlice = createSlice({
  name: "OnEditProfile",
  initialState: {
    OnEditProfilePage: false,
    OnEditContactInfo: false, // 바뀌면 새로운 메세지가 수신되었다는 것
  },
  reducers: {
    EditProfileOnOff: (state) => {
      state.OnEditProfilePage = !state.OnEditProfilePage;
    },
    EditContactInfoOnOff: (state) => {
      state.OnEditContactInfo = !state.OnEditContactInfo;
    },
  },
});

export const { EditProfileOnOff, EditContactInfoOnOff } =
  OnEditProfileSlice.actions;

export default OnEditProfileSlice.reducer;
