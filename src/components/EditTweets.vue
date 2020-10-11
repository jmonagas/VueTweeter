<template>
  <div>
    <h3>Edit Tweets</h3>
    <textarea
      class="box1"
      id="edit-input"
      v-model="myedits"
      placeholder="  Max 150 Characters"
    ></textarea>
    <br />
    <br />
    <button class="btn4" @click="editThisTweet">Edit</button>
    <br />
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
          console.log(response);
          alert("Do You Mean To Edit This Tweet?");
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
.box1 {
  height: 100px;
  width: 33vh;
}
.btn4 {
  padding: 0.5vh 2vh;
  margin-left: 1.5vh;
  background-color: #088af5;
  color: white;
  border-radius: 5px;
}
</style>