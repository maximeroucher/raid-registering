import { useGetRaidPay } from "../api/hyperionComponents";

export const usePaymentUrl = () => {
  const {
    data: paymentUrl,
    isLoading,
    refetch: refetchUrl,
  } = useGetRaidPay(
    {},
    {
      enabled: false,
      retry: 0,
      queryHash: "getRaidUrl",
    },
  );

  return { paymentUrl, isLoading, refetchUrl };
};
