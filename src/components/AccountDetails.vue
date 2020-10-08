<template>
  <div id="account_details">
    <h4>Update Account</h4>
    <p>Email</p>
    <input class="box" type="text" id="email-input" v-model="email" />
    <p>Username</p>
    <input class="box" type="text" id="username-input" v-model="username" />
    <p>Password</p>
    <input class="box" type="text" id="password-input" v-model="password" />
    <p>Bio</p>
    <textarea
      class="box"
      id="bio-input"
      v-model="bio"
      placeholder="Max 200 Characters"
    ></textarea>
    <p>Birthdate</p>
    <input
      class="box"
      type="text"
      id="birthdate-input"
      v-model="birthdate"
      placeholder="YYYY-MM-DD"
    />
    <br />
    <br />
    <button class="btn3" @click="updateUser">Update Account</button>
    <br />
    <br />
    <p>Password</p>
    <input class="box" type="text" id="password-input1" v-model="password" />
    <br />
    <br />
    <button class="btn3" @click="deleteAccount">Delete Account</button>
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
          cookies.set("session", response);
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          alert("Something Went Wrong");
        });
    },
    deleteAccount: function() {
      alert("Do You Mean to Delete Your Account?");
      axios
        .request({
          method: "DELETE",
          url: "https://tweeterest.ml/api/users",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "KuxH91zPs9WUhLLav8O6KNil0o4lB1vXKPYnN1nLbJTEl"
          },
          data: {
            loginToken: cookies.get("session"),
            password: this.password
          }
        })
        .then(response => {
          cookies.remove("session");
          cookies.remove("user");
          this.$router.push("/login");

          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
#account_details {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
.box {
  width: 220px;
  height: 30px;
  background-color: white;
  border-radius: 5px;
}
.btn3 {
  padding: 1vh 3vh;
  border-radius: 5px;
}
</style>