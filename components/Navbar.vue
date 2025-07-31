<template>
  <header class="w-full text-white z-50">
    <nav
      class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between relative"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl font-bold">
        <AlignHorizontalDistributeEnd />
      </NuxtLink>

      <!-- Botão Hamburguer com animação -->
      <button
        @click="toggleMenu"
        class="absolute top-4 right-4 md:hidden z-50 transition-transform duration-300"
        :class="showMenu ? 'scale-105' : ''"
        aria-label="Toggle menu"
      >
        <div class="relative w-8 h-6">
          <!-- Linha 1 -->
          <span
            class="absolute top-0 left-0 h-0.5 w-full bg-white transition-all duration-300 ease-in-out"
            :class="showMenu ? 'rotate-45 top-2.5' : 'rotate-0 top-0'"
          />
          <!-- Linha 2 -->
          <span
            class="absolute top-2.5 left-0 h-0.5 w-full bg-white transition-all duration-300 ease-in-out"
            :class="showMenu ? 'opacity-0' : 'opacity-100'"
          />
          <!-- Linha 3 -->
          <span
            class="absolute bottom-0 left-0 h-0.5 w-full bg-white transition-all duration-300 ease-in-out"
            :class="showMenu ? '-rotate-45 bottom-2.5' : 'rotate-0 bottom-0'"
          />
        </div>
      </button>

      <!-- Menu -->
      <div
        v-show="hydrated && (showMenu || isDesktop)"
        class="absolute top-16 left-0 w-full flex flex-col items-center gap-4 py-4 md:static md:flex-row md:justify-center md:bg-transparent md:py-0 relative uppercase text-sm"
      >
        <!-- Pílula animada -->
        <div
          v-show="pill.visible"
          class="absolute h-9 bg-white/10 rounded-xl transition-all duration-300 ease-out z-0"
          :style="pillStyle"
        />

        <!-- Itens do menu -->
        <NuxtLink
          v-for="(item, index) in navItems"
          :key="item.to"
          :to="item.to"
          :ref="(el) => setRef(el, index)"
          class="relative z-10 px-4 py-2 text-gray-300 hover:text-white transition"
          @mouseenter="() => updatePill(index)"
          @mouseleave="resetPill"
          @click="closeMenu"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { AlignHorizontalDistributeEnd } from 'lucide-vue-next'
import { ref, reactive, computed, onMounted, watch, nextTick } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { useRoute } from 'vue-router'

const hydrated = ref(false)
const showMenu = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')
const route = useRoute()

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Uses', to: '/uses' },
  { label: 'Contact', to: '/contact' }
]

const navRefs = ref([])

function setRef(el, index) {
  if (el) navRefs.value[index] = el
}

const pill = reactive({
  x: 0,
  width: 0,
  visible: false
})

const pillStyle = computed(() => ({
  width: `${pill.width}px`,
  transform: `translateX(${pill.x}px)`,
  opacity: pill.visible ? 1 : 0
}))

function updatePill(index) {
  const el = navRefs.value[index]
  if (!el) return
  const parentLeft = el.parentElement.getBoundingClientRect().left
  const { left, width } = el.getBoundingClientRect()
  pill.x = left - parentLeft
  pill.width = width
  pill.visible = true
}

function resetPill() {
  setTimeout(() => {
    setActivePill()
  }, 100)
}

function setActivePill() {
  const index = navItems.findIndex((i) => i.to === route.path)
  if (index !== -1) updatePill(index)
}

function toggleMenu() {
  showMenu.value = !showMenu.value
}

function closeMenu() {
  if (!isDesktop.value) showMenu.value = false
}

onMounted(() => {
  hydrated.value = true
  nextTick(() => setActivePill())
})

watch(
  () => route.path,
  () => {
    nextTick(() => setActivePill())
  }
)
</script>
