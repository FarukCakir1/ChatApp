<script setup>
import io from "socket.io-client"
import { useUserStore } from '../../stores/user';
import { useChatStore } from '../../stores/chat';
import { computed, ref } from '@vue/reactivity';

const userStore = useUserStore()
const chatStore = useChatStore()
chatStore.getAllChats()

const emit = defineEmits()

const activeChat = computed(() => {
  return chatStore._allChats.find(chat => chat.users.includes(userStore._currentUser?._id) && chat.users.includes(userStore._otherUser?._id))
})

const message = ref({
  author: userStore._currentUser._id,
  text: null
})

const handleSend = () => {
  chatStore.sendMessage(activeChat.value?._id, message.value)
  emit("send-message", message.value)
  message.value.text = ""
}

</script>

<template>
  <div
    class="w-full h-20 bg-gray-200 border flex justify-center items-center gap-x-5 mt-5"
  >
    <input
      v-model="message.text"
      type="text"
      class="w-4/6 py-2 text-black outline-none rounded-lg px-3"
      placeholder="Bir mesaj yazın"
      @keydown.enter="handleSend"
    />
    <button @click="handleSend" class="p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512.708 512.708"
        style="enable-background: new 0 0 512.708 512.708"
        xml:space="preserve"
        width="25px"
      >
        <g transform="translate(0 -1)">
          <g>
            <path
              d="M504.307,6.266c-2.656-2.274-5.865-3.913-9.447-4.6c-4.288-0.937-8.926-0.525-13.372,1.727L14.047,173.371
			c-16.138,5.869-19.083,27.427-5.109,37.409L150.843,312.14l20.042,140.297c2.688,18.815,26.782,24.988,38.186,9.783l50.337-67.115
			l132.039,113.252c12.494,10.716,31.903,3.845,34.872-12.345l85.995-468.928C513.971,18.046,510.226,10.669,504.307,6.266z
			 M389.424,82.27L169.398,272.96L66.718,199.618L389.424,82.27z M205.84,395.417l-12.404-86.83l185.161-160.473L240.324,349.239
			l-1.738,2.517L205.84,395.417z M391.048,451.803l-106.576-91.412l167.949-243.252L391.048,451.803z"
            />
          </g>
        </g>
      </svg>
    </button>
  </div>
</template>
