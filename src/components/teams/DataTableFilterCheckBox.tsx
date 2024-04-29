import * as React from "react";
import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";
import { Checkbox } from "../ui/checkbox";

interface DataTableFilterCheckBoxProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
}

export function DataTableFilterCheckBox<TData, TValue>({
  column,
  title,
}: DataTableFilterCheckBoxProps<TData, TValue>) {
  const facets = column?.getFacetedUniqueValues();
  const selectedValues = new Set(column?.getFilterValue() as null[]);

  const filterValues = Array.from(selectedValues);
  const isSelected = filterValues.length > 0;

  return (
    <div className="h-8 border-dashed border rounded-md items-center flex px-3">
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
