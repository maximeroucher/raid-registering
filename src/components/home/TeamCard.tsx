import { Team } from "@/src/api/hyperionSchemas";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Progress } from "../ui/progress";
import { Suspense } from "react";
import { Loader } from "lucide-react";

interface TeamCardProps {
  team?: Team;
}

export const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <Suspense fallback={<Loader />}>
      <Card className="w-full mt-5">
        {team && (
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <CardHeader>
                <CardTitle>{team.name}</CardTitle>
              </CardHeader>
              <CardHeader>
                <CardDescription>{`Numéro d'équipe: ${team.number}`}</CardDescription>
              </CardHeader>
              <CardHeader>
                <CardDescription>
                  Parcours: {team.difficulty ?? "Non renseigné"}
                </CardDescription>
              </CardHeader>
            </div>
            <Progress value={team.validation_progress * 100} />
          </div>
        )}
      </Card>
    </Suspense>
  );
};
