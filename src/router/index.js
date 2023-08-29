import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Keranjang from "../views/Keranjang.vue";
import Checksatu from "../views/Checksatu.vue";
import Checkout from "../views/Checkout.vue";
import Contact from "../views/Contact.vue";
import Brand from "../views/Brand.vue";
import Kategori from "../views/Kategori.vue";
import Produk from "../views/Produk.vue";
import SingleProduk from "../views/SingleProduk.vue";
import Profile from "../views/Profile.vue";

function cekToken(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("token")) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next();
  } else {
    next("/login");
  }
}

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresGuest: true },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/keranjang",
    name: "Keranjang",
    component: Keranjang,
    beforeEnter: cekToken,

  },
  {
    path: "/pembayaran",
    name: "Checksatu",
    component: Checksatu,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/checkout/:order_code",
    name: "SuccessOrderCode",
    component: Checkout,
    props:true
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/brand",
    name: "Brand",
    component: Brand,
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
  },
  {
    path: "/produk/:id",
    name: "SingleProduk",
    component: SingleProduk,
  },
  {
    path: "/profil",
    name: "Profile",
    component: Profile,
    beforeEnter: cekToken,
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
