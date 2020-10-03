/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import SignUpPage from "../views/SignUpPage.vue";
import LoginPage from "../views/LoginPage.vue";
import WelcomePage from "../views/WelcomePage.vue";
import UserAccount from "../views/UserAccount.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome-page",
    component: WelcomePage,
  },
  {
    path: "/signup",
    name: "signup-page",
    component: SignUpPage,
  },
  {
    path: "/login",
    name: "login-page",
    component: LoginPage,
  },
  {
    path: "/account",
    name: "user-account",
    component: UserAccount,
  },
];

const router = new VueRouter({
  routes
});

export default router;
