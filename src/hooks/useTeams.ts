import { useGetAllTeamsRaidTeamsGet } from "@/src/api/hyperionComponents";
import { useTokenStore } from "@/src/stores/token";
import { useUser } from "./useUser";

export const useTeams = () => {
  const { token } = useTokenStore();
  const { isAdmin } = useUser();

  console.log("token", token);
  console.log(isAdmin() && token !== null)

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
