import {createSlice , PayloadAction} from '@reduxjs/toolkit';

interface enterRoomState{
    roomId:number;
}

const initialState:enterRoomState={
    roomId:0,
}
export const appSlice=createSlice({
    name :'app',
    initialState,
    reducers:{
        enterRoom: (state,action: PayloadAction<number>)=>{
            state.roomId=action.payload;
        },
        
    },
});

export const {enterRoom} = appSlice.actions;
export const selectRoomId : number= 3;

export default appSlice.reducer;