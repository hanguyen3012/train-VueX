<template>
  <div id="app"><NavbarItem /><TodoItem /></div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import NavbarItem from "./components/NavbarItem.vue";
// import store from "./store/index";
export default {
  name: "App",
  components: { TodoItem, NavbarItem },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(219, 219, 219);
  margin: 20px auto;
  width: 90%;
  max-width: 800px;
}
</style>
