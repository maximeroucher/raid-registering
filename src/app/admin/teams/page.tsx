"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { DataTable } from "@/src/components/teams/DataTable";
import { columns } from "@/src/components/teams/Columns";
import { TopBar } from "@/src/components/admin/TopBar";
import { useTeams } from "@/src/hooks/useTeams";
import { useUser } from "@/src/hooks/useUser";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { isAdmin } = useUser();
  const { teams, isLoading } = useTeams();
  const router = useRouter();

  if (!isAdmin() && typeof window !== "undefined") {
    router.replace("/?redirect=/admin/teams");
  }
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <TopBar />
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Equipes</CardTitle>
            <CardDescription>Liste des équipes enregistrées</CardDescription>
          </CardHeader>
          <CardContent>
            {teams && <DataTable data={teams} columns={columns} />}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
