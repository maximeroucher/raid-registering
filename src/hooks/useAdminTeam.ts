import { useUser } from "./useUser";
import { useGetTeamByIdRaidTeamsTeamIdGet } from "../api/hyperionComponents";
import { useAuth } from "./useAuth";

export const useAdminTeam = (teamId: string) => {
  const { token, userId } = useAuth();
  const { isAdmin } = useUser();

  const { data: team } = useGetTeamByIdRaidTeamsTeamIdGet(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      pathParams: {
        teamId: teamId,
      },
    },
    {
      enabled: userId !== null && isAdmin(),
      retry: 0,
      queryHash: "getTeamById",
    },
  );

  return { team };
};
