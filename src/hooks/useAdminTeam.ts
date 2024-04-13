import { useUser } from "./useUser";
import { useGetTeamByIdRaidTeamsTeamIdGet } from "../api/hyperionComponents";
import { useAuth } from "./useAuth";

export const useAdminTeam = (teamId: string) => {
  const { token, userId, isTokenExpired } = useAuth();
  const { isAdmin } = useUser();

  const { data: team, refetch: refetchTeam } = useGetTeamByIdRaidTeamsTeamIdGet(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      pathParams: {
        teamId: teamId,
      },
    },
    {
      enabled: userId !== null && isAdmin() && !isTokenExpired(),
      retry: 0,
      queryHash: "getTeamById",
    },
  );

  return { team, refetchTeam };
};
