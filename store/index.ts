import { configureStore } from "@reduxjs/toolkit";
import numbersSlice from "./numbersSlice";

const store = configureStore({
  reducer: {
    numbers: numbersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
