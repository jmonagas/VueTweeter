<template>
  <div id="frame1">
    <button id="btn">Logout</button>
    <p @click="getAlltweets">Display Tweets Here</p>
    <ul>
      <li v-for="tweet in tweets" :key="tweet.tweetId">{{ tweet.content }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "account-body",
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
    }
  }
};
</script>

<style scoped>
#frame1 {
  border: solid rgb(8, 196, 243) 1px;
  text-align: justify;
}
</style>