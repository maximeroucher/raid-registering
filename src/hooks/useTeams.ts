import { useGetRaidTeams } from "@/src/api/hyperionComponents";
import { useUser } from "./useUser";

export const useTeams = () => {
  const { isAdmin } = useUser();

  const {
    data: teams,
    isLoading,
    refetch: refetchTeams,
  } = useGetRaidTeams(
    {},
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
