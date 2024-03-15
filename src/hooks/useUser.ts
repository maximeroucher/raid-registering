import { useReadCurrentUserUsersMeGet } from "@/src/api/hyperionComponents";
import { useTokenStore } from "@/src/stores/token";
import { useUserStore } from "../stores/user";

export const useUser = () => {
  const { token } = useTokenStore();
  const { user, setUser } = useUserStore();

  const { data: me, isLoading } = useReadCurrentUserUsersMeGet(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      enabled: token !== null && user === undefined,
      retry: 0,
    },
  );

  if (me !== undefined && user === undefined) {
    setUser(me);
  }

  return { me: user, isLoading };
};
