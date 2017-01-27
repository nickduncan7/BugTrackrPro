import Vue from 'vue'
import App from './App.vue'

// Components
import Bug from './Bug.vue'

Vue.component('bug', Bug);

new Vue({
  el: '#app',
  render: h => h(App)
})
