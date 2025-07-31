<template>
  <div ref="container" class="fixed inset-0 z-[-1] overflow-hidden">
    <div
      v-for="i in 5"
      :key="i"
      class="absolute rounded-full opacity-20 mix-blend-soft-light blur-3xl"
      :style="getStyle(i)"
      :ref="(el) => (circles[i - 1] = el)"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const container = ref(null)
const circles = []

const colors = ['#7c3aed', '#ec4899', '#22d3ee', '#10b981', '#f59e0b']

function getStyle(i) {
  const size = 300 + i * 40
  return {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: colors[i % colors.length],
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`
  }
}

onMounted(() => {
  circles.forEach((circle, index) => {
    gsap.to(circle, {
      duration: 10 + index * 2,
      x: () => Math.random() * 200 - 100,
      y: () => Math.random() * 200 - 100,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  })
})
</script>
