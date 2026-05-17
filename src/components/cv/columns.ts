import type { CV } from "@/stores/cvStore"
import type { ColumnDef } from "@tanstack/vue-table"
import Actions from "./Actions.vue"
import { h } from "vue"
import { formatDate } from "@/lib/utils"

export const columns: ColumnDef<CV>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "updatedAd",
    header: "Last Updated",
    cell: ({ cell }) => formatDate(cell.getValue<Date>()),
  },
  {
    id: "actions",
    cell: ({ row }) => h(Actions, { cv: row.original }),
  },
]
