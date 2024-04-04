"use client";

import { useDocument } from "@/src/hooks/useDocument";
import { useDocumentsStore } from "@/src/stores/documents";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { PdfViewer } from "./PdfViewer";

interface DocumentViewProps {
  documentKey: string;
  id: string;
  file?: File;
}

export const DocumentView = ({ documentKey, id, file }: DocumentViewProps) => {
  const { data, setDocumentId, isIdSet } = useDocument();
  const { setDocument } = useDocumentsStore();
  const [isLoading, setIsLoading] = useState(false);
  if (
    file?.size === undefined &&
    !isIdSet &&
    !isLoading &&
    data?.size === undefined
  ) {
    setIsLoading(true);
    setDocumentId(id);
  }

  if (data?.size !== undefined && isLoading) {
    setDocument(documentKey, id, data);
    setDocumentId("");
  }
  console.log(file?.type);

  return (
    <>
      {file?.size ? (
        file?.type === "application/pdf" ? (
          <div className="h-[600px]">
            <PdfViewer file={file} />
          </div>
        ) : (
          <Image
            src={URL.createObjectURL(file)}
            alt={documentKey}
            width={300}
            height={200}
            className="rounded-lg w-auto max-h-[400px]"
          />
        )
      ) : (
        <Skeleton className="w-full h-80" />
      )}
    </>
  );
};
