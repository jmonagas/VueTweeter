<template>
  <div id="welcome">
    <div>
      <landing-page></landing-page>
    </div>
    <div>
      <sign-up-form></sign-up-form>
    </div>
  </div>
</template>

<script>
import LandingPage from "../components/LandingPage.vue";
import SignUpForm from "../components/SignUpForm.vue";

export default {
  name: "welcome-page",
  components: {
    LandingPage,
    SignUpForm
  }
};
</script>

<style scoped>
#welcome {
  display: grid;
  text-align: center;
}
</style>