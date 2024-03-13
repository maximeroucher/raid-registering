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
    <Button variant="destructive" onClick={handleLogout} className="w-full">
      <HiLogout className="mr-2 h-4 w-4" />
      Se déconnecter
    </Button>
  );
};
