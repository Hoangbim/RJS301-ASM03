import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialModalState = {
  isShowDetail: false,
  isShopPage: false,
};

const initialProductState = {
  isInit: true,
  initProducts: [],
  currentProduct: {},
  filterProducts: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {
    shopPageClicked(state) {
      state.isInit = false;
    },
    shopPageInit(state) {
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
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    showDetail(state) {
      state.isShowDetail = true;
      console.log('show modal');
    },
    hideDetail(state) {
      state.isShowDetail = false;
      console.log('hide modal');
    },
    setShopPage(state) {
      state.isShopPage = true;
    },
    setHomePage(state) {
      state.isShopPage = false;
    },
  },
});

const store = configureStore({
  reducer: { modal: modalSlice.reducer, product: productSlice.reducer },
});

export const modalAction = modalSlice.actions;
export const productAction = productSlice.actions;

export default store;
