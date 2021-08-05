import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import PublicContent from "./components/PublicContent.vue";
import ProtectGet from "./components/ProtectGet.vue";
import ProtectPut from "./components/ProtectPut.vue";
import ProtectAdmin from "./components/ProtectAdmin.vue";
import Logout from "./components/Logout.vue";
import ErrorComp from "./components/Error.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/public",
    component: PublicContent,
  },
  {
    path: "/protected/get",
    component: ProtectGet,
  },
  {
    path: "/protected/put",
    component: ProtectPut,
  },
  {
    path: "/protected/admin",
    component: ProtectAdmin,
  },
  {
    path: "/logout",
    component: Logout,
  },
  {
    path: "/error",
    component: ErrorComp,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;