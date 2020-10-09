<template>
  <div id="read_comments">
    <button class="btn2" @click="readThisComment">Read Comments</button>
    <br />
    <br />
    <ul>
      <li class="nolist" v-for="comment in comments" :key="comment.commentId">
        {{
          comment.username + " [ " + comment.content + " ] " + comment.createdAt
        }}
        <del-comments :commentId="comment.commentId" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import DelComments from "./DelComments.vue";

export default {
  name: "read-comments",
  components: {
    DelComments
  },
  props: {
    tweetId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      comments: ""
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
          this.comments.reverse();
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
.btn2 {
  padding: 1vh 2vh;
  border-radius: 20px;
}
.nolist {
  list-style: none;
  text-align: left;
  border-radius: 20px;
  border: 1px solid #1da1f2;
  padding: 1vh;
}
</style>