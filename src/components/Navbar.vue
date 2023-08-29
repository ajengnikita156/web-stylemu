<!-- <template>
<nav
        class="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
                <span class="font-semibold text-xl tracking-tight">Style.mu</span>
            </div>
            <div class="block lg:hidden ">
                <button
                    id="nav"
                    class="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
        </div>
    
        <div class="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div class="text-md font-bold text-blue-700 lg:flex-grow">
                 <router-link to="/"
                   class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    HOME
               </router-link>
                 <router-link to="/brand"
                   class=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    BRAND
               </router-link>
             
                 <router-link to="/kategori"
                   class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    CATEGORY
            </router-link>
                     <router-link to="/produk"
                   class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    PRODUCT
               </router-link>
                 <router-link to="/contact"
                   class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    CONTACT
               </router-link>
               
              <router-link to="/profil"
                   class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                   PROFILE
            </router-link> 
            </div>

           logo profil -->
                <!-- <a href="/profil">
                    <svg class="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  <circle cx="8.5" cy="7" r="4" />  <polyline points="17 11 19 13 23 9" /></svg>                </a>
                    logo profil -->

           
            <!-- </div>
       

<CartBadgeComponent></CartBadgeComponent>


            <div v-if="isAuthenticated" class="flex md:order-2">
                <button @click="logout" type="button"
                class="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">
                                  Sign Out
                </button>
            </div>

            <div v-else class="flex md:order-2">
                <router-link to="/login" type="button"
                class="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">
                            Sign In
                </router-link>
                
                <router-link to="/register" type="button"
                class=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">
                
                    Sign Up
                </router-link>
            </div>
  
  
    </nav>
</template> --> 
<script>
import { mapActions, mapGetters } from 'vuex';
import CartBadgeComponent from './CartBadgeComponent.vue';

export default {
  
    computed: {
        ...mapGetters('auth', ['isAuthenticated']),
    },
    methods: {
        ...mapActions('auth', ['logout']),
    },
    components: { CartBadgeComponent }
};
</script>

<template>
    <div> 
  
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-blue-400 dark:border-gray-800" >
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
          <a href="/" class="flex items-center">
            <!-- <img class="h-12 object-cover" style="height: 30px;" src="../assets/img/bm.PNG"
                                alt="Store Logo"> -->
                                <h3 class="text-4xl font-medium " style="color: blue;">
                            &nbsp; Style.mu
                        </h3>
            
          </a>
          
          <div class="flex md:order-2 flex cursor-pointer items-center justify-center rounded-xl">
            <div v-if="isAuthenticated">
            </div>
            <div class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
             
              <div v-if="isAuthenticated" class="flex md:order-2">
                <button @click="logout" type="button"
                class="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">
                                  Sign Out
                </button>
            </div>

            <div v-else class="flex md:order-2">
                <router-link to="/login" type="button"
                class="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">
                            Sign In
                </router-link>
                
                <router-link to="/register" type="button"
                class=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">
                
                    Sign Up
                </router-link>
            </div>
            </div>
           
              
  
            
            <div class="block lg:hidden ">
                <button
                    id="nav"
                    class="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
        </div>
    
        <div class="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div class="text-md font-bold text-black-700 lg:flex-grow">
              <center>
                 <router-link to="/"
                   class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    HOME
               </router-link>
                 <router-link to="/brand"
                   class=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    BRAND
               </router-link>
             
                 <router-link to="/kategori"
                   class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    CATEGORY
            </router-link>
                     <router-link to="/produk"
                   class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    PRODUCT
               </router-link>
                 <router-link to="/contact"
                   class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    CONTACT
               </router-link>    
              </center> 
   </div>

   <CartBadgeComponent></CartBadgeComponent>
    <!-- logo profil -->
    <a href="/profil">
                    <svg class="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  <circle cx="8.5" cy="7" r="4" />  <polyline points="17 11 19 13 23 9" /></svg>                </a>
                    <!-- logo profil -->

          </div>
        </div>
      </nav>
  
    </div>
  
    
  </template>