import { useState } from "react";
import { LoadingButton } from "../ui/loadingButton";

interface DocumentValidationButtonProps {
  validateDocument: (callback: () => void) => void;
  label: string;
}

export const DocumentValidationButton = ({
  validateDocument,
  label,
}: DocumentValidationButtonProps) => {
  const [isValidationLoading, setIsValidationLoading] = useState(false);
  return (
    <LoadingButton
      isLoading={isValidationLoading}
      label={label}
      className="w-full"
      onClick={(_) => {
        setIsValidationLoading(true);
        validateDocument(() => {
          setIsValidationLoading(false);
        });
      }}
    />
  );
};
