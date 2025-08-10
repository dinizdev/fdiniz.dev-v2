<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-4">
            <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
            <span
              class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              Admin
            </span>
          </div>

          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-3">
              <img
                :src="user?.imageUrl"
                :alt="user?.fullName || 'User'"
                class="w-8 h-8 rounded-full"
              />
              <div class="text-sm">
                <p class="font-medium text-gray-900">
                  {{ user?.fullName }}
                </p>
                <p class="text-gray-500">
                  {{ user?.primaryEmailAddress?.emailAddress }}
                </p>
              </div>
            </div>

            <button
              @click="signOut"
              class="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
            >
              <svg
                class="w-4 h-4 mr-2"
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
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Stats Cards -->
        <div class="bg-white rounded-lg shadow-sm border p-6">
          <div class="flex items-center space-x-2 mb-4">
            <svg
              class="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
            <h3 class="font-semibold text-gray-900">Visualizações</h3>
          </div>
          <div class="text-3xl font-bold text-gray-900">1,234</div>
          <p class="text-sm text-gray-500">+12% este mês</p>
        </div>

        <div class="bg-white rounded-lg shadow-sm border p-6">
          <div class="flex items-center space-x-2 mb-4">
            <svg
              class="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              ></path>
            </svg>
            <h3 class="font-semibold text-gray-900">Visitantes</h3>
          </div>
          <div class="text-3xl font-bold text-gray-900">567</div>
          <p class="text-sm text-gray-500">+8% esta semana</p>
        </div>

        <div class="bg-white rounded-lg shadow-sm border p-6">
          <div class="flex items-center space-x-2 mb-4">
            <svg
              class="w-6 h-6 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path>
            </svg>
            <h3 class="font-semibold text-gray-900">Engajamento</h3>
          </div>
          <div class="text-3xl font-bold text-gray-900">89%</div>
          <p class="text-sm text-gray-500">+5% este mês</p>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="mt-8">
        <div class="bg-white rounded-lg shadow-sm border p-6">
          <h3 class="font-semibold text-gray-900 mb-4">Atividade Recente</h3>

          <div class="space-y-4">
            <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <svg
                class="w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                ></path>
              </svg>
              <div>
                <p class="font-medium text-gray-900">Novo visitante</p>
                <p class="text-sm text-gray-500">Há 2 minutos</p>
              </div>
            </div>

            <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <svg
                class="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              <div>
                <p class="font-medium text-gray-900">Página visualizada</p>
                <p class="text-sm text-gray-500">Há 5 minutos</p>
              </div>
            </div>

            <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <svg
                class="w-5 h-5 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <div>
                <p class="font-medium text-gray-900">Novo contato</p>
                <p class="text-sm text-gray-500">Há 10 minutos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  layout: 'dashboard'
})

const { user, signOut } = useAuth()
</script>

<style></style>
