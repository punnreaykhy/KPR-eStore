import { createStore } from 'vuex';

export default createStore({
  state: {
    cartData: null, // Your initial state for cartData
    productImgURL: 'http://127.0.0.1:8000/api',
  },
  mutations: {
    setCartData(state, data) {
      state.cartData = data;
    },
  },
  actions: {
    // Your actions if needed
  },
  getters: {
    // Your getters if needed
  },
});
