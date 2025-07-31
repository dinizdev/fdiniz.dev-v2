<template>
  <div
    class="flex flex-col flex-1 items-center justify-center pb-40 text-center md:items-start md:text-left"
  >
    <h1 class="text-5xl mb-4 font-satoshi font-bold">Felipe Diniz</h1>
    <div class="flex items-center gap-2">
      <div class="h-3 w-3 bg-green-500 rounded-full animate-blink"></div>
      <span class="text-sm">Available for work</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useHead } from '#imports'
useHead({
  title: 'Felipe Diniz - Frontend Developer',
  meta: [
    {
      name: 'description',
      content: 'Portfolio of Felipe Diniz, a Frontend Developer.'
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>
