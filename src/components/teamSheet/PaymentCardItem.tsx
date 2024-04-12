import { Participant } from "@/src/api/hyperionSchemas";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

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
          <Button
            onClick={(_) => validateCallback(participant.id)}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <ReloadIcon className="h-4 w-4 animate-spin" />
            ) : (
              "Valider le paiement de l'inscription"
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
