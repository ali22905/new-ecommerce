import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    cart: null,
  },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      state.cart = action.payload.cart;
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.cart = null;
    },
    likeProduct: (state, action) => {
      if(state.currentUser.favs.includes(action.payload)) {
        state.currentUser.favs.splice(state.currentUser.favs.indexOf(action.payload), 1)
      }else {
        state.currentUser.favs.push(action.payload)
      }
    },
    resetLikes: (state, action) => {
      state.currentUser.favs = action.payload
    },
    updateCart: (state, action) => {
      state.currentUser.cart = action.payload
      state.cart = action.payload
    },
  },
});

export const { login, logoutUser, likeProduct, resetLikes, updateCart } = userSlice.actions;
export default userSlice.reducer;