"use client";

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
      <main className="flex h-screen flex-col items-center justify-between px-24">
        <TeamCard />
        {me && (
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 mt-10 relative text-center text-zinc-700 max-w-6xl mx-auto">
              Welcome to your dashboard {me?.nickname}
            </h1>
            <p className="text-4xl md:text-6xl font-bold mb-8 mt-20 text-center max-w-6xl mx-auto relative bg-clip-text text-transparent bg-gradient-to-t from-emerald-600 to-emerald-600/[0.8] z-10">
              You are now logged in with your MyECL account
            </p>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
