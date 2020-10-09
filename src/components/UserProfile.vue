<template>
  <div id="user_profile">
    <button class="btn2" @click="readThisProfile">Profile</button>
    <br />
    <ul>
      <li class="nolist" v-for="user in users" :key="user.userId"></li>
    </ul>
    <p v-if="user.username != undefined">
      {{
        user.userId +
          ": " +
          user.username +
          " [ " +
          user.bio +
          " ] " +
          user.email
      }}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "user-profile",
  components: {},
  props: {
    userId: Number
  },
  data: function() {
    return {
      user: {}
    };
  },
  methods: {
    readThisProfile: function() {
      axios
        .request({
          method: "GET",
          url: "https://tweeterest.ml/api/users",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "KuxH91zPs9WUhLLav8O6KNil0o4lB1vXKPYnN1nLbJTEl"
          },
          params: {
            userId: this.userId
          }
        })
        .then(response => {
          this.user = response.data[0];
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          alert("Something Went Wrong");
        });
    }
  }
};
</script>

<style scoped>
.btn2 {
  padding: 1vh 2vh;
  border-radius: 20px;
}
.nolist {
  list-style: none;
  text-align: left;
  border-radius: 10px;
  border: 1px solid #1da1f2;
  padding: 0.5vh;
}
</style>