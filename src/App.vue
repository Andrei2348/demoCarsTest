<template>
  <main class="main">
    <Aside />
    <div class="main__wrapper">
      <Header />
      <div class="main__router-area">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<script setup>
import Aside from './components/UI/Aside.vue'
import Header from './components/UI/Header.vue'



</script>


<style scoped>
.main{
  height: 100vh;
  display: flex;
  align-items: start;
}
.main__wrapper{
  width: 100%;
}
.main__router-area{
  margin-top: 100px;
  padding-left: 256px;
  width: 100%;
}
</style>
