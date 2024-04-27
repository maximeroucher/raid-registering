import {
  Participant,
  ParticipantUpdate,
  Size,
} from "@/src/api/hyperionSchemas";
import { CardContent } from "../ui/card";
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
import { EditParticipantCardItem, ValueTypes } from "./EditParticipantCardItem";
import { useSecurityFile } from "@/src/hooks/useSecurityFile";
import { getLabelFromValue, situations } from "@/src/infra/comboboxValues";
import { getSituationLabel, getSituationTitle } from "@/src/infra/teamUtils";

interface ViewEditParticipantItemProps {
  participant: Participant;
  isEdit: boolean;
  setIsEdit: (value: boolean) => void;
}

export const ViewEditParticipantItem = ({
  participant,
  isEdit,
  setIsEdit,
}: ViewEditParticipantItemProps) => {
  const { updateParticipant, isUpdateLoading } = useParticipant();
  const { refetchTeam } = useTeam();
  const { assignDocument } = useDocument();
  const { assignSecurityFile } = useSecurityFile();
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
          return ["xs", "s", "m", "l", "xl"].includes(value);
        },
        { message: "Veuillez renseigner une taille de vélo valide" },
      )
      .optional(),
    tShirtSize: z
      .string()
      .refine(
        (value) => {
          return ["xs", "s", "m", "l", "xl"].includes(value);
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
    securityFile: z
      .object({
        allergy: z.string().optional(),
        asthma: z.boolean(),
        intensive_care_unit: z.boolean().optional(),
        intensive_care_unit_when: z.string().optional(),
        ongoing_treatment: z.string().optional(),
        sicknesses: z.string().optional(),
        hospitalization: z.string().optional(),
        surgical_operation: z.string().optional(),
        trauma: z.string().optional(),
        family: z.string().optional(),
        id: z.string().uuid(),
        updated: z.boolean(),
        emergency_person: z
          .object({
            name: z.string().min(1, {
              message: "Veuillez renseigner le nom de la personne à contacter",
            }),
            firstname: z.string().min(1, {
              message:
                "Veuillez renseigner le prénom de la personne à contacter",
            }),
            phone: z
              .string({
                required_error: "Veuillez renseigner un numéro de téléphone",
                invalid_type_error:
                  "Veuillez renseigner un numéro de téléphone",
              })
              .min(11, {
                message: "Veuillez renseigner un numéro de téléphone valide",
              })
              .max(14, {
                message: "Veuillez renseigner un numéro de téléphone valide",
              }),
          })
          .partial(),
      })
      .partial(),
    attestationHonour: z.boolean().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      address: participant.address ?? undefined,
      bikeSize: participant.bike_size?.toLowerCase() ?? undefined,
      tShirtSize: participant.t_shirt_size?.toLowerCase() ?? undefined,
      situation: getSituationLabel(participant.situation ?? undefined),
      other:
        getSituationLabel(participant.situation ?? undefined) === "other"
          ? getSituationTitle(participant.situation ?? undefined)
          : undefined,
      otherSchool:
        getSituationLabel(participant.situation ?? undefined) === "otherschool"
          ? getSituationTitle(participant.situation ?? undefined)
          : undefined,
      company:
        getSituationLabel(participant.situation ?? undefined) ===
        "corporatepartner"
          ? getSituationTitle(participant.situation ?? undefined)
          : undefined,
      diet: participant.diet ?? undefined,
      idCard: {
        name: participant.id_card?.name ?? undefined,
        id: participant.id_card?.id ?? undefined,
        type: "idCard",
      },
      medicalCertificate: {
        name: participant.medical_certificate?.name ?? undefined,
        id: participant.medical_certificate?.id ?? undefined,
        type: "medicalCertificate",
      },
      studentCard: {
        name: participant.student_card?.name ?? undefined,
        id: participant.student_card?.id ?? undefined,
        type: "studentCard",
      },
      raidRules: {
        name: participant.raid_rules?.name ?? undefined,
        id: participant.raid_rules?.id ?? undefined,
        type: "raidRules",
      },
      securityFile: {
        allergy: participant?.security_file?.allergy ?? undefined,
        asthma: participant?.security_file?.asthma ?? false,
        intensive_care_unit:
          participant?.security_file?.intensive_care_unit ?? false,
        intensive_care_unit_when:
          participant?.security_file?.intensive_care_unit_when ?? undefined,
        ongoing_treatment:
          participant?.security_file?.ongoing_treatment ?? undefined,
        sicknesses: participant?.security_file?.sicknesses ?? undefined,
        hospitalization:
          participant?.security_file?.hospitalization ?? undefined,
        surgical_operation:
          participant?.security_file?.surgical_operation ?? undefined,
        trauma: participant?.security_file?.trauma ?? undefined,
        family: participant?.security_file?.family ?? undefined,
        id: participant?.security_file?.id ?? undefined,
        emergency_person: {
          name: participant?.security_file?.emergency_person?.name ?? undefined,
          firstname:
            participant?.security_file?.emergency_person?.firstname ?? undefined,
          phone: participant?.security_file?.emergency_person?.phone ?? undefined,
        },
      },
      attestationHonour: participant.attestation_on_honour,
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

    if (values.securityFile.updated) {
      assignSecurityFile(participant.id!, values.securityFile.id!, () => {
        console.log("Security file updated");
      });
    }

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
    updateParticipant(updatedParticipant, participant.id, () => {
      toast({
        title: "Profil mis à jour",
        description: "Vos informations ont été mises à jour avec succès",
      });
      refetchTeam();
      setIsEdit(!isEdit);
      form.reset();
    });
  }

  function switchSituation(values: z.infer<typeof formSchema>) {
    switch (values.situation) {
      case "otherschool":
        return `otherschool : ${values.otherSchool}`;
      case "corporatepartner":
        return `corporatepartner : ${values.company}`;
      case "other":
        return `other : ${values.other}`;
      default:
        return `centrale`;
    }
  }

  function getSituation() {
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

  return (
    <CardContent>
      <FormProvider {...form} key={"Participant"}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`flex flex-col justify-between h-full ${isEdit ? "" : "space-y-4"}`}
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
                placeholder="Taille"
                id="bikeSize"
                form={form}
                type={ValueTypes.SIZE}
              />
              <EditParticipantCardItem
                label="Taille de t-shirt"
                id="tShirtSize"
                placeholder="Taille"
                form={form}
                type={ValueTypes.SIZE}
              />
              <EditParticipantCardItem
                label="Régime alimentaire"
                id="diet"
                form={form}
                type={ValueTypes.STRING}
              />
              {getSituationEdit()}
              {["centrale", "otherschool"].includes(
                form.watch("situation") ?? "",
              ) && (
                <EditParticipantCardItem
                  label="Carte étudiante"
                  id="studentCard"
                  form={form}
                  type={ValueTypes.DOCUMENT}
                  layer={1}
                  participantId={participant.id!}
                />
              )}
              <EditParticipantCardItem
                label="Carte d'identité"
                id="idCard"
                form={form}
                type={ValueTypes.DOCUMENT}
                participantId={participant.id!}
              />
              <EditParticipantCardItem
                label="Certificat médical"
                id="medicalCertificate"
                form={form}
                type={ValueTypes.DOCUMENT}
                participantId={participant.id!}
              />
              <EditParticipantCardItem
                label="Fiche de sécurité"
                id="securityFile"
                form={form}
                type={ValueTypes.SECURITYFILE}
              />
              <EditParticipantCardItem
                label="Règlement du raid"
                id="raidRules"
                form={form}
                type={ValueTypes.DOCUMENT}
                participantId={participant.id!}
              />
              <EditParticipantCardItem
                label="Attestation sur l'honneur"
                id="attestationHonour"
                form={form}
                type={ValueTypes.BOOLEAN}
                needDialog
              />
            </>
          ) : (
            <>
              <ParticipantCardItem
                label="Addresse"
                value={participant.address}
              />
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
              {getSituation()}
              {["centrale", "otherschool"].includes(
                getSituationLabel(participant.situation ?? undefined) ?? "",
              ) && (
                <ParticipantCardItem
                  label="Carte étudiante"
                  value={participant.student_card}
                  participantId={participant.id!}
                />
              )}
              <ParticipantCardItem
                label="Carte d'identité"
                value={participant.id_card}
                participantId={participant.id!}
              />
              <ParticipantCardItem
                label="Certificat médical"
                value={participant.medical_certificate}
                participantId={participant.id!}
              />
              <ParticipantCardItem
                label="Fiche de sécurité"
                value={participant.security_file}
              />
              <ParticipantCardItem
                label="Règlement du raid"
                value={participant.raid_rules}
                participantId={participant.id!}
              />
              <ParticipantCardItem
                label="Attestation sur l'honneur"
                value={participant.attestation_on_honour}
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
