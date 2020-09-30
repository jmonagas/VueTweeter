<template>
  <div>
    <router-link to="/login">Login</router-link>
    <h3>Please Register</h3>
    <sign-up-form></sign-up-form>
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm.vue";

export default {
  name: "signup-page",
  components: {
    SignUpForm
  }
};
</script>

<style scoped>
</style>