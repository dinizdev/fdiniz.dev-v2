<script setup lang="ts">
import AnimatedBackground from '~/components/AnimatedBackground.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-primary text-white">
    <!-- Navbar no topo -->
    <Navbar />
    <AnimatedBackground class="absolute inset-0 z-0" />
    <!-- Conteúdo centralizado responsivamente -->
    <main class="flex-1 flex items-center justify-center px-4 py-8 text-center">
      <div class="w-full max-w-2xl">
        <slot />
      </div>
    </main>
  </div>
</template>
