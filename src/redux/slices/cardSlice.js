import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardItems: [],
  totalAmound: 0,
  totalQuantity: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cardItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cardItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmound = state.cardItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),0
      );
      // console.log(state.totalQuantity);
      // console.log(state.cardItems);
      // console.log(newItem);
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cardItems.find((el) => el.id === id);

      if (existingItem) {
        state.cardItems = state.cardItems.filter((el) => el.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmound = state.cardItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});

export const cardActions = cardSlice.actions;

export default cardSlice.reducer;
