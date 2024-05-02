import {
  useGetRaidParticipantsParticipantIdTeam,
  usePostRaidTeams,
  usePatchRaidTeamsTeamId,
} from "@/src/api/hyperionComponents";
import { TeamBase, TeamUpdate } from "../api/hyperionSchemas";
import { useQueryClient } from "@tanstack/react-query";
import { useUser } from "./useUser";
import { useAuth } from "./useAuth";

export const useTeam = () => {
  const { token, userId, isTokenExpired } = useAuth();
  const { isAdmin } = useUser();
  const queryClient = useQueryClient();

  const {
    data: team,
    isLoading,
    refetch: refetchTeam,
  } = useGetRaidParticipantsParticipantIdTeam(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      pathParams: {
        participantId: userId!,
      },
    },
    {
      enabled: userId !== null && !isAdmin() && !isTokenExpired(),
      retry: 0,
      queryHash: "getTeamByParticipantId",
    },
  );

  const {
    mutate: mutateCreateTeam,
    isSuccess: isCreationSuccess,
    isPending: isCreationLoading,
  } = usePostRaidTeams({});

  const createTeam = (team: TeamBase, callback: () => void) => {
    mutateCreateTeam(
      {
        body: team,
        headers: {
          Authorization: `Bearer ${token}`,
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
      },
    );
  };

  const {
    mutate: mutateUpdateTeam,
    isSuccess: isUpdateSuccess,
    isPending: isUpdateLoading,
  } = usePatchRaidTeamsTeamId({});

  const updateTeam = (
    teamId: string,
    callback: () => void,
    team?: TeamUpdate,
  ) => {
    mutateUpdateTeam(
      {
        body: team,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        pathParams: {
          teamId,
        },
      },
      {
        // Not using onSucess because of : https://github.com/TanStack/query/discussions/2878
        onSettled: () => {
          // Assuming success in all cases
          // For unknown reasons, the invalidation of the query does not work
          refetchTeam();
          callback();
        },
      },
    );
  };

  return {
    team,
    isLoading,
    createTeam,
    isCreationLoading,
    isCreationSuccess,
    refetchTeam,
    updateTeam,
    isUpdateLoading,
    isUpdateSuccess,
  };
};
