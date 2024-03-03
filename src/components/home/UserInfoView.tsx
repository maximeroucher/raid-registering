import { Label } from "../ui/label";

interface UserInfoViewProps {
  label: string;
  value: string;
}

export const UserInfoView = ({ label, value }: UserInfoViewProps) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={label} className="font-bold">
        {label} :
      </Label>
      <span id={label}>{value}</span>
    </div>
  );
};
