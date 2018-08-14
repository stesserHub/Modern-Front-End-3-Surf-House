<template>
  <div id="app">
    <header-comp></header-comp>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>

import _Header from '@/components/_Header'

export default {
  name: 'App',
  components: {
    'header-comp': _Header
  }
}
</script>

<style>
@import "./assets/styles/global.scss";
</style>
