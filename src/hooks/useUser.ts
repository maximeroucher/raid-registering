import { useReadCurrentUserUsersMeGet } from "@/src/api/hyperionComponents";
import { useUserStore } from "../stores/user";
import { useAuth } from "./useAuth";

const RAID_ADMIN_GROUP_ID = "b378b102-4979-4186-8630-d28fe460ee08";

export const useUser = () => {
  const { token, isTokenExpired } = useAuth();
  const { user, setUser } = useUserStore();
  const { data: me, isLoading } = useReadCurrentUserUsersMeGet(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      enabled: user === undefined && !isTokenExpired(),
      retry: 0,
    },
  );

  if (me !== undefined && user === undefined && token !== null) {
    setUser(me);
  }

  const isAdmin = () =>
    user?.groups?.some((group) => group.id === RAID_ADMIN_GROUP_ID) ?? false;

  return { me: user, isLoading, isAdmin };
};
