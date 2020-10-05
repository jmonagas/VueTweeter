<template>
  <div id="my_follows">
    <button @click="followThis">Follow</button>
    <p>{{ ifollow }}</p>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "follows",
  props: {
    userId: {
      type: Number,
      required: true
    },
    data() {
      return {
        ifollow: []
      };
    }
  },
  methods: {
    followThis: function() {
      axios
        .request({
          method: "GET",
          url: "https://tweeterest.ml/api/follows",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "KuxH91zPs9WUhLLav8O6KNil0o4lB1vXKPYnN1nLbJTEl"
          },
          data: {
            loginToken: cookies.get("session"),
            userId: this.userId
          }
        })
        .then(response => {
          cookies.set("ifollow", response);
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
</style>