import { useUser } from "./useUser";
import {
  useDeleteRaidTeamsTeamId,
  useGetRaidTeamsTeamId,
  usePostRaidTeamsTeamIdKickParticipantId,
} from "../api/hyperionComponents";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "../components/ui/use-toast";

export const useAdminTeam = (teamId: string) => {
  const { me, isAdmin } = useUser();
  const queryClient = useQueryClient();

  const { data: team, refetch: refetchTeam } = useGetRaidTeamsTeamId(
    {
      pathParams: {
        teamId: teamId,
      },
    },
    {
      enabled: me?.id !== undefined && isAdmin(),
      retry: 0,
      queryHash: "getTeamById",
    },
  );

  const { mutate: mutateKickMember, isPending: isKickLoading } =
    usePostRaidTeamsTeamIdKickParticipantId({});

  const kickMember = (participantId: string, callback: () => void) => {
    mutateKickMember(
      {
        pathParams: {
          teamId,
          participantId,
        },
      },
      {
        onSuccess(data, variables, context) {
          queryClient.invalidateQueries({
            predicate: (query) => {
              return query.queryHash === "getTeamById";
            },
          });
          callback();
        },
        onError(error, variables, context) {
          console.log(error);
          toast({
            title: "Erreur lors de l'exclusion du membre",
            description:
              "Une erreur est survenue, veuillez réessayer plus tard",
            variant: "destructive",
          });
        },
      },
    );
  };

  const { mutate: mutateDeleteTeam, isPending: isDeleteLoading } =
    useDeleteRaidTeamsTeamId({});

  const deleteTeam = (callback: () => void) => {
    mutateDeleteTeam(
      {
        pathParams: {
          teamId,
        },
      },
      {
        onSettled() {
          queryClient.invalidateQueries({
            predicate: (query) => {
              return query.queryHash === "getTeamById";
            },
          });
          callback();
        },
      },
    );
  };

  return {
    team,
    refetchTeam,
    kickMember,
    isKickLoading,
    isDeleteLoading,
    deleteTeam,
  };
};
