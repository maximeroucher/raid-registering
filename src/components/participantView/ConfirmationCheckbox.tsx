import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { FormControl, FormMessage } from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface ConfirmationCheckboxProps {
  label: string;
  field: ControllerRenderProps<FieldValues, string>;
  needDialog: boolean;
}

export const ConfirmationCheckbox = ({
  label,
  field,
  needDialog,
}: ConfirmationCheckboxProps) => {
  const [open, setIsOpen] = useState(false);

  function handleCheckboxChange() {
    if (needDialog) {
      setIsOpen(!open && !field.value);
    } else {
      console.log("oh");
      field.onChange(!field.value);
    }
  }

  function handleCheckboxButtonClick(
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    event.preventDefault();
    field.onChange(!field.value);
  }

  console.log("open", open);

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="col-span-4 hover:bg-transparent"
          onClick={(e) => handleCheckboxChange()}
        >
          <div className="w-full text-right">
            <FormMessage />
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={(value) => {
                  handleCheckboxChange();
                }}
              />
            </FormControl>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-3xl top-1/2">
        <DialogHeader>
          <DialogTitle>{label}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {
            "En cochant cette case, vous certifiez sur l'honneur que les informations que vous avez renseignées sont exactes, que vous avez bien lu et compris le règlement de la compétition, et que vous vous engagez à le respecter."
          }
        </DialogDescription>
        <div className="flex justify-end mt-2 space-x-4">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Annuler
          </Button>
          <Button onClick={handleCheckboxButtonClick}>Valider</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
