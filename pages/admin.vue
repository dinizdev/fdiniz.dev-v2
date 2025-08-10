<template>
  <div class="min-h-screen flex items-center justify-center bg-primary">
    <div class="max-w-md w-full space-y-8 p-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-2">Admin Login</h2>
        <p class="text-gray-300">Faça login para acessar o dashboard</p>
      </div>

      <div class="bg-white rounded-lg shadow-xl p-6">
        <div v-if="!isSignedIn" class="space-y-4">
          <button
            @click="handleSignIn"
            class="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              ></path>
            </svg>
            Entrar com SSO
          </button>

          <div class="text-center text-sm text-gray-500">
            Acesso restrito para administradores
          </div>
        </div>

        <div v-else class="text-center space-y-4">
          <div class="flex items-center justify-center space-x-3">
            <img
              :src="user?.imageUrl"
              :alt="user?.fullName || 'User'"
              class="w-12 h-12 rounded-full"
            />
            <div class="text-left">
              <p class="font-medium text-gray-900">
                {{ user?.fullName }}
              </p>
              <p class="text-sm text-gray-500">
                {{ user?.primaryEmailAddress?.emailAddress }}
              </p>
            </div>
          </div>

          <div class="space-y-2">
            <button
              @click="goToDashboard"
              class="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center"
            >
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
              Ir para Dashboard
            </button>

            <button
              @click="handleSignOut"
              class="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClerk, useUser } from '#imports'
import { navigateTo } from '#app'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'default',
  middleware: 'auth'
})

interface Error {
  message: string
}

const clerk = useClerk()
const { user } = useUser()

const isSignedIn = computed(() => clerk.value?.user != null)

const handleSignIn = async () => {
  try {
    await clerk.value?.openSignIn()
  } catch (e) {
    console.error('Erro ao fazer login:', e)
  }
}

const handleSignOut = async () => {
  await clerk.value?.signOut()
}

const goToDashboard = () => {
  navigateTo('/dashboard')
}
</script>
