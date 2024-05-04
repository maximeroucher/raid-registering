import { useUser } from "./useUser";
import {
  useDeleteRaidTeamsTeamId,
  useGetRaidTeamsTeamId,
  usePostRaidTeamsMerge,
  usePostRaidTeamsTeamIdKickParticipantId,
} from "../api/hyperionComponents";
import { useAuth } from "./useAuth";
import { useQueryClient } from "@tanstack/react-query";

export const useAdminTeam = (teamId: string) => {
  const { token, userId, isTokenExpired } = useAuth();
  const { isAdmin } = useUser();
  const queryClient = useQueryClient();

  const { data: team, refetch: refetchTeam } = useGetRaidTeamsTeamId(
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      pathParams: {
        teamId: teamId,
      },
    },
    {
      enabled: userId !== null && isAdmin() && !isTokenExpired(),
      retry: 0,
      queryHash: "getTeamById",
    },
  );

  const { mutate: mutateKickMember, isPending: isKickLoading } =
    usePostRaidTeamsTeamIdKickParticipantId({});

  const kickMember = (
    participantId: string,
    callback: () => void,
  ) => {
    mutateKickMember(
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        pathParams: {
          teamId,
          participantId,
        },
      },
      {
        onSuccess(data, variables, context) {
          queryClient.invalidateQueries({
            predicate: (query) => {
              return query.queryHash === "getTeamById";
            },
          });
          callback();
        },
      },
    );
  };

  const { mutate: mutateMergeTeams, isPending: isMergeLoading } =
    usePostRaidTeamsMerge({});

  const mergeTeams = (
    team2Id: string,
    callback: () => void,
  ) => {
    mutateMergeTeams(
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        queryParams: {
          team1_id: teamId,
          team2_id: team2Id,
        },
      },
      {
        onSuccess(data, variables, context) {
          queryClient.invalidateQueries({
            predicate: (query) => {
              return query.queryHash === "getTeamById";
            },
          });
          callback();
        },
      },
    );
  };

  const { mutate: mutateDeleteTeam, isPending: isDeleteLoading } =
    useDeleteRaidTeamsTeamId({});

  const deleteTeam = (callback: () => void) => {
    mutateDeleteTeam(
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        pathParams: {
          teamId,
        },
      },
      {
        onSuccess(data, variables, context) {
          queryClient.invalidateQueries({
            predicate: (query) => {
              return query.queryHash === "getTeamById";
            },
          });
          callback();
        },
      },
    );
  };

  return {
    team,
    refetchTeam,
    kickMember,
    mergeTeams,
    isKickLoading,
    isMergeLoading,
    isDeleteLoading,
    deleteTeam,
  };
};
