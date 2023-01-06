import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  isShowDetail: false,
  currentProduct: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    showDetail(state) {
      state.isShowDetail = true;
      console.log("show modal");
    },
    hideDetail(state) {
      state.isShowDetail = false;
      console.log("hide modal");
    },
    setCurrent(state, actions) {
      state.currentProduct = actions.payload;
    },
  },
});

const store = configureStore({ reducer: { modal: modalSlice.reducer } });

export const modalAction = modalSlice.actions;

export default store;
