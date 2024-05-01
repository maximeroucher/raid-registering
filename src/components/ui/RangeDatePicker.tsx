"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { fr } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { DateRange } from "react-day-picker";

interface RangeDatePickerProps {
  dateRange?: DateRange;
  defaultDate?: Date;
  setDateRange: (dateRange?: DateRange) => void;
}

export function RangeDatePicker({
  dateRange,
  setDateRange,
  defaultDate,
}: RangeDatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !dateRange && "text-muted-foreground",
          )}
          type="button"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {dateRange && dateRange.from && dateRange.to ? (
            format(dateRange.from, "PPP", { locale: fr }) +
            " - " +
            format(dateRange.to, "PPP", { locale: fr })
          ) : (
            <span>Sélectionner une période</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={setDateRange}
          locale={fr}
          captionLayout="dropdown-buttons"
          fromYear={new Date().getFullYear() - 1}
          toYear={new Date().getFullYear() + 1}
          defaultMonth={defaultDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
