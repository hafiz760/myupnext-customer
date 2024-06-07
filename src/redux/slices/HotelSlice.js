import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const GetMultipleHotels = createAsyncThunk("hotels", async () => {
  try {
    const response = await axios.post(``);
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
});

export const GetHotelById = createAsyncThunk("hotelById", async (id) => {
  try {
    const response = await axios.post(``);
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
});

const initialState = {
  hotelData: null,
  hotelByIdData: null,
  error: null,
  isLoading: false,
};

const hotelSlice = createSlice({
  name: "HotelSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetMultipleHotels.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(GetMultipleHotels.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hotelData = action.payload;
      })
      .addCase(GetMultipleHotels.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(GetHotelById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(GetHotelById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hotelByIdData = action.payload;
      })
      .addCase(GetHotelById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions } = hotelSlice;
export default hotelSlice.reducer;
