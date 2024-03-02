"use client";

import Image from "next/image";
import { useAuth } from "./hooks/useAuth";
import { useUser } from "./hooks/useUser";
import { useRouter } from "next/navigation";

const Home = () => {

  const { isTokenQueried, token} = useAuth();

  const { me } = useUser(token);
  const router = useRouter();

  if (isTokenQueried && token === null) {
    router.replace("/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {
          me && (
            <div>
              <h1 className="text-4xl font-bold text-center">Welcome to your dashboard {me?.nickname}</h1>
              <p className="text-center">You are now logged in with your MyECL account</p>
            </div>
          )
        }
      
    </main>
  );
};

export default Home;