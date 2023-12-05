import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "../services/operations";

const initialState = {
  cars: [],
  status: "idle",
  error: null,
};
const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.status = "fulfilled";
        state.cars = payload;
        state.error = "";
        console.log("Request fulfilled with data:", payload);
      })
      .addCase(getCars.rejected, (state, { payload }) => {
        state.status = "rejected";
        state.error = payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
