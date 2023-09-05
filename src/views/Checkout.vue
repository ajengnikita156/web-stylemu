<template>
  <div style="margin-top: 120px;">
  <center>
    <h1 class="font-extrabold md:text-4xl sm:text-3xl text-2xl  mb-4">Thank You for Your Order</h1>
    <p class="mb-4 text-slate-600 md:text-base sm:text-sm text-xs ">Order Code : {{order_code}}<br><i> A copy of your order summary has been sent to {{ getUser.email}} </i></p>
    
  </center>
  <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
  
  <div class="overflow-y-hidden rounded-lg border">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class=" text-left text-xs font-semibold uppercase tracking-widest text-white" style="background-color: blue;">
            <th class="px-5 py-3"></th>
            <th class="px-5 py-3"><b> Order Summary</b></th>
            <th class="px-5 py-3"></th>
            <th class="px-5 py-3"></th>
            <th class="px-5 py-3"></th>
          </tr>
        </thead>
        <tbody class="text-gray-500">
          <tr>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap"></p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap" style="color: black;"><b>Order Code :</b></p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">{{order_code}}</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap" style="color: black;"><b>Total Order Amount :</b></p>
            </td>

            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Rp. {{ totalHarga() }}</p>
            </td>
          </tr>
          <tr>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap"></p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap" style="color: black;"><b>Name :</b></p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">{{getUser.name}}</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap" style="color: black;"><b>Payment Method :</b></p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Cash On Delivery</p>
            </td>
          </tr>
          <tr>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap"></p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap" style="color: black;"><b>Email :</b></p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">{{getUser.email}}</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap" style="color: black;"><b>Delivery Type :</b></p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Standard</p>
            </td>
          </tr>
          <tr>
            <td class="bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap"></p>
            </td>
            <td class="bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap" style="color: black;"><b>Shipping Address :</b></p>
            </td>
            <td class="bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Rancamanyar Regency 123,kota Bandung, Jawa Barat,Indonesia</p>
            </td>
            <td class="bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap" style="color: black;"><b>Billing Address :</b></p>
            </td>
            <td class="bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap"> Rancamanyar Regency 123,kota Bandung, Jawa Barat,Indonesia</p>
            </td>
          </tr>
       
        </tbody>
      </table>
      <div  class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
          

<div class="flex items-center justify-between pb-6">
 
  <div class="flex items-center justify-between">
  
  </div>
</div>
<div  class="overflow-y-hidden rounded-lg border">
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
          <th class="px-5 py-3">ID</th>
          <th class="px-5 py-3">Product</th>
          <th class="px-5 py-3">Quantity</th>
          <th class="px-5 py-3">Unit Price</th>
          <th class="px-5 py-3">Total</th>
        </tr>
      </thead>
      <tbody class="text-gray-500" v-for="cart in getKeranjang" key="cart.id">
        <tr>
          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <p class="whitespace-no-wrap">{{ cart.cart_id }}</p>
          </td>
          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <div class="flex items-center">
              <div class="h-10 w-10 flex-shrink-0">
                <img class="h-full w-full rounded-full" src="https://i.pinimg.com/236x/a4/27/63/a427633b708edc49c3cec523ad110058.jpg" alt="" />
              </div>
              <div class="ml-3">
                <p class="whitespace-no-wrap">{{cart.name}}</p>
              </div>
            </div>
          </td>
          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <p class="whitespace-no-wrap">{{cart.qty}}</p>
          </td>
          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <p class="whitespace-no-wrap">{{ cart.regular_price }}</p>
          </td>

          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">{{ cart.regular_price* cart.qty}}</span>
          </td>
        </tr>
       
      </tbody>
      <tr>
         <td colspan="3" rowspan="3"><center><img src="https://png.pngtree.com/png-clipart/20210523/original/pngtree-cash-on-delivery-pin-point-png-image_6331307.jpg" style="width: 150px; height: 150px; margin-left: -100px;" alt=""></center></td>
         <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
           <p class="whitespace-no-wrap"><b>Sub Total :</b></p>
         </td>

         <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
           <span class="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Rp. {{subTotal()}}</span>
         </td>
       </tr>
       <tr>
        
        <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p class="whitespace-no-wrap"><b>Coupon Discount :</b></p>
        </td>

        <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <span class="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Rp.0</span>
        </td>
      </tr>
       <tr>
        
        <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p class="whitespace-no-wrap"><b>Shipping Charge :</b></p>
        </td>

        <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <span class="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Rp. {{shipping()}}</span>
        </td>
        
      </tr>
       <tr class="bg-blue-600 text-right text-xs font-semibold uppercase tracking-widest text-white">
         <th class="px-5 py-2" colspan="4" >Total</th>
         <th class="px-5 py-3">Rp. {{ totalHarga() }}</th>
         
       </tr>
    </table>
  </div>
  
</div>
</div>

    </div>
  
  </div>
</div>


  </div>
</template>

<script>
let ongkir = 3000;
import { mapGetters, mapActions } from 'vuex';


export default {
    computed: {
      ... mapGetters('user', ['getUser']),
        ...mapGetters('keranjang', ['getKeranjang']),
        ...mapGetters('order', ['getOrder'])
    },
    props: ['order_code'],
    methods: {
        ...mapActions('user', ["fetchUser"]),
        ...mapActions('keranjang', ['fetchKeranjang']),
      ...mapActions('produk', ['fetchProduk']),
      ...mapActions('produk', ['fetchProduk']),
      ...mapActions('keranjang', ['getUserAddress']),
      ...mapActions('order', ['fetchOrderData']),
      

      subTotal() {
        this.total = this.getKeranjang.reduce((acc, produk) => {
                return acc + parseFloat(produk.regular_price * produk.qty);
            }, 0);
            return this.total.toFixed(2);
      },
      totalHarga() {
        
          this.total = this.getKeranjang.reduce((acc, product) => {
              return acc + parseFloat(product.regular_price * product.qty) + ongkir  ;
              
          }, 0);

          return this.total.toFixed(2);
          
      },
      shipping() {
        
        this.total = this.getKeranjang.reduce((acc, product) => {
            return acc + parseFloat(product.min_qty * 3000) ;
            
        }, 0);

        return this.total.toFixed(2);
        
    },
    },
    created() {
        this.fetchUser();
        this.$store.dispatch('order/fetchOrderData', this.orderCode);
    },
    beforeMount() {
      this.fetchProduk();
  },

  mounted() {
      this.fetchKeranjang();
  },
}
</script>