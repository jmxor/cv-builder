<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { useCVStore, type CV } from "@/stores/cvStore"
import { IconTrashX } from "@tabler/icons-vue"

const props = defineProps<{ cv: CV }>()
const cvStore = useCVStore()
</script>

<template>
  <div class="flex gap-1">
    <Button variant="destructive" size="icon" @click="() => cvStore.deleteCv(cv.id)">
      <IconTrashX stroke="1.5" />
    </Button>
  </div>
</template>
