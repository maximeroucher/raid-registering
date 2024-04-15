"use client";

import { TeamInfoCard } from "@/src/components/teamCard/TeamInfoCard";
import { TopBar } from "@/src/components/admin/TopBar";
import { TeamsPreview } from "@/src/components/admin/TeamsPreview";
import { StatsView } from "@/src/components/admin/StatsView";
import { useUser } from "@/src/hooks/useUser";
import { useRouter } from "next/navigation";
import { useTeams } from "@/src/hooks/useTeams";
import { Participant } from "@/src/api/hyperionSchemas";

const Dashboard = () => {
  const { isAdmin } = useUser();
  const { teams, isLoading } = useTeams();
  const router = useRouter();

  const allParticipants =
    (teams
      ?.map((team) => [team.captain, team.second])
      .flat(1)
      .filter((participant) => participant !== null) as Participant[]) ?? [];

  const allPayments = allParticipants
    ?.map((participant) => {
      if (participant.payment) {
        return 1;
      }
      return 0;
    })
    .reduce<number>((a, b) => a + b, 0);

  const information = [
    {
      title: "Participants inscrits",
      value: allParticipants?.length.toString() || "0",
      description: "personnes ayant commencé leur inscription",
      unit: undefined,
    },
    {
      title: "Paiements efectués",
      value: allPayments?.toString() || "0",
      description: `${allParticipants?.length - allPayments} paiements manquants`,
      unit: undefined,
    },
    {
      title: "Equipes validées",
      value:
        teams
          ?.filter((team) => team.validation_progress === 100)
          .length.toString() || "0",
      description: "dossier complet validé et payé",
      unit: undefined,
    },
    {
      title: "Cloture des inscriptions",
      value: "01/09/2024",
      description: "x jours restants",
      unit: undefined,
    },
  ];

  if (!isAdmin() && typeof window !== "undefined") {
    router.replace("/?redirect=/admin");
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
          <StatsView teams={teams} isLoading={isLoading} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
