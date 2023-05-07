import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactionType } from "../types/types";

interface Struct {
  reactionData: ReactionType;
}

const initialState: Struct = {
  reactionData: {
    mode: "",
    icon: "",
    chat_id: 0,
  },
};
export const ChatReactionUISlice = createSlice({
  name: "Reaction",
  initialState,
  reducers: {
    setUIChatReaction: (state, action: PayloadAction<ReactionType>) => {
      state.reactionData = action.payload;
    },
  },
});

export const { setUIChatReaction } = ChatReactionUISlice.actions;
export default ChatReactionUISlice.reducer;
