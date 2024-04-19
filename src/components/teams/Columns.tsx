"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import { DataTableRowActions } from "./DataTableRowActions";
import { ParticipantPreview, TeamPreview } from "@/src/api/hyperionSchemas";
import {
  difficulties,
  getLabelFromValue,
  meetingPlaces,
} from "@/src/infra/comboboxValues";
import { CircularProgressBar } from "../ui/circularProgressBar";

export const columns: ColumnDef<TeamPreview>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Equipe" />
    ),
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "captain",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Capitaine" />
    ),
    cell: ({ row }) => {
      const captain = row.getValue("captain") as ParticipantPreview;
      return (
        <div className="flex space-x-2">
          {captain.firstname} {captain.name}
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "second",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Coéquiper" />
    ),
    cell: ({ row }) => {
      const second = row.getValue("second") as ParticipantPreview | undefined;
      return (
        <div className={`flex space-x-2 ${second ?? "text-muted-foreground"}`}>
          {second ? `${second.firstname} ${second.name}` : "Non renseigné"}
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "difficulty",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Parcours" />
    ),
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <Badge variant="outline">
          {getLabelFromValue(difficulties, row.getValue("difficulty"))}
        </Badge>
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "meeting_place",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Lieu de rendez-vous" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <Badge variant="outline">
            {getLabelFromValue(meetingPlaces, row.getValue("meeting_place"))}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "validation_progress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Inscription" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span>
            {(row.getValue("validation_progress") as number).toFixed(0)}%
          </span>
        </div>
      );
    },
    sortingFn: (rowA, rowB, id) => {
      return (rowA.getValue(id) as number) - (rowB.getValue(id) as number);
    },
  },
  {
    accessorKey: "document_progress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Documents" />
    ),
    cell: ({ row }) => {
      const number_of_validated_document =
        (row.getValue("captain") as ParticipantPreview)
          .number_of_validated_document +
        ((row.getValue("second") as ParticipantPreview | null)
          ?.number_of_validated_document ?? 0);
      const number_of_document =
        (row.getValue("captain") as ParticipantPreview).number_of_document +
        ((row.getValue("second") as ParticipantPreview | null)
          ?.number_of_document ?? 0);
      return (
        <div className="flex w-[150px] items-center">
          <Badge variant="outline">
            <CircularProgressBar
              value={(number_of_validated_document / number_of_document) * 100}
            />
            <span className="ml-2">
              {number_of_validated_document} / {number_of_document} {"validés"}
            </span>
          </Badge>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
