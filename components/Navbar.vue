<template>
  <header class="w-full text-white z-50">
    <nav
      class="relative max-w-6xl mx-auto px-4 py-4 flex items-center justify-between"
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="text-xl font-bold whitespace-nowrap z-50 relative"
      >
        <h1>Felipe Diniz</h1>
      </NuxtLink>

      <!-- Botão Hamburguer (mobile) -->
      <button
        @click="toggleMenu"
        class="md:hidden absolute right-4 top-4 z-50 transition-transform duration-300"
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

      <!-- Menu Desktop Centralizado -->
      <div
        class="hidden md:flex gap-6 text-sm uppercase items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      >
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="px-2 py-1 text-gray-300 hover:text-white transition"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <!-- Menu Mobile -->
      <Transition name="fade-slide">
        <div
          v-show="hydrated && showMenu"
          class="absolute top-16 left-0 w-full flex flex-col gap-4 py-4 px-4 md:hidden text-sm uppercase items-start z-40"
        >
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="px-2 py-1 text-gray-300 hover:text-white transition"
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
