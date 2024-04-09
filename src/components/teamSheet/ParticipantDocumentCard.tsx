import { Participant } from "@/src/api/hyperionSchemas";
import { Accordion } from "../ui/accordion";
import { CardHeader, CardTitle, CardContent } from "../ui/card";
import { DocumentItem } from "./DocumentItem";
import { getSituationLabel } from "@/src/infra/teamUtils";

interface ParticipantDocumentCardProps {
  participant: Participant;
}

export const ParticipantDocumentCard = ({
  participant,
}: ParticipantDocumentCardProps) => {
  return (
    <>
      <CardHeader>
        <CardTitle>
          {participant.firstname} {participant.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <DocumentItem
            value="Carte d'identité"
            document={participant.id_card}
            index={0}
          />
          <DocumentItem
            value="Certificat médical"
            document={participant.medical_certificate}
            index={1}
          />
          <DocumentItem
            value="Réglement"
            document={participant.raid_rules ?? null}
            index={2}
          />
          {["centrale", "otherschool"].includes(
            getSituationLabel(participant.situation ?? undefined) ?? "",
          ) && (
            <DocumentItem
              value="Carte étudiant"
              document={participant.student_card ?? null}
              index={3}
            />
          )}
        </Accordion>
      </CardContent>
    </>
  );
};
