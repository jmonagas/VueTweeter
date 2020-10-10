<template>
  <div>
    <button class="btn2" @click="deleteThisComment">Delete</button>
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
.btn2 {
  background-color: #e1e8ed;
  padding: 0.5vh 1vh;
  border-radius: 5px;
}
</style>