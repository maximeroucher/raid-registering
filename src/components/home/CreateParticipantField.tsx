import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface CreateParticipantFieldProps {
  label: string;
  id: string;
  defaultValue: string | undefined;
  placeholder?: string;
}

export const CreateParticipantField = ({
  label,
  id,
  defaultValue,
  placeholder
}: CreateParticipantFieldProps) => {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor={id} className="text-right">
        {label}
      </Label>
      <Input id={id} defaultValue={defaultValue} className="col-span-3" placeholder={placeholder} />
    </div>
  );
};
