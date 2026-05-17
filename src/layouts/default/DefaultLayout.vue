<script setup lang="ts">
import AppFooter from "@/layouts/default/AppFooter.vue"
import AppHeader from "@/layouts/default/AppHeader.vue"
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppHeader />
    <main class="mx-auto max-w-3xl px-6 pt-14 md:px-8">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
