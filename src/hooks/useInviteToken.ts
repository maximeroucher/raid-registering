import {
  useCreateInviteTokenRaidTeamsTeamIdInvitePost,
  CreateInviteTokenRaidTeamsTeamIdInvitePostVariables,
} from "@/src/api/hyperionComponents";
import { useTokenStore } from "@/src/stores/token";
import { InviteToken } from "../api/hyperionSchemas";

export const useInviteToken = () => {
  const { token } = useTokenStore();

  const {
    mutate: mutateCreateInviteToken,
    isPending: isCreationLoading,
    isSuccess: isCreationSuccess,
  } = useCreateInviteTokenRaidTeamsTeamIdInvitePost({});

  const createInviteToken = (teamId: string, callback: (token: InviteToken) => void) => {
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

  return {
    createInviteToken,
    isCreationLoading,
    isCreationSuccess,
  };
};
