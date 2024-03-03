"use client";

import { ParticipantCard } from "../components/home/ParicipantCard";
import { TeamCard } from "../components/home/TeamCard";
import { TopBar } from "../components/home/TopBar";
import { useAuth } from "./hooks/useAuth";
import { useUser } from "./hooks/useUser";
import { useRouter } from "next/navigation";

const Home = () => {
  const { isTokenQueried, token } = useAuth();

  const { me } = useUser();
  const router = useRouter();

  if (isTokenQueried && token === null) {
    router.replace("/login");
  }

  return (
    <>
      <TopBar />
      <main className="flex flex-col items-center">
        <div className="w-full px-24">
          <TeamCard />
        </div>
        <div className="flex flex-row w-full justify-evenly">
          <ParticipantCard />
          <ParticipantCard />
        </div>
      </main>
    </>
  );
};

export default Home;
