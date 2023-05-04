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
export const ChatReactionSlice = createSlice({
  name: "Reaction",
  initialState,
  reducers: {
    setClickedChatReaction: (state, action: PayloadAction<ReactionType>) => {
      state.reactionData = action.payload;
    },
  },
});

export const { setClickedChatReaction } = ChatReactionSlice.actions;
export default ChatReactionSlice.reducer;
