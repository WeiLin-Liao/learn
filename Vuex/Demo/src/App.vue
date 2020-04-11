<template>
  <div id="app">
    <img src="./assets/logo.png">
    <v-add></v-add>
    <p>|------ {{$store.state.count}} ------|</p>
    <v-del></v-del>
  </div>
</template>

<script>
import Add from './components/add'
import Del from './components/del'

export default {
  name: 'App',
  components: {
    'v-add': Add,
    'v-del': Del
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
