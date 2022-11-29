<script setup>
// components
import Header from '../components/Home/Header.vue';
import SideBar from '../components/Home/SideBar.vue'
import Chat from '../components/Home/Chat.vue';

</script>


<template>
  <div class="flex flex-col aa">
    <Header />
    <div class="w-full full-height flex ">
      <SideBar />
      <Chat />
    </div>
  </div>
</template>
