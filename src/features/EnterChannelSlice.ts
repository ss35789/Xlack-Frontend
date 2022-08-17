import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface enterRoomState {
    roomId: number;
    socketPath: URL | string;
}

const initialState: enterRoomState = {
    roomId: 0,
    socketPath: ``,
};
export const EnterRoomSlice = createSlice({
    name: 'enterRoom',
    initialState,
    reducers: {
        enterRoom: (state, action: PayloadAction<number>) => {
            state.roomId = action.payload;
        },
        WebSocketUrl: (state, action: PayloadAction<string>) => {
            state.socketPath = action.payload;
        },
    },
});

export const {enterRoom} = EnterRoomSlice.actions;
export const {WebSocketUrl} = EnterRoomSlice.actions;

export default EnterRoomSlice.reducer;
