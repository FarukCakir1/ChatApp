<script setup>
import { ref } from 'vue';
import router from '../router';
import { useUserStore } from '../stores/user';

const store = useUserStore()

const newUserData = ref({
    full_name: null,
    e_mail: null,
    password: null,
    profil_pic: null,
    friends: [],
    chats: []
})

const handleRegister = () => {
    store.newRegistration(newUserData.value)
    router.push({name: 'Home'})
}

</script>

<template>
    <div class="w-full aa flex justify-center items-center">
        <div class="w-2/6 h-5/6 rounded-md shadow-md flex flex-col items-center px-6 py-8 gap-y-5">
            <h1 class="text-lg font-semibold uppercase">Register</h1>
            <label for="fullname" class="w-full flex flex-col gap-y-1">
                <span>Full Name</span>
                <input v-model="newUserData.full_name" type="text" id="fullname" class="w-full py-3 bg-gray-100 px-3 rounded-md" placeholder="Name And Lastname">
            </label>
            <label for="email" class="w-full flex flex-col gap-y-3">
                <span>E-Mail</span>
                <input v-model="newUserData.e_mail" type="text" id="email" class="w-full py-3 bg-gray-100 px-3 rounded-md" placeholder="E-mail">
            </label>
            <label for="password" class="w-full flex flex-col gap-y-3">
                <span>Password</span>
                <input v-model="newUserData.password" type="password" id="password" class="w-full py-3 bg-gray-100 px-3 rounded-md" placeholder="Password">
            </label>
            <label for="terms" class="w-full flex">
                <input type="checkbox" class="w-4 h-4 flex-shrink-0 mt-1">
                <span class="text-sm text-gray-400 ml-3">Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.</span>
            </label>
            <button @click="handleRegister" class="w-4/6 bg-brandPurple py-3 text-white rounded-md">Sign Up</button>
            <span class="text-xs text-gray-300">By clicking “Sign up”, you agree to our <span class="text-sky-500">terms of service, privacy policy <span class="text-gray-300">and</span> cookie policy</span></span>
        </div>
    </div>
</template>

