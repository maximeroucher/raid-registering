import { useUser } from "@/src/app/hooks/useUser";
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
import { useAuth } from "@/src/app/hooks/useAuth";
import { HiLogout } from "react-icons/hi";

export const UserButton = () => {
  const { me } = useUser();
  const { logout } = useAuth();
  return (
    me && (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            {me.firstname +
              " " +
              me.name +
              (me.nickname ? ` (${me.nickname})` : "")}
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-between">
          <SheetHeader>
            <SheetTitle>{me.nickname ?? me.firstname}</SheetTitle>
            <SheetDescription>
              {me.nickname ? me.firstname + " " + me.name : me.name}
            </SheetDescription>
          </SheetHeader>

          <SheetFooter>
            <SheetClose asChild>
              <Button variant="destructive" onClick={logout}>
              <HiLogout className="mr-2 h-4 w-4" />
                Se déconnecter
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  );
};
