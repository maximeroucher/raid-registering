import { Card, CardContent } from "../ui/card";

import { HiPlus } from "react-icons/hi";
import { toast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { useInviteToken } from "@/src/hooks/useInviteToken";
import { Team } from "@/src/api/hyperionSchemas";

interface EmptyParticipantCardProps {
  team?: Team;
}

export const EmptyParticipantCard = ({ team }: EmptyParticipantCardProps) => {
  const { createInviteToken } = useInviteToken();
  function showToast() {
    if (team === undefined) {
      return;
    }
    createInviteToken(team.id, (token) => {
      toast({
        title: "Invitation envoyée",
        description: `Le lien d'invitation est ${token.token}`,
      });
    });
  }
  return (
    <Card className="w-full" onClick={showToast}>
      <CardContent className="w-full h-full">
        <div className="flex m-auto h-full mt-3">
          <Button variant="outline" className="flex m-auto">
            <HiPlus className="inline mr-4" />
            <span>Inviter un participant</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
