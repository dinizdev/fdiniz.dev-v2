<template>
  <div class="min-h-screen flex flex-col bg-primary text-white">
    <!-- Navbar no topo -->
    <Navbar />
    <!-- Conteúdo centralizado responsivamente -->
    <main class="flex-1 flex items-center justify-center px-4 py-8 text-center">
      <div class="w-full max-w-2xl">
        <slot />
      </div>
    </main>
  </div>
</template>
