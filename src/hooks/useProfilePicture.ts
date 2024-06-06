import { useGetUsersMeProfilePicture } from "@/src/api/hyperionComponents";

export const useProfilePicture = () => {
  const { data, isLoading } = useGetUsersMeProfilePicture<File>(
    {},
    {
      retry: 0,
    },
  );

  return { profilePicture: data, isLoading };
};
