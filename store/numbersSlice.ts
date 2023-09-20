import { createSlice } from "@reduxjs/toolkit";

interface NumbersSlice {
  numbers: {
    timestamp: number;
    value: number;
  }[];
}

const initialState: NumbersSlice = {
  numbers: [],
};

const numbersSlice = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    pushNumber: (state, action) => {
      state.numbers.push(action.payload);
      if (state.numbers.length > 10) {
        state.numbers = state.numbers.slice(1);
      }
    },
  },
});

export default numbersSlice;

export const numbersAction = numbersSlice.actions;
