<template>
  <div>
    <button class="btn2" @click="followThis">Follow</button>
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
    }
  },
  data() {
    return {
      loginToken: cookies.get("session")
    };
  },
  methods: {
    followThis: function() {
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/follows",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "KuxH91zPs9WUhLLav8O6KNil0o4lB1vXKPYnN1nLbJTEl"
          },
          data: {
            followId: this.userId,
            loginToken: this.loginToken
          }
        })
        .then(response => {
          console.log(response);
          alert("You Are Following This User");
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
  background-color: gray;
  color: white;
  margin-top: 1vh;
  border-radius: 5px;
}
</style>