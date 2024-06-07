<template>
  <div class="vehicles__wrapper">
    <Card
      v-for="item in items.data"
      :id="item.id"
      :key="item.id"
      :vehicle_name="item.vehicle_name"
      :vin="item.vin"
      :photo="item.placeholder"
      :created_at="item.created_at"
    />
  </div>
  <Pagination />
</template>
<script setup>
import { computed, ref, reactive, provide, onMounted, watch } from 'vue'
import axios from 'axios'
import Card from './Card.vue'
import Pagination from './UI/Pagination.vue'
// https://api.caiman-app.de/api/cars-test?search=2323&per_page=9&page=1
const items = ref([])
const fetchItems = async () => {
  try {
    await axios.get(
      `http://api.caiman-app.de/api/cars-test?&per_page=9&page=1`
    )
    .then(response => {
      items.value = response.data
      })
    .then(console.log('all done'))
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  fetchItems()
})
</script>

<style scoped>
.vehicles__wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 30px;
}
</style>
