<template>
  <div id="accountinfo">
    <h3>Update Account</h3>
    <p>Email</p>
    <input type="text" id="email-input" v-model="email" />
    <p>Username</p>
    <input type="text" id="username-input" v-model="username" />
    <p>Password</p>
    <input type="text" id="password-input" v-model="password" />
    <p>Bio</p>
    <textarea id="bio-input" v-model="bio"></textarea>
    <p>Birthdate (yyyy-mm-dd)</p>
    <input type="text" id="birthdate-input" v-model="birthdate" />
    <br />
    <br />
    <button @click="updateUser">Send</button>
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "account-details",
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
    updateUser: function() {
      axios
        .request({
          method: "PATCH",
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
          cookies.set("session", response);
          console.log(response);
          //Create Function to Send to Home
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
#accountinfo {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
#bio-input {
  width: 250px;
  height: 30px;
}
</style>