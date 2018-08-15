<template>
  <div id="app">
    <header-comp></header-comp>
    <menu-comp></menu-comp>
    <tag-comp></tag-comp>
    
    <router-view/>

    <brand-comp></brand-comp>
    <footer-comp></footer-comp>
    <svg-data></svg-data>
  </div>
</template>

<script>

import _Header from '@/components/_Header'
import _Menu from '@/components/_Menu'
import _Tags from '@/components/_Tags'
import _Brands from '@/components/_Brands'
import _Footer from '@/components/_Footer'
import _SVG from '@/components/_SVG'

export default {
  name: 'App',
  components: {
    'header-comp': _Header,
    'menu-comp': _Menu,
    'tag-comp': _Tags,
    'brand-comp': _Brands,
    'footer-comp': _Footer,
    'svg-data': _SVG
  }
}
</script>

<style lang="scss">
@import "./assets/styles/global.scss";
</style>
