import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Workspace {
  Workspace_hashed_value: string[];
}

const initialState: Workspace = {
  Workspace_hashed_value: [],
};
export const WorkSpaceSlice = createSlice({
  name: "getMyWorkSpace",
  initialState,
  reducers: {
    enterWorkSpace: (state, action: PayloadAction<string>) => {
      state.Workspace_hashed_value.push(action.payload);
    },
    exitWorkSpace: (state, action: PayloadAction<string>) => {
      const index = state.Workspace_hashed_value.indexOf(action.payload);

      if (index !== -1) {
        state.Workspace_hashed_value.splice(index, 1);
      }
    },
  },
});

export const { enterWorkSpace, exitWorkSpace } = WorkSpaceSlice.actions;
export default WorkSpaceSlice.reducer;
