import { configureStore } from '@reduxjs/toolkit';
import EnterRoomReducer from '../features/EnterChannelSlice';
import AddChannelReducer from '../features/AddChannelSlice';

export const store = configureStore({
  reducer: {
    enterRoom: EnterRoomReducer,
    AddChannel: AddChannelReducer
  },
});
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
