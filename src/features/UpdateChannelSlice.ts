import {createSlice, PayloadAction} from '@reduxjs/toolkit';




export const UpdateChannelSlice=createSlice({
    name :'UpdateChannel',
    initialState: {
        title:['test'],
    },
    reducers:{
        createRoom: (state,action: PayloadAction<string>)=>{
           state.title.push(action.payload)
        },
        UpdateRoom:(state)=>{
            state.title.push('asdf')
            state.title.pop()
        }
        
    },
});

export const {createRoom} = UpdateChannelSlice.actions;
export const {UpdateRoom} = UpdateChannelSlice.actions;


export default UpdateChannelSlice.reducer;