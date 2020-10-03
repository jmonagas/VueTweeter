<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Signup</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  text-align: right;
  margin: 3vh;
  background-color: rgb(249, 251, 252);
  height: 90vh;
}
#nav {
  margin: 5vh;
}
</style>