import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

interface TeamInfo {
  title: string;
  value: string;
  description: string;
  unit?: JSX.Element;
}

interface TeamInfoCardProps {
  info: TeamInfo;
  isLoaded: boolean;
}

export const TeamInfoCard = ({ info, isLoaded }: TeamInfoCardProps) => {
  return (
    <Card key={info.title} className="w-[220px]">
      <CardContent className="mt-4">
        <CardDescription className="flex flex-row justify-between">
          {isLoaded ? (
            <span className="text-l font-bold">{info.title}</span>
          ) : (
            <Skeleton className="w-24 h-5" />
          )}
          {info.unit &&
            (isLoaded ? info.unit : <Skeleton className="w-4 h-4" />)}
        </CardDescription>
        <div className="h-3"></div>
        <CardTitle>
          {isLoaded ? info.value : <Skeleton className="w-[150px] h-6" />}
        </CardTitle>
        <CardDescription>
          {isLoaded ? (
            info.description
          ) : (
            <Skeleton className="w-[120px] h-4 mt-1" />
          )}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
