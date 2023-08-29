import { createStore } from "vuex";
import auth from "./modules/auth";
import brand from "./modules/brand";
import kategori from "./modules/kategori";
import product from "./modules/product";
import user from "./modules/user";
import keranjang from "./modules/keranjang";
import order from "./modules/order";


const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    auth,
    brand,
    kategori,
    product,
    user,
    keranjang,
    order
  },
});

export default store;