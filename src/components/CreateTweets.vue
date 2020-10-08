<template>
  <div id="create_tweets">
    <p>Compose Tweets</p>
    <textarea
      class="box1"
      id="tweet-input"
      v-model="mytweet"
      placeholder="Max 200 Characters"
    ></textarea>
    <br />
    <br />
    <button class="btn2" @click="sendThistweet">Send Tweet</button>
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "create-tweets",
  data() {
    return {
      mytweet: ""
    };
  },
  methods: {
    sendThistweet: function() {
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "KuxH91zPs9WUhLLav8O6KNil0o4lB1vXKPYnN1nLbJTEl"
          },
          data: {
            loginToken: cookies.get("session"),
            content: this.mytweet
          }
        })
        .then(response => {
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
#create_tweets {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
.box1 {
  width: 300px;
  height: 200px;
  background-color: #f5f8fa;
  border-radius: 5px;
}
.btn2 {
  padding: 1vh 2vh;
  border-radius: 20px;
}
</style>