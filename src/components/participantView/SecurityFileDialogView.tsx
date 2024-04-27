import { SecurityFile } from "@/src/api/hyperionSchemas";
import { ParticipantCardItem } from "./ParticipantCardItem";
import { TextSeparator } from "../ui/textSeparator";

interface SecurityFileDialogViewProps {
  file: SecurityFile;
}

export const SecurityFileDialogView = ({
  file,
}: SecurityFileDialogViewProps) => {
  function getAsthma() {
    return (
      <>
        <ParticipantCardItem label="Asthme" value={file.asthma} />
        {file.asthma && (
          <>
            <ParticipantCardItem
              label="Passage en soins intensifs"
              value={file.intensive_care_unit}
            />
            {file.intensive_care_unit && (
              <>
                <ParticipantCardItem
                  label="Date de passage en soins intensifs"
                  value={file.intensive_care_unit_when}
                />
              </>
            )}
          </>
        )}
      </>
    );
  }

  return (
    <div className="flex flex-col justify-between h-full w-full">
      <ParticipantCardItem label="Allergies" value={file.allergy} />
      {getAsthma()}
      <ParticipantCardItem
        label="Traitement en cours"
        value={file.ongoing_treatment}
      />
      <ParticipantCardItem label="Maladies" value={file.sicknesses} />
      <ParticipantCardItem
        label="Hospitalisation"
        value={file.hospitalization}
      />
      <ParticipantCardItem
        label="Opération chirurgicale"
        value={file.surgical_operation}
      />
      <ParticipantCardItem label="Traumatisme" value={file.trauma} />
      <ParticipantCardItem label="Antécédents familiaux" value={file.family} />

      <div className="my-4 items-center">
        <TextSeparator text="Personne à contacter en cas d'urgence" />
      </div>
      <ParticipantCardItem
        label="Prénom"
        value={file.emergency_person?.firstname}
      />
      <ParticipantCardItem label="Nom" value={file.emergency_person?.name} />
      <ParticipantCardItem
        label="Téléphone"
        value={file.emergency_person?.phone}
      />
    </div>
  );
};
