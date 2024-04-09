import { useGetAllTeamsRaidTeamsGet } from "@/src/api/hyperionComponents";
import { useUser } from "./useUser";
import { useAuth } from "./useAuth";

export const useTeams = () => {
  const { token } = useAuth();
  const { isAdmin } = useUser();

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
      enabled: isAdmin() && token !== null,
      retry: 0,
      queryHash: "getTeams",
    },
  );

  return {
    teams,
    isLoading,
    refetchTeams,
  };
};
