<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-4">
            <h1 class="text-2xl font-bold text-gray-900">
              Dashboard
            </h1>
            <UBadge color="green" variant="soft">
              Admin
            </UBadge>
          </div>
          
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-3">
              <UAvatar
                :src="user?.imageUrl"
                :alt="user?.fullName || 'User'"
                size="sm"
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
            
            <UButton
              color="gray"
              variant="outline"
              @click="signOut"
            >
              <UIcon name="i-heroicons-arrow-left-on-rectangle" class="mr-2" />
              Sair
            </UButton>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Stats Cards -->
        <UCard>
          <template #header>
            <div class="flex items-center space-x-2">
              <UIcon name="i-heroicons-eye" class="text-blue-500" />
              <h3 class="font-semibold">Visualizações</h3>
            </div>
          </template>
          <div class="text-3xl font-bold text-gray-900">1,234</div>
          <p class="text-sm text-gray-500">+12% este mês</p>
        </UCard>

        <UCard>
          <template #header>
            <div class="flex items-center space-x-2">
              <UIcon name="i-heroicons-users" class="text-green-500" />
              <h3 class="font-semibold">Visitantes</h3>
            </div>
          </template>
          <div class="text-3xl font-bold text-gray-900">567</div>
          <p class="text-sm text-gray-500">+8% esta semana</p>
        </UCard>

        <UCard>
          <template #header>
            <div class="flex items-center space-x-2">
              <UIcon name="i-heroicons-chart-bar" class="text-purple-500" />
              <h3 class="font-semibold">Engajamento</h3>
            </div>
          </template>
          <div class="text-3xl font-bold text-gray-900">89%</div>
          <p class="text-sm text-gray-500">+5% este mês</p>
        </UCard>
      </div>

      <!-- Recent Activity -->
      <div class="mt-8">
        <UCard>
          <template #header>
            <h3 class="font-semibold">Atividade Recente</h3>
          </template>
          
          <div class="space-y-4">
            <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <UIcon name="i-heroicons-user-plus" class="text-green-500" />
              <div>
                <p class="font-medium">Novo visitante</p>
                <p class="text-sm text-gray-500">Há 2 minutos</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <UIcon name="i-heroicons-document-text" class="text-blue-500" />
              <div>
                <p class="font-medium">Página visualizada</p>
                <p class="text-sm text-gray-500">Há 5 minutos</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <UIcon name="i-heroicons-envelope" class="text-purple-500" />
              <div>
                <p class="font-medium">Novo contato</p>
                <p class="text-sm text-gray-500">Há 10 minutos</p>
              </div>
            </div>
          </div>
        </UCard>
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
