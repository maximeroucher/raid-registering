import { useGetTeamByParticipantIdRaidParticipantParticipantIdTeamGet } from "@/src/api/hyperionComponents";
import { useTokenStore } from "@/src/stores/token";

export const useTeam = () => {
  const { token, userId } = useTokenStore();

  const { data: team, isLoading } =
    useGetTeamByParticipantIdRaidParticipantParticipantIdTeamGet(
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

  return { team, isLoading };
};
