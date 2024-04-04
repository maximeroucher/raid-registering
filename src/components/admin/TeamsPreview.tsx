import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
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

export const TeamsPreview = () => {
  return (
    <Card className="xl:col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Equipes</CardTitle>
          <CardDescription>
            Aperçu des dernières équipes inscrites
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
              <TableHead className="max-md:hidden">Parcours</TableHead>
              <TableHead className="text-right">Inscription</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                Team n°1
              </TableCell>
              <TableCell className="max-md:hidden">
                <div className="font-medium">Liam Johnson</div>
                <div className="text-sm text-muted-foreground max-md:hidden">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="max-md:hidden">
                <div className="font-medium">Liam Johnson</div>
                <div className="text-sm text-muted-foreground max-md:hidden">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="max-md:hidden">
                <Badge className="text-xs" variant="outline">
                  Expert
                </Badge>
              </TableCell>
              <TableCell className="text-right">10%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Team test
              </TableCell>
              <TableCell className="max-md:hidden">
                <div className="font-medium">Liam Johnson</div>
                <div className="text-sm text-muted-foreground max-md:hidden">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="max-md:hidden">
                <div className="font-medium">Non renseigné</div>
              </TableCell>
              <TableCell className="max-md:hidden">
                <Badge className="text-xs" variant="outline">
                  Sportif
                </Badge>
              </TableCell>
              <TableCell className="text-right">20%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
