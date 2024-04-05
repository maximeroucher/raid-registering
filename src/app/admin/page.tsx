"use client";

import { TeamInfoCard } from "@/src/components/teamCard/TeamInfoCard";
import { TopBar } from "@/src/components/admin/TopBar";
import { TeamsPreview } from "@/src/components/admin/TeamsPreview";
import { StatsView } from "@/src/components/admin/StatsView";
import { useUser } from "@/src/hooks/useUser";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { me: user } = useUser();
  const router = useRouter();
  const information = [
    {
      title: "Participants enregistrés",
      value: "150",
      description: "lieu de départ et d'arrivée",
      unit: undefined,
    },
    {
      title: "Binômes enregistrés",
      value: "120",
      description: "dossier en cours de validation",
      unit: undefined,
    },
    {
      title: "Equipes inscrites",
      value: "80",
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

  if (
    !user?.groups
      ?.map((group) => group.id === "b378b102-4979-4186-8630-d28fe460ee08")
      .includes(true)
  ) {
    router.replace("/");
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <TopBar />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {information.map((info) => (
            <TeamInfoCard info={info} key={info.title} isLoaded={true} />
          ))}
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <TeamsPreview />
          <StatsView />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
