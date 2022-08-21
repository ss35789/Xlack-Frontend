import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface enterRoomState {
    roomId: number;
    socketPath?: URL | string;
    socket?: WebSocket;
}

const initialState: enterRoomState = {
    roomId: 0,
};
export const EnterRoomSlice = createSlice({
    name: 'enterRoom',
    initialState,
    reducers: {
        enterRoom: (state, action: PayloadAction<number>) => {
            state.roomId = action.payload;
        },
        setWebSocket: (state, action: PayloadAction<string>) => {
            if (state.socket) {
                state.socket.close();
            }
            state.socketPath = action.payload;
            state.socket = new WebSocket(state.socketPath);
        },
    },
});

export const {enterRoom} = EnterRoomSlice.actions;
export const {setWebSocket} = EnterRoomSlice.actions;

export default EnterRoomSlice.reducer;
