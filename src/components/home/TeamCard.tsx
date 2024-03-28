"use client";

import { Team, Difficulty } from "@/src/api/hyperionSchemas";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { HiPencil, HiX, HiCalendar, HiMap, HiCheck } from "react-icons/hi";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import {
  EditParticipantCardItem,
  ValueTypes,
} from "../participantView/EditParticipantCardItem";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

interface TeamCardProps {
  team?: Team;
}

export const TeamCard = ({ team }: TeamCardProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isUpdateLoading, setIsUpdateLoading] = useState(false);

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  const information = [
    {
      title: "Date",
      value: "06-07 octobre",
      description: "week-end complet",
      unit: <HiCalendar className="h-4 w-4" />,
    },
    {
      title: "Lieu de rendez-vous",
      value: team?.meeting_place ?? "Non renseigné",
      description: "lieu de départ et d'arrivée",
      unit: <HiMap className="h-4 w-4" />,
    },
    {
      title: "Parcours",
      value: team?.difficulty ?? "Non renseigné",
      description: "parcours exigeant",
      unit: <></>,
    },
    {
      title: "Distance",
      value: "150 km",
      description: "répartis sur les deux jours",
      unit: <div>km</div>,
    },
    {
      title: "Dénivelé",
      value: "2500 m",
      description: "répartis sur les deux jours",
      unit: <div>m</div>,
    },
    {
      title: "Inscription",
      value: "75%",
      description: "10 jours restants",
      unit: <div>%</div>,
    },
  ];

  const formSchema = z.object({
    name: z.string().optional(),
    difficulty: z.enum(["discovery", "sports", "expert"]).optional(),
    meeting_place: z.enum(["centrale", "bellecour", "anyway"]).optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: team?.name ?? undefined,
      difficulty: team?.difficulty ?? undefined,
      meeting_place: team?.meeting_place ?? undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!form.formState.isDirty) {
      setIsEdit(!isEdit);
      return;
    }
  }

  return (
    <Card className="w-full mt-5">
      <div className="flex flex-col">
        <CardHeader>
          <div className="flex flex-row justify-between">
            <CardTitle>
              {isEdit ? (
                <div>{"Éditer l'équipe"}</div>
              ) : (
                <>
                  {team?.name ? (
                    <div>{team?.name}</div>
                  ) : (
                    <Skeleton className="w-24 h-8" />
                  )}
                </>
              )}
            </CardTitle>
            {isEdit ? (
              <Button
                variant="destructive"
                onClick={toggleEdit}
                className="w-[110px]"
              >
                <HiX className="mr-2 h-4 w-4" />
                Annuler
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={toggleEdit}
                className="w-[110px]"
              >
                <HiPencil className="mr-2 h-4 w-4" />
                Éditer
              </Button>
            )}
          </div>
          <div className="h-4"></div>
          {isEdit ? (
            <FormProvider {...form} key={"Participant"}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={`flex flex-col justify-between h-full ${isEdit ? "" : "space-y-4"}`}
              >
                <CardContent>
                  <EditParticipantCardItem
                    label="Nom d'équipe"
                    id="name"
                    form={form}
                    type={ValueTypes.STRING}
                  />
                  <EditParticipantCardItem
                    label="Lieu de rendez-vous"
                    id="meeting_place"
                    placeholder="Selectionner un lieu de rendez-vous"
                    form={form}
                    type={ValueTypes.MEETINGPLACE}
                  />

                  <EditParticipantCardItem
                    label="Parcours"
                    id="difficulty"
                    placeholder="Selectionner un parcours"
                    form={form}
                    type={ValueTypes.DIFFICULTY}
                  />
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
                </CardContent>
              </form>
            </FormProvider>
          ) : (
            <div className="flex flex-wrap gap-4">
              {information.map((info) => (
                <Card key={info.title} className="w-[220px]">
                  <CardContent className="mt-4">
                    <CardDescription>
                      <div className="flex flex-row justify-between">
                        <div className="text-l font-bold">{info.title}</div>
                        {info.unit}
                      </div>
                    </CardDescription>
                    <div className="h-3"></div>
                    <CardTitle>{info.value}</CardTitle>
                    <CardDescription>{info.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardHeader>
      </div>
    </Card>
  );
};
