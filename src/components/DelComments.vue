<template>
  <div id="delete_comments">
    <button class="btn2" @click="deleteThisComment">Delete Comment</button>
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "del-comments",
  props: {
    commentId: {
      type: Number,
      required: true
    }
  },
  //   data() {
  //     return {
  //       comments: []
  //     };
  //   },
  methods: {
    deleteThisComment: function() {
      console.log(this.commentId);
      axios
        .request({
          method: "DELETE",
          url: "https://tweeterest.ml/api/comments",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "KuxH91zPs9WUhLLav8O6KNil0o4lB1vXKPYnN1nLbJTEl"
          },
          data: {
            loginToken: cookies.get("session"),
            commentId: this.commentId
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
#delete_comments {
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
}
.btn2 {
  padding: 1vh 3vh;
  border-radius: 5px;
}
</style>