<script setup>
import Aside from './components/UI/Aside.vue'
import Header from './components/UI/Header.vue'
</script>

<template>
  <main class="main">
    <Aside />
    <div class="main__wrapper">
      <Header />
      <RouterView />
    </div>
  </main>
</template>

<style scoped>

</style>
