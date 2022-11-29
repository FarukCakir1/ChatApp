<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, onUpdated } from "vue";
import { useChatStore } from "../../stores/chat";
import { useUserStore } from "../../stores/user";
import ActiveChats from "../Chat/ActiveChats.vue";

const userStore = useUserStore();
const chatStore = useChatStore();

onMounted(() => {
  chatStore.getAllChats()
})

const myChats = computed(() => {
  return chatStore._allChats?.filter((chat) =>
    chat.users.includes(userStore._currentUser._id)
  );
});

onUpdated(() => {
  chatStore.getAllChats()
})

</script>

<template>
  <div class="w-3/12 border border-r-gray-300 flex-shrink-0">
    <div class="w-full h-full overflow-y-scroll scroll flex flex-col">
      <ActiveChats v-for="chat in myChats" :chat="chat" />
    </div>
  </div>
</template>
