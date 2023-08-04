import { createStore } from 'vuex';

export default createStore({
  state: {
    cartData: null, // Your initial state for cartData
    apiURL: 'http://127.0.0.1:8000/api',
    tax: 0.1, //1%
    totalPrice: null,
    customerInfo: null,
  },
  mutations: {
    setCartData(state, data) {
      state.cartData = data;
    },
    setTotalPrice(state, data) {
      state.totalPrice = data;
    },
    setCustomerInfo(state, data) {
      state.customerInfo = data;
    },
  },
  actions: {
    // Your actions if needed
  },
  getters: {
    // Your getters if needed
  },
});
