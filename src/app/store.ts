import { configureStore } from "@reduxjs/toolkit";
import EnterRoomReducer from "../variable/EnterChannelSlice";
import UpdateChannelReducer from "../variable/UpdateChannelSlice";
import UpdateChatContextReducer from "../variable/UpdateChatContextSlice";

export const store = configureStore({
  reducer: {
    enterRoom: EnterRoomReducer,
    UpdateChannel: UpdateChannelReducer,
    UpdateChatContext: UpdateChatContextReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
