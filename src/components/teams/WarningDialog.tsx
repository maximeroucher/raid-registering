import { DialogDescription } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { LoadingButton } from "../ui/loadingButton";

interface WarningDialogProps {
  isOpened: boolean;
  setIsOpened: (value: boolean) => void;
  isLoading: boolean;
  title: string;
  description: string;
  validateLabel: string;
  callback: () => void;
}

export const WarningDialog = ({
  isOpened,
  setIsOpened,
  isLoading,
  title,
  description,
  validateLabel,
  callback,
}: WarningDialogProps) => {
  function closeDialog(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    setIsOpened(false);
  }

  function onValidate(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    callback();
  }

  return (
    <Dialog open={isOpened} onOpenChange={setIsOpened}>
      <DialogContent
        className="sm:max-w-[600px]"
        onClick={(e) => e.stopPropagation()}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{description}</DialogDescription>
        <div className="flex justify-end mt-2 space-x-4">
          <Button variant="outline" onClick={closeDialog} disabled={isLoading} className="w-[100px]">
            Annuler
          </Button>
          <LoadingButton
            isLoading={isLoading}
            onClick={onValidate}
            label={validateLabel}
            className="w-[100px]"
            variant="destructive"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
