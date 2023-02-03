import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkspaceType } from "../components/types";

interface struct {
  MyWorkSpace: WorkspaceType[];
  ClickedWorkSpace: WorkspaceType;
}

const initialState: struct = {
  MyWorkSpace: [],
  ClickedWorkSpace: {
    created_at: "",
    updated_at: "",
    members: [],
    chat_channel: [],
    hashed_value: "",
    name: "",
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
    clearWorkSpace: (state) => {
      state.MyWorkSpace = [];
    },
    //현재 내가 클릭한 워크스페이스
    SetClickedWorkSpace: (state, action: PayloadAction<WorkspaceType>) => {
      state.ClickedWorkSpace = action.payload;
    },
    //현재 워크스페이스에서 channel.hashed_value를 이용해 channel의 정보 찾기
    SearchChannel: (state, action: PayloadAction<string>) => {
      state.ClickedWorkSpace.chat_channel.forEach((value) => {
        if (value.hashed_value === action.payload) {
          return value;
        }
      });
    },
  },
});

export const { getWorkSpace, clearWorkSpace } = WorkSpaceSlice.actions;
export default WorkSpaceSlice.reducer;
