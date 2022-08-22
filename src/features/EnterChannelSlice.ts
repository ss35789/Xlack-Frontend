import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface enterRoomState {
    roomId: number;
    socketPath?: URL | string;
}

const initialState: enterRoomState = {
    roomId: 13,
    socketPath: `ws://xlack.kreimben.com/ws/chat/13`,
};
export const EnterRoomSlice = createSlice({
    name: 'enterRoom',
    initialState,
    reducers: {
        enterRoom: (state, action: PayloadAction<number>) => {
            state.roomId = action.payload;
        },
    },
});

export const {enterRoom} = EnterRoomSlice.actions;
export default EnterRoomSlice.reducer;
