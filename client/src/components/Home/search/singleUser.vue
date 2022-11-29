<script setup>
    import { computed } from '@vue/reactivity';
    const props = defineProps(["user"])

    const profilPic = computed(() => {
        if(props.user.profil_pic){
            return props.user.profil_pic
        }else{
            return "../../../src/assets/img/nonpp.png"
        }
    })
</script>
<template>
    <div class="w-full h-16 flex items-center gap-x-5 border-b hover:bg-gray-200 hover:border-none">
        <div class="w-12 h-12">
            <img :src="profilPic" alt="" class="w-full h-full rounded-full">
        </div>
        {{user.full_name}}
    </div>
</template>

