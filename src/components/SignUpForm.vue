<template>
  <div id="signup">
    <h3>Please Register</h3>
    <p>Email</p>
    <input class="box" type="text" id="email-input" v-model="email" />
    <p>Username</p>
    <input class="box" type="text" id="username-input" v-model="username" />
    <p>Password</p>
    <input class="box" type="text" id="password-input" v-model="password" />
    <p>Bio</p>
    <textarea class="box" v-model="bio"></textarea>
    <p>Birthdate (yyyy-mm-dd)</p>
    <input class="box" type="text" id="birthdate-input" v-model="birthdate" />
    <br />
    <br />
    <button @click="signupUser">Sign Up</button>
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
          // Write Code for Validation of Cookie
          cookies.set("session", response.data.loginToken);
          this.$router.push("/login");
          console.log(response);
          //Create Function to Send to Home
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
#signup {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
.box {
  width: 220px;
  height: 30px;
}
</style>