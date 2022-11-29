import { defineStore } from "pinia";
import axiosClient from "../utils/appAxios";


export const useChatStore = defineStore("Chat", {
    state: () => ({
        allChats: null
    }),
    getters: {
        _allChats: (state) => {
            return state.allChats
        }
    },
    actions: {
        getAllChats() {
            axiosClient.get("/chats")
                .then(response => {
                    this.$state.allChats = response.data
                })
                .catch(err => console.log(err))
        },
        createNewChat(data){
            axiosClient.post("/chats", data)
                .then(response => console.log(response))
        },
        sendMessage(chatId, message){
            axiosClient.post(`/chats/${chatId}`, message)
                .then(response => {
                    this.getAllChats()
                })
                .catch(err => console.log(err))
        }
    },

})