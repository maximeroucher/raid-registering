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
import {
  HiPencil,
  HiX,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { useState } from "react";
import { TeamEdit } from "./TeamEdit";
import {
  difficulties,
  getLabelFromValue,
  meetingPlaces,
} from "@/src/infra/comboboxValues";
import { calculateTeamProgress } from "@/src/infra/teamUtils";
import { TeamInfoCard } from "./TeamInfoCard";

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
      title: "Lieu de rendez-vous",
      value: getLabelFromValue(meetingPlaces, team?.meeting_place ?? undefined),
      description: "lieu de départ et d'arrivée",
      unit: <HiOutlineLocationMarker className="h-4 w-4" />,
    },
    {
      title: "Date",
      value: "06-07 octobre",
      description: "week-end complet",
      unit: <HiOutlineCalendar className="h-4 w-4" />,
    },
    {
      title: "Inscription",
      value: `${calculateTeamProgress(team).toFixed(0)}%`,
      description: "10 jours restants",
      unit: <span>%</span>,
    },
    {
      title: "Parcours",
      value: getLabelFromValue(difficulties, team?.difficulty ?? undefined),
      description: "parcours exigeant",
      unit: undefined,
    },
    {
      title: "Distance",
      value: "150 km",
      description: "répartis sur les deux jours",
      unit: <span>km</span>,
    },
    {
      title: "Dénivelé",
      value: "2500 m",
      description: "répartis sur les deux jours",
      unit: <span>m</span>,
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
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-6">
              {information.map((info) => (
                <TeamInfoCard
                  info={info}
                  key={info.title}
                  isLoaded={team !== undefined}
                />
              ))}
            </div>
          )}
        </CardHeader>
      </div>
    </Card>
  );
};
