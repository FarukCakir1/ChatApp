import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Welcome",
      path: "/",
      component: () => import("../views/Welcome.vue")
    },
    {
      name: "Home",
      path: "/home",
      component: () => import("../views/Home.vue")
    },
    {
      name: "Login",
      path: "/login",
      component: () => import("../views/Login.vue")
    },
    {
      name: "Register",
      path: "/register",
      component: () => import("../views/Register.vue")
    }
  ]
})

export default router
