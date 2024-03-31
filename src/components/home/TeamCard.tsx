"use client";

import { Team } from "@/src/api/hyperionSchemas";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { HiPencil, HiX, HiCalendar, HiMap } from "react-icons/hi";
import { useState } from "react";
import { TeamEdit } from "./TeamEdit";
import {
  difficulties,
  getLabelFromValue,
  meetingPlaces,
} from "@/src/infra/comboboxValues";
import { calculateTeamProgress } from "@/src/infra/teamUtils";

interface TeamCardProps {
  team?: Team;
}

export const TeamCard = ({ team }: TeamCardProps) => {
  const [isEdit, setIsEdit] = useState(false);

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
      value: getLabelFromValue(meetingPlaces, team?.meeting_place ?? undefined),
      description: "lieu de départ et d'arrivée",
      unit: <HiMap className="h-4 w-4" />,
    },
    {
      title: "Parcours",
      value: getLabelFromValue(difficulties, team?.difficulty ?? undefined),
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
      value: `${calculateTeamProgress(team).toFixed(0)}%`,
      description: "10 jours restants",
      unit: <div>%</div>,
    },
  ];

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
            {isEdit && team ? (
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
          {isEdit && team ? (
            <TeamEdit team={team!} setIsEdit={setIsEdit} />
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
