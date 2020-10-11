<template>
  <div>
    <h3>Compose Tweets</h3>
    <textarea
      class="box1"
      id="tweet-input"
      v-model="mytweet"
      placeholder="   Max 200 Characters"
    ></textarea>
    <br />
    <br />
    <button class="btn2" @click="sendThistweet">Send Tweet</button>
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
.box1 {
  height: 200px;
  width: 35vh;
  border-radius: 5px;
}
.btn2 {
  padding: 0.5vh 2vh;
  background-color: #f5f8fa;
  border-radius: 5px;
}
</style>