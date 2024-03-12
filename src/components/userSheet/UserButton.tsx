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
import { useAuth } from "@/src/hooks/useAuth";
import { HiLogout, HiPencil, HiCheck } from "react-icons/hi";
import { toast } from "../ui/use-toast";
import { useState } from "react";
import { useParticipant } from "@/src/hooks/useParticipant";
import { Skeleton } from "../ui/skeleton";
import { ViewEditUserInfo } from "./ViewEditUserInfo";

export const UserButton = () => {
  const { me } = useParticipant();
  const { logout } = useAuth();

  const [isOpened, setIsOpened] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  function toggle() {
    // if (isEdit) {
    //   toast({
    //     title: "Profil mis à jour",
    //     description: "Vos informations ont été mises à jour avec succès",
    //   });
    // }
    setIsEdit(!isEdit);
    // setIsOpened(false);
  }

  return (
    <Sheet open={isOpened} onOpenChange={setIsOpened}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          {me?.firstname === undefined || me?.name === undefined ? (
            <Skeleton className="w-24 h-6" />
          ) : (
            <>{me.firstname + " " + me.name}</>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle>Paramètres</SheetTitle>
          <SheetDescription>Information du compte</SheetDescription>
        </SheetHeader>
        {me && <ViewEditUserInfo me={me} isEdit={isEdit} />}
        <SheetFooter>
          <div className="flex flex-row justify-between items-center w-full gap-6">
            <Button
              variant={isEdit ? "default" : "outline"}
              onClick={toggle}
              type="submit"
              className="w-full"
            >
              {isEdit ? (
                <>
                  <HiCheck className="mr-2 h-4 w-4" />
                  Enregistrer
                </>
              ) : (
                <>
                  {me && (
                    <>
                      <HiPencil className="mr-2 h-4 w-4" />
                      Éditer
                    </>
                  )}
                </>
              )}
            </Button>
            <SheetClose asChild>
              <Button variant="destructive" onClick={logout} className="w-full">
                <HiLogout className="mr-2 h-4 w-4" />
                Se déconnecter
              </Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
