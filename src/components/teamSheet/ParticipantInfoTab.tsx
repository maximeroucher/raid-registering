import { Participant } from "@/src/api/hyperionSchemas";
import { ParticipantCardItem } from "../participantView/ParticipantCardItem";
import { getSituationLabel, getSituationTitle } from "@/src/infra/teamUtils";
import { getLabelFromValue, situations } from "@/src/infra/comboboxValues";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface ParticipantInfoTabProps {
  participant: Participant;
}

export const ParticipantInfoTab = ({
  participant,
}: ParticipantInfoTabProps) => {
  function getSituation(participant: Participant) {
    const situation = getSituationLabel(participant.situation ?? undefined);
    const title = getSituationTitle(participant.situation ?? undefined);
    return (
      <>
        <ParticipantCardItem
          label="Situation"
          value={getLabelFromValue(situations, situation)}
        />
        {situation === "otherschool" && (
          <ParticipantCardItem label="Nom de l'école" value={title} />
        )}
        {situation === "corporatepartner" && (
          <ParticipantCardItem label="Nom de l'entreprise" value={title} />
        )}
        {situation === "other" && (
          <ParticipantCardItem label="Autre situation" value={title} />
        )}
      </>
    );
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>{participant.firstname + " " + participant.name}</CardTitle>
        <CardDescription>
          dossier particiant completé à{" "}
          {participant.validation_progress.toFixed(0)}%
        </CardDescription>
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
        <ParticipantCardItem
          label="Régime alimentaire"
          value={participant.diet}
        />
        {getSituation(participant)}
        <ParticipantCardItem
          label="Attestation sur l'honneur"
          value={participant.attestation_on_honour}
        />
      </CardContent>
    </Card>
  );
};
