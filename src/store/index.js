import { configureStore, createSlice, current } from '@reduxjs/toolkit';

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

const initialUser = {
  currentUser: '',
  userArr: [],
};

const initialCartsArr = {
  email: '',
  phone: '',
  fullName: '',
  password: '',
  carts: [],
};

const userSLice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    addUser(state, actions) {
      state.userArr.push(actions.payload);
    },

    setCurrentUser(state, actions) {
      state.currentUser = actions.payload;
    },
  },
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartsArr,
  reducers: {
    updateCurrentUserCart(state, actions) {
      const currentUser = actions.payload;

      state.carts = currentUser.carts;
      state.email = currentUser.email;
      state.fullName = currentUser.fullName;
      state.password = currentUser.password;
      state.phone = currentUser.phone;
    },

    addToCart(state, actions) {
      if (state.carts.length === 0) {
        console.log(
          'giỏ hàng trống, thêm sản phẩm vào giỏ',
          current(state.carts)
        );
        state.carts = [...state.carts, actions.payload];
      } else {
        let check = false;
        for (let i = 0; i < state.carts.length; i++) {
          if (state.carts[i].name === actions.payload.name) {
            state.carts[i].quantity += actions.payload.quantity;
            check = true;
          }
        }
        if (!check) {
          state.carts.push(actions.payload);
        }
      }
    },

    //tăng số lượng sản phẩm, payload truyền vào là name của products
    increaseQuantity(state, actions) {
      // state.carts[actions.payload].quantity++;
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

    //reset cart
    resetCart(state) {
      // state = actions.payload;
      state.carts = '';
      state.email = '';
      state.fullName = '';
      state.password = '';
      state.phone = '';
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
    user: userSLice.reducer,
  },
});

export const modalAction = modalSlice.actions;
export const productAction = productSlice.actions;
export const cartAction = cartSlice.actions;
export const userAction = userSLice.actions;

export default store;
