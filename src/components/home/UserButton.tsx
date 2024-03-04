import { useUser } from "@/src/hooks/useUser";
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
import { HiLogout, HiPencil } from "react-icons/hi";
import { UserInfoView } from "./UserInfoView";
import { toast } from "../ui/use-toast";
import { useState } from "react";
import { useParticipant } from "@/src/hooks/useParticipant";

export const UserButton = () => {
  const { me } = useParticipant();
  const { logout } = useAuth();

  const [isOpened, setIsOpened] = useState(false);

  function showToast() {
    setIsOpened(false);
    toast({
      title: "Profil mis à jour",
      description: "Vos informations ont été mises à jour avec succès",
    });
  }

  return (
    me && (
      <Sheet open={isOpened} onOpenChange={setIsOpened}>
        <SheetTrigger asChild>
          <Button variant="ghost">{me.firstname + " " + me.name}</Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-between">
          <SheetHeader>
            <SheetTitle>Paramètres</SheetTitle>
            <SheetDescription>Information du compte</SheetDescription>
          </SheetHeader>
          <div className="grid w-full items-center gap-6">
            <UserInfoView label="Prénom" value={me.firstname} />
            <UserInfoView label="Nom" value={me.name} />
            <UserInfoView label="Email" value={me.email} />
            <UserInfoView
              label="Téléphone"
              value={me.phone ?? "Non renseigné"}
            />
            <UserInfoView
              label="Date de naissance"
              value={me.birthday ?? "Non renseigné"}
            />
          </div>
          <SheetFooter>
            <div className="flex flex-row justify-between items-center w-full">
              <Button variant="ghost" onClick={showToast}>
                <HiPencil className="mr-2 h-4 w-4" />
                Éditer
              </Button>
              <SheetClose asChild>
                <Button variant="destructive" onClick={logout}>
                  <HiLogout className="mr-2 h-4 w-4" />
                  Se déconnecter
                </Button>
              </SheetClose>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  );
};
