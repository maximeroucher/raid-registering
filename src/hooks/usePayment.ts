import {
  usePostRaidParticipantParticipantIdPayment,
  usePostRaidParticipantParticipantIdTShirtPayment,
} from "../api/hyperionComponents";
import { toast } from "../components/ui/use-toast";

export const usePayment = () => {
  const { mutate: mutateValidatePayment, isPending: isPaymentLoading } =
    usePostRaidParticipantParticipantIdPayment();

  const validatePayment = (participantId: string, callback: () => void) => {
    mutateValidatePayment(
      {
        pathParams: {
          participantId: participantId,
        },
      },
      {
        onSettled: () => {
          callback();
        },
      },
    );
  };

  const {
    mutate: mutateValidateTShirtPayment,
    isPending: isTshirtPaymentLoading,
  } = usePostRaidParticipantParticipantIdTShirtPayment();

  const validateTShirtPayment = (
    participantId: string,
    callback: () => void,
  ) => {
    mutateValidateTShirtPayment(
      {
        pathParams: {
          participantId: participantId,
        },
      },
      {
        onSettled: () => {
          callback();
        },
      },
    );
  };

  return {
    validatePayment,
    isPaymentLoading,
    validateTShirtPayment,
    isTshirtPaymentLoading,
  };
};
