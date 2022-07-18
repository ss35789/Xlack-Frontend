import {createSlice} from '@reduxjs/toolkit';

export const AddChannelSlice=createSlice({
    name :'AddChannel',
    initialState:{
        title:[],
    },
    reducers:{
        createRoom: (state,action)=>{
            return[...state.title,action.payload.title]
        },
        
    },
});

export const {createRoom} = AddChannelSlice.actions;

export const selectRoomId= state =>state.app.roomId;

export default AddChannelSlice.reducer;