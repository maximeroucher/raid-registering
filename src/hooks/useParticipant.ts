import {
  useGetRaidParticipantsParticipantId,
  usePostRaidParticipants,
  usePatchRaidParticipantsParticipantId,
} from "@/src/api/hyperionComponents";
import { useQueryClient } from "@tanstack/react-query";
import { ParticipantBase, ParticipantUpdate } from "../api/hyperionSchemas";
import { useParticipantStore } from "../stores/particpant";
import { useTeam } from "./useTeam";
import { useUser } from "./useUser";
import { useAuth } from "./useAuth";

export const useParticipant = () => {
  const { token, userId, isTokenExpired } = useAuth();
  const { isAdmin } = useUser();
  const queryClient = useQueryClient();
  const { participant, setParticipant } = useParticipantStore();
  const { refetchTeam } = useTeam();

  const {
    data: me,
    isLoading,
    isFetched,
    refetch,
  } = useGetRaidParticipantsParticipantId(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      pathParams: {
        participantId: userId!,
      },
    },
    {
      enabled:
        userId !== null &&
        participant === undefined &&
        !isAdmin() &&
        !isTokenExpired(),
      retry: 0,
      queryHash: "getParticipantById",
    },
  );

  const {
    mutate: mutateCreateParticipant,
    isSuccess: isCreationSuccess,
    isPending: isCreationLoading,
  } = usePostRaidParticipants({});

  const createParticipant = (
    participant: ParticipantBase,
    callback: () => void,
  ) => {
    mutateCreateParticipant(
      {
        body: participant,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            predicate: (query) => {
              return (
                query.queryHash === "getParticipantById" ||
                query.queryHash === "getTeamByParticipantId"
              );
            },
          });
          callback();
        },
      },
    );
  };

  const {
    mutate: mutateUpdateParticipant,
    isSuccess: isUpdateSuccess,
    isPending: isUpdateLoading,
  } = usePatchRaidParticipantsParticipantId({});

  const updateParticipant = (
    participant: ParticipantUpdate,
    participantId: string,
    callback: () => void,
  ) => {
    mutateUpdateParticipant(
      {
        body: participant,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        pathParams: {
          participantId: participantId,
        },
      },
      {
        // Not using onSucess because of : https://github.com/TanStack/query/discussions/2878
        onSettled: () => {
          // Assuming success in all cases
          // For unknown reasons, the invalidation of the query does not work
          refetch();
          refetchTeam();
          callback();
        },
      },
    );
  };

  if (me !== undefined && participant !== me && token !== null) {
    setParticipant(me);
  }

  return {
    me: participant,
    isLoading,
    isFetched,
    createParticipant,
    isCreationSuccess,
    isCreationLoading,
    updateParticipant,
    isUpdateSuccess,
    isUpdateLoading,
  };
};
