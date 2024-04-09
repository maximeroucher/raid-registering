import {
  useCreateInviteTokenRaidTeamsTeamIdInvitePost,
  CreateInviteTokenRaidTeamsTeamIdInvitePostVariables,
  useJoinTeamRaidTeamsJoinTokenPost,
  JoinTeamRaidTeamsJoinTokenPostVariables,
} from "@/src/api/hyperionComponents";
import { InviteToken } from "../api/hyperionSchemas";
import { useAuth } from "./useAuth";

export const useInviteToken = () => {
  const { token } = useAuth();

  const {
    mutate: mutateCreateInviteToken,
    isPending: isCreationLoading,
    isSuccess: isCreationSuccess,
  } = useCreateInviteTokenRaidTeamsTeamIdInvitePost({});

  const createInviteToken = (
    teamId: string,
    callback: (token: InviteToken) => void,
  ) => {
    const body: CreateInviteTokenRaidTeamsTeamIdInvitePostVariables = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      pathParams: {
        teamId: teamId,
      },
    };
    mutateCreateInviteToken(body, {
      onSuccess(data, variables, context) {
        callback(data);
      },
    });
  };

  const {
    mutate: mutateJoinTeam,
    isPending: isJoinLoading,
    isSuccess: isJoinSuccess,
  } = useJoinTeamRaidTeamsJoinTokenPost({});

  const joinTeam = (joinToken: string, callback: () => void) => {
    const body: JoinTeamRaidTeamsJoinTokenPostVariables = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      pathParams: {
        token: joinToken,
      },
    };
    mutateJoinTeam(body, {
      // Not using onSucess because of : https://github.com/TanStack/query/discussions/2878
      onSettled: (data, error) => {
        console.log(data, error);
        // Assuming success in all cases
        // For unknown reasons, the invalidation of the query does not work
        callback();
      },
    });
  };

  return {
    createInviteToken,
    isCreationLoading,
    isCreationSuccess,
    joinTeam,
    isJoinLoading,
    isJoinSuccess,
  };
};
