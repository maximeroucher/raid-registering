import {
  Participant,
  ParticipantUpdate,
  Size,
} from "@/src/api/hyperionSchemas";
import { CardContent } from "../ui/card";
import { EditParticipantCardItem, ValueTypes } from "./EditParticipantCardItem";
import { ParticipantCardItem } from "./ParticipantCardItem";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { useParticipant } from "@/src/hooks/useParticipant";
import { ReloadIcon } from "@radix-ui/react-icons";
import { HiCheck } from "react-icons/hi";
import { useTeam } from "@/src/hooks/useTeam";
import { useDocument } from "@/src/hooks/useDocument";

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
  const { refetchTeam } = useTeam();
  const { assignDocument } = useDocument();
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
        { message: "Veuillez renseigner une taille de vélo valide" },
      )
      .optional(),
    tShirtSize: z
      .string()
      .refine(
        (value) => {
          return ["XS", "S", "M", "L", "XL"].includes(value.toUpperCase());
        },
        { message: "Veuillez renseigner une taille de t-shirt valide" },
      )
      .optional(),
    situation: z.string().optional(),
    otherSchool: z.string().optional(),
    company: z.string().optional(),
    other: z.string().optional(),
    diet: z.string().optional(),
    idCard: z
      .object({
        name: z.string(),
        id: z.string().uuid(),
        updated: z.boolean(),
        type: z.literal("idCard"),
      })
      .partial(),
    medicalCertificate: z
      .object({
        name: z.string(),
        id: z.string().uuid(),
        updated: z.boolean(),
        type: z.literal("medicalCertificate"),
      })
      .partial(),
    studentCard: z
      .object({
        name: z.string(),
        id: z.string().uuid(),
        updated: z.boolean(),
        type: z.literal("studentCard"),
      })
      .partial(),
    raidRules: z
      .object({
        name: z.string(),
        id: z.string().uuid(),
        updated: z.boolean(),
        type: z.literal("raidRules"),
      })
      .partial(),
    attestationHonour: z.boolean().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      address: me.address ?? undefined,
      bikeSize: me.bike_size?.toUpperCase() ?? undefined,
      tShirtSize: me.t_shirt_size?.toUpperCase() ?? undefined,
      situation:
        me.situation === "centrale" ? me.situation ?? undefined : "other",
      other:
        me.situation !== "centrale" ? me.situation ?? undefined : undefined,
      diet: me.diet ?? undefined,
      idCard: {
        name: me.id_card?.name ?? undefined,
        id: me.id_card?.id ?? undefined,
        type: "idCard",
      },
      medicalCertificate: {
        name: me.medical_certificate?.name ?? undefined,
        id: me.medical_certificate?.id ?? undefined,
        type: "medicalCertificate",
      },
      studentCard: {
        name: me.student_card?.name ?? undefined,
        id: me.student_card?.id ?? undefined,
        type: "studentCard",
      },
      raidRules: {
        name: me.raid_rules?.name ?? undefined,
        id: me.raid_rules?.id ?? undefined,
        type: "raidRules",
      },
      attestationHonour: me.attestation_on_honour,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!form.formState.isDirty) {
      setIsEdit(!isEdit);
      return;
    }
    const documentToUpdate = [
      values.idCard,
      values.medicalCertificate,
      values.studentCard,
      values.raidRules,
    ].filter((doc) => doc.updated);
    for (const doc of documentToUpdate) {
      if (doc) {
        assignDocument(
          {
            id: doc.id!,
            name: doc.name!,
            type: doc.type!,
          },
          () => {
            console.log("Document updated: ", doc.name);
          },
        );
      }
    }
    const updatedParticipant: ParticipantUpdate = {
      bike_size: (values.bikeSize?.toUpperCase() as Size) ?? null,
      t_shirt_size: (values.tShirtSize?.toUpperCase() as Size) ?? null,
      situation: switchSituation(values),
      address: values.address ?? null,
      diet: values.diet ?? null,
      attestation_on_honour: values.attestationHonour,
    };
    console.log(updatedParticipant);
    updateParticipant(updatedParticipant, () => {
      toast({
        title: "Profil mis à jour",
        description: "Vos informations ont été mises à jour avec succès",
      });
      refetchTeam();
      setIsEdit(!isEdit);
    });
  }

  function switchSituation(values: z.infer<typeof formSchema>) {
    switch (values.situation) {
      case "otherschool":
        return values.otherSchool;
      case "corporatepartner":
        return values.company;
      case "other":
        return values.other;
      default:
        return values.situation;
    }
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

  function getSituationEdit() {
    return (
      <>
        <EditParticipantCardItem
          label="Situation"
          id="situation"
          form={form}
          type={ValueTypes.SITUATION}
        />
        {form.watch("situation") === "otherschool" && (
          <EditParticipantCardItem
            label="Nom de l'école"
            id="otherSchool"
            form={form}
            type={ValueTypes.STRING}
            layer={1}
          />
        )}
        {form.watch("situation") === "corporatepartner" && (
          <EditParticipantCardItem
            label="Nom de l'entreprise"
            id="company"
            form={form}
            type={ValueTypes.STRING}
            layer={1}
          />
        )}
        {form.watch("situation") === "other" && (
          <EditParticipantCardItem
            label="Autre situation"
            id="other"
            form={form}
            type={ValueTypes.STRING}
            layer={1}
          />
        )}
      </>
    );
  }
  console.log(me);

  return (
    <CardContent>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`flex flex-col justify-between h-full ${isEdit ? '' : 'space-y-4'}`}
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
              {getSituationEdit()}
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
                me={me}
              />
              <EditParticipantCardItem
                label="Certificat médical"
                id="medicalCertificate"
                form={form}
                type={ValueTypes.DOCUMENT}
                me={me}
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
                me={me}
              />
              <EditParticipantCardItem
                label="Règlement du raid"
                id="raidRules"
                form={form}
                type={ValueTypes.DOCUMENT}
                me={me}
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
