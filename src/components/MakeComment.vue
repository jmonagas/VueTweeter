<template>
  <div id="add_comments">
    <p>Add Comments</p>
    <textarea
      class="box1"
      id="comment-input"
      v-model="mycomment"
      placeholder="Max 150 Characters"
    ></textarea>
    <br />
    <br />
    <button class="btn2" @click="addThisComment">Comment</button>
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "make-comment",
  props: {
    tweetId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      mycomment: ""
    };
  },
  methods: {
    addThisComment: function() {
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/comments",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "KuxH91zPs9WUhLLav8O6KNil0o4lB1vXKPYnN1nLbJTEl"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: this.tweetId,
            content: this.mycomment
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
#add_comments {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
.box1 {
  width: 200px;
  height: 60px;
  background-color: #f5f8fa;
  border-radius: 5px;
}
.btn2 {
  padding: 1vh 3vh;
  border-radius: 5px;
}
</style>