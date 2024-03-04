"use client";

import { Team } from "@/src/api/hyperionSchemas";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Progress } from "../ui/progress";
import { Skeleton } from "../ui/skeleton";

interface TeamCardProps {
  team?: Team;
}

export const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <Card className="w-full mt-5">
      <div className="flex flex-col">
        <CardHeader>
          <div className="flex flex-row justify-between">
            <CardTitle>
              {team?.name ? (
                <div>{team?.name}</div>
              ) : (
                <Skeleton className="w-24 h-8" />
              )}
            </CardTitle>
            {team?.number !== undefined ? (
              <CardDescription>
                <div>{`Numéro d'équipe: ${team?.number}`}</div>
              </CardDescription>
            ) : (
              <Skeleton className="w-24 h-6" />
            )}
            {team?.difficulty !== undefined ? (
              <CardDescription>
                <div>Parcours: {team?.difficulty ?? "Non renseigné"}</div>
              </CardDescription>
            ) : (
              <Skeleton className="w-24 h-6" />
            )}
          </div>
        </CardHeader>
        <Progress
          value={team?.validation_progress ? team.validation_progress * 100 : 0}
        />
      </div>
    </Card>
  );
};
