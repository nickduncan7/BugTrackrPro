<template>
  <div id="app">
    <div id="header">
      <img src="./assets/logo.svg">
    </div>
    <bug></bug>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Crapp'
    }
  }
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  background: #C5C3C6;
}

#header {
  background: #DCDCDD;
  padding: 24px 12em;
}
</style>
