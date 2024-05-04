"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { HiTrash, HiX } from "react-icons/hi";
import { MergeIcon, UserRoundMinusIcon } from "lucide-react";
import { WarningDialog } from "./WarningDialog";
import { useState } from "react";
import { useAdminTeam } from "@/src/hooks/useAdminTeam";
import { TeamPreview } from "@/src/api/hyperionSchemas";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const { deleteTeam, isDeleteLoading } = useAdminTeam(
    (row.original as TeamPreview).id,
  );
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  return (
    <>
      {isDeleteDialogOpen && (
        <WarningDialog
          isOpened={isDeleteDialogOpen}
          setIsOpened={setIsDeleteDialogOpen}
          isLoading={isDeleteLoading}
          title="Suppression d'une équipe"
          description="Etes-vous sûr de vouloir supprimer cette équipe ?"
          validateLabel="Supprimer"
          callback={() => {
            deleteTeam(() => {
              setIsDeleteDialogOpen(false);
            });
          }}
        />
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[180px]">
          {row.getValue("second") === null ? (
            <DropdownMenuItem>
              Fusionner avec une autre équipe
              <DropdownMenuShortcut>
                <MergeIcon className="h-4 w-4" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem>
              Retirer un member
              <DropdownMenuShortcut>
                <UserRoundMinusIcon className="h-4 w-4" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-destructive"
            onClick={(e) => {
              e.stopPropagation();
              setIsDeleteDialogOpen(true);
            }}
          >
            {"Supprimer l'équipe"}
            <DropdownMenuShortcut>
              <HiTrash className="h-4 w-4" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
