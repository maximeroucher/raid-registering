import { useReadCurrentUserUsersMeGet } from "@/src/api/hyperionComponents";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

export const useUser = (token: string | null) => {

  const {
    data: me,
    isLoading,
  } = useReadCurrentUserUsersMeGet(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      enabled: token !== null,
      retry: 0,
    }, 
  );

  return { me, isLoading };
};
