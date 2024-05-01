import {
  useGetTeamByParticipantIdRaidParticipantsParticipantIdTeamGet,
  useCreateTeamRaidTeamsPost,
  CreateTeamRaidTeamsPostVariables,
  useUpdateTeamRaidTeamsTeamIdPatch,
  UpdateTeamRaidTeamsTeamIdPatchVariables,
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
  } = useGetTeamByParticipantIdRaidParticipantsParticipantIdTeamGet(
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
  } = useCreateTeamRaidTeamsPost({});

  const createTeam = (team: TeamBase, callback: () => void) => {
    const body: CreateTeamRaidTeamsPostVariables = {
      body: team,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    mutateCreateTeam(body, {
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

  const {
    mutate: mutateUpdateTeam,
    isSuccess: isUpdateSuccess,
    isPending: isUpdateLoading,
  } = useUpdateTeamRaidTeamsTeamIdPatch({});

  const updateTeam = (
    teamId: string,
    callback: () => void,
    team?: TeamUpdate,
  ) => {
    const body: UpdateTeamRaidTeamsTeamIdPatchVariables = {
      body: team,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      pathParams: {
        teamId,
      },
    };
    mutateUpdateTeam(body, {
      // Not using onSucess because of : https://github.com/TanStack/query/discussions/2878
      onSettled: () => {
        // Assuming success in all cases
        // For unknown reasons, the invalidation of the query does not work
        refetchTeam();
        callback();
      },
    });
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
