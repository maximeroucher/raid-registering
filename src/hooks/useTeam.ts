import {
  useGetTeamByParticipantIdRaidParticipantParticipantIdTeamGet,
  useCreateTeamRaidTeamPost,
  CreateTeamRaidTeamPostVariables,
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
  } = useGetTeamByParticipantIdRaidParticipantParticipantIdTeamGet(
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
  } = useCreateTeamRaidTeamPost({});

  const createTeam = (team: TeamBase) => {
    const body: CreateTeamRaidTeamPostVariables = {
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
