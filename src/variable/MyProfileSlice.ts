import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomUserType } from "../types/types";

interface struct {
  userData: CustomUserType;
}

const initialState: struct = {
  userData: {
    username: "default_username",
    email: "default_email",
    display_name: "default_display_name",
    title: "default_title",
    phone_number: "default_phone_number",
    profile_image: "default_profile_image",
  },
};

export const MyProfileSlice = createSlice({
  name: "getMyProfile",
  initialState,
  reducers: {
    getMyProfile: (state, action: PayloadAction<CustomUserType>) => {
      state.userData = action.payload;
    },
  },
});

export const { getMyProfile } = MyProfileSlice.actions;
export default MyProfileSlice.reducer;
