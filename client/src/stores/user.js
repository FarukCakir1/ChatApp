import { defineStore } from 'pinia'
import axiosClient from '../utils/appAxios'
import router from "../router/index"

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        allUsers: null,
        otherUser: null,
        loginSuccess: null
    }),
    getters: {
        _currentUser: (state) => {
            return state.user
        },
        _allUsers: (state) => {
            return state.allUsers
        },
        _otherUser: (state) => {
            return state.otherUser
        },
        _loginSuccess: (state) => {
            return state.loginSuccess
        }
    },
    actions: {
        getAll(){
            axiosClient.get("/users")
                .then(response => {
                    this.$state.allUsers = response.data.filter(user => user._id !== this.$state.user._id)
                })
        },
        loginUser(loginData){
            axiosClient.post("/users/login", loginData)
                .then(response => {
                    console.log(response)
                    this.$state.user = response.data || null
                    this.$state.otherUser = null
                    if(response.data){
                        this.$state.loginSuccess = true
                        router.push({'name': "Home"})
                    }else{
                        this.$state.loginSuccess = false
                    }
                    
                })
                .catch(err => {
                    this.$state.loginSuccess = false
                })
        },
        newRegistration(newUserData){
            axiosClient.post("/users", newUserData)
                .then(response => {
                    console.log(response)
                    this.$state.user = response.data
                    this.$state.otherUser = null
                })
                .catch(err => console.log(err))
        },
        async setOtherUser(user){
            this.$state.otherUser = user
        },
        updateProfilePic(data) {
            axiosClient.post("/users/updatepic", data)
                .then(response => console.log(response))
                .catch(err => console.log(err))
        }
        
    },
    
})
