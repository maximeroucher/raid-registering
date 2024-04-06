import { useGetAllTeamsRaidTeamsGet } from "@/src/api/hyperionComponents";
import { useTokenStore } from "@/src/stores/token";
import { useUser } from "./useUser";

export const useTeams = () => {
  const { token, userId } = useTokenStore();

  const { isAdmin } = useUser();
  console.log(isAdmin())

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
      enabled: isAdmin(),
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
