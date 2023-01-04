import { configureStore } from "@reduxjs/toolkit";
import ClickedChannelReducer from "../variable/ClickedChannelSlice";
import UpdateChannelReducer from "../variable/UpdateChannelSlice";
import UpdateChatContextReducer from "../variable/UpdateChatContextSlice";
import WorkSpaceReducer from "../variable/WorkSpaceSlice";

export const store = configureStore({
  reducer: {
    ClickedChannel: ClickedChannelReducer,
    UpdateChannel: UpdateChannelReducer,
    UpdateChatContext: UpdateChatContextReducer,
    getMyWorkSpace: WorkSpaceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
