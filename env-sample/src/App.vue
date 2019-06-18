<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { firebaseApp } from "./firebaseApp";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  mounted() {
    firebaseApp
      .auth()
      // eslint-disable-next-line no-console
      .onAuthStateChanged(user => console.log(user || "no user"));
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
