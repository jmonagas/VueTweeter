<template>
  <div id="login">
    <h3>Please Login</h3>
    <p>Email</p>
    <input type="text" id="email-input" v-model="email" />
    <p>Password</p>
    <input type="text" id="password-input" v-model="password" />
    <br />
    <br />
    <button @click="loginUser">Login</button>
    <p></p>
    <h3>{{ loginStatus }}</h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  data() {
    return {
      email: "",
      password: "",
      loginStatus: ""
    };
  },
  methods: {
    loginUser: function() {
      this.loginUser = "Loading";
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/login",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "KuxH91zPs9WUhLLav8O6KNil0o4lB1vXKPYnN1nLbJTEl"
          },
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          cookies.set("session", response.data.loginToken);
          console.log(response);
          this.loginStatus = "Success";
        })
        .catch(error => {
          console.log(error);
          this.loginStatus = "Error";
        });
    }
  }
};
</script>

<style scoped>
#login {
  background-color: rgb(189, 233, 247);
  text-align: center;
  border-radius: 20px;
}
</style>