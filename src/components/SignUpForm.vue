<template>
  <div id="signup_form">
    <h3>Please Register</h3>
    <p>Email</p>
    <input class="box" type="text" id="email-input" v-model="email" />
    <p>Username</p>
    <input class="box" type="text" id="username-input" v-model="username" />
    <p>Password</p>
    <input class="box" type="text" id="password-input" v-model="password" />
    <p>Bio</p>
    <textarea
      class="box"
      v-model="bio"
      placeholder="  Max 200 Characters"
    ></textarea>
    <p>Birthdate</p>
    <input
      class="box"
      type="text"
      id="birthdate-input"
      v-model="birthdate"
      placeholder="  YYYY-MM-DD"
    />
    <br />
    <br />
    <button class="btn" @click="signupUser">Sign Up</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "signup-form",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      bio: "",
      birthdate: ""
    };
  },
  methods: {
    signupUser: function() {
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/users",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "KuxH91zPs9WUhLLav8O6KNil0o4lB1vXKPYnN1nLbJTEl"
          },
          data: {
            email: this.email,
            password: this.password,
            username: this.username,
            bio: this.bio,
            birthdate: this.birthdate
          }
        })
        .then(response => {
          cookies.set("session", response.data.loginToken);
          this.$router.push("/login");
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          alert("Something Went Wrong... Please Try Again!");
          this.$router.push("/signup");
        });
    }
  }
};
</script>

<style scoped>
#signup_form {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 10vh;
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
  border-radius: 5px;
  color: white;
}
</style>