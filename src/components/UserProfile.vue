<template>
  <div>
    <button class="btn2" @click="readThisProfile">Profile</button>
    <br />
    <ul>
      <li v-for="user in users" :key="user.userId"></li>
    </ul>
    <div id="prof-disp">
      <p v-if="user.username != undefined"></p>
      <h4>{{ user.bio }}</h4>
      <p>{{ user.email }}</p>
    </div>
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
  padding: 0.5vh 2vh;
  background-color: #f5f8fa;
  border-radius: 5px;
  margin-top: 1vh;
}
#prof-disp {
  background-color: white;
  border-radius: 10px;
}
</style>