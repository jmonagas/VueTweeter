<template>
  <div id="read_comments">
    <button @click="readThisComment">Read Comments</button>
    <ul>
      <li v-for="comment in comments" :key="comment.commentId">
        {{ comment.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "read-comments",
  props: {
    tweetId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      comments: []
    };
  },
  methods: {
    readThisComment: function() {
      axios
        .request({
          method: "GET",
          url: "https://tweeterest.ml/api/comments",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "KuxH91zPs9WUhLLav8O6KNil0o4lB1vXKPYnN1nLbJTEl"
          },
          params: {
            tweetId: this.tweetId
          }
        })
        .then(response => {
          this.comments = response.data;
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
</style>