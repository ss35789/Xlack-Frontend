import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatChannelType, WorkspaceType } from "../components/types";

interface struct {
  MyWorkSpace: WorkspaceType[];
  rightClicked_channel_hashed_value: string;
  ClickedWorkSpace_hashed_value: string;
  ClickedWorkSpace: WorkspaceType;
  SearchedChannel: ChatChannelType;
}

const initialState: struct = {
  MyWorkSpace: [],
  rightClicked_channel_hashed_value: "",
  ClickedWorkSpace_hashed_value: "",
  ClickedWorkSpace: {
    created_at: "",
    updated_at: "",
    members: [],
    chat_channel: [],
    hashed_value: "",
    name: "",
  },
  SearchedChannel: {
    id: "",
    name: "default",
    hashed_value: "",
    description: "",
    members: [],
    admins: [],
  },
};

export const WorkSpaceSlice = createSlice({
  name: "getMyWorkSpace",
  initialState,
  reducers: {
    getWorkSpace: (state, action: PayloadAction<WorkspaceType>) => {
      const m = action.payload;
      state.MyWorkSpace.push({
        created_at: m.created_at,
        updated_at: m.updated_at,
        members: m.members,
        chat_channel: m.chat_channel,
        hashed_value: m.hashed_value,
        name: m.name,
      });
    },
    clearWorkSpace: state => {
      state.MyWorkSpace = [];
    },
    //현재 내가 클릭한 워크스페이스

    SetClickedWorkSpace: (state, action: PayloadAction<string>) => {
      state.ClickedWorkSpace_hashed_value = action.payload;
    },

    CallClickedWorkSpace: (state, action: PayloadAction<void>) => {
      const w = state.ClickedWorkSpace_hashed_value;
      state.MyWorkSpace.forEach(value => {
        if (value.hashed_value === w) {
          state.ClickedWorkSpace = value;
        }
      });
    },
    //현재 워크스페이스에서 channel.hashed_value를 이용해 channel의 정보 찾기
    SearchChannel: (state, action: PayloadAction<void>) => {
      const r = state.rightClicked_channel_hashed_value;
      state.ClickedWorkSpace.chat_channel.forEach(value => {
        if (value.hashed_value === r) {
          state.SearchedChannel = value;
        }
      });
    },
    rightClick_channel: (state, action: PayloadAction<string>) => {
      state.rightClicked_channel_hashed_value = action.payload;
    },
  },
});

export const { getWorkSpace, clearWorkSpace, SetClickedWorkSpace, CallClickedWorkSpace, SearchChannel, rightClick_channel } = WorkSpaceSlice.actions;
export default WorkSpaceSlice.reducer;
