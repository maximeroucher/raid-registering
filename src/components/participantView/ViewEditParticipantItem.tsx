import {
  Participant,
  ParticipantUpdate,
  Size,
} from "@/src/api/hyperionSchemas";
import { CardContent, CardFooter } from "../ui/card";
import { EditParticipantCardItem, ValueTypes } from "./EditParticipantCardItem";
import { ParticipantCardItem } from "./ParticipantCardItem";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Value } from "@radix-ui/react-select";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { useParticipant } from "@/src/hooks/useParticipant";
import { ReloadIcon } from "@radix-ui/react-icons";
import { HiPencil, HiCheck, HiX } from "react-icons/hi";

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
  const { updateParticipant, isUpdateLoading } = useParticipant();
  const formSchema = z.object({
    address: z
      .string()
      .min(1, {
        message: "Veuillez renseigner votre adresse",
      })
      .optional(),
    bikeSize: z
      .string()
      .refine(
        (value) => {
          return ["XS", "S", "M", "L", "XL"].includes(value.toUpperCase());
        },
        { message: "Veuillez renseigner une taille de vélo valide" }
      )
      .optional(),
    tShirtSize: z
      .string()
      .refine(
        (value) => {
          return ["XS", "S", "M", "L", "XL"].includes(value.toUpperCase());
        },
        { message: "Veuillez renseigner une taille de t-shirt valide" }
      )
      .optional(),
    diet: z.string().optional(),
    attestationHonour: z.boolean().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: me.address ?? undefined,
      bikeSize: me.bike_size ?? undefined,
      tShirtSize: me.t_shirt_size ?? undefined,
      diet: me.diet ?? undefined,
      attestationHonour: me.attestation_on_honour,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!form.formState.isDirty) {
      setIsEdit(!isEdit);
      return;
    }
    const updatedParticipant: ParticipantUpdate = {
      bike_size: values.bikeSize?.toUpperCase() as Size ?? null,
      t_shirt_size: values.tShirtSize?.toUpperCase() as Size ?? null,
      ...values,
    };
    updateParticipant(updatedParticipant, () => {
      toast({
        title: "Profil mis à jour",
        description: "Vos informations ont été mises à jour avec succès",
      });
      setIsEdit(!isEdit);
    });
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
            <>
              {isUpdateLoading ? (
                <Button variant="default" disabled className="w-full mt-6">
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                </Button>
              ) : (
                <Button
                  className="w-full mt-6"
                  type="submit"
                  disabled={!form.formState.isDirty}
                >
                  <HiCheck className="mr-2 h-4 w-4" />
                  Enregistrer
                </Button>
              )}
            </>
          )}
        </form>
      </FormProvider>
    </CardContent>
  );
};
