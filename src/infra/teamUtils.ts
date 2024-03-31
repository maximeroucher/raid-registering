import { Participant, Team } from "../api/hyperionSchemas";

export function getSituationLabel(situation?: string) {
  return situation?.split(" : ")[0];
}

export function getSituationTitle(situation?: string) {
  const parts = situation?.split(" : ");
  return parts?.length === 2 ? parts[1] : "Centrale";
}

export function calculateParticipantProgress(
  participant?: Participant,
): number {
  var numberValidated = 0;
  var numberTotal = 10;
  if (participant?.address) {
    numberValidated++;
  }
  if (participant?.bike_size) {
    numberValidated++;
  }
  if (participant?.t_shirt_size) {
    numberValidated++;
  }
  if (participant?.situation) {
    numberValidated++;
  }
  if (
    ["centrale", "otherschool"].includes(
      getSituationLabel(participant?.situation ?? undefined) ?? "",
    ) &&
    participant?.student_card?.id &&
    participant?.student_card?.validated
  ) {
    numberValidated++;
  }
  if (participant?.id_card?.id && participant?.id_card?.validated) {
    numberValidated++;
  }
  if (
    participant?.medical_certificate?.id &&
    participant?.medical_certificate?.validated
  ) {
    numberValidated++;
  }
  if (participant?.security_file?.id) {
    numberValidated++;
  }
  if (participant?.raid_rules?.id && participant?.raid_rules?.validated) {
    numberValidated++;
  }
  if (participant?.payment) {
    numberValidated++;
  }
  return (numberValidated / numberTotal) * 100;
}

export function calculateTeamProgress(team?: Team): number {
  if (!team) {
    return 0;
  }
  const captainProgress = calculateParticipantProgress(team.captain);
  const secondProgress = team.second
    ? calculateParticipantProgress(team.second)
    : 0;
  return (captainProgress + secondProgress) / 2;
}
