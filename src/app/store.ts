import { configureStore } from "@reduxjs/toolkit";
import EnterRoomReducer from "../variable/EnterChannelSlice";
import UpdateChannelReducer from "../variable/UpdateChannelSlice";
import UpdateChatContextReducer from "../variable/UpdateChatContextSlice";
import WorkSpaceReducer from "../variable/WorkSpaceSlice";
import ChannelSliceReducer from "../variable/ChannelSlice";

export const store = configureStore({
  reducer: {
    enterRoom: EnterRoomReducer,
    UpdateChannel: UpdateChannelReducer,
    UpdateChatContext: UpdateChatContextReducer,
    getMyWorkSpace: WorkSpaceReducer,
    getMyChannel: ChannelSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
