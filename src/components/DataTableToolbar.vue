<script setup lang="ts" generic="TData">
import type { Table } from "@tanstack/vue-table"
import { Button } from "@/components/ui/button"
import { IconSettings } from "@tabler/icons-vue"

const props = defineProps<{ table?: Table<TData> }>()
</script>

<template>
  <div class="flex gap-1.5 items-center justify-between mb-4">
    <slot />
    <Button variant="outline" size="icon">
      <IconSettings stroke="1.5" />
    </Button>
  </div>
</template>
