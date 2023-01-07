import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  isShowDetail: false,
};

const initialProductState = {
  isInit: true,
  initProducts: [],
  currentProduct: {},
  filterProducts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {
    clicked(state) {
      state.isInit = false;
    },
    init(state) {
      state.isInit = true;
    },
    setInit(state, actions) {
      state.initProducts = actions.payload;
    },
    setCurrent(state, actions) {
      state.currentProduct = actions.payload;
    },

    setFilterProduct(state, actions) {
      state.filterProducts = actions.payload;
    },
  },
});

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
  },
});

const store = configureStore({
  reducer: { modal: modalSlice.reducer, product: productSlice.reducer },
});

export const modalAction = modalSlice.actions;
export const productAction = productSlice.actions;

export default store;
