"use client";

import { EmptyParticipantCard } from "../components/participantView/EmptyParticipantCard";
import { ParticipantCard } from "../components/participantView/ParicipantCard";
import { TeamCard } from "../components/home/TeamCard";
import { TopBar } from "../components/home/TopBar";
import { useAuth } from "../hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { useTeam } from "../hooks/useTeam";
import { CreateParticipant } from "../components/home/CreateParticipant";
import { useUser } from "../hooks/useUser";
import { useParticipant } from "../hooks/useParticipant";
import { useState } from "react";
import { useInviteTokenStore } from "../stores/inviteTokenStore";

const Home = () => {
  const { isTokenQueried, token } = useAuth();
  const { me, isFetched } = useParticipant();
  const { me: user } = useUser();
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

  if (isFetched && me === undefined && !isOpened) {
    setIsOpened(true);
  }

  if (inviteToken !== null) {
    console.log("inviteToken", inviteToken);
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
      <TopBar />
      <main className="flex flex-col items-center">
        <div className="w-full px-16">
          <TeamCard team={team} />
        </div>
        <div className="grid md:grid-cols-2 gap-16 w-full p-16 grid-cols-1">
          <>
            <ParticipantCard participant={team?.captain} isCaptain />
            {team?.second && team?.second !== null ? (
              <ParticipantCard participant={team?.second} isCaptain={false} />
            ) : (
              <EmptyParticipantCard team={team} />
            )}
          </>
        </div>
      </main>
    </>
  );
};

export default Home;
