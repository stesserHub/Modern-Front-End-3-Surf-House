<template>
  <div id="app">
    <header-comp></header-comp>
    <menu-comp></menu-comp>
    <img src="./assets/logo.png">
    
    <router-view/>

    <footer-comp></footer-comp>
  </div>
</template>

<script>

import _Header from '@/components/_Header'
import _Menu from '@/components/_Menu'
import _Footer from '@/components/_Footer'

export default {
  name: 'App',
  components: {
    'header-comp': _Header,
    'menu-comp': _Menu,
    'footer-comp': _Footer
  }
}
</script>

<style>
@import "./assets/styles/global.scss";
</style>
