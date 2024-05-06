import { Team } from "@/src/api/hyperionSchemas";
import { PaymentCardItem } from "./PaymentCardItem";
import { Card, CardContent } from "../ui/card";
import { toast } from "../ui/use-toast";
import { usePayment } from "@/src/hooks/usePayment";
import { useAdminTeam } from "@/src/hooks/useAdminTeam";
import { useTeams } from "@/src/hooks/useTeams";

interface PaymentTabProps {
  team: Team;
}

export const PaymentTab = ({ team }: PaymentTabProps) => {
  const { validatePayment } = usePayment();
  const { refetchTeam } = useAdminTeam(team.id);
  const { refetchTeams } = useTeams();

  function validateCallback(participantId: string, callback: () => void) {
    validatePayment(participantId, () => {
      callback();
      refetchTeam();
      refetchTeams();
      toast({
        title: "Paiement validé avec succès",
      });
    });
  }

  return (
    <div className="grid xl:grid-cols-2 gap-4 w-full py-6 grid-cols-1 max-md:p-8 max-md:gap-4">
      <PaymentCardItem
        participant={team.captain}
        validateCallback={validateCallback}
      />
      {team.second ? (
        <PaymentCardItem
          participant={team.second}
          validateCallback={validateCallback}
        />
      ) : (
        <Card className="w-full h-full">
          <CardContent className="w-full h-full mt-3">
            <span className="flex m-auto h-full justify-center items-center text-muted-foreground">
              {"Aucun coéquipier n'a été ajouté à cette équipe."}
            </span>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
