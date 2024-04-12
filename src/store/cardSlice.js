import { createSlice } from "@reduxjs/toolkit";
import { CHARACTER } from "../assets/CHARACTER";

function filtered(key, value) {
  value.validFilter = true;
  if (key === "all") value.validFilter = true;
  if (key === "isLike" && value === true) value.validFilter = true;
  if (key === "isLike" && value === false) value.validFilter = true;

  return value;
}

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    card: { CHARACTER },
    newcard: [],
    ident: 0,
    keyFilter: "all",
  },
  reducers: {
    add(state, action) {
        // console.log("action", action.payload[0]);
        
    //   const newCard = {
    //     id: state.ident,
    //     chapterFilter: action.payload[0],
    //     chapter: state.card.card,
    //     completed: false,
    //     validFilter: false,
    //   };
    //   const modNewCard = filtered(state.keyFilter, newCard);
    //   console.log("modNewCard", modNewCard);
    //   console.log("newCard", newCard);

    //   state.newcard.push(modNewCard);
    //   state.ident = state.ident + 1;
      state.newcard = action.payload;
    },
  },
});

export const { add } = cardSlice.actions;

export const bioSelector = (state) => state.card.card;

export const filterSelector = (state) => state.card.newcard;

export default cardSlice.reducer;
