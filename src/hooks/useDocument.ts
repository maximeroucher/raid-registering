import { useQueryClient } from "@tanstack/react-query";
import {
  useCreateDocumentRaidParticipantParticipantIdDocumentPost,
  useUploadDocumentRaidDocumentDocumentIdPost,
} from "../api/hyperionComponents";
import { useTokenStore } from "../stores/token";
import { DocumentCreation } from "../api/hyperionSchemas";

export const useDocument = () => {
  const queryClient = useQueryClient();
  const { token, userId } = useTokenStore();

  const { mutate: mutateAssignDocument } =
    useCreateDocumentRaidParticipantParticipantIdDocumentPost();

  const assignDocument = (file: DocumentCreation, callback: () => void) => {
    const body = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      pathParams: {
        participantId: userId!,
      },
      body: file,
    };
    mutateAssignDocument(body, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          predicate: (query) => {
            return query.queryHash === "getTeamByParticipantId";
          },
        });
        callback();
      },
    });
  };

  const { mutate: mutateUploadDocument } =
    useUploadDocumentRaidDocumentDocumentIdPost();

  const uploadDocument = (
    file: File,
    documentId: string,
    callback: () => void,
  ) => {
    const body = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      pathParams: {
        documentId,
      },
      body: {
        image: file,
      },
    };
    mutateUploadDocument(body, {
      onSuccess: () => {
        callback();
      },
    });
  };

  return {
    assignDocument,
    uploadDocument,
  };
};
