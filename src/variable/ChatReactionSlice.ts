import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatType, ReactionType } from "../types/types";

interface Struct {
  reactionData: ReactionType;
  reactionArray: string[];
}

const initialState: Struct = {
  reactionData: {
    mode: "",
    icon: "",
    chat_id: 0,
  },
  reactionArray: [],
};
export const ChatReactionSlice = createSlice({
  name: "Reaction",
  initialState,
  reducers: {
    setClickedChatReaction: (state, action: PayloadAction<ReactionType>) => {
      state.reactionData = action.payload;
    },
    setPushPopReactionArray: (state, action: PayloadAction<string>) => {
      if (state.reactionArray.includes(action.payload)) {
        state.reactionArray.splice(state.reactionArray.indexOf(action.payload), 1);
      } else {
        state.reactionArray.push(action.payload);
      }
    },
  },
});

export const { setClickedChatReaction, setPushPopReactionArray } = ChatReactionSlice.actions;
export default ChatReactionSlice.reducer;
