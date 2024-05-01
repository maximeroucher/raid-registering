import { ControllerRenderProps, FieldValues } from "react-hook-form";

import { Button } from "../ui/button";
import { DropzoneInput } from "../ui/dropzoneInput";
import { useDocument } from "@/src/hooks/useDocument";
import Image from "next/image";
import { useDocumentsStore } from "@/src/stores/documents";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { PdfViewer } from "./PdfViewer";

interface DocumentDialogProps {
  setIsOpen: (value: boolean) => void;
  setIsUploading: (value: boolean) => void;
  field: ControllerRenderProps<FieldValues, string>;
  key: string;
  documentId?: string;
  participantId: string;
}

export const DocumentDialog = ({
  setIsUploading,
  setIsOpen,
  field,
  key,
  documentId,
  participantId,
}: DocumentDialogProps) => {
  const {
    uploadDocument,
    getDocument,
    data,
    setDocumentId,
    documentId: docId,
  } = useDocument();
  const { setDocument } = useDocumentsStore();
  const file = getDocument(participantId, key);
  const [image, setImage] = useState<File | undefined>(file);
  const [isLoading, setIsLoading] = useState(data?.size === undefined);
  if (
    file?.size === undefined &&
    docId !== documentId &&
    data?.size === undefined
  ) {
    setDocumentId(field.value.id);
    setIsLoading(true);
  }

  if (data?.size !== undefined && isLoading) {
    setDocument(participantId, key, field.value.id, data);
    setImage(data);
    setIsLoading(false);
  }

  return (
    <>
      {image?.size !== undefined ? (
        <div className="flex flex-col items-center gap-4">
          <span className="text-gray-500 overflow-hidden m-auto">
            {image?.type === "application/pdf" ? (
              <div className="h-[600px]">
                <PdfViewer file={image} />
              </div>
            ) : (
              <Image
                src={URL.createObjectURL(image)}
                alt={field.name}
                width={300}
                height={200}
                className="rounded-lg w-auto max-h-[400px]"
              />
            )}
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
                uploadDocument(file, key, documentId, participantId, () => {
                  field.onChange({
                    name: file.name,
                    id: documentId,
                    type: key,
                    updated: true,
                  });
                  setDocument(participantId, key, documentId, file);
                  setDocumentId(documentId);
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
