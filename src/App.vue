<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/account">Account</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  text-align: right;
  font-size: 14px;
  min-height: 97vh;
  border: solid 1px #e1e8ed;
}
#nav {
  margin: 0;
  padding: 3vh 4vh;
  background-color: #1da1f2;
}
#nav a {
  color: white;
}
</style>