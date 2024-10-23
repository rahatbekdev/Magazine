import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../redux/slices/cardSlice";

const store = configureStore({
  reducer: {
    card: cardSlice,
  },
});

export default store;
