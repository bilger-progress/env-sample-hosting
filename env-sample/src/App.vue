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
      .database()
      .ref("env")
      .once("value")
      .then(dataSnap => dataSnap.val())
      // eslint-disable-next-line no-console
      .then(data => console.log(data));
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
