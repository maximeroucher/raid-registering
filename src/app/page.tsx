"use client";

import { Participant, Team } from "../api/hyperionSchemas";
import { EmptyParticipantCard } from "../components/home/EmptyParticipantCard";
import { ParticipantCard } from "../components/home/ParicipantCard";
import { TeamCard } from "../components/home/TeamCard";
import { TopBar } from "../components/home/TopBar";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import { useTeam } from "../hooks/useTeam";

const Home = () => {
  const { isTokenQueried, token } = useAuth();
  const { team, isLoading } = useTeam();

  const router = useRouter();

  if (isTokenQueried && token === null) {
    router.replace("/login");
  }
  return (
    <>
      <TopBar />
      <main className="flex flex-col items-center">
        <div className="w-full px-24">
          <TeamCard team={team} />
        </div>
        <div className="flex flex-row w-full justify-evenly">
          {team && (
            <>
              <ParticipantCard participant={team.captain} isCaptain />
              {team.second ? (
                <ParticipantCard participant={team.second} isCaptain={false} />
              ) : (
                <EmptyParticipantCard />
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
