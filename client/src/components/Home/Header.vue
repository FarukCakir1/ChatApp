<script setup>
// from vue
import { ref } from "vue";
//components
import Search from "./Search.vue";
import Account from "./Account.vue";
// store
import { useUserStore } from "../../stores/user";
import { useChatStore } from "../../stores/chat";

const store = useUserStore();
const chatStore = useChatStore();

const search = ref(false);
const dropdownStatus = ref(false);
const accountStatus = ref(false)

const dropdownHandler = () => {
  dropdownStatus.value = !dropdownStatus.value;
  console.log(dropdownStatus.value);
};


const handleOpen = () => {
  search.value = true;
};

const handleClose = async (e) => {
  await store.setOtherUser(e);
  chatStore.getAllChats();
  search.value = false;
};
</script>

<template>
  <div
    class="w-full h-16 bg-gray-100 flex flex-shrink-0 border border-b-gray-300"
  >
    <div
      class="w-3/12 border border-r-gray-300 flex justify-between items-center flex-shrink-0 px-3 relative"
    >
      <div class="w-12 h-12 mr-3 flex-shrink-0">
        <img :src="store._currentUser.profil_pic" alt="" class="w-12 h-12 rounded-full">
      </div>
      <span>
        {{ store._currentUser.full_name }}
      </span>
      <div class="w-full flex justify-end gap-x-3">
        <button @click="handleOpen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 455 455"
            style="enable-background: new 0 0 455 455"
            xml:space="preserve"
            width="20px"
            class="fill-gray-600"
          >
            <polygon
              points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 
	455,242.5 "
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 210 210"
            style="enable-background: new 0 0 210 210"
            xml:space="preserve"
            width="25px"
            class="fill-gray-600"
            @click="dropdownHandler"
          >
            <g id="XMLID_27_">
              <path
                id="XMLID_28_"
                d="M25,80C11.215,80,0,91.215,0,105s11.215,25,25,25c13.785,0,25-11.215,25-25S38.785,80,25,80z"
              />
              <path
                id="XMLID_30_"
                d="M105,80c-13.785,0-25,11.215-25,25s11.215,25,25,25c13.785,0,25-11.215,25-25S118.785,80,105,80z"
              />
              <path
                id="XMLID_71_"
                d="M185,80c-13.785,0-25,11.215-25,25s11.215,25,25,25c13.785,0,25-11.215,25-25S198.785,80,185,80z"
              />
            </g>
          </svg>
        </button>
      </div>
      <div
        v-if="dropdownStatus === true"
        class="absolute top-10 -right-28 w-40 h-48 bg-white shadow-md flex flex-col gap-y-7 py-10 z-10"
      >
        <div @click="accountStatus = true" class="w-full flex gap-x-3 px-5 cursor-pointer">
          <svg
            width="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Iconly/Curved/Profile">
              <g id="Profile">
                <path
                  id="Stroke 1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.8445 21.6618C8.15273 21.6618 5 21.0873 5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364 14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564 21.6618 11.8445 21.6618Z"
                  stroke="#130F26"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Stroke 3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.8372 11.1735C14.26 11.1735 16.2236 9.2099 16.2236 6.78718C16.2236 4.36445 14.26 2.3999 11.8372 2.3999C9.41452 2.3999 7.44998 4.36445 7.44998 6.78718C7.4418 9.20172 9.3918 11.1654 11.8063 11.1735C11.8172 11.1735 11.8272 11.1735 11.8372 11.1735Z"
                  stroke="#130F26"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>
          <span>Hesabım</span>
        </div>
        <div class="w-full flex gap-x-3 px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 511.989 511.989"
            style="enable-background: new 0 0 511.989 511.989"
            xml:space="preserve"
            width="30px"
          >
            <path
              d="M110.933,221.782c-4.71,0-8.533,3.823-8.533,8.533v51.2c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-51.2
				C119.467,225.605,115.644,221.782,110.933,221.782z"
            />
            <path
              d="M111.855,2.304L31.172,34.586C8.448,43,0,54.418,0,76.715v358.477c0,22.298,8.448,33.715,30.959,42.061l81.058,32.427
				c4.011,1.519,8.038,2.287,11.981,2.287c17.152,0,29.602-14.336,29.602-34.091V34.049C153.6,9.78,134.246-6.126,111.855,2.304z
				 M136.533,477.876c0,10.18-5.035,17.024-12.535,17.024c-1.869,0-3.883-0.401-5.803-1.118L37.103,461.33
				c-16.102-5.965-20.036-11.102-20.036-26.138V76.715c0-15.036,3.934-20.164,20.241-26.206l80.725-32.29
				c2.082-0.785,4.087-1.186,5.956-1.186c7.501,0,12.544,6.835,12.544,17.016V477.876z"
            />
            <path
              d="M178.133,51.115h120.533c14.114,0,25.6,11.486,25.6,25.6v128c0,4.71,3.814,8.533,8.533,8.533
				c4.719,0,8.533-3.823,8.533-8.533v-128c0-23.526-19.14-42.667-42.667-42.667H178.133c-4.71,0-8.533,3.823-8.533,8.533
				S173.423,51.115,178.133,51.115z"
            />
            <path
              d="M332.8,298.582c-4.719,0-8.533,3.823-8.533,8.533v128c0,14.114-11.486,25.6-25.6,25.6H179.2
				c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h119.467c23.526,0,42.667-19.14,42.667-42.667v-128
				C341.333,302.405,337.519,298.582,332.8,298.582z"
            />
            <path
              d="M511.343,252.655c-0.435-1.05-1.058-1.988-1.852-2.782l-85.325-85.333c-3.337-3.336-8.73-3.336-12.066,0
				c-3.337,3.337-3.337,8.73,0,12.066l70.767,70.775H196.267c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533
				h286.601L412.1,335.215c-3.337,3.337-3.337,8.73,0,12.066c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5
				l85.325-85.325c0.794-0.794,1.417-1.732,1.852-2.782C512.205,257.093,512.205,254.738,511.343,252.655z"
            />
          </svg>
          <span>Çıkış Yap</span>
        </div>
      </div>
    </div>
    <Search v-if="search === true" @select-action="handleClose" />
    <div class="w-9/12 px-5 flex items-center gap-x-3">
      <div class="w-14 h-14">
        <img
          :src="store._otherUser?.profil_pic"
          alt=""
          class="w-full h-full rounded-full"
        />
      </div>
      <span class="font-semibold">{{ store._otherUser?.full_name }}</span>
    </div>
    <Account v-if="accountStatus === true" @close-account-window="accountStatus = false"/>
  </div>
</template>
