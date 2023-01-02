import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Workspace {
  Workspace_value: Map<string, string[]>;
  //hashed_value, channel들의 hashed_value
}

const initialState: Workspace = {
  Workspace_value: new Map<string, string[]>(),
};
export const WorkSpaceSlice = createSlice({
  name: "getMyWorkSpace",
  initialState,
  reducers: {
    enterWorkSpace: (state, action: PayloadAction<[string, string[]]>) => {
      const m = action.payload;
      state.Workspace_value.set(m[0], m[1]);
    },
    exitWorkSpace: (state, action: PayloadAction<[string, string[]]>) => {
      const m = action.payload;
      state.Workspace_value.delete(m[0]);
    },
  },
});

export const { enterWorkSpace, exitWorkSpace } = WorkSpaceSlice.actions;
export default WorkSpaceSlice.reducer;
