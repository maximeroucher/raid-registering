import { Participant } from "@/src/api/hyperionSchemas";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ParticipantCardItem } from "./ParticipantCardItem";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { HiPencil, HiX } from "react-icons/hi";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";
import { ViewEditParticipantItem } from "./ViewEditParticipantItem";
import { ParticipantLoading } from "./ParticipantLoading";
import { PaymentButton } from "./PaymentButton";
import { Checkbox } from "../ui/checkbox";

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
    <Card className="w-full flex flex-col justify-between">
      <CardHeader>
        <div className="flex flex-row justify-between">
          <div>
            <CardTitle>
              {participant?.firstname && participant?.firstname ? (
                participant?.firstname + " " + participant?.name
              ) : (
                <div className="flex flex-row gap-2">
                  <Skeleton className="w-32 h-8" />
                  <Skeleton className="w-32 h-8" />
                </div>
              )}
            </CardTitle>
            <CardDescription>
              {participant ? (
                <>{isCaptain ? "Capitaine" : " "}</>
              ) : (
                <Skeleton className="w-24 h-5 mt-1" />
              )}
            </CardDescription>
          </div>
          {isEdit && participant ? (
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
      {participant ? (
        <ViewEditParticipantItem
          participant={participant}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      ) : (
        <ParticipantLoading />
      )}
      {!isEdit && (
        <>
          <CardFooter className="w-full">
            {participant ? (
              <div className="grid p-2 grid-cols-6 items-center w-full">
                <span className="font-semibold text-left my-auto col-span-2">
                  Paiement
                </span>
                {/* <PaymentButton /> */}
                <Checkbox
                  checked={participant?.payment}
                  disabled
                  className="col-span-4 ml-auto"
                />
              </div>
            ) : (
              <div className="grid p-2 grid-cols-6 items-center w-full h-[65px]">
                <span className="font-semibold text-left my-auto col-span-2">
                  <Skeleton className="w-32 h-7" />
                </span>
                <Skeleton className="w-64 h-6 col-span-4 ml-auto" />
              </div>
            )}
          </CardFooter>
          <Progress value={participant?.validation_progress} />
        </>
      )}
    </Card>
  );
};
