import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65670dc964fcff8d730fa59e.mockapi.io/api";

export const getCars = createAsyncThunk("cars/getAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/advert");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
