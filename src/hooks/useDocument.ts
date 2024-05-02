import { useQueryClient } from "@tanstack/react-query";
import {
  usePostRaidParticipantParticipantIdDocument,
  useGetRaidDocumentDocumentId,
  usePostRaidDocumentDocumentIdValidate,
} from "../api/hyperionComponents";
import { DocumentCreation } from "../api/hyperionSchemas";
import axios from "axios";
import { useDocumentsStore } from "../stores/documents";
import { useState } from "react";
import { useAuth } from "./useAuth";

export const useDocument = () => {
  const backUrl: string =
    process.env.NEXT_PUBLIC_BACKEND_URL || "https://hyperion.myecl.fr";
  const queryClient = useQueryClient();
  const { token, userId } = useAuth();
  const { documents, setDocument } = useDocumentsStore();
  const [documentId, setDocumentId] = useState<string>("");

  const { mutate: mutateAssignDocument } =
    usePostRaidParticipantParticipantIdDocument();

  const assignDocument = (file: DocumentCreation, callback: () => void) => {
    mutateAssignDocument(
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        pathParams: {
          participantId: userId!,
        },
        body: file,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            predicate: (query) => {
              return query.queryHash === "getTeamByParticipantId";
            },
          });
          callback();
        },
      },
    );
  };

  const uploadDocument = (
    file: File,
    key: string,
    documentId: string,
    participantId: string,
    callback: () => void,
  ) => {
    const formData = new FormData();
    formData.append("image", file);
    axios
      .post(`${backUrl}/raid/document/${documentId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        queryClient.invalidateQueries({
          predicate: (query) => {
            return query.queryHash === "getDocument";
          },
        });
        setDocument(participantId, key, documentId!, file);
        callback();
      });
  };

  const { data, refetch, isPending } = useGetRaidDocumentDocumentId<File>(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      pathParams: {
        documentId: documentId!,
      },
    },
    {
      enabled: documentId !== "",
    },
  );

  const { mutate: mutateValidateDocument, isPending: isValidationLoading } =
    usePostRaidDocumentDocumentIdValidate();

  const validateDocument = (documentId: string, callback: () => void) => {
    mutateValidateDocument(
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        pathParams: {
          documentId: documentId,
        },
      },
      {
        onSettled: () => {
          callback();
        },
      },
    );
  };

  const getDocument = (userId: string, key: string) => {
    if (key === "" || key === undefined) return undefined;
    if (documents[userId!] === undefined) return undefined;
    return documents[userId!][key]?.file;
  };

  return {
    assignDocument,
    uploadDocument,
    getDocument,
    data,
    refetch,
    isLoading: isPending,
    setDocumentId,
    documentId,
    validateDocument,
    isValidationLoading,
  };
};
