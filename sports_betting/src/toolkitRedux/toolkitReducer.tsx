import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Idata } from "interfaces/interfaces";
import data from "./data.json";
export const initialState = {
  data: [] as Idata[],
};

export const fetchData = createAsyncThunk("user/fetchData", async () => {
  return data;
});
export const reduserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      console.log(action);
      state.data = action.payload;
    });
  },
});
export default reduserSlice.reducer;
