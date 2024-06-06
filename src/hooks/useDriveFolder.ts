import {
  useGetRaidDrive,
  usePatchRaidDrive,
} from "@/src/api/hyperionComponents";
import { RaidDriveFoldersCreation } from "../api/hyperionSchemas";
import { useUser } from "./useUser";

export const useDriveFolder = () => {
  const { me } = useUser();

  const {
    data: driveFolder,
    isLoading,
    refetch: refetchDriveFolder,
  } = useGetRaidDrive(
    {},
    {
      enabled: me?.id !== undefined,
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
      },
      {
        // Not using onSucess because of : https://github.com/TanStack/query/discussions/2878
        onSettled: () => {
          // Assuming success in all cases
          // For unknown reasons, the invalidation of the query does not work
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
