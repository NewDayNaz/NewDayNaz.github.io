import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Data

const initialState = {
  isLoading: false,
  error: "",
  data: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState
});

export const selectIsLoading = (state) => state.home.isLoading;
export const selectError = (state) => state.home.error;
export const selectData = (state) => state.home.data;

export default homeSlice.reducer;
