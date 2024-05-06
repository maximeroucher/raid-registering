import { Participant } from "@/src/api/hyperionSchemas";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LoadingButton } from "../ui/loadingButton";
import { useState } from "react";

interface PaymentCardItemProps {
  participant: Participant;
  validateCallback: (participantId: string, callback: () => void) => void;
}

export const PaymentCardItem = ({
  participant,
  validateCallback,
}: PaymentCardItemProps) => {
  const [isLoading, setIsLoading] = useState(false);
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
            onClick={(_) => {
              setIsLoading(true);
              validateCallback(participant.id, () => {
                setIsLoading(false);
              });
            }}
            isLoading={isLoading}
            label={"Valider le paiement de l'inscription"}
            className="w-full"
          />
        )}
      </CardContent>
    </Card>
  );
};
