import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        image: 'https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-1.jpg',
        name: 'Nintendo Switch',
        price: 299.99,
        description: 'Unlimited hours of fun! *Games not yet included'
      },
      {
        id: 2,
        image: 'https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-2.jpg',
        name: 'Gameboy Mug',
        price: 19.99,
        description: 'Don\'t forget to rehyrdate! *Drinks not yet included'
      },
      {
        id: 3,
        image: 'https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-3.jpg',
        name: 'Family Computer',
        price: 70,
        description: 'Unlimited hours of fun! (but on an older system)'
      },
      {
        id: 4,
        image: 'https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-4.jpg',
        name: 'Jeopardy Game',
        price: 30,
        description: 'Jeopardy for Family Computer. *Second-hand, still in good condition'
      },
      {
        id: 5,
        image: 'https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-5.jpg',
        name: 'Game Cube',
        price: 99.99,
        description: 'Game in a cube'
      },
      {
        id: 6,
        image: 'https://raw.githubusercontent.com/gwenf/vuetify-responsive/master/public/img/products/product-6.jpg',
        name: 'Gameboy Color',
        price: 45,
        description: 'First generation of Gameboys'
      }
    ],
    snackbar: {
      show: false,
      variant: 'success',
      message: ''
    },
    cart: [],
    checkoutInfo: {
      email: '',
      name: '',
      phone: '',
      street: '',
      city: '',
      postal: ''
    }
  },
  mutations: {
    addItemsToCart(state, payload) {
      const { itemId, quantity } = payload;
      const idx = state.cart.findIndex((product) => {
        return product.itemId === itemId;
      });
      if (idx === -1) {
        state.cart.push({ itemId, quantity });
      } else {
        state.cart[idx].quantity += 1;
      }
    },
    updateSnackbar(state, settings) {
      state.snackbar = {
        ...{
          show: false,
          variant: 'success',
          message: ''
        }, // default
        ...settings
      }
    },
    removeItemsFromCart(state, payload) {
      const { itemId } = payload;
      const idx = state.cart.findIndex((product) => {
        return product.itemId === itemId;
      });
      if (idx === -1) {
        // Item was not found
        return false;
      } else {
        state.cart.splice(idx, 1);
        return true;
      }
    },
    resetCheckoutInfo(state) {
      state.checkoutInfo = {
        email: '',
        name: '',
        phone: '',
        street: '',
        city: '',
        postal: ''
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
