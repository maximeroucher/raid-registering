import {
  useGetRaidInformation,
  usePatchRaidInformation,
} from "@/src/api/hyperionComponents";
import { RaidInformation } from "../api/hyperionSchemas";
import { useUser } from "./useUser";

export const useInformation = () => {
  const { me } = useUser();

  const {
    data: information,
    isLoading,
    refetch: refetchInformation,
  } = useGetRaidInformation(
    {},
    {
      enabled: me?.id !== undefined,
      retry: 0,
      queryHash: "getRaidInformation",
    },
  );

  const { mutate: mutateUpdateInformation, isPending: isUpdateLoading } =
    usePatchRaidInformation({});

  const updateInformation = (
    information: RaidInformation,
    callback: () => void,
  ) => {
    mutateUpdateInformation(
      {
        body: information,
      },
      {
        // Not using onSucess because of : https://github.com/TanStack/query/discussions/2878
        onSettled: () => {
          // Assuming success in all cases
          // For unknown reasons, the invalidation of the query does not work
          refetchInformation();
          callback();
        },
      },
    );
  };

  return {
    information,
    isLoading,
    refetchInformation,
    updateInformation,
    isUpdateLoading,
  };
};
