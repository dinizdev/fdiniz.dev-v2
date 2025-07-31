<template>
  <div class="min-h-screen flex items-center justify-center bg-primary">
    <div class="max-w-md w-full space-y-8 p-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-white mb-2">
          Admin Login
        </h2>
        <p class="text-gray-300">
          Faça login para acessar o dashboard
        </p>
      </div>
      
      <div class="bg-white rounded-lg shadow-xl p-6">
        <div v-if="!isSignedIn" class="space-y-4">
          <UButton
            block
            color="primary"
            variant="solid"
            @click="signIn"
            class="w-full"
          >
            <UIcon name="i-heroicons-key" class="mr-2" />
            Entrar com SSO
          </UButton>
          
          <div class="text-center text-sm text-gray-500">
            Acesso restrito para administradores
          </div>
        </div>
        
        <div v-else class="text-center space-y-4">
          <div class="flex items-center justify-center space-x-3">
            <UAvatar
              :src="user?.imageUrl"
              :alt="user?.fullName || 'User'"
              size="lg"
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
            <UButton
              block
              color="primary"
              variant="solid"
              @click="navigateTo('/dashboard')"
            >
              <UIcon name="i-heroicons-arrow-right" class="mr-2" />
              Ir para Dashboard
            </UButton>
            
            <UButton
              block
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
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const { isSignedIn, signIn, signOut, user } = useAuth()
</script>
