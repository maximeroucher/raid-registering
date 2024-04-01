import { ControllerRenderProps, FieldValues } from "react-hook-form";

import { Button } from "../ui/button";
import { DropzoneInput } from "../ui/dropzoneInput";
import { useDocument } from "@/src/hooks/useDocument";
import Image from "next/image";
import { useDocumentsStore } from "@/src/stores/documents";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

interface DocumentDialogProps {
  setIsOpen: (value: boolean) => void;
  setIsUploading: (value: boolean) => void;
  field: ControllerRenderProps<FieldValues, string>;
  id: string;
  documentId?: string;
}

export const DocumentDialog = ({
  setIsUploading,
  setIsOpen,
  field,
  id,
  documentId,
}: DocumentDialogProps) => {
  const { uploadDocument, getDocument, data, setDocumentId, isIdSet } =
    useDocument();
  const { setDocument } = useDocumentsStore();
  const [isLoading, setIsLoading] = useState(false);
  const file = getDocument(field.value?.id);
  const [image, setImage] = useState<File | undefined>(file);
  if (
    file?.size === undefined &&
    !isIdSet &&
    !isLoading &&
    data?.size === undefined
  ) {
    setIsLoading(true);
    setDocumentId(field.value.id);
  }

  if (data?.size !== undefined && isLoading) {
    setDocument(id, field.value.id, data);
    setImage(data);
    setDocumentId("");
  }

  return (
    <>
      {image?.size !== undefined ? (
        <div className="flex flex-col items-center gap-4">
          <span className="text-gray-500 overflow-hidden m-auto">
            <Image
              src={URL.createObjectURL(image)}
              alt={field.name}
              width={300}
              height={200}
              className="rounded-lg w-auto max-h-[400px]"
            />
          </span>
          <Button
            className="w-full"
            onClick={() => {
              field.onChange(null);
              setImage(undefined);
            }}
          >
            Modifier
          </Button>
        </div>
      ) : (
        <>
          {documentId ? (
            <Skeleton className="w-full h-80" />
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
                    id: documentId,
                    type: id,
                    updated: true,
                  });
                  setIsUploading(false);
                });
              }}
            />
          )}
        </>
      )}
    </>
  );
};
