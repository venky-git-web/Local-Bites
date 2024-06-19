import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["hello","Pizza"],
  },
  reducers: {
      addItem: (state, action) => {
          //addItem and removeItem and clear cart all are reducer functions
          //mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const {addItem,removeItem,clearCart} =cartSlice.actions

export default cartSlice.reducer;
