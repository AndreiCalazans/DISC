import { configureStore, createSlice } from "@reduxjs/toolkit";

const indexSlice = createSlice({
  name: "index",
  initialState: 0,
  reducers: {
    nextPage: (state) => state + 1,
  },
});

const initialResults = { w: 0, x: 0, y: 0, z: 0 };

const resultsSlice = createSlice({
  name: "results",
  initialState: initialResults,
  reducers: {
    addResult: (state, action) => {
      const { letter, value } = action.payload;
      const numeric = Number(value);
      if (letter in state) {
        state[letter] = state[letter] + numeric;
      }
    },
  },
});

export const { nextPage } = indexSlice.actions;
export const { addResult } = resultsSlice.actions;

export const store = configureStore({
  reducer: {
    index: indexSlice.reducer,
    results: resultsSlice.reducer,
  },
});
