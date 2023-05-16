import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import products from '../../databases/products.json';

const initialState = {
  status: 'idle',
  isLoading: false,
  isSuccess: false,
  isError: false,
  products: [],
};

export const getProducts = createAsyncThunk('all_products', async () => {
  let response = products;

  if (response.length > 0) {
    return response;
  } else {
    return [];
  }
});

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isSuccess = true;
        // console.log('payload', payload);
        state.products = payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export default ProductSlice.reducer;
