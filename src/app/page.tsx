"use client";

import { EmptyParticipantCard } from "../components/home/EmptyParticipantCard";
import { ParticipantCard } from "../components/home/ParicipantCard";
import { TeamCard } from "../components/home/TeamCard";
import { TopBar } from "../components/home/TopBar";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import { useTeam } from "../hooks/useTeam";
import { useParticipant } from "../hooks/useParticipant";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { Input } from "../components/ui/input";

const Home = () => {
  const { isTokenQueried, token } = useAuth();
  const { team } = useTeam();
  const { me, isFetched } = useParticipant();

  const [isOpened, setIsOpened] = useState(false);

  const router = useRouter();

  if (isTokenQueried && token === null) {
    router.replace("/login");
  }

  
  if (isFetched && me === undefined && !isOpened) {
    console.log("me is undefined");
    setIsOpened(true);
  }

  return (
    <Dialog open={isOpened} onOpenChange={setIsOpened}>
      <TopBar />
      <main className="flex flex-col items-center">
        <div className="w-full px-24">
          <TeamCard team={team} />
        </div>
        <div className="flex flex-row w-full justify-evenly">
            <>
              <ParticipantCard participant={team?.captain} isCaptain />
              {team?.second && team?.second !== null ? (
                <ParticipantCard participant={team?.second} isCaptain={false} />
              ) : (
                <EmptyParticipantCard />
              )}
            </>
        </div>
      </main>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Home;
