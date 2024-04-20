"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "../ui/button"
import { Input } from "../ui/input"

import { DataTableFacetedFilter } from "./DataTableFacetedFilter"
import { DataTableViewOptions } from "./DataTableViewOptions"
import { difficulties, meetingPlaces } from "@/src/infra/comboboxValues"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filtrer les équipes..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("difficulty") && (
          <DataTableFacetedFilter
            column={table.getColumn("difficulty")}
            title="Parcours"
            options={difficulties}
          />
        )}
        {table.getColumn("meeting_place") && (
          <DataTableFacetedFilter
            column={table.getColumn("meeting_place")}
            title="Lieu de rendez-vous"
            options={meetingPlaces}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Supprimer
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}