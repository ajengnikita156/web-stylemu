<template>
<center>
    <div class="m-z max-w-sm">
      <br><br><br>
      <br><br><br>

  <div class="rounded-lg border bg-white px-6 pt-8 pb-10 shadow-lg">
    <div class="relative mx-auto w-36 rounded-full">
      <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
      <img class="mx-auto h-auto w-full rounded-full" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" />
    </div>
    <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">{{ getUser.name}}</h1>
    <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">{{ getUser.email}}</p>
    <ul class="mt-3 divide-y rounded bg-blue-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>Status</span>
        <span class="ml-auto"><span class="rounded-full py-1 px-2 text-xs font-medium text-blue-800">User</span></span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Number Phone</span>
        <span class="ml-auto"><span class="rounded-full py-1 px-2 text-xs font-medium text-blue-800">{{ getUser.phone}}</span></span>
      </li>
  
    </ul>
  </div>
</div>
</center>

</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ... mapGetters('user', ['getUser']),
    },
    methods: {
        ...mapActions('user', ["fetchUser"]),
    },
    created() {
        this.fetchUser();
    },
}
</script>