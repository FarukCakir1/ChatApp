<script setup>
import io from "socket.io-client"
import { computed, ref } from '@vue/reactivity';
import { useChatStore } from '../../stores/chat';
import { useUserStore } from '../../stores/user';
import ChatInput from '../Chat/ChatInput.vue';
import { onMounted } from "vue";

const chatStore = useChatStore()
const userStore = useUserStore()
chatStore.getAllChats()

const socket = ref({})

const activeChat = computed(() => {
  return chatStore._allChats?.find(chat => chat.users.includes(userStore._currentUser?._id) && chat.users.includes(userStore._otherUser?._id))?.messages
})

onMounted(() => {
  socket.value = io("http://localhost:5050")
})

const sendMessage = (e) => {
  io("http://localhost:5050").emit("SEND_MESSAGE", e)
  io("http://localhost:5050").on("MESSAGE_SENDED", (data) => {
    chatStore.getAllChats()
  })
  
}

</script>


<template>
  <div class="w-full h-full bg-slate-50 flex flex-col-reverse overflow-y-scroll">
    <ChatInput @send-message="sendMessage"/>
    <div class="w-full h-full flex flex-col justify-end px-5 gap-y-5 ">
      <div 
      v-for="message in activeChat" 
      class="w-full flex" 
      :class="[{' justify-end' : message.author === userStore._currentUser._id}]"
      >
      <span   
        class="py-3 px-3 rounded-md bg-gray-200 relative z-0"
        :class="[{'bg-lime-400' : message.author === userStore._currentUser._id}]"
      >
        {{message.text}}
        <div 
        class="w-4 h-4 rotate-45 bg-gray-200 absolute  top-[3px]"
        :class="
        [
          {'bg-lime-400' : message.author === userStore._currentUser._id}, 
          {'right-[-2px]': message.author === userStore._currentUser._id},
          {'left-[-2px]': message.author !== userStore._currentUser._id}
          ]"
        ></div>
      </span>
      </div>
    </div>
    
  </div>
</template>
