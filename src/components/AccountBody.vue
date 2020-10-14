<template>
  <div id="account_body">
    <button class="btn4" @click="endSession">Logout</button> {{ user }}
    <create-tweets />
    <button class="btn4" @click="reviewTweets">Review</button>
    <button class="btn4" @click="hideContent">Hide/Show</button>
    <ul id="main_content">
      <li v-for="tweet in tweets" :key="tweet.tweetId">
        <h3>{{ tweet.content }}</h3>
        <p>{{ tweet.createdAt + " posted by " + tweet.username }}</p>
        <button class="btn2" @click="deleteTweets(tweet.tweetId)">
          Delete
        </button>
        <likes :tweetId="tweet.tweetId" />
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
import Likes from "./Likes.vue";
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
    Likes,
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
          confirm("Do You Mean To Delete This Tweet?");
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
          alert("Something Went Wrong!");
        });
    },
    endSession: function() {
      cookies.remove("session");
      cookies.remove("user");
      cookies.remove("myFollows");
      alert("Do You Mean To End Your Session?");
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
.btn4 {
  margin-top: 20px;
  padding: 0.5vh 2vh;
  margin-left: 2vh;
  background-color: #088af5;
  color: white;
  border-radius: 5px;
}
.btn2 {
  padding: 0.5vh 1vh;
  background-color: #e1e8ed;
  border-radius: 5px;
}
#account_body {
  padding: 1vh;
}
ul {
  list-style: none;
  background-color: #f5f8fa;
  padding: 1vh;
}
li {
  border: #1da1f2 1px solid;
  border-radius: 30px;
  padding: 1vh;
}
</style>