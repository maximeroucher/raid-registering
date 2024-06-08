import { useGetRaidPrice, usePatchRaidPrice } from "../api/hyperionComponents";
import { RaidPrice } from "../api/hyperionSchemas";
import { toast } from "../components/ui/use-toast";
import { useUser } from "./useUser";

export const usePrice = () => {
  const { me } = useUser();

  const {
    data: price,
    isLoading,
    refetch: refetchPrice,
  } = useGetRaidPrice(
    {},
    {
      enabled: me?.id !== undefined,
      retry: 0,
      queryHash: "getRaidPrice",
    },
  );

  const { mutate: mutateUpdatePrice, isPending: isUpdateLoading } =
    usePatchRaidPrice({});

  const updatePrice = (price: RaidPrice, callback: () => void) => {
    mutateUpdatePrice(
      {
        body: price,
      },
      {
        // Not using onSucess because of : https://github.com/TanStack/query/discussions/2878
        onSettled: () => {
          refetchPrice();
          callback();
        },
      },
    );
  };

  return {
    price,
    isLoading,
    refetchPrice,
    updatePrice,
    isUpdateLoading,
  };
};
