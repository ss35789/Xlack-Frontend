import {createSlice, PayloadAction} from '@reduxjs/toolkit';




export const AddChannelSlice=createSlice({
    name :'AddChannel',
    initialState: {
        title:['test'],
    },
    reducers:{
        createRoom: (state,action: PayloadAction<string>)=>{
           state.title.push(action.payload)
        },
        
    },
});

export const {createRoom} = AddChannelSlice.actions;


export default AddChannelSlice.reducer;