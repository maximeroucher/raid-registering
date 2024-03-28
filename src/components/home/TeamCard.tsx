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
      value: "Centrale",
      description: "lieu de départ et d'arrivée",
      unit: <HiMap className="h-4 w-4" />,
    },
    {
      title: "Parcours",
      value: "Expert",
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

  return (
    <Card className="w-full mt-5">
      <div className="flex flex-col">
        <CardHeader>
          <div className="flex flex-row justify-between">
            <div>
              <CardTitle>
                {team?.name ? (
                  <div>{team?.name}</div>
                ) : (
                  <Skeleton className="w-24 h-8" />
                )}
              </CardTitle>
            </div>
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
          {/* <CardContent>
            {team?.meeting_place !== undefined ? (
              <div>{`Lieu de rendez-vous: ${team?.meeting_place}`}</div>
            ) : (
              <Skeleton className="w-24 h-6" />
            )}
            <div className="h-3"></div>
            {team?.difficulty !== undefined ? (
              <div>Parcours: {team?.difficulty ?? "Non renseigné"}</div>
            ) : (
              <Skeleton className="w-24 h-6" />
            )}
          </CardContent> */}
          <div className="h-4"></div>
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
        </CardHeader>
      </div>
    </Card>
  );
};
