import {
  useGetRaidDrive,
  usePatchRaidDrive,
} from "@/src/api/hyperionComponents";
import { RaidDriveFoldersCreation } from "../api/hyperionSchemas";
import { useAuth } from "./useAuth";
import { toast } from "../components/ui/use-toast";

export const useDriveFolder = () => {
  const { token, userId } = useAuth();

  const {
    data: driveFolder,
    isLoading,
    refetch: refetchDriveFolder,
  } = useGetRaidDrive(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      enabled: userId !== null,
      retry: 0,
      queryHash: "getRaidDriveFolder",
    },
  );

  const { mutate: mutateUpdateDriveFolder, isPending: isUpdateLoading } =
    usePatchRaidDrive({});

  const updateDriveFolder = (
    driveFolder: RaidDriveFoldersCreation,
    callback: () => void,
  ) => {
    mutateUpdateDriveFolder(
      {
        body: driveFolder,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      {
        // Not using onSucess because of : https://github.com/TanStack/query/discussions/2878
        onSettled: (
          data,
          error,
          variables,
          context,
        ) => {
          // Assuming success in all cases
          // For unknown reasons, the invalidation of the query does not work
          if (error) {
            console.error(error);
            toast({
              title: "Erreur lors de la mise à jour du dossier Drive",
              description:
                "Une erreur est survenue, veuillez réessayer plus tard",
              variant: "destructive",
            });
            return;
          }
          refetchDriveFolder();
          callback();
        },
      },
    );
  };

  return {
    driveFolder,
    isLoading,
    refetchDriveFolder,
    updateDriveFolder,
    isUpdateLoading,
  };
};
