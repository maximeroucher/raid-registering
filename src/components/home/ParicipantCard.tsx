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

interface ParticipantCardProps {
  participant: Participant;
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

  return (
    <Card className="w-full m-14">
      <CardHeader>
        <div className="flex flex-row justify-between">
          <div>
            <CardTitle>
              {participant.firstname} {participant.name}
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
        <ParticipantCardItem label="Addresse" value={participant.address} />
        <ParticipantCardItem
          label="Taille de vélo"
          value={participant.bike_size}
        />
        <ParticipantCardItem
          label="Taille de t-shirt"
          value={participant.t_shirt_size}
        />
        <ParticipantCardItem label="Situation" value={participant.situation} />
        <ParticipantCardItem
          label="Autre école"
          value={participant.other_school}
        />
        <ParticipantCardItem label="Entreprise" value={participant.company} />
        <ParticipantCardItem
          label="Régime alimentaire"
          value={participant.diet}
        />
        <ParticipantCardItem
          label="Carte d'identité"
          value={participant.id_card}
        />
        <ParticipantCardItem
          label="Certificat médical"
          value={participant.medical_certificate}
        />
        <ParticipantCardItem
          label="Fiche de sécurité"
          value={participant.security_file}
        />
        <ParticipantCardItem
          label="Carte étudiante"
          value={participant.student_card}
        />
        <ParticipantCardItem
          label="Règlement du raid"
          value={participant.raid_rules}
        />
      </CardContent>
      <CardFooter className="flex flex-col">
        <ParticipantCardItem
          label="Attestation sur l'honneur"
          value={participant.attestation_on_honour}
        />
        <ParticipantCardItem label="Paiement" value={participant.payment} />
      </CardFooter>
      <Progress value={participant.validation_progress * 100} />
    </Card>
  );
};
