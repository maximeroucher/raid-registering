import {
  useGetTeamByParticipantIdRaidParticipantsParticipantIdTeamGet,
  useCreateTeamRaidTeamsPost,
  CreateTeamRaidTeamsPostVariables,
} from "@/src/api/hyperionComponents";
import { useTokenStore } from "@/src/stores/token";
import { TeamBase } from "../api/hyperionSchemas";
import { useQueryClient } from "@tanstack/react-query";

export const useTeam = () => {
  const { token, userId } = useTokenStore();
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
      enabled: userId !== null,
      retry: 0,
      queryHash: "getTeamByParticipantId",
    }
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

  return {
    team,
    isLoading,
    createTeam,
    isCreationLoading,
    isCreationSuccess,
    refetchTeam,
  };
};
