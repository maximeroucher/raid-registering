import {
  useSetSecurityFileRaidSecurityFilePost,
  SetSecurityFileRaidSecurityFilePostVariables,
  useAssignSecurityFileRaidParticipantParticipantIdSecurityFilePost,
  AssignSecurityFileRaidParticipantParticipantIdSecurityFilePostVariables,
} from "@/src/api/hyperionComponents";
import { SecurityFile } from "../api/hyperionSchemas";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useSecurityFile = () => {
  const { token } = useAuth();
  const queryClient = useQueryClient();

  const {
    mutate: mutateAssignSecurityFile,
    isPending: isCreationLoading,
    isSuccess: isCreationSuccess,
  } = useSetSecurityFileRaidSecurityFilePost({});

  const setSecurityFile = (
    securityFile: SecurityFile,
    callback: () => void,
  ) => {
    const body: SetSecurityFileRaidSecurityFilePostVariables = {
      body: securityFile,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    mutateAssignSecurityFile(body, {
      onSuccess(data, variables, context) {
        callback();
      },
    });
  };

  const { mutate: mutateAssignSecurityFileRaidParticipant } =
    useAssignSecurityFileRaidParticipantParticipantIdSecurityFilePost({});

  const assignSecurityFile = (
    participantId: string,
    securityFile_id: string,
    callback: () => void,
  ) => {
    const body: AssignSecurityFileRaidParticipantParticipantIdSecurityFilePostVariables =
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        pathParams: {
          participantId,
        },
        queryParams: {
          security_file_id: securityFile_id,
        },
      };
    mutateAssignSecurityFileRaidParticipant(body, {
      onSuccess(data, variables, context) {
        queryClient.invalidateQueries({
          predicate: (query) => {
            return query.queryHash === "getTeamByParticipantId";
          },
        });
        callback();
      },
    });
  };

  return {
    assignSecurityFile,
    setSecurityFile,
    isCreationLoading,
    isCreationSuccess,
  };
};
