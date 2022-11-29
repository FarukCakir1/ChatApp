<script setup>
  import router from '../router';
  import { ref } from 'vue';
  import {useUserStore} from "../stores/user"

  const store = useUserStore()

  const loginData = ref({
    e_mail:null,
    password: null,
  })

  const handleLogin = () => {
    store.loginUser(loginData.value)
    
  }
</script>

<template>
  <div class="w-full flex justify-center py-12">
    <div
      class="w-2/6 h-5/6 flex flex-col items-center gap-y-5 border py-8 px-5 border-gray-300 shadow-md"
    >
      <h1 class="text-xl font-medium uppercase">Login</h1>
      <label for="email" class="w-full flex flex-col gap-y-2">
        <span class="text-thin text-gray-600">E-Mail</span>
        <input
          v-model="loginData.e_mail"
          type="email"
          class="w-full py-2 border border-brandPurple rounded-md bg-gray-100 text-black px-2 outline-brandYellow outline-1"
          :class="{'border-red-500': store._loginSuccess === false}"
        />
      </label>
      <label for="email" class="w-full flex flex-col gap-y-2">
        <span class="text-thin text-gray-600">Password</span>
        <input
          v-model="loginData.password"
          type="password"
          class="w-full py-2 border border-brandPurple rounded-md bg-gray-100 text-black px-2 outline-brandYellow outline-1"
          :class="{'border-red-500': store._loginSuccess === false}"
          />
      </label>
      <div v-if="store._loginSuccess === false" class="w-full justify-start">
        <span class="text-sm text-red-500">Kullanıcı Adı veya şifre hatalı</span>
      </div>
      <div class="w-full justify-start">
        <span class="text-sm text-gray-600">Don't you have an Account ? <span class="text-sm text-black underline font-medium cursor-pointer">Register</span></span>
      </div>
      <button @click="handleLogin" class="w-3/6 py-3 bg-brandPurple rounded-md text-white">Login</button>
    </div>
  </div>
</template>
