import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const SignInApi = createAsyncThunk("login", async ({ data, router }) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/v1/users/singin`,
      data
    );
    router.push("/home");
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
});

export const SignUpApi = createAsyncThunk(
  "SignUp",
  async ({ data, router }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/users/signup`,
        data
      );
      router.push("/customer/verify-otp?type=new-account");

      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }
);

export const VerifyOTP = createAsyncThunk(
  "OTP",
  async ({ values, router, searchParams }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/users/verifyotp`,
        values
      );
      router.push(
        `/customer/verification-success?type=${
          searchParams.has("type") ? searchParams.get("type") : "new-account"
        }`
      );
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }
);

export const ForgotPassApi = createAsyncThunk(
  "ForgotPassApi",
  async ({ data, router }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/users/forgotpassword`,
        data
      );
      router.push("/customer/verify-otp?type=forgot-password");

      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }
);

export const ResetPassApi = createAsyncThunk(
  "ResetPassApi",
  async ({ data, router }) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/users/resetpassword`,
        data
      );
      router.push("/home");

      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }
);

const initialState = {
  isLoading: false,
  user: null,
  data: [],
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(SignInApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(SignInApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      toast.success(action?.payload?.message);

      state.error = null;
    });
    builder.addCase(SignInApi.rejected, (state, action) => {
      state.isLoading = false;

      state.error = action.payload;
    });
    builder.addCase(SignUpApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(SignUpApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;

      toast.success(action?.payload?.message);
      state.error = null;
    });
    builder.addCase(SignUpApi.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(VerifyOTP.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(VerifyOTP.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(VerifyOTP.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(ForgotPassApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(ForgotPassApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(ForgotPassApi.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(ResetPassApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(ResetPassApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(ResetPassApi.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
