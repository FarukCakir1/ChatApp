<script setup>
import {ref} from "vue"
import { useUserStore } from "../../stores/user";
const store = useUserStore();

const userInfos = ref({
  _id: store._currentUser._id,
  full_name: store._currentUser.full_name,
  e_mail: store._currentUser.e_mail,
  prfil_pic: null
})

const formData = new FormData();

const fileSelect = (e) => {
  userInfos.value.prfil_pic = e.target.files[0]
  formData.append("_id", userInfos.value._id)
  formData.append("full_name", userInfos.value.full_name)
  formData.append("e_mail", userInfos.value.e_mail)
  formData.append("profil_pic", userInfos.value.prfil_pic, userInfos.value.prfil_pic.name)
  store.updateProfilePic(formData)
}



</script>

<template>
  <div
    class="absolute top-0 right-0 bottom-0 left-0 z-10 bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
  >
    <div class="w-2/6 h-3/6 bg-slate-50 shadow-md relative flex flex-col">
      <button
        @click="$emit('close-account-window')"
        class="p-3 absolute right-1 top-1"
      >
        <svg
          width="20px"
          viewBox="-80 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          />
        </svg>
      </button>
      <div
        class="w-full h-3/6 flex justify-center items-center border-b border-gray-300"
      >
        <div class="w-28 h-28 bg-slate-300 rounded-full relative group">
          <img
            src="../../assets/img/faruk3.jpeg"
            alt=""
            class="w-full h-full rounded-full"
          />
          <div
            class="w-full h-full rounded-full z-20 bg-[rgba(0,0,0,0.6)] absolute hidden top-0 group-hover:block cursor-pointer"
          >
            <div
              class="w-full h-full flex flex-col justify-center relative items-center gap-y-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 483.674 483.674"
                style="enable-background: new 0 0 483.674 483.674"
                xml:space="preserve"
                width="25px"
                class="fill-white"
              >
                <g id="XMLID_119_">
                  <path
                    id="XMLID_123_"
                    d="M452.183,135.824h-33.798l-5.936-45.784c-3.573-27.664-27.305-48.519-55.208-48.519h-73.617
		c-27.9,0-51.624,20.855-55.206,48.51l-5.928,45.793h-71.678v-22.121c0-9.769-7.917-17.681-17.677-17.681H76.471
		c-9.759,0-17.685,7.913-17.685,17.681v22.121H31.489c-17.401,0-31.489,14.1-31.489,31.49v243.35c0,17.39,14.088,31.49,31.489,31.49
		h420.693c17.404,0,31.491-14.1,31.491-31.49v-243.35C483.674,149.923,469.587,135.824,452.183,135.824z M239.819,420.905
		c-70.898,0-128.385-57.484-128.385-128.391c0-63.647,46.373-116.336,107.133-126.483c6.928-1.157,13.996-1.904,21.252-1.904
		c31.147,0,59.691,11.107,81.924,29.551c28.388,23.546,46.474,59.082,46.474,98.836C368.217,363.42,310.719,420.905,239.819,420.905
		z M271.25,135.824l5.131-39.582c0.474-3.623,3.587-6.353,7.242-6.353h73.617c3.655,0,6.777,2.73,7.244,6.361l5.139,39.573H271.25z
		 M415.404,232.56c-15.73,0-28.461-12.746-28.461-28.467c0-3.685,0.748-7.18,2.031-10.415c4.154-10.556,14.389-18.05,26.43-18.05
		c2.912,0,5.67,0.566,8.334,1.375c11.633,3.583,20.134,14.281,20.134,27.09C443.872,219.813,431.133,232.56,415.404,232.56z"
                  />
                  <path
                    id="XMLID_120_"
                    d="M239.819,197.929c-52.161,0-94.595,42.434-94.595,94.585c0,52.155,42.433,94.588,94.595,94.588
		c52.165,0,94.597-42.433,94.597-94.588C334.416,240.362,291.984,197.929,239.819,197.929z M239.819,354.857
		c-34.384,0-62.345-27.963-62.345-62.343c0-34.377,27.961-62.34,62.345-62.34c34.388,0,62.35,27.963,62.35,62.34
		C302.169,326.894,274.207,354.857,239.819,354.857z"
                  />
                </g>
              </svg>
              <span class="text-xs w-full text-center text-white"
                >Profil Foto??raf??n?? d??zenle</span
              >
              <input v-on:change="fileSelect" type="file" id="visible-upload-btn" class="z-10 pl-5 absolute w-full h-full"/>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-3/6 flex flex-col py-3 gap-y-3">
        <div class="w-full flex flex-col px-3 gap-y-2">
          <span class="text-sm font-bold">Full Name</span>
          <span class="w-full py-2 bg-slate-200 px-2">{{
            store._currentUser.full_name
          }}</span>
        </div>
        <div class="w-full flex flex-col px-3 gap-y-2">
          <span class="text-sm font-bold">E-Mail</span>
          <span class="w-full py-2 bg-slate-200 px-2">{{
            store._currentUser.e_mail
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
