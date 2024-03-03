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
        <SheetContent className="flex flex-col">
          <SheetHeader>
            <SheetTitle>{me.nickname ?? me.firstname}</SheetTitle>
            <SheetDescription>
              {me.nickname ? me.firstname + " " + me.name : me.name}
            </SheetDescription>
          </SheetHeader>

          <SheetFooter>
            <SheetClose asChild>
              <Button variant="ghost" className="text-red-700" onClick={logout}>
                Logout
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  );
};
