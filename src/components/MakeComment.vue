<template>
  <div>
    <h3>Add Comments</h3>
    <textarea
      class="box1"
      id="comment-input"
      v-model="mycomment"
      placeholder="  Max 150 Characters"
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
          console.log(response);
          alert("Do You Mean To Add This Comment?");
          window.confirm();
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
  background-color: #088af5;
  color: white;
  border-radius: 5px;
}
.box1 {
  height: 100px;
  width: 33vh;
}
</style>