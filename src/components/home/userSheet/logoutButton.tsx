import { HiLogout } from "react-icons/hi";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";
import { useTokenStore } from "@/src/stores/token";

export const LogoutButton = () => {
  const { setToken, setRefreshToken } = useTokenStore();
  const router = useRouter();

  function logout() {
    setToken(null);
    setRefreshToken(null);
    router.push("/");
  }

  return (
    <Button
      variant="ghost"
      onClick={logout}
      className="px-2 py-1.5 text-sm font-medium w-full justify-start hover:bg-background text-destructive"
    >
      Se déconnecter
      <HiLogout className="h-4 w-4 ml-auto" />
    </Button>
  );
};
