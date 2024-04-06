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

const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <TopBar />
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Equipes</CardTitle>
            <CardDescription>
              Liste des équipes enregistrées
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable data={[]} columns={columns} />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
