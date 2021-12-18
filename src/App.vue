<template>
  <div id="app">
    <div style="position: absolute;top:10px;width:0;height: 0">
      <router-link to="/home">
        <img alt="logo" src="./assets/logo.png" style="height: 60px;width: 163px">
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
	margin: 0px;
	padding: 0px;
	width: 100vw;
	height: 100vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  padding: 0;
}
</style>
