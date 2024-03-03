import { useUser } from "@/src/app/hooks/useUser";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

export const UserButton = () => {
  const { me } = useUser();
  return (
    me && (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost">
            {me.firstname + " " + me.name + (
              me.nickname ? ` (${me.nickname})` : ""
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-40">
          <div className="flex flex-col space-y-2">
            <Button variant="ghost">Profile</Button>
            <Button variant="ghost">Settings</Button>
            <Button variant="ghost" className="text-red-700">Logout</Button>
          </div>
        </PopoverContent>
      </Popover>
    )
  );
};
