<script setup lang="ts" generic="TData, TValue">
import { ref } from "vue"
import type { ColumnDef } from "@tanstack/vue-table"
import {
  useVueTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/vue-table"

import { Button } from "@/components/ui/button"
import DataTable from "@/components/DataTable.vue"
import DataTableToolbar from "../DataTableToolbar.vue"
import { IconPlus } from "@tabler/icons-vue"
import { useCVStore } from "@/stores/cvStore"

const props = defineProps<{
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}>()

const cvStore = useCVStore()

// local table state
const globalFilter = ref("")

const table = useVueTable({
  get data() {
    return props.data
  },
  get columns() {
    return props.columns
  },
  state: {
    globalFilter: globalFilter.value,
  },
  onGlobalFilterChange: (updater) => {
    globalFilter.value = typeof updater === "function" ? updater(globalFilter.value) : updater
  },
  getFilteredRowModel: getFilteredRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
})
</script>

<template>
  <DataTableToolbar :table="table">
    <Button
      @click="() => cvStore.createCv({ name: 'New Cv', description: 'A New Cv' })"
      class="ml-auto"
    >
      New CV
      <IconPlus stroke="1.5" />
    </Button>
  </DataTableToolbar>
  <DataTable :table="table" />
</template>
