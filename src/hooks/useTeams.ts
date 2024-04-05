import { useGetAllTeamsRaidTeamsGet } from "@/src/api/hyperionComponents";
import { useTokenStore } from "@/src/stores/token";

export const useTeams = () => {
  const { token, userId } = useTokenStore();

  const {
    data: teams,
    isLoading,
    refetch: refetchTeams,
  } = useGetAllTeamsRaidTeamsGet(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      enabled: userId !== null,
      retry: 0,
      queryHash: "getTeamByParticipantId",
    },
  );

  return {
    teams,
    isLoading,
    refetchTeams,
  };
};
