import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkspaceType } from "../components/types";

interface strut {
  hashed: WorkspaceType[];
}

const initialState: strut = {
  hashed: [],
};

export const WorkSpaceSlice = createSlice({
  name: "getMyWorkSpace",
  initialState,
  reducers: {
    getWorkSpace: (state, action: PayloadAction<WorkspaceType>) => {
      const m = action.payload;
      state.hashed.push({
        created_at: m.created_at,
        updated_at: m.updated_at,
        members: m.members,
        chat_channel: m.chat_channel,
        hashed_value: m.hashed_value,
        name: m.name,
      });
    },
    clearWorkSpace: (state) => {
      state.hashed = [];
    },
  },
});

export const { getWorkSpace, clearWorkSpace } = WorkSpaceSlice.actions;
export default WorkSpaceSlice.reducer;
