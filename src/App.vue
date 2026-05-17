<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import DefaultLayout from "@/layouts/default/DefaultLayout.vue"

const router = useRoute()

const layout = computed(() => router.meta.layout || DefaultLayout)
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
