import { usePostRaidParticipantParticipantIdPayment } from "../api/hyperionComponents";
import { toast } from "../components/ui/use-toast";
import { useAuth } from "./useAuth";

export const usePayment = () => {
  const { token } = useAuth();

  const { mutate: mutateValidatePayment, isPending: isLoading } =
    usePostRaidParticipantParticipantIdPayment();

  const validatePayment = (participantId: string, callback: () => void) => {
    mutateValidatePayment(
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        pathParams: {
          participantId: participantId,
        },
      },
      {
        onSettled: (data: any, error: any, variables: any, context: any) => {
          if (error) {
            console.log(error);
            toast({
              title: "Erreur lors de la validation du paiement",
              description:
                "Une erreur est survenue, veuillez réessayer plus tard",
              variant: "destructive",
            });
            return;
          }
          callback();
        },
      },
    );
  };

  return { validatePayment, isLoading };
};
