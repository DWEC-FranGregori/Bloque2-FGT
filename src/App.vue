<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped lang="sass">
header
  margin-bottom: 10%
nav
  text-align: center

a
  text-decoration: none
  padding: 1.4%
  padding-right: 2%
  padding-left: 2%
  color: lch(86.18% 0 273.18)
  margin-right: 1.5%
  background-color: lch(17.65% 0 134.47)
  border-radius: 13px

  &:hover
    transition-duration: 500ms
    background-color: lch(62.65% 73.47 134.47)

</style>
