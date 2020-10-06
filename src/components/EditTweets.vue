<template>
  <div id="edit_tweets">
    <p>Edit Tweets</p>
    <textarea
      class="box1"
      id="edit-input"
      v-model="myedits"
      placeholder="Max 150 Characters"
    ></textarea>
    <br />
    <span>{{ myedits }}</span>
    <br />
    <button @click="editThisTweet">Edit</button>
    <br />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "edit-tweets",
  props: {
    tweetId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      myedits: ""
    };
  },
  methods: {
    editThisTweet: function() {
      axios
        .request({
          method: "PATCH",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "KuxH91zPs9WUhLLav8O6KNil0o4lB1vXKPYnN1nLbJTEl"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: this.tweetId,
            content: this.myedits
          }
        })
        .then(response => {
          cookies.set("mycomment", response);
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
#edit_tweets {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
.box1 {
  width: 200px;
  height: 60px;
  background-color: #f5f8fa;
  border-radius: 5px;
}
</style>