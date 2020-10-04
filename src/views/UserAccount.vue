<template>
  <div id="mainbody">
    <div>
      <account-body />
    </div>
    <div id="box1">
      <account-details />
    </div>
  </div>
</template>

<script>
import AccountDetails from "../components/AccountDetails.vue";
import AccountBody from "../components/AccountBody.vue";
import cookies from "vue-cookies";

export default {
  name: "user-account",
  components: {
    AccountDetails,
    AccountBody
  },
  methods: {
    validation: function() {
      if (cookies.get("session") == undefined) {
        this.$router.push("/login");
      }
    }
  },
  mounted() {
    this.validation();
  }
};
</script>

<style scoped>
#mainbody {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  text-align: center;
}
#box1 {
  margin: 1vh;
  background-color: #1da1f2;
  color: white;
}
</style>