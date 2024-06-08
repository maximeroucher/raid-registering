import { useGetUsersMe } from "@/src/api/hyperionComponents";
import { useUserStore } from "../stores/user";

const RAID_ADMIN_GROUP_ID = "e9e6e3d3-9f5f-4e9b-8e5f-9f5f4e9b8e5f";

export const useUser = () => {
  const { user, setUser } = useUserStore();
  const { data: me, isLoading } = useGetUsersMe(
    {},
    {
      enabled: user === undefined,
      retry: 0,
    },
  );

  if (me !== undefined && user === undefined) {
    setUser(me);
  }

  const isAdmin = () =>
    user?.groups?.some((group) => group.id === RAID_ADMIN_GROUP_ID) ?? false;

  return { me: user, isLoading, isAdmin };
};
