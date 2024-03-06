import {
  useGetParticipantByIdRaidParticipantParticipantIdGet,
  useCreateParticipantRaidParticipantPost,
  CreateParticipantRaidParticipantPostVariables,
} from "@/src/api/hyperionComponents";
import { useTokenStore } from "@/src/stores/token";
import { useQueryClient } from "@tanstack/react-query";
import { ParticipantBase } from "../api/hyperionSchemas";

export const useParticipant = () => {
  const { token, userId } = useTokenStore();
  const queryClient = useQueryClient();

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
      enabled: userId !== null,
      retry: 0,
      queryHash: "getParticipantById",
    }
  );

  const { mutate: mutateCreateParticipant, isSuccess: isCreationSuccess, isPending: isCreationLoading } =
    useCreateParticipantRaidParticipantPost({
      onSuccess(data, variables, context) {
        queryClient.invalidateQueries({
          predicate: (query) => {
            return query.queryHash === "getParticipantById";
          },
        });
      },
    });

  const createParticipant = (participant: ParticipantBase) => {
    const body: CreateParticipantRaidParticipantPostVariables = {
      body: participant,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    mutateCreateParticipant(body);
  };

  return { me, isLoading, isFetched, createParticipant, isCreationSuccess, isCreationLoading };
};
