import { createSlice } from "@reduxjs/toolkit";

export const OnEditProfileSlice = createSlice({
  name: "OnEditProfile",
  initialState: {
    OnEditProfilePage: false, // 바뀌면 새로운 메세지가 수신되었다는 것
  },
  reducers: {
    switchOnOff: (state) => {
      state.OnEditProfilePage = !state.OnEditProfilePage;
    },
  },
});

export const { switchOnOff } = OnEditProfileSlice.actions;

export default OnEditProfileSlice.reducer;
