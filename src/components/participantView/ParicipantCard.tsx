import { Participant } from "@/src/api/hyperionSchemas";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ParticipantCardItem } from "./ParticipantCardItem";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { HiPencil, HiX } from "react-icons/hi";
import { toast } from "../ui/use-toast";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";
import { EditParticipantCardItem } from "./EditParticipantCardItem";
import { ViewEditParticipantItem } from "./ViewEditParticipantItem";

interface ParticipantCardProps {
  participant?: Participant;
  isCaptain: boolean;
}

export const ParticipantCard = ({
  participant,
  isCaptain,
}: ParticipantCardProps) => {
  const [isEdit, setIsEdit] = useState(false);

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-row justify-between">
          <div>
            <CardTitle>
              {participant?.firstname && participant?.firstname ? (
                participant?.firstname + " " + participant?.name
              ) : (
                <div className="flex flex-row gap-2">
                  <Skeleton className="w-24 h-8" />
                  <Skeleton className="w-24 h-8" />
                </div>
              )}
            </CardTitle>
            <CardDescription>{isCaptain ? "Capitaine" : " "}</CardDescription>
          </div>
          {isEdit ? (
            <Button
              variant="destructive"
              onClick={toggleEdit}
              className="w-[110px]"
            >
              <HiX className="mr-2 h-4 w-4" />
              Annuler
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={toggleEdit}
              className="w-[110px]"
            >
              <HiPencil className="mr-2 h-4 w-4" />
              Éditer
            </Button>
          )}
        </div>
      </CardHeader>
      {participant && (
        <ViewEditParticipantItem
          me={participant}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      )}
      {!isEdit && (
        <>
          <CardFooter className="flex flex-col">
            <ParticipantCardItem
              label="Paiement"
              value={participant?.payment}
            />
          </CardFooter>
          <Progress
            value={
              // participant?.validation_progress
              //   ? participant!.validation_progress * 100
              //   : 0
              0
            }
          />
        </>
      )}
    </Card>
  );
};
