import { Team } from "@/src/api/hyperionSchemas";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Progress } from "../ui/progress";

export const TeamCard = () => {
  const team: Team = {
    name: "Equipe 1",
    id: "1",
    number: 5,
    difficulty: null,
    validation_progress: 0.4,
  };
  return (
    <Card className="w-full mt-5">
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
              Parcours: {team.difficulty ?? "Non renseignée"}
            </CardDescription>
          </CardHeader>
        </div>
        <Progress value={team.validation_progress * 100} />
      </div>
    </Card>
  );
};
