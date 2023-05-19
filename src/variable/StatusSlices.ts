import { Status } from "../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface struct {
  statusData: Status;
}
const initialState: struct = {
  statusData: {
    status_message: "Default Status Message",
    status_icon: "Default Status Icon",
    until: "after some minutes",
  },
};
export const StatusSlice = createSlice({
  name: "ClickedStatus",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<Status>) => {
      state.statusData = action.payload;
    },
  },
});

export const { setStatus } = StatusSlice.actions;
export default StatusSlice.reducer;
