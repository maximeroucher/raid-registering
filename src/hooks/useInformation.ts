import {
  useGetRaidInformation,
  usePatchRaidInformation,
} from "@/src/api/hyperionComponents";
import { RaidInformation } from "../api/hyperionSchemas";
import { useAuth } from "./useAuth";
import { toast } from "../components/ui/use-toast";

export const useInformation = () => {
  const { token, userId } = useAuth();

  const {
    data: information,
    isLoading,
    refetch: refetchInformation,
  } = useGetRaidInformation(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      enabled: userId !== null,
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
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      {
        // Not using onSucess because of : https://github.com/TanStack/query/discussions/2878
        onSettled: (data, error, variables, context) => {
          // Assuming success in all cases
          // For unknown reasons, the invalidation of the query does not work
          if (error) {
            console.error(error);
            toast({
              title: "Erreur lors de la mise à jour des informations",
              description:
                "Une erreur est survenue, veuillez réessayer plus tard",
              variant: "destructive",
            });
            return;
          }
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
