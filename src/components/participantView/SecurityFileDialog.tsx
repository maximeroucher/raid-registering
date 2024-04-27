import { useSecurityFile } from "@/src/hooks/useSecurityFile";
import { Button } from "../ui/button";
import { EditParticipantCardItem, ValueTypes } from "./EditParticipantCardItem";
import { SecurityFile } from "@/src/api/hyperionSchemas";
import { TextSeparator } from "../ui/textSeparator";

interface SecurityFileDialogProps {
  setIsOpen: (value: boolean) => void;
  form: any;
  setIsUploading: (value: boolean) => void;
}

export const SecurityFileDialog = ({
  setIsOpen,
  form,
  setIsUploading,
}: SecurityFileDialogProps) => {
  const { setSecurityFile } = useSecurityFile();

  function onValidate(_: any) {
    setIsUploading(true);
    form.setValue("securityFile.updated", true);
    if (form.getValues("securityFile.id") === undefined) {
      form.setValue("securityFile.id", crypto.randomUUID());
    }
    const securityFile: SecurityFile = {
      ...form.getValues("securityFile"),
    };
    setSecurityFile(securityFile, () => {
      setIsUploading(false);
    });
    setIsOpen(false);
  }

  function getAsthma() {
    return (
      <>
        <EditParticipantCardItem
          label="Asthme"
          id="securityFile.asthma"
          form={form}
          type={ValueTypes.BOOLEAN}
        />
        {form.watch("securityFile.asthma") && (
          <>
            <EditParticipantCardItem
              label="Passage en soins intensifs"
              id="securityFile.intensive_care_unit"
              form={form}
              type={ValueTypes.BOOLEAN}
            />
            {form.watch("securityFile.intensive_care_unit") && (
              <>
                <EditParticipantCardItem
                  label="Date de passage en soins intensifs"
                  id="securityFile.intensive_care_unit_when"
                  form={form}
                  type={ValueTypes.STRING}
                />
              </>
            )}
          </>
        )}
      </>
    );
  }

  return (
    <div className="flex flex-col justify-between h-full">
      <EditParticipantCardItem
        label="Allergies"
        id="securityFile.allergy"
        form={form}
        type={ValueTypes.STRING}
      />
      {getAsthma()}
      <EditParticipantCardItem
        label="Traitement en cours"
        id="securityFile.ongoing_treatment"
        form={form}
        type={ValueTypes.STRING}
      />
      <EditParticipantCardItem
        label="Maladies"
        id="securityFile.sicknesses"
        form={form}
        type={ValueTypes.STRING}
      />
      <EditParticipantCardItem
        label="Hospitalisation"
        id="securityFile.hospitalization"
        form={form}
        type={ValueTypes.STRING}
      />
      <EditParticipantCardItem
        label="Opération chirurgicale"
        id="securityFile.surgical_operation"
        form={form}
        type={ValueTypes.STRING}
      />
      <EditParticipantCardItem
        label="Traumatisme"
        id="securityFile.trauma"
        form={form}
        type={ValueTypes.STRING}
      />
      <EditParticipantCardItem
        label="Antécédents familiaux"
        id="securityFile.family"
        form={form}
        type={ValueTypes.STRING}
      />
      <div className="my-4 items-center">
        <TextSeparator text="Personne à contacter en cas d'urgence" />
      </div>
      <EditParticipantCardItem
        label="Prénom"
        id="securityFile.emergency_person_firstname"
        form={form}
        type={ValueTypes.STRING}
      />
      <EditParticipantCardItem
        label="Nom"
        id="securityFile.emergency_person_name"
        form={form}
        type={ValueTypes.STRING}
      />
      <EditParticipantCardItem
        label="Téléphone"
        id="securityFile.emergency_person_phone"
        form={form}
        type={ValueTypes.PHONE}
      />
      <Button className="mt-6" type="button" onClick={onValidate}>
        Valider
      </Button>
    </div>
  );
};
