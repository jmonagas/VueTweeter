<template>
  <div>
    <button class="btn1" @click="likeThis">Like</button>
    <button class="btn2" @click="unlikeThis">Unlike</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "likes",
  components: {},
  data() {
    return {
      Liked: false
    };
  },
  props: {
    tweetId: Number
  },

  methods: {
    likeThis: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweet-likes",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "KuxH91zPs9WUhLLav8O6KNil0o4lB1vXKPYnN1nLbJTEl"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: this.tweetId
          }
        })
        .then(response => {
          console.log(response);
          this.Liked = true;
          confirm("Do You Mean To Like This Tweet?");
          alert("You Have Liked This Tweet");
        })
        .catch(error => {
          console.log(error);
        });
    },
    unlikeThis: function() {
      (this.Liked = false),
        axios
          .request({
            url: "https://tweeterest.ml/api/tweet-likes",
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "KuxH91zPs9WUhLLav8O6KNil0o4lB1vXKPYnN1nLbJTEl"
            },
            data: {
              loginToken: cookies.get("session"),
              tweetId: this.tweetId
            }
          })
          .then(response => {
            console.log(response);
            this.Liked = false;
            confirm("Do You Mean To Unlike This Tweet?");
            alert("You Have Stop Liking This Tweet");
          })
          .catch(error => {
            console.log(error);
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