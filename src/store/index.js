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

const initialUserArr = [];

const initialCartsArr = {
  user: 'hoang',
  carts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartsArr,
  reducers: {
    addToCart(state, actions) {
      if (state.carts.length === 0) {
        console.log('giỏ hàng trống, thêm sản phẩm vào giỏ');
        state.carts = [...state.carts, actions.payload];
      } else {
        // // console.log('carts đã có sản phẩm');
        // let check = false;
        // //nếu sản phẩm đã có trong giỏ hàng thì tăng số lượng
        // state.carts.forEach((item, i) => {
        //   if (item.name === actions.payload.name) {
        //     check = true;
        //     console.log('trong giỏ hàng có sản phẩm trùng, thêm số lượng');
        //     state.carts[i].quantity += actions.payload.quantity;
        //   }
        // });

        // //nếu chưa có sản phẩm hiện tại trong giỏ hàng thì thêm vào giỏ
        // if (!check) {
        //   console.log('trong giỏ hàng không có sản phẩm trùng');
        //   // state.carts.push(actions.payload);

        //   console.log(state.carts);
        //   state.carts = [...state.carts, actions.payload];
        // }

        let check = false;
        for (let i = 0; i < state.carts.length; i++) {
          if (state.carts[i].name === actions.payload.name) {
            state.carts[i].quantity += actions.payload.quantity;
            check = true;
            console.log(
              'exist, update quantity',
              state.carts[i].quantity,
              actions.payload.quantity,
              //tại sao log ở ngay index.js thì state.carts lạii là proxy???

              state.carts
            );
          }
        }
        if (!check) {
          state.carts.push(actions.payload);
        }
      }
    },

    //tăng số lượng sản phẩm, payload truyền vào là name của products
    increaseQuantity(state, actions) {
      state.carts[actions.payload].quantity++;
    },

    //giảm số lượng sản phẩm, payload truyền vào là name, nếu số lượng hiện tại =1 thì không thực hiện hành động gì
    decreaseQuantity(state, actions) {
      if (state.carts[actions.payload].quantity > 1) {
        state.carts[actions.payload].quantity--;
      }
    },
    //xoá sản phẩm,
    deleteCart(state, actions) {
      //truyền payload là name của product
      const newCarts = state.carts.filter(
        (item, i) => item.name !== actions.payload
      );
      state.carts = newCarts;
    },
  },
});

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
  reducer: {
    modal: modalSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export const modalAction = modalSlice.actions;
export const productAction = productSlice.actions;
export const cartAction = cartSlice.actions;

export default store;
