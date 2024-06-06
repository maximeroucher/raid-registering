import { useQueryClient } from "@tanstack/react-query";
import {
  usePostRaidParticipantParticipantIdDocument,
  useGetRaidDocumentDocumentId,
  usePostRaidDocumentDocumentIdValidate,
} from "../api/hyperionComponents";
import { DocumentBase, DocumentValidation } from "../api/hyperionSchemas";
import axios from "axios";
import { useDocumentsStore } from "../stores/documents";
import { useState } from "react";
import { toast } from "../components/ui/use-toast";

export const useDocument = () => {
  const backUrl: string =
    process.env.NEXT_PUBLIC_BACKEND_URL || "https://hyperion.myecl.fr";
  const queryClient = useQueryClient();
  const { documents } = useDocumentsStore();
  const [documentId, setDocumentId] = useState<string>("");

  const { mutate: mutateAssignDocument } =
    usePostRaidParticipantParticipantIdDocument();

  const assignDocument = (
    file: DocumentBase,
    participantId: string,
    callback: () => void,
  ) => {
    mutateAssignDocument(
      {
        pathParams: {
          participantId: participantId,
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
    callback: (documentId: string) => void,
  ) => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(`${backUrl}/raid/document`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status > 300) {
          console.error(response.data);
          toast({
            title: "Erreur lors de l'ajout du document",
            description:
              "Une erreur est survenue, veuillez réessayer plus tard",
            variant: "destructive",
          });
          return;
        }
        queryClient.invalidateQueries({
          predicate: (query) => {
            return query.queryHash === "getDocument";
          },
        });
        const documentId = response.data.id as string;
        callback(documentId);
      });
  };

  const { data, refetch, isPending } = useGetRaidDocumentDocumentId<File>(
    {
      pathParams: {
        documentId: documentId!,
      },
    },
    {
      enabled: documentId !== "" && documentId !== undefined,
    },
  );

  const { mutate: mutateValidateDocument, isPending: isValidationLoading } =
    usePostRaidDocumentDocumentIdValidate();

  const setDocumentValidation = (
    documentId: string,
    validation: DocumentValidation,
    callback: () => void,
  ) => {
    mutateValidateDocument(
      {
        pathParams: {
          documentId: documentId,
        },
        queryParams: {
          validation: validation,
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
    setDocumentValidation,
    isValidationLoading,
  };
};
