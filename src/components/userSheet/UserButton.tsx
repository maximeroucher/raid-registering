import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { useState } from "react";
import { useParticipant } from "@/src/hooks/useParticipant";
import { Skeleton } from "../ui/skeleton";
import { ViewEditUserInfo } from "./ViewEditUserInfo";
import { LogoutButton } from "./logoutButton";
import { useProfilePicture } from "@/src/hooks/useProfilePicture";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export const UserButton = () => {
  const { me } = useParticipant();
  // const { profilePicture } = useProfilePicture();
  const [isOpened, setIsOpened] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  function onOpenChange() {
    if (isOpened) {
      setIsEdit(false);
    }
    setIsOpened(!isOpened);
  }

  return (
    <Sheet open={isOpened} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          {me?.firstname === undefined || me?.name === undefined ? (
            <>
              {/* <Skeleton className="w-10 h-10 rounded-full" />
              <div className="mr-2" /> */}
              <Skeleton className="w-24 h-6" />
            </>
          ) : (
            <>
              {/* <Avatar className="mr-2 mb-1">
                {profilePicture && (
                  <AvatarImage
                    src={URL.createObjectURL(profilePicture)}
                    alt={me.firstname + " " + me.name}
                  />
                )}
                <AvatarFallback>
                  {me.firstname.charAt(0) + me.name.charAt(0)}
                </AvatarFallback>
              </Avatar> */}
              {me.firstname + " " + me.name}
            </>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle>Paramètres</SheetTitle>
          <SheetDescription>Information du compte</SheetDescription>
        </SheetHeader>
        {me ? (
          <ViewEditUserInfo
            me={me}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            setIsOpen={onOpenChange}
          />
        ) : (
          <SheetFooter>
            <div className="flex flex-row justify-between items-center w-full gap-6">
              <div className="w-full"></div>
              <SheetClose asChild>
                <LogoutButton />
              </SheetClose>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
