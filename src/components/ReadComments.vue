<template>
  <div>
    <button class="btn2" @click="readThisComment">Read Comments</button>
    <br />
    <br />
    <ul>
      <li v-for="comment in comments" :key="comment.commentId">
        <h3>{{ comment.content }}</h3>
        <p>
          {{ "Posted on " + comment.createdAt + " by " + comment.username }}
        </p>
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
  padding: 0.5vh 2vh;
  background-color: #f5f8fa;
  border-radius: 5px;
}
ul {
  list-style: none;
  line-height: 1.5;
  border: #1da1f2 1px solid;
  border-radius: 10px;
}
li {
  text-align: left;
}
</style>