<script>
import { mapActions } from 'vuex';

export default {
  data() {
      return {
          name: '',
          email: '',
          phone: '',
          password: '',
          confirm_password: '',
      };
  },
  methods: {
      ...mapActions('auth', ['signup']),
      async performsignup() {
          const credentials = {
              name: this.name,
              email: this.email,
              phone: this.phone,
              password: this.password,
              confirm_password: this.confirm_password,
              
          };

          const success = await this.signup(credentials);

          if (success) {
              // Redirect to the desired route on successful login
              this.$router.push('/login');
          } else {
              alert("signup Failed");
          }
      },
  },
};
</script>




<template>
<form class="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"  @submit.prevent="performsignup">
<h1 class="mb-6 text-xl font-semibold lg:text-2xl">Register</h1>
  <div class="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
    <div class="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5" style="background-image: url(https://espay.id/wp-content/uploads/2020/01/registrasi.png)"></div>
    <div class="w-full sm:w-3/5">


<div>
  <label class=""> Full Name  </label>
  <input v-model="name" type="text" placeholder="Full Name " class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"  />
</div>
<div>
  <label class=""> Phone </label>
  <input v-model="phone" type="number" placeholder="Phone " class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
</div>
<div>
  <label class=""> Email </label>
  <input v-model="email" type="email" placeholder="Email Address" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"  />
</div>
<div>
  <label class=""> Password </label>
  <input v-model="password" type="password" placeholder="* * * * * *" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"  />
</div>
<div>
  <label class=""> Confirm Password </label>
  <input v-model="confirm_password" type="password" placeholder="* * * * * *" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"  />
</div>


<div>
  <button type="submit" class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white">Register</button>
</div>
</div>
</div>
</form>
</template>

<!-- <template>
   
        <div class="flex h-screen w-full items-center justify-center bg-gray-100">
  <div class="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
    <div class="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5" style="background-image: url(https://espay.id/wp-content/uploads/2020/01/registrasi.png)"></div>
    <div class="w-full sm:w-3/5">
      <div class="p-8">
        <h1 class="text-3xl font-black text-slate-700">Sign up</h1>
        <p class="mt-2 mb-5 text-base leading-tight text-gray-600">Create an account </p>
        <form class="mt-8">
          <div class="relative mt-2 w-full">
            <input v-model="name"  type="text" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label for="email" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Name </label>
          </div>
          <div class="relative mt-2 w-full">
            <input v-model="email" type="text" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label for="email" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Email </label>
          </div>
          <div class="relative mt-2 w-full">
            <input v-model="phone"  type="text"class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label for="email" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your number phone </label>
          </div>
          <div class="relative mt-2 w-full">
            <input v-model="password" type="text" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label for="password" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Password</label>
          </div>
          <div class="relative mt-2 w-full">
            <input v-model="confirm_password" type="password" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label for="password" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter confirm Password</label>
          </div>
            <button type="submit" class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"><a href="/login">Register</a></button>

          <input class="mt-4 w-full cursor-pointer rounded-lg bg-blue-600 pt-3 pb-3 text-white shadow-lg hover:bg-blue-400" type="submit" value="Create account" />
        </form>
        <div class="mt-4 text-center">
          <p class="text-sm text-gray-600">Already have an account? <a href="/Login" class="font-bold text-blue-600 no-underline hover:text-blue-400">Sign in</a></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template> -->
