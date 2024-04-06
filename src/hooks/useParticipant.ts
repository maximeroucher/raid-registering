import {
  useGetParticipantByIdRaidParticipantsParticipantIdGet,
  useCreateParticipantRaidParticipantsPost,
  CreateParticipantRaidParticipantsPostVariables,
  useUpdateParticipantRaidParticipantsParticipantIdPatch,
  UpdateParticipantRaidParticipantsParticipantIdPatchVariables,
} from "@/src/api/hyperionComponents";
import { useTokenStore } from "@/src/stores/token";
import { useQueryClient } from "@tanstack/react-query";
import { ParticipantBase, ParticipantUpdate } from "../api/hyperionSchemas";
import { useParticipantStore } from "../stores/particpant";
import { useTeam } from "./useTeam";
import { useUser } from "./useUser";

export const useParticipant = () => {
  const { token, userId } = useTokenStore();
  const { isAdmin } = useUser();
  const queryClient = useQueryClient();
  const { participant, setParticipant } = useParticipantStore();
  const { refetchTeam } = useTeam();

  const {
    data: me,
    isLoading,
    isFetched,
    refetch,
  } = useGetParticipantByIdRaidParticipantsParticipantIdGet(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      pathParams: {
        participantId: userId!,
      },
    },
    {
      enabled: userId !== null && participant === undefined && !isAdmin(),
      retry: 0,
      queryHash: "getParticipantById",
    },
  );

  const {
    mutate: mutateCreateParticipant,
    isSuccess: isCreationSuccess,
    isPending: isCreationLoading,
  } = useCreateParticipantRaidParticipantsPost({});

  const createParticipant = (
    participant: ParticipantBase,
    callback: () => void,
  ) => {
    const body: CreateParticipantRaidParticipantsPostVariables = {
      body: participant,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    mutateCreateParticipant(body, {
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
    });
  };

  const {
    mutate: mutateUpdateParticipant,
    isSuccess: isUpdateSuccess,
    isPending: isUpdateLoading,
  } = useUpdateParticipantRaidParticipantsParticipantIdPatch({});

  const updateParticipant = (
    participant: ParticipantUpdate,
    callback: () => void,
  ) => {
    const body: UpdateParticipantRaidParticipantsParticipantIdPatchVariables = {
      body: participant,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      pathParams: {
        participantId: userId!,
      },
    };
    mutateUpdateParticipant(body, {
      // Not using onSucess because of : https://github.com/TanStack/query/discussions/2878
      onSettled: () => {
        // Assuming success in all cases
        // For unknown reasons, the invalidation of the query does not work
        refetch();
        refetchTeam();
        callback();
      },
    });
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
