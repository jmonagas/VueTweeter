<template>
  <div id="account_body">
    <button @click="endSession">Logout</button>
    <create-tweets />
    <button @click="reviewTweets">Review</button>
    <button @click="hideContent">Hide/Show</button>
    <ul id="main_content">
      <li v-for="tweet in tweets" :key="tweet.tweetId">
        {{
          " On " +
            tweet.created_at +
            " : " +
            tweet.username +
            " wrote : " +
            tweet.content +
            " "
        }}
        <button @click="deleteTweets(tweet.tweetId)">Delete</button>
        <edit-tweets :tweetId="tweet.tweetId" />
        <make-comment :tweetId="tweet.tweetId" />
        <follows :userId="tweet.userId" />
      </li>
    </ul>
  </div>
</template>

<script>
import CreateTweets from "./CreateTweets.vue";
import MakeComment from "./MakeComment.vue";
import EditTweets from "./EditTweets";
import Follows from "./Follows.vue";

import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "account-body",
  components: { CreateTweets, MakeComment, EditTweets, Follows },
  data() {
    return {
      tweets: []
    };
  },
  methods: {
    reviewTweets: function() {
      axios
        .request({
          method: "GET",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "KuxH91zPs9WUhLLav8O6KNil0o4lB1vXKPYnN1nLbJTEl"
          }
        })
        .then(response => {
          this.tweets = response.data;
          console.log(response.data);
          this.tweets.reverse();
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteTweets: function(tweetId) {
      axios
        .request({
          method: "DELETE",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "KuxH91zPs9WUhLLav8O6KNil0o4lB1vXKPYnN1nLbJTEl"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: tweetId
          }
        })
        .then(response => {
          this.tweets = this.tweets.filter(function(tweet) {
            return tweet.tweetId != tweetId;
          });
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    endSession: function() {
      cookies.remove("session");
      alert("Your Session Has Ended!");
      this.$router.push("/login");
    },
    hideContent: function() {
      let myContent = document.getElementById("main_content");
      if (myContent.style.display === "none") {
        myContent.style.display = "block";
      } else {
        myContent.style.display = "none";
      }
    }
  }
};
</script>

<style scoped>
#account_body {
  text-align: justify;
  padding: 2vh;
}
ul {
  text-align: justify;
  padding: 1vh;
  list-style: none;
}
li {
  line-height: 2;
  border: solid 0.5px #e1e8ed;
  padding: 2vh 1vh;
  border-radius: 5px;
}
</style>