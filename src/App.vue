<template>
  <div id="app">
    <div id="header">
      <img src="./assets/logo.svg">
    </div>
    <bug v-for="bug in bugs"></bug>
    <div id="add-bug">
      <button @click="addBug">+ Add New Bug</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      bugs: [],
      nextBugId: 0
    }
  },

  mounted: function () {
    if (!this.bugs) { console.log("Error initializing array of bugs... you have one (real) bug now."); return; }

    for(var i = 0; i < Math.floor((Math.random() *(7 - 3) + 3)); i++)
      this.addBug();
  },

  methods: {
    addBug: function () {
      this.bugs.push(this.nextBugId++);
    }
  }
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  background: #C5C3C6;
  font-family: 'Source Sans Pro', sans-serif;
  color: #46494c;
}

#header {
  background: #DCDCDD;
  padding: 24px 12em;
}

#add-bug {
  width: 512px;
  margin: 24px auto;
  text-align: right;
}

#add-bug button {
  padding: 4px 16px;
  background: #dcdcdd;
  border: 0;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
}

#add-bug button {
    outline: none;
}

#add-bug button:hover {
  background: #fff;
  cursor: pointer;
  
}

</style>
