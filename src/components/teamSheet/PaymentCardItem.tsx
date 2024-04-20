import { Participant } from "@/src/api/hyperionSchemas";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LoadingButton } from "../ui/loadingButton";

interface PaymentCardItemProps {
  participant: Participant;
  validateCallback: (participantId: string) => void;
  isLoading: boolean;
}

export const PaymentCardItem = ({
  participant,
  validateCallback,
  isLoading,
}: PaymentCardItemProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {participant.firstname} {participant.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {participant.payment ? (
          <p>{"L'inscription à été payée"}</p>
        ) : (
          <LoadingButton
            onClick={(_) => validateCallback(participant.id)}
            isLoading={isLoading}
            label={"Valider le paiement de l'inscription"}
            className="w-full"
          />
        )}
      </CardContent>
    </Card>
  );
};
