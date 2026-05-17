<script setup lang="ts">
import { useCVStore, type CV } from "@/stores/cvStore"
import { computed, ref } from "vue"
import { columns } from "@/components/cv/columns"
import CvDataTable from "@/components/cv/CvDataTable.vue"

const cvStore = useCVStore()
const cvs = computed(() => Object.values(cvStore.cvs))
</script>

<template>
  <div class="container py-6 mx-auto">
    <CvDataTable :columns="columns" :data="cvs" />
  </div>
</template>
