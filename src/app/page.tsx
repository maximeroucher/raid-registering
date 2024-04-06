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

const Home = () => {
  const { isTokenQueried, token } = useAuth();
  const { me, isFetched } = useParticipant();
  const { me: user, isAdmin } = useUser();
  const { team } = useTeam();
  const [isOpened, setIsOpened] = useState(false);
  const searchParams = useSearchParams();
  const newInviteToken = searchParams.get("invite");
  const { inviteToken, setInviteToken } = useInviteTokenStore();
  const router = useRouter();

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
    router.replace("/admin");
  }

  if (isFetched && me === undefined && !isOpened) {
    setIsOpened(true);
  }

  if (inviteToken !== undefined && !isOpened) {
    setIsOpened(true);
  }

  return (
    <>
      {isFetched && me === undefined && isOpened && user && (
        <CreateParticipant
          isOpened={isOpened}
          setIsOpened={setIsOpened}
          user={user}
        />
      )}
      {inviteToken !== undefined && (
        <JoinTeamDialog isOpened={isOpened} setIsOpened={setIsOpened} />
      )}
      <TopBar />
      <main className="flex flex-col items-center mt-4">
        <div className="w-full px-14 max-md:px-8">
          <TeamCard team={team} />
        </div>
        <div className="grid xl:grid-cols-2 gap-14 w-full p-14 grid-cols-1 max-md:p-8 max-md:gap-8">
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
