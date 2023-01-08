import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Ibetting, Idata } from "interfaces/interfaces";
import data from "./data.json";
export const initialState = {
  data: [] as Idata[],
  teamId: [] as Idata[],
  betting: {} as Ibetting,
  notification: false,
};

export const fetchData = createAsyncThunk("user/fetchData", async () => {
  return data;
});
export const reduserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addTeamId(state, action) {
      const id = action.payload;
      state.teamId = state.data.filter((team) => team.id == +id!);
    },
    betting(state, action) {
      console.log(action);
      const bid = action.payload.data;
      const team = action.payload.team;
      state.betting = { bid, team };
      state.notification = true;
      console.log(state.betting);
    },
    notificationNo(state) {
      state.notification = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export default reduserSlice.reducer;
