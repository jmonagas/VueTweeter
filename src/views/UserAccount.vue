<template>
  <div id="mainbody">
    <div>
      <account-body/>
    </div>
    <div id="box1">
      <account-details />
    </div>
  </div>
</template>

<script>
import AccountDetails from "../components/AccountDetails.vue";
import AccountBody from "../components/AccountBody.vue";

export default {
  name: "user-account",
  components: {
    AccountDetails,
    AccountBody,
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
  border: rgb(40, 150, 201) solid 1px;
}
</style>