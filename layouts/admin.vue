<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '#imports'
useHead({
  bodyAttrs: { class: 'bg-primary text-white' }
})
</script>
