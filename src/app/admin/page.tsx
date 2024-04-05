"use client";

import { TeamInfoCard } from "@/src/components/teamCard/TeamInfoCard";
import { TopBar } from "@/src/components/admin/TopBar";
import { TeamsPreview } from "@/src/components/admin/TeamsPreview";
import { StatsView } from "@/src/components/admin/StatsView";
import { useUser } from "@/src/hooks/useUser";
import { useRouter } from "next/navigation";
import { useTeams } from "@/src/hooks/useTeams";
import { isAdmin } from "@/src/infra/adminUtils";

const Dashboard = () => {
  const { me: user } = useUser();
  const { teams, isLoading } = useTeams();
  const router = useRouter();
  const information = [
    {
      title: "Participants inscrits",
      value: teams?.length.toString() || "0",
      description: "personnes ayant commencé leur inscription",
      unit: undefined,
    },
    {
      title: "Binômes enregistrés",
      value: teams?.filter((team) => team.second).length.toString() || "0",
      description: "dossier en cours de validation",
      unit: undefined,
    },
    {
      title: "Equipes validées",
      value: "0",
      description: "dossier validé et payé",
      unit: undefined,
    },
    {
      title: "Cloture des inscriptions",
      value: "01/09/2024",
      description: "x jours restants",
      unit: undefined,
    },
  ];

  if (!isAdmin(user)) {
    router.replace("/");
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <TopBar />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {information.map((info) => (
            <TeamInfoCard info={info} key={info.title} isLoaded={!isLoading} />
          ))}
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <TeamsPreview teams={teams} isLoading={isLoading} />
          <StatsView />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
