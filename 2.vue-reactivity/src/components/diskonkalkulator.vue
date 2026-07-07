<template>
  <h1>Kalkulator Diskon</h1>

  <h2>Harga</h2>
  <input
    type="number"
    v-model.number="harga1"
  >

  <h3>Diskon</h3>
  <input
    type="number"
    v-model.number="diskon1"
    min="0"
    max="100"
  >

  <h4>Results</h4>
  <p>harga: {{ harga1 }}</p>
  <p>diskon: {{ diskon1 }}</p>
  <p>harga akhir: {{ hargaakhir }}</p>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const harga1 = ref<number>(0)
const diskon1 = ref<number>(0)

const hargaakhir = computed<number>(() => {
const totaldiskon = Math.min(diskon1.value, 100)

return harga1.value - (harga1.value * totaldiskon / 100)
})
</script>