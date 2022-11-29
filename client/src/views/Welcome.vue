<script setup>
import Header from "../components/shared/Header.vue";
import router from "../router";
</script>

<template>
  <div class="w-screen h-screen flex flex-col justify-start items-center">
    <div class="w-full h-full flex flex-col items-center gap-y-5 py-12">
      <div class="w-82 h-72">
        <img src="../assets/img/5143312.jpg" alt="" class="w-82 h-72" />
      </div>
      <h1 class="text-2xl uppercase">Welcome the chatapp</h1>
      <span
        >let's join us. chat your friends with no limit. Completely free and
        safe</span
      >
      <div class="w-full flex justify-center gap-x-4 items-center">
        <button @click="router.push({name: 'Login'})" class="w-1/6 py-3 text-white text-lg bg-brandPurple rounded-md">Login</button>
        <span class="text-lg">or</span>
        <button @click="router.push({name: 'Register'})" class="w-1/6 py-3 text-white text-lg bg-brandYellow rounded-md">Register</button>
      </div>
    </div>
  </div>
</template>
