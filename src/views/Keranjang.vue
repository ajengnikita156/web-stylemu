<template>
  <center>

      <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto" >

          <div
              class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
              <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                  <br><p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                          Customer’s Cart</p>
                  <div  v-for="cart in getKeranjang" key="cart.id"  style="margin-top: 30px; width: 1270px;"
                      class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                      
                          <br><br>
                          <ul class="-my-8">
            <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"  >
              <div class="shrink-0">
                <img class="h-24 w-24 max-w-full rounded-lg object-cover" src="https://i.pinimg.com/236x/a4/27/63/a427633b708edc49c3cec523ad110058.jpg" alt="" />
              </div>

              <div class="relative flex flex-1 flex-col justify-between">
                <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                  <div class="pr-8 sm:pr-5">
                    <p class="text-base font-semibold text-gray-900">{{cart.name}}</p>
                    <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">{{cart.variation_id}}</p>
                  </div>

                  <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                    

                    <div class="flex justify-between space-x-8 items-start w-full" style="margin-left: 500px;">
                                  
                      <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">{{  cart.regular_price*cart.qty }}</p>        
                      <div class="flex justify-between space-x-8 items-start w-full">
                                  
                                         
                                  <div class="flex items-center border-gray-100">
                                      <span @click="editqty({cart_id:cart.cart_id, type:'minus'})" class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                       
                                          <input type="number" :value="cart.qty" class=" border bg-white text-center text-xs outline-none" style="width: 60px; height: 35px;">
                                          <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" @click="editqty({cart_id:cart.cart_id, type:'plus'})"> + </span>
                                  </div>
                                 
                              </div>
                                  
                              </div><button @click="deleteKeranjang(cart.cart_id)" type="button" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900" style="margin-top: -5px; margin-left: 30px;">
                      
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class=""></path>
                      </svg>
                    </button>   
                             
                             
                 
                  </div>
                </div>
                
              
              </div>
            </li>
            
          </ul>
                      
                  </div>
                  <div
                      class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                      <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                          <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                          <div
                              class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                              <div class="flex justify-between w-full">
                                  <p class="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                  <p class="text-base dark:text-gray-300 leading-4 text-gray-600">{{ totalHarga() }}</p>
                              </div>
                              <div class="flex justify-between items-center w-full">
                                  <p class="text-base dark:text-white leading-4 text-gray-800">Service fee</p>
                                  <p class="text-base dark:text-gray-300 leading-4 text-gray-600">3000</p>
                              </div>
                          </div>
                          <div class="flex justify-between items-center w-full">
                              <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                              <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">{{ subtotal() }}</p>
                          </div>
                      </div>
                      <div
                          class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                          <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
                          <div class="flex justify-between items-start w-full">
                              <div class="flex justify-center items-center space-x-4">
                                  <div class="w-8 h-8">
                                  </div>
                                  <div class="flex flex-col justify-start items-center">
                                      <p class="text-lg leading-6 dark:text-white font-semibold text-gray-800">
                                        Including tax<br /><span class="font-normal">Delivery with 24 Hours</span></p>
                                  </div>
                              </div>
                              <p class="text-lg font-semibold leading-6 dark:text-white text-gray-800">{{ subtotal() }}</p>
                          </div>
                          <div class="flex w-full justify-center items-center md:justify-start md:items-start">
                              <div v-if="token">
                              <a href="/login">
                              <button type="button" 
                              class="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white" style="width: 600px;">
                              
                              Checkout
                          </button>
                      </a>
                          </div>
                              <div v-else>
                              <router-link to="/pembayaran">
                                  <button type="button" 
                                  class="hover:bg-red dark:bg-white dark:text-red-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-red-800 text-base font-medium leading-4 text-white" style="width: 600px;">
                              
                              Checkout
                          </button>
                              </router-link></div>
                             
                          </div>
                         
                      </div>
                  </div>
              </div>
              
          </div>
      </div>

  </center>



</template>
<script>
import { mapGetters, mapActions } from "vuex";
import keranjang from "../store/modules/keranjang";

export default {
computed: {
  ...mapGetters("user", ["getUser"]),
  ...mapGetters("product", ["getProduk"]),
  ...mapGetters("keranjang", ["getKeranjang"]),
},
data() {
  return {
    qty: 1,
    filter :[]
  };
},
methods: {
  ...mapActions("user", ["fetchUser"]),
  ...mapActions("product", ["fetchProduk"]),
  ...mapActions("keranjang", ["fetchKeranjang"]),
  ...mapActions("keranjang", ["editqty"]),



  tambah() {
    this.qty++;
  },
  kurang() {
    if (this.qty > 1) {
      this.qty--;
    }
  },
  totalHarga() {
        this.total = this.getKeranjang.reduce((acc, produk) => {
          return acc + parseFloat(produk.regular_price * produk.qty)  ;
        }, 0);
        return this.total.toFixed(2);
      },
      subtotal() {
        this.total = this.getKeranjang.reduce((acc, produk) => {
          return acc + parseFloat((produk.regular_price * produk.qty)+ 3000) ;
        }, 0);
        return this.total.toFixed(2);
      },
    

  deleteKeranjang(cartId){
    this.$store.dispatch('keranjang/deleteKeranjang', cartId);
  }
},


created() {
  this.fetchUser();
  this.fetchKeranjang();
},

beforeMount() {
  this.fetchKeranjang();
},
mounted() {
  this.fetchProduk();
},
};
</script>