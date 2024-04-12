"use client";

import { useDocument } from "@/src/hooks/useDocument";
import { useDocumentsStore } from "@/src/stores/documents";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { PdfViewer } from "./PdfViewer";

interface DocumentViewProps {
  userId: string;
  documentKey: string;
  id: string;
  file?: File;
}

export const DocumentView = ({
  userId,
  documentKey,
  id,
  file,
}: DocumentViewProps) => {
  const { data, setDocumentId, isIdSet } = useDocument();
  const { setDocument } = useDocumentsStore();
  if (
    file?.size === undefined &&
    !isIdSet &&
    data?.size === undefined
  ) {
    setDocumentId(id);
  }

  if (data?.size !== undefined && isIdSet) {
    setDocument(userId, documentKey, id, data);
    setDocumentId("");
  }

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
            className="rounded-lg w-auto max-h-[400px] m-auto"
          />
        )
      ) : (
        <Skeleton className="w-full h-80" />
      )}
    </>
  );
};
