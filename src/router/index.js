import Vue from "vue";
import VueRouter from "vue-router";
import SignUpPage from "../views/SignUpPage.vue";
import LoginPage from "../views/LoginPage.vue";
import WelcomePage from "../views/WelcomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signup-page",
    component: SignUpPage
  },
  {
    path: "/login",
    name: "login-page",
    component: LoginPage
  },
  {
    path: "/welcome",
    name: "welcome-page",
    component: WelcomePage,
  }
];

const router = new VueRouter({
  routes
});

export default router;
