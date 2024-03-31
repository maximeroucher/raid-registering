import { DialogDescription } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { useInviteTokenStore } from "@/src/stores/inviteTokenStore";
import { useInviteToken } from "@/src/hooks/useInviteToken";
import { useTeam } from "@/src/hooks/useTeam";
import { ReloadIcon } from "@radix-ui/react-icons";

interface JoinTeamDialogProps {
  isOpened: boolean;
  setIsOpened: (value: boolean) => void;
}

export const JoinTeamDialog = ({
  isOpened,
  setIsOpened,
}: JoinTeamDialogProps) => {
  const { inviteToken, resetInviteToken } = useInviteTokenStore();
  const { joinTeam, isJoinLoading } = useInviteToken();
  const { refetchTeam } = useTeam();

  function closeDialog() {
    setIsOpened(false);
    resetInviteToken();
  }

  function onJoinTeam() {
    if (inviteToken === undefined) return;
    joinTeam(inviteToken, () => {
      refetchTeam();
      closeDialog();
    });
  }

  return (
    <Dialog open={isOpened} onOpenChange={setIsOpened}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Rejoindre une équipe</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Vous vous apprêtez à rejoindre une équipe et quitter votre équipe
          actuelle. Toutes vos informations seront transférées à votre nouvelle
          équipe.
        </DialogDescription>
        <div className="flex justify-end mt-2 space-x-4">
          <Button variant="outline" onClick={closeDialog}>
            Annuler
          </Button>

          <Button
            onClick={onJoinTeam}
            disabled={isJoinLoading}
            className="w-[140px]"
          >
            {isJoinLoading ? (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Rejoindre l'équipe"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
