import { Status } from "../components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Status = {
  status_message: "",
  status_icon: "",
  until: 0,
};
export const StatusSlice = createSlice({
  name: "ClickedStatus",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status_message = action.payload.status_message;
      state.status_icon = action.payload.status_icon;
      state.until = action.payload.until;
    },
  },
});

export const { setStatus } = StatusSlice.actions;
export default StatusSlice.reducer;
