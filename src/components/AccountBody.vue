<template>
  <div id="account_body">
    <button>Logout</button>
    <button @click="getAlltweets">Review</button>
    <ul>
      <li v-for="tweet in tweets" :key="tweet.tweetId">
        {{ tweet.username + " wrote: " + tweet.content }}
        <button @click="deleteTweets(tweet.tweetId)">Delete</button>
      </li>
    </ul>
    <create-tweets />
  </div>
</template>

<script>
import CreateTweets from "./CreateTweets.vue";
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "account-body",
  components: { CreateTweets },
  data() {
    return {
      tweets: []
    };
  },
  methods: {
    getAlltweets: function() {
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
  line-height: 1.5;
}
</style>