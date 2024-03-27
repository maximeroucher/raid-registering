import { Button } from "../ui/button";
import { EditParticipantCardItem, ValueTypes } from "./EditParticipantCardItem";

interface SecurityFileDialogProps {
  setIsOpen: (value: boolean) => void;
  form: any;
}

export const SecurityFileDialog = ({
  setIsOpen,
  form,
}: SecurityFileDialogProps) => {

  function onValidate(_: any) {
    form.setValue("securityFile.validated", true);
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
      <Button className="mt-6" type="button" onClick={onValidate}>
        Valider
      </Button>
    </div>
  );
};
