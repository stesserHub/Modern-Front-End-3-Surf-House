<template>
  <div id="app">
    <header-comp></header-comp>
    <menu-comp></menu-comp>
    <tag-comp></tag-comp>
    
    
    <router-view/>

    <footer-comp></footer-comp>
  </div>
</template>

<script>

import _Header from '@/components/_Header'
import _Menu from '@/components/_Menu'
import _Tags from '@/components/_Tags'
import _Footer from '@/components/_Footer'

export default {
  name: 'App',
  components: {
    'header-comp': _Header,
    'menu-comp': _Menu,
    'tag-comp': _Tags,
    'footer-comp': _Footer
  }
}
</script>

<style>
@import "./assets/styles/global.scss";
</style>
