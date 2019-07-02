<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view>
        <home msg="Welcome to Your Vue.js App"/>
      </router-view>
    </keep-alive>
  </div>
</template>

<script>
import Home from './pages/home/Home'

export default {
  name: 'app',
  components: {
    Home
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
}
</style>
