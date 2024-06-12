import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

let apiUrl = `${process.env.NEXT_PUBLIC_AMADEUS_API_URL}/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2024-07-19&adults=1&nonStop=false&max=250`;
let access_token = "yiXXto4VlLJ1tQotDQm7GNNFXItQ";
export const getFlightOffers = createAsyncThunk("flights", async () => {
  try {
    const response = await axios.post(``);
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
});

const initialState = {
  flightsData: null,
  isLoading: false,
  error: null,
};

const flightsSlice = createSlice({
  name: "FlightsSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getFlightOffers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFlightOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.flightsData = action.payload;
      })
      .addCase(getFlightOffers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.flightsData = null;
      });
  },
});

export const { actions } = flightsSlice;
export default flightsSlice.reducer;
