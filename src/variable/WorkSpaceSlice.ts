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
    enterWorkSpace: (state, action: PayloadAction<[string, string[]]>) => {
      const m = action.payload;
      state.hashed.push({ Workspace_value: m[0], channels_value: m[1] });
    },
    exitWorkSpace: (state, action: PayloadAction<string>) => {
      const m = action.payload;
      state.hashed.forEach((ele, i) => {
        if (m === ele.Workspace_value) {
          state.hashed.splice(i, 1);
        }
      });
    },
    exitChannel: (state, action: PayloadAction<[string, string]>) => {
      const m = action.payload;
      // m = channel의 hashed_value
      state.hashed.forEach((workspace, i) => {
        if (m[0] === workspace.Workspace_value) {
          workspace.channels_value.forEach((channel, i) => {
            if (m[1] === channel) workspace.channels_value.splice(i, 1);
          });
        }
      });
    },
  },
});

export const { enterWorkSpace, exitWorkSpace, exitChannel } =
  WorkSpaceSlice.actions;
export default WorkSpaceSlice.reducer;
