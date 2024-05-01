import { useAuth } from "@/src/hooks/useAuth";
import { HiLogout } from "react-icons/hi";
import { Button } from "../ui/button";
import { useUserStore } from "@/src/stores/user";
import { useParticipantStore } from "@/src/stores/particpant";

export const LogoutButton = () => {
  const { logout } = useAuth();
  const { setUser } = useUserStore();
  const { setParticipant } = useParticipantStore();

  function handleLogout() {
    setUser(undefined);
    setParticipant(undefined);
    logout();
  }

  return (
    <Button
      variant="ghost"
      onClick={handleLogout}
      className="px-2 py-1.5 text-sm font-medium w-full justify-start hover:bg-background text-destructive"
    >
      Se déconnecter
      <HiLogout className="h-4 w-4 ml-auto" />
    </Button>
  );
};
