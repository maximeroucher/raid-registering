import { usePaymentUrl } from "@/src/hooks/usePaymentUrl";
import { LoadingButton } from "../ui/loadingButton";
import { useRouter } from "next/navigation";

export const PaymentButton = () => {
  const { paymentUrl, isLoading, refetchUrl } = usePaymentUrl();
  const router = useRouter();
  if (!isLoading && !!paymentUrl) {
    router.push(paymentUrl.url);
  }
  return (
    <LoadingButton
      isLoading={isLoading}
      label={"Payer"}
      className="col-span-4 ml-auto w-[100px]"
      onClick={(_) => refetchUrl()}
    />
  );
};
