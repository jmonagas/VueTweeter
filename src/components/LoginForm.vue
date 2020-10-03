<template>
  <div id="login">
    <h3>Please Login</h3>
    <p>Email</p>
    <input class="box" type="text" id="email-input" v-model="email" />
    <p>Password</p>
    <input class="box" type="text" id="password-input" v-model="password" />
    <br />
    <br />
    <button @click="loginUser">Login</button>
    <p></p>
    <h4>{{ loginStatus }}</h4>
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
      this.loginUser = "loginUser";
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
          this.loginStatus = "Something Went Wrong";
          alert("No User Is Logged In... Please Try Again!");
        });
    }
  }
};
</script>

<style scoped>
#login {
  text-align: center;
}
.box {
  width: 220px;
  height: 30px;
}
</style>