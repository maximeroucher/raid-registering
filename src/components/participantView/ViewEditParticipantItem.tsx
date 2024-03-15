import { Participant, Size } from "@/src/api/hyperionSchemas";
import { CardContent, CardFooter } from "../ui/card";
import { EditParticipantCardItem, ValueTypes } from "./EditParticipantCardItem";
import { ParticipantCardItem } from "./ParticipantCardItem";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Value } from "@radix-ui/react-select";
import { Button } from "../ui/button";

interface ViewEditParticipantItemProps {
  me: Participant;
  isEdit: boolean;
  setIsEdit: (value: boolean) => void;
}

export const ViewEditParticipantItem = ({
  me,
  isEdit,
  setIsEdit,
}: ViewEditParticipantItemProps) => {
  const formSchema = z.object({
    address: z.string().min(1, {
      message: "Veuillez renseigner votre adresse",
    }),
    bikeSize: z.string().refine(
      (value) => {
        return ["XS", "S", "M", "L", "XL"].includes(value);
      },
      { message: "Veuillez renseigner une taille de vélo valide" },
    ),
    tShirtSize: z.string().refine(
      (value) => {
        return ["XS", "S", "M", "L", "XL"].includes(value);
      },
      { message: "Veuillez renseigner une taille de t-shirt valide" },
    ),
    diet: z.string(),
    attestationHonour: z.boolean(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // if (!form.formState.isDirty) {
    //   setIsEdit(!isEdit);
    //   return;
    // }
    // const dateString = values.birthday.toISOString().split("T")[0];
    // const updatedParticipant: ParticipantUpdate = {
    //   ...values,
    //   birthday: dateString,
    // };
    // updateParticipant(updatedParticipant, () => {
    //   toast({
    //     title: "Profil mis à jour",
    //     description: "Vos informations ont été mises à jour avec succès",
    //   });
    //   setIsEdit(!isEdit);
    //   setIsOpen(false);
    // });
  }

  function getSituation() {
    switch (me.situation) {
      case "otherSchool":
        return (
          <ParticipantCardItem label="Situation" value={me.other_school} />
        );
      case "corporatePartner":
        return <ParticipantCardItem label="Situation" value={me.company} />;
      default:
        return <ParticipantCardItem label="Situation" value={me.situation} />;
    }
  }

  return (
    <CardContent>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-between h-full"
        >
          {isEdit ? (
            <>
              <EditParticipantCardItem
                label="Addresse"
                id="address"
                form={form}
                type={ValueTypes.STRING}
              />
              <EditParticipantCardItem
                label="Taille de vélo"
                id="bikeSize"
                form={form}
                type={ValueTypes.SIZE}
              />
              <EditParticipantCardItem
                label="Taille de t-shirt"
                id="tShirtSize"
                form={form}
                type={ValueTypes.SIZE}
              />
              <EditParticipantCardItem
                label="Situation"
                id="situation"
                form={form}
                type={ValueTypes.STRING}
              />
              <EditParticipantCardItem
                label="Régime alimentaire"
                id="diet"
                form={form}
                type={ValueTypes.STRING}
              />
              <EditParticipantCardItem
                label="Carte d'identité"
                id="idCard"
                form={form}
                type={ValueTypes.DOCUMENT}
              />
              <EditParticipantCardItem
                label="Certificat médical"
                id="medicalCertificate"
                form={form}
                type={ValueTypes.DOCUMENT}
              />
              <EditParticipantCardItem
                label="Fiche de sécurité"
                id="securityFile"
                form={form}
                type={ValueTypes.SECURITYFILE}
              />
              <EditParticipantCardItem
                label="Carte étudiante"
                id="studentCard"
                form={form}
                type={ValueTypes.DOCUMENT}
              />
              <EditParticipantCardItem
                label="Attestation sur l'honneur"
                id="attestationHonour"
                form={form}
                type={ValueTypes.BOOLEAN}
              />
            </>
          ) : (
            <>
              <ParticipantCardItem label="Addresse" value={me.address} />
              <ParticipantCardItem
                label="Taille de vélo"
                value={me.bike_size}
              />
              <ParticipantCardItem
                label="Taille de t-shirt"
                value={me.t_shirt_size}
              />
              {getSituation()}
              <ParticipantCardItem label="Régime alimentaire" value={me.diet} />
              <ParticipantCardItem
                label="Carte d'identité"
                value={me.id_card}
              />
              <ParticipantCardItem
                label="Certificat médical"
                value={me.medical_certificate}
              />
              <ParticipantCardItem
                label="Fiche de sécurité"
                value={me.security_file}
              />
              <ParticipantCardItem
                label="Carte étudiante"
                value={me.student_card}
              />
              <ParticipantCardItem
                label="Règlement du raid"
                value={me.raid_rules}
              />
              <ParticipantCardItem
                label="Attestation sur l'honneur"
                value={me.attestation_on_honour}
              />
            </>
          )}
          {isEdit && (
            <Button type="submit" className="mt-6">
              Enregistrer
            </Button>
          )}
        </form>
      </FormProvider>
    </CardContent>
  );
};
