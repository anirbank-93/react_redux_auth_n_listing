import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userDb from '../../databases/db.json';

const initialState = {
  status: 'idle',
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {},
  user_details: {},
};

export const login = createAsyncThunk('user_login', async (data) => {
  let response = userDb.users.find(
    (item) => item.email == data.email && item.password == data.password
  );
  console.log('redux response', response);

  if (Object.keys(response).length > 0) {
    localStorage.setItem('user', JSON.stringify(response));
    return response;
  } else {
    return data.rejectedWithValue();
  }
});

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    clearState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isSuccess = true;
        // console.log('payload', payload);
        state.user_details = payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export const { clearState } = LoginSlice.actions;

export default LoginSlice.reducer;
