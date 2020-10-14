<template>
  <div>
    <button class="btn1" @click="followThis">Follow</button>
    <button class="btn2" @click="unfollowThis">Unfollow</button>
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
      loginToken: cookies.get("session"),
      myFollows: cookies.get("myFollows")
    };
  },
  methods: {
    followThis: function() {
      cookies.set("myFollows", this.userId);
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
          alert("You Are Now Following This User");
        })
        .catch(error => {
          console.log(error);
          alert("Something Went Wrong");
        });
    },
    unfollowThis: function() {
      axios
        .request({
          method: "DELETE",
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
          alert("You Have Stopped Following This User");
          cookies.remove("myFollows");
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
.btn1 {
  padding: 0.5vh 2vh;
  background-color: #1da1f2;
  color: white;
  margin-top: 1vh;
  border-radius: 5px;
  margin-left: 2vh;
}
.btn2 {
  padding: 0.5vh 2vh;
  background-color: #aab8c2;
  color: white;
  margin-top: 1vh;
  border-radius: 5px;
  margin-left: 2vh;
}
</style>