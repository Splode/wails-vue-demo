<template>
  <div id="app">
    <img alt="Wails logo" src="./assets/images/logo.png" class="logo zoomIn" />
    <router-link to="/home">Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/css/main.css'

export default {
  name: 'app',
}
</script>
