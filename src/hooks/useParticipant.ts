import {
  useGetParticipantByIdRaidParticipantParticipantIdGet,
  useCreateParticipantRaidParticipantPost,
  CreateParticipantRaidParticipantPostVariables,
  useUpdateParticipantRaidParticipantParticipantIdPatch,
  UpdateParticipantRaidParticipantParticipantIdPatchVariables,
} from "@/src/api/hyperionComponents";
import { useTokenStore } from "@/src/stores/token";
import { useQueryClient } from "@tanstack/react-query";
import { ParticipantBase, ParticipantUpdate } from "../api/hyperionSchemas";
import { useParticipantStore } from "../stores/particpant";

export const useParticipant = () => {
  const { token, userId } = useTokenStore();
  const queryClient = useQueryClient();
  const { participant, setParticipant } = useParticipantStore();

  const {
    data: me,
    isLoading,
    isFetched,
  } = useGetParticipantByIdRaidParticipantParticipantIdGet(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      pathParams: {
        participantId: userId!,
      },
    },
    {
      enabled: userId !== null && participant === undefined,
      retry: 0,
      queryHash: "getParticipantById",
    }
  );

  const {
    mutate: mutateCreateParticipant,
    isSuccess: isCreationSuccess,
    isPending: isCreationLoading,
  } = useCreateParticipantRaidParticipantPost({});

  const createParticipant = (
    participant: ParticipantBase,
    callback: () => void
  ) => {
    const body: CreateParticipantRaidParticipantPostVariables = {
      body: participant,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    mutateCreateParticipant(body, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          predicate: (query) => {
            return query.queryHash === "getParticipantById";
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
  } = useUpdateParticipantRaidParticipantParticipantIdPatch({});

  const updateParticipant = (
    participant: ParticipantUpdate,
    callback: () => void
  ) => {
    const body: UpdateParticipantRaidParticipantParticipantIdPatchVariables = {
      body: participant,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      pathParams: {
        participantId: userId!,
      },
    };
    mutateUpdateParticipant(body, {
      onSuccess: () => {
        console.log("success");
        queryClient.invalidateQueries({
          predicate: (query) => {
            console.log(query.queryHash);
            return query.queryHash === "getParticipantById";
          },
        });
        callback();
      },
    });
  };

  if (me !== undefined && participant !== me) {
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
