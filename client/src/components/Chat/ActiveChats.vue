<script setup>
import { computed, ref } from '@vue/reactivity';
import { useUserStore } from '../../stores/user';


const userStore = useUserStore()
userStore.getAll()
const props = defineProps(["chat"])

const changeOtherUser = (id) => {
  const user = userStore._allUsers?.find(user => user._id === id)
  userStore.setOtherUser(user)
  return user
}


const otherSide = computed(() => {
  return props.chat.users.filter(user => user !== userStore._currentUser?._id)
})

const otherUserInfo = computed(() => {
    return userStore._allUsers?.find(user => user._id === otherSide.value[0])
})

</script>

<template>
   <div
        
        class="w-full h-20 px-3 flex justify-start items-center border border-b-gray-300 flex-shrink-0 gap-x-4 group"
        :class="{'bg-gray-200': otherSide[0] === userStore._otherUser?._id}"
        @click="changeOtherUser(otherSide[0])"
      >
        <div class="w-[58px] h-[58px] flex-shrink-0">
          <img
            :src="otherUserInfo?.profil_pic"
            alt=""
            class="w-full h-full rounded-full"
          />
        </div>
        <div class="w-full h-full flex justify-between">
          <div class="h-full flex flex-col justify-center">
            <span>{{otherUserInfo?.full_name}}</span>
          </div>
          <div class="h-full flex flex-col justify-center items-center gap-y-1">
            <span>18:53</span>
            <button class="opacity-0 group-hover:opacity-100 duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 25.93 25.93"
                style="enable-background: new 0 0 25.93 25.93"
                xml:space="preserve"
                width="15px"
                class="fill-gray-500"
              >
                <g id="c118_triangle">
                  <path
                    d="M25.397,4.554h-2.042l-9.974,12.644c-0.101,0.124-0.256,0.197-0.416,0.197c-0.164,0-0.315-0.073-0.419-0.197L2.575,4.554
			H0.532c-0.206,0-0.392,0.115-0.479,0.299c-0.09,0.184-0.064,0.403,0.06,0.561l12.435,15.762c0.104,0.125,0.255,0.2,0.419,0.2
			c0.16,0,0.315-0.075,0.416-0.2L25.816,5.413c0.128-0.157,0.148-0.377,0.058-0.561C25.789,4.669,25.601,4.554,25.397,4.554z"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
</template>
