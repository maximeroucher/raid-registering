import {  useReadOwnProfilePictureUsersMeProfilePictureGet } from "@/src/api/hyperionComponents";
import { useTokenStore } from "@/src/stores/token";

export const useProfilePicture = () => {
  const { token } = useTokenStore();

  const { data , isLoading } = useReadOwnProfilePictureUsersMeProfilePictureGet<File>(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      enabled: token !== null,
      retry: 0,
    },
  );

  return { profilePicture: data, isLoading };
};
