import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';
import AddChannelReducer from '../features/AddChannelSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    AddChannel: AddChannelReducer
  },
});
export default store;
