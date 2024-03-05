import { useGetParticipantByIdRaidParticipantParticipantIdGet } from "@/src/api/hyperionComponents";
import { useTokenStore } from "@/src/stores/token";

export const useParticipant = () => {
  const { token, userId } = useTokenStore();

  const { data: me, isLoading, isFetched, ...props } =
    useGetParticipantByIdRaidParticipantParticipantIdGet(
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
      }
    );

  return { me, isLoading, isFetched, props };
};
