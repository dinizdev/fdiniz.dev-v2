<template>
  <div class="relative w-64">
    <!-- Botão que abre/fecha o menu -->
    <button
      type="button"
      class="w-full bg-white px-4 py-2 border rounded shadow flex justify-between items-center"
      @click="toggle"
    >
      {{ modelValue || 'Selecione' }}
      <span>⌄</span>
    </button>

    <!-- Menu dropdown animado -->
    <div
      v-show="open"
      ref="dropdown"
      class="absolute mt-1 w-full bg-white border rounded shadow z-10"
    >
      <div
        v-for="option in options"
        :key="option"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        @click="selectOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, defineProps, defineEmits } from 'vue'
import gsap from 'gsap'

// Props e emits para v-model
const props = defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])

const open = ref(false)
const dropdown = ref<HTMLElement | null>(null)

const options = ['Opção 1', 'Opção 2', 'Opção 3']

const toggle = () => {
  open.value = !open.value
}

const selectOption = (option: string) => {
  emit('update:modelValue', option)
  open.value = false
}

// Animação
watch(open, (isOpen) => {
  if (dropdown.value) {
    if (isOpen) {
      gsap.fromTo(
        dropdown.value,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3 }
      )
    } else {
      gsap.to(dropdown.value, { opacity: 0, y: -10, duration: 0.2 })
    }
  }
})
</script>
