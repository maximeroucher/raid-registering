import { Participant } from "@/src/api/hyperionSchemas";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ParticipantCardItem } from "./ParticipantCardItem";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { HiPencil } from "react-icons/hi";
import { toast } from "../ui/use-toast";
import { Skeleton } from "../ui/skeleton";

interface ParticipantCardProps {
  participant?: Participant;
  isCaptain: boolean;
}

export const ParticipantCard = ({
  participant,
  isCaptain,
}: ParticipantCardProps) => {
  function showToast() {
    toast({
      title: "Profil mis à jour",
      description: "Vos informations ont été mises à jour avec succès",
    });
  }

  function getSituation() {
    switch (participant?.situation) {
      case "otherSchool":
        return (
          <ParticipantCardItem
            label="Situation"
            value={participant?.other_school}
          />
        );
      case "corporatePartner":
        return (
          <ParticipantCardItem label="Situation" value={participant?.company} />
        );
      default:
        return (
          <ParticipantCardItem
            label="Situation"
            value={participant?.situation}
          />
        );
    }
  }

  return (
    <Card className="w-full m-14">
      <CardHeader>
        <div className="flex flex-row justify-between">
          <div>
            <CardTitle>
              {participant?.firstname && participant?.firstname ? (
                participant?.firstname + " " + participant?.name
              ) : (
                <div className="flex flex-row gap-2">
                  <Skeleton className="w-24 h-8" />
                  <Skeleton className="w-24 h-8" />
                </div>
              )}
            </CardTitle>
            <CardDescription>{isCaptain ? "Capitaine" : " "}</CardDescription>
          </div>
          <Button variant="outline" onClick={showToast}>
            <HiPencil className="mr-2 h-4 w-4" />
            Éditer
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ParticipantCardItem label="Addresse" value={participant?.address} />
        <ParticipantCardItem
          label="Taille de vélo"
          value={participant?.bike_size}
        />
        <ParticipantCardItem
          label="Taille de t-shirt"
          value={participant?.t_shirt_size}
        />
        {getSituation()}
        <ParticipantCardItem
          label="Régime alimentaire"
          value={participant?.diet}
        />
        <ParticipantCardItem
          label="Carte d'identité"
          value={participant?.id_card}
        />
        <ParticipantCardItem
          label="Certificat médical"
          value={participant?.medical_certificate}
        />
        <ParticipantCardItem
          label="Fiche de sécurité"
          value={participant?.security_file}
        />
        <ParticipantCardItem
          label="Carte étudiante"
          value={participant?.student_card}
        />
        <ParticipantCardItem
          label="Règlement du raid"
          value={participant?.raid_rules}
        />
      </CardContent>
      <CardFooter className="flex flex-col">
        <ParticipantCardItem
          label="Attestation sur l'honneur"
          value={participant?.attestation_on_honour}
        />
        <ParticipantCardItem label="Paiement" value={participant?.payment} />
      </CardFooter>
      <Progress value={participant?.validation_progress ? participant!.validation_progress * 100 : 0} />
    </Card>
  );
};
