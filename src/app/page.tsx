"use client";

import { EmptyParticipantCard } from "../components/participantView/EmptyParticipantCard";
import { ParticipantCard } from "../components/participantView/ParicipantCard";
import { TeamCard } from "../components/teamCard/TeamCard";
import { TopBar } from "../components/home/TopBar";
import { useAuth } from "../hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { useTeam } from "../hooks/useTeam";
import { CreateParticipant } from "../components/home/CreateParticipant";
import { useUser } from "../hooks/useUser";
import { useParticipant } from "../hooks/useParticipant";
import { useState } from "react";
import { useInviteTokenStore } from "../stores/inviteTokenStore";
import { JoinTeamDialog } from "../components/home/JoinTeamDialog";
import { useInformation } from "../hooks/useInformation";
import { getDaysLeft } from "../utils/dateFormat";
import { WarningDialog } from "../components/teams/WarningDialog";
import { toast } from "../components/ui/use-toast";

const Home = () => {
  const { isTokenQueried, token } = useAuth();
  const { me, isFetched } = useParticipant();
  const { me: user, isAdmin } = useUser();
  const { team, createTeam, refetchTeam } = useTeam();
  const [isOpened, setIsOpened] = useState(false);
  const [isEndDialogOpened, setIsEndDialogOpened] = useState(true);
  const searchParams = useSearchParams();
  const newInviteToken = searchParams.get("invite");
  const { inviteToken, setInviteToken } = useInviteTokenStore();
  const router = useRouter();
  const { information } = useInformation();
  const [isLoading, setIsLoading] = useState(false);

  if (
    newInviteToken !== null &&
    inviteToken !== newInviteToken &&
    typeof window !== "undefined"
  ) {
    setInviteToken(newInviteToken);
    router.replace("/");
  }

  if (isTokenQueried && token === null) {
    router.replace("/login");
  }

  if (isAdmin() && typeof window !== "undefined") {
    const redirection = searchParams.get("redirect");
    if (redirection !== null) {
      router.replace(redirection);
    } else {
      router.replace("/admin");
    }
  }

  if (isFetched && me === undefined && !isOpened) {
    setIsOpened(true);
  }

  if (inviteToken !== undefined && !isOpened) {
    setIsOpened(true);
  }

  console.log("team", team);
  console.log("isFetched", isFetched);
  if (me !== undefined && team === undefined && !isOpened) {
    setIsOpened(true);
  }

  return (
    <>
      {isFetched && me === undefined && isOpened && user && (
        <>
          <CreateParticipant
            isOpened={isOpened}
            setIsOpened={setIsOpened}
            user={user}
          />
          <>
            {(information?.raid_registering_end_date
              ? getDaysLeft(information?.raid_registering_end_date) < 0
              : false) && (
              <WarningDialog
                isOpened={isEndDialogOpened}
                setIsOpened={setIsEndDialogOpened}
                isLoading={false}
                title="Inscriptions terminées"
                description="Les inscriptions sont terminées. Si vous ne l'avez pas encore fait, nous vous invitons à prendre contact avec l'organisation pour connaître les étapes à suivre."
                validateLabel="Continuer"
                callback={() => setIsEndDialogOpened(false)}
              />
            )}
          </>
        </>
      )}
      {me && team === undefined && (
        <WarningDialog
          isOpened={isEndDialogOpened}
          setIsOpened={setIsEndDialogOpened}
          isLoading={isLoading}
          title="Aucune équipe trouvée"
          description="Vous n'êtes pas encore inscrit dans une équipe. Vous pouvez en créer une. Si vous avez reçu un lien d'invitation, vous pouvez l'utiliser pour rejoindre une équipe."
          validateLabel="Créer une équipe"
          width="w-[140px]"
          callback={() => {
            setIsLoading(true);
            createTeam(
              {
                name: `Équipe de ${me.firstname} ${me.name}`,
              },
              () => {
                refetchTeam();
                setIsEndDialogOpened(false);
                setIsLoading(false);
                toast({
                  title: "Votre équipe a été créée avec succès",
                });
              },
            );
          }}
        />
      )}
      {inviteToken !== undefined && (
        <JoinTeamDialog isOpened={isOpened} setIsOpened={setIsOpened} />
      )}
      <TopBar />
      <main className="flex flex-col items-center mt-4">
        <div className="w-full px-10 max-md:px-8">
          <TeamCard team={team} />
        </div>
        <div className="grid lg:grid-cols-2 gap-10 w-full p-10 grid-cols-1 max-lg:p-8 max-lg:gap-8">
          <ParticipantCard participant={team?.captain} isCaptain />
          {team?.second !== null ? (
            <ParticipantCard participant={team?.second} isCaptain={false} />
          ) : (
            <EmptyParticipantCard team={team} />
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
