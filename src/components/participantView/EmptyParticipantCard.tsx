import { Card, CardContent } from "../ui/card";

import { HiPlus } from "react-icons/hi";
import { toast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { useInviteToken } from "@/src/hooks/useInviteToken";
import { Team } from "@/src/api/hyperionSchemas";
import { ReloadIcon } from "@radix-ui/react-icons";

interface EmptyParticipantCardProps {
  team?: Team;
}

export const EmptyParticipantCard = ({ team }: EmptyParticipantCardProps) => {
  const { createInviteToken, isCreationLoading } = useInviteToken();
  function showToast() {
    if (team === undefined) {
      return;
    }
    createInviteToken(team.id, async (token) => {
      const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
      const inviteLink = `${frontendUrl}?invite=${token.token}`;
      try {
        await navigator.clipboard.writeText(inviteLink);
        toast({
          title: "Invitation créée",
          description: `Le lien d'invitation a été copié dans le presse-papier.`,
        });
      } catch (e) {
        toast({
          title: "Invitation créée",
          description: `Le lien d'invitation est : ${inviteLink}`,
        });
      }
    });
  }
  return (
    <Card className="w-full" onClick={showToast}>
      <CardContent className="w-full h-full">
        <div className="flex m-auto h-full mt-3">
          <Button
            variant="outline"
            className="flex m-auto w-[200px]"
            disabled={isCreationLoading}
          >
            {isCreationLoading ? (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <>
                <HiPlus className="inline mr-4" />
                <span>Inviter un participant</span>
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
