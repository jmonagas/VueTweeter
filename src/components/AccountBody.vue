<template>
  <div id="account_body">
    <button class="btn4" @click="endSession">Logout</button> {{ user }}
    <create-tweets />
    <button class="btn4" @click="reviewTweets">Review</button>
    <button class="btn4" @click="hideContent">Hide/Show</button>
    <ul id="main_content">
      <li v-for="tweet in tweets" :key="tweet.tweetId">
        {{
          tweet.username +
            " [ " +
            tweet.content +
            " ] " +
            tweet.createdAt +
            "  "
        }}
        <button class="btn2" @click="deleteTweets(tweet.tweetId)">
          Delete
        </button>
        <edit-tweets :tweetId="tweet.tweetId" />
        <read-comments :tweetId="tweet.tweetId" />
        <make-comment :tweetId="tweet.tweetId" />
        <user-profile :userId="tweet.userId" />
        <follows :userId="tweet.userId" />
      </li>
    </ul>
  </div>
</template>

<script>
import CreateTweets from "./CreateTweets.vue";
import MakeComment from "./MakeComment.vue";
import EditTweets from "./EditTweets";
import ReadComments from "./ReadComments.vue";
import UserProfile from "./UserProfile";
import Follows from "./Follows.vue";

import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "account-body",
  components: {
    CreateTweets,
    MakeComment,
    EditTweets,
    ReadComments,
    UserProfile,
    Follows
  },
  data() {
    return {
      tweets: [],
      user: cookies.get("user")
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
            user: cookies.get("user"),
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
      cookies.remove("user");
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
  line-height: 2;
  padding: 3vh;
  text-align: justify;
}
ul {
  padding: 1vh;
  list-style: none;
}
li {
  border: solid 0.5px #e1e8ed;
  padding: 1vh;
  border-radius: 20px;
}
.btn4 {
  padding: 1vh 3vh;
  background-color: #088af5;
  border-radius: 5px;
  color: white;
}
.btn2 {
  padding: 1vh 2vh;
  border-radius: 20px;
}
</style>