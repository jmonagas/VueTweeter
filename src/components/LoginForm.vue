<template>
  <div id="login_form">
    <h3>Please Login</h3>
    <p>Email</p>
    <input class="box" type="text" id="email-input" v-model="email" />
    <p>Password</p>
    <input class="box" type="text" id="password-input" v-model="password" />
    <br />
    <br />
    <button class="btn" @click="loginUser">Login</button>
    <br />
    <br />
    <p>{{ loginStatus }}</p>
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
          cookies.set("user", response.data.email);
          this.$router.push("/account");
          console.log(response);
          this.loginStatus = "Loading";
        })
        .catch(error => {
          console.log(error);
          this.loginStatus = "Something Went Wrong";
          alert("No User Is Logged In... Please Try Again!");
          this.$router.push("/login");
        });
    }
  }
};
</script>

<style scoped>
#login_form {
  margin-top: 10vh;
  text-align: center;
}
.box {
  width: 220px;
  height: 30px;
  background-color: rgb(235, 243, 242);
  border-radius: 5px;
}
.btn {
  padding: 1vh 3vh;
  background-color: #088af5;
  color: white;
  border-radius: 5px;
}
</style>