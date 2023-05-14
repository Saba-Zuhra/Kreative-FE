import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
  discount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const productIndex = state.products.findIndex((p) => p._id === product._id);
      if (productIndex >= 0) {
        state.products[productIndex].quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
      state.total += product.retail_price;
    },
    removeProduct: (state, action) => {
      const product = action.payload;
      const productIndex = state.products.findIndex((p) => p._id === product._id);
      if (productIndex >= 0) {
        state.products.splice(productIndex, 1);
        state.total -= product.retail_price * product.quantity;
      }
    },
    increaseQuantity: (state, action) => {
      const product = action.payload;
      const productIndex = state.products.findIndex((p) => p._id === product._id);
      if (productIndex >= 0) {
        state.products[productIndex].quantity += 1;
        state.total += product.retail_price;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = action.payload;
      const productIndex = state.products.findIndex((p) => p._id === product._id);
      if (productIndex >= 0) {
        state.products[productIndex].quantity -= 1;
        state.total -= product.retail_price;

        if (state.products[productIndex].quantity === 0) {
          state.products.splice(productIndex, 1);
        }
      }
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
    clearCart: (state) => {
      state.products = [];
      state.total = 0;
      state.discount = 0;
    },
    getCartAfterLogin: (state, action) => {
      state.products = action.payload.products;
      state.total = action.payload.total;
      state.discount = action.payload.discount;
    }
  }
});

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity, setDiscount, clearCart, getCartAfterLogin } = cartSlice.actions;
export const { reducers } = cartSlice;