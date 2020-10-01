<template>
  <div id="welcome">
    <h3>Welcome</h3>
    <div>
      <sign-up-form></sign-up-form>
    </div>
    <div>
      <login-form></login-form>
    </div>
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm.vue";
import LoginForm from "../components/LoginForm.vue";

export default {
  name: "landing-page",
  components: {
    SignUpForm,
    LoginForm
  }
};
</script>

<style scoped>
#welcome {
  text-align: center;
}
</style>