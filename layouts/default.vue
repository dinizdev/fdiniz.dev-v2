<template>
  <Head>
    <link
      rel="stylesheet"
      href="https://api.fontshare.com/v2/css?f[]=satoshi@400,700&display=swap"
    />
  </Head>
  <div class="min-h-screen flex flex-col bg-primary text-white">
    <!-- Navbar no topo -->
    <Navbar />
    <!-- Conteúdo centralizado responsivamente -->
    <main class="flex-1 flex items-center justify-center text-center">
      <div class="w-full max-w-2xl">
        <slot />
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
import { useHead } from '#imports'
useHead({
  bodyAttrs: { class: 'bg-primary text-white' }
})
</script>
