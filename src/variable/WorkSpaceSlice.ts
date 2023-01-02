import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Workspace {
  Workspace_value: string;
  channels_value: string[];
  //hashed_value, channel들의 hashed_value
}

interface strut {
  hashed: Workspace[];
}

const initialState: strut = {
  hashed: [],
};

export const WorkSpaceSlice = createSlice({
  name: "getMyWorkSpace",
  initialState,
  reducers: {
    enterWorkSpace: (state, action: PayloadAction<string>) => {
      const m = action.payload.split("-");
      const c: string[] = [];
      m.forEach((ele) => {
        if (ele !== m[0]) c.push(ele);
      });

      state.hashed.push({ Workspace_value: m[0], channels_value: c });
    },
    exitWorkSpace: (state, action: PayloadAction<string>) => {
      const m = action.payload.split("-");
    },
  },
});

export const { enterWorkSpace, exitWorkSpace } = WorkSpaceSlice.actions;
export default WorkSpaceSlice.reducer;
