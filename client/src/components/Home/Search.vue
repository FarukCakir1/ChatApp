<script setup>
import { ref } from "vue";

//components
import SingleUser from "./search/singleUser.vue";

import { useUserStore } from "../../stores/user";
import { useChatStore } from "../../stores/chat";

const emit = defineEmits(["select-action"]);

const chatStore = useChatStore();
const store = useUserStore();
store.getAll();

const chatInfo = ref({
  users: [],
  messages: [],
});

const handleSelect = async (user) => {
  await store.setOtherUser(user)
  chatInfo.value.users = [store._currentUser._id, user._id]
  console.log(chatInfo.value)
  chatStore.createNewChat(chatInfo.value);
  emit("select-action", user);
};
</script>

<template>
  <div
    class="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center"
  >
    <div class="w-2/6 h-5/6 bg-white p-5 flex flex-col">
      <input
        type="text"
        class="w-full py-3 bg-gray-100 rounded-md px-3 mb-5"
        placeholder="Enter an firend name"
      />
      <SingleUser
        @click="handleSelect(user)"
        v-for="user in store._allUsers"
        :user="user"
      />
    </div>
  </div>
</template>
