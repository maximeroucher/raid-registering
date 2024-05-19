import {
  usePostRaidSecurityFile,
  usePostRaidParticipantParticipantIdSecurityFile,
} from "@/src/api/hyperionComponents";
import { SecurityFileBase } from "../api/hyperionSchemas";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { toast } from "../components/ui/use-toast";

export const useSecurityFile = () => {
  const { token } = useAuth();
  const queryClient = useQueryClient();

  const {
    mutate: mutateAssignSecurityFile,
    isPending: isCreationLoading,
    isSuccess: isCreationSuccess,
  } = usePostRaidSecurityFile({});

  const setSecurityFile = (
    securityFile: SecurityFileBase,
    participantId: string,
    callback: () => void,
  ) => {
    mutateAssignSecurityFile(
      {
        body: securityFile,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        queryParams: {
          participant_id: participantId,
        },
      },
      {
        // FIXME: Not trigger, to investigate
        onSuccess(data, variables, context) {
          callback();
        },
        onError(error, variables, context) {
          console.log(error);
          toast({
            title: "Erreur lors de la création de la fiche de sécurité",
            description:
              "Une erreur est survenue, veuillez réessayer plus tard",
            variant: "destructive",
          });
        },
      },
    );
  };

  const { mutate: mutateAssignSecurityFileRaidParticipant } =
    usePostRaidParticipantParticipantIdSecurityFile({});

  const assignSecurityFile = (
    participantId: string,
    securityFile_id: string,
    callback: () => void,
  ) => {
    mutateAssignSecurityFileRaidParticipant(
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
      },
      {
        onSuccess(data, variables, context) {
          queryClient.invalidateQueries({
            predicate: (query) => {
              return query.queryHash === "getTeamByParticipantId";
            },
          });
          callback();
        },
        onError(error, variables, context) {
          console.log(error);
          toast({
            title: "Erreur lors de l'assignation de la fiche de sécurité",
            description: "Une erreur est survenue, veuillez réessayer plus tard",
            variant: "destructive",
          });
        },
      },
    );
  };

  return {
    assignSecurityFile,
    setSecurityFile,
    isCreationLoading,
    isCreationSuccess,
  };
};
