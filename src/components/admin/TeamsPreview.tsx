import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Skeleton } from "../ui/skeleton";
import { TeamPreview } from "@/src/api/hyperionSchemas";
import { CircularProgressBar } from "../ui/circularProgressBar";

interface TeamsPreviewProps {
  teams?: TeamPreview[];
  isLoading: boolean;
}

export const TeamsPreview = ({ teams, isLoading }: TeamsPreviewProps) => {
  return (
    <Card className="xl:col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Equipes</CardTitle>
          <CardDescription>
            Aperçu des {teams?.slice(0, 5).length ?? 0} équipes les plus proches
            de la validation de leur dossier
          </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="/admin/teams">
            Voir tout
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead className="max-md:hidden">Capitaine</TableHead>
              <TableHead className="max-md:hidden">Coéquipier</TableHead>
              <TableHead className="max-md:hidden">Documents</TableHead>
              <TableHead className="text-right">Inscription</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && (
              <>
                {[...Array(5)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Skeleton className="h-4 w-20" />
                    </TableCell>
                    {[...Array(3)].map((_, index) => (
                      <TableCell key={index} className="max-md:hidden">
                        <Skeleton className="h-4 w-20" />
                      </TableCell>
                    ))}
                    <TableCell className=" ml-auto text-right">
                      <Skeleton className="h-4 w-20" />
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
            {teams && (
              <>
                {teams
                  .toSorted(
                    (a, b) =>
                      (b.validation_progress % 100) -
                      (a.validation_progress % 100),
                  )
                  .slice(0, 5)
                  .map((team) => {
                    const number_of_validated_document =
                      team.captain.number_of_validated_document +
                      (team.second?.number_of_validated_document ?? 0);
                    const number_of_document =
                      team.captain.number_of_document +
                      (team.second?.number_of_document ?? 0);
                    return (
                      <TableRow key={team.id}>
                        <TableCell>{team.name}</TableCell>
                        <TableCell className="max-md:hidden">
                          <div className="font-medium">
                            {team.captain?.firstname} {team.captain?.name}
                          </div>
                          <div className="text-sm text-muted-foreground max-md:hidden">
                            {team.captain?.email}
                          </div>
                        </TableCell>
                        <TableCell className="max-md:hidden">
                          {team.second ? (
                            <>
                              <div className="font-medium">
                                {team.second.firstname} {team.second.name}
                              </div>
                              <div className="text-sm text-muted-foreground max-md:hidden">
                                {team.second.email}
                              </div>
                            </>
                          ) : (
                            <div className="font-medium text-muted-foreground">
                              Non renseigné
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="max-md:hidden">
                          <div className="flex w-[150px] items-center">
                            <Badge variant="outline">
                              <CircularProgressBar
                                value={
                                  (number_of_validated_document /
                                    number_of_document) *
                                  100
                                }
                              />
                              <span className="ml-2">
                                {number_of_validated_document} /{" "}
                                {number_of_document} {"validés"}
                              </span>
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          {team?.validation_progress.toFixed(0)}%
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
