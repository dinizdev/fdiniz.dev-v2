<template>
  <header class="w-full text-white z-50">
    <nav
      class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between relative"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl font-bold">
        <h1>Fdiniz.Dev</h1>
      </NuxtLink>

      <!-- Botão Hamburguer com quadradinhos e ícone X -->
      <button
        @click="toggleMenu"
        class="absolute top-4 right-4 md:hidden z-50 transition-transform duration-300"
        :class="showMenu ? 'scale-105' : ''"
        aria-label="Toggle menu"
      >
        <div class="relative w-6 h-6 flex items-center justify-center">
          <!-- Quadradinhos -->
          <div
            class="grid grid-cols-2 gap-1 transition-opacity duration-200"
            :class="showMenu ? 'opacity-0' : 'opacity-100'"
          >
            <LayoutGrid />
          </div>
          <!-- Ícone X -->
          <X
            class="absolute text-white w-5 h-5 transition-opacity duration-200"
            :class="showMenu ? 'opacity-100' : 'opacity-0'"
          />
        </div>
      </button>

      <!-- Menu animado -->
      <Transition name="fade-slide">
        <div
          v-show="hydrated && (showMenu || isDesktop)"
          class="absolute top-16 left-0 w-full flex flex-col items-center gap-4 py-4 md:static md:flex-row md:justify-center md:bg-transparent md:py-0 relative uppercase text-sm"
        >
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="px-4 py-2 text-gray-300 hover:text-white transition"
            @click="closeMenu"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { X, LayoutGrid } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'
import { useMediaQuery } from '@vueuse/core'

const hydrated = ref(false)
const showMenu = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Uses', to: '/uses' },
  { label: 'Contact', to: '/contact' }
]

function toggleMenu() {
  showMenu.value = !showMenu.value
}

function closeMenu() {
  if (!isDesktop.value) showMenu.value = false
}

onMounted(() => {
  hydrated.value = true
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
