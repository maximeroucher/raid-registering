import * as React from "react";
import { Column } from "@tanstack/react-table";

import { Checkbox } from "../ui/checkbox";

interface DataTableFilterCheckBoxProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
}

export function DataTableFilterCheckBox<TData, TValue>({
  column,
  title,
}: DataTableFilterCheckBoxProps<TData, TValue>) {
  const selectedValues = new Set(column?.getFilterValue() as null[]);

  const filterValues = Array.from(selectedValues);
  const isSelected = filterValues.length > 0;

  return (
    <div className="h-8 border-dashed border rounded-md items-center flex px-3 justify-center whitespace-nowrap text-sm font-medium ">
      <Checkbox
        checked={isSelected}
        className="mr-2"
        onCheckedChange={(_) => {
          if (isSelected) {
            selectedValues.delete(null);
          } else {
            selectedValues.add(null);
          }
          const filterValues = Array.from(selectedValues);
          console.log(filterValues);
          column?.setFilterValue(
            filterValues.length ? filterValues : undefined,
          );
        }}
      />
      {title}
    </div>
  );
}
