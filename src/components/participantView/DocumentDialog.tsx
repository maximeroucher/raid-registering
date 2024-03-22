import { Participant } from "@/src/api/hyperionSchemas";

import { ControllerRenderProps, FieldValues } from "react-hook-form";

import { Button } from "../ui/button";
import { DropzoneInput } from "../ui/dropzoneInput";
import { useState } from "react";
import { toDate } from "date-fns";
import { useDocument } from "@/src/hooks/useDocument";
import Image from "next/image";

interface DocumentDialogProps {
  setIsOpen: (value: boolean) => void;
  setIsUploading: (value: boolean) => void;
  field: ControllerRenderProps<FieldValues, string>;
  id: string;
  me?: Participant;
}

export const DocumentDialog = ({
  setIsUploading,
  setIsOpen,
  field,
  id,
  me,
}: DocumentDialogProps) => {
  const { uploadDocument, getDocument } = useDocument();
  const file = getDocument(id);
  console.log(file);
  return (
    <>
      {file?.name !== undefined ? (
        <div className="flex flex-col items-center gap-4">
          <span className="text-gray-500 overflow-hidden m-auto">
            <Image
              src={URL.createObjectURL(file)}
              alt={file.name}
              width={300}
              height={200}
              className="rounded-lg w-auto max-h-[400px]"
            />
          </span>
          <Button
            className="w-full"
            onClick={() => {
              field.onChange(null);
            }}
          >
            Modifier
          </Button>
        </div>
      ) : (
        <DropzoneInput
          setIsOpen={setIsOpen}
          onDropAccepted={(files, _) => {
            const file = files[0];
            const documentId = crypto.randomUUID();
            setIsUploading(true);
            uploadDocument(file, id, documentId, () => {
              field.onChange({
                name: file.name,
                participant_id: me!.id,
                id: documentId,
                updated: true,
              });
              setIsUploading(false);
            });
          }}
        />
      )}
    </>
  );
};
