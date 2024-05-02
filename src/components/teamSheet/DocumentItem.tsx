import { Document, DocumentValidation } from "@/src/api/hyperionSchemas";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import { HiArrowDown, HiCheck, HiClock, HiDownload, HiX } from "react-icons/hi";
import { Button } from "../ui/button";
import { LoadingButton } from "../ui/loadingButton";
import { BadgeAlertIcon, ClockIcon } from "lucide-react";

interface DocumentItemProps {
  value: string;
  document: Document | null;
  index: number;
  setDocument: (document: Document) => void;
  downloadDocument: (document: Document) => void;
  validateDocument: (
    documentId: string,
    validation: DocumentValidation,
  ) => void;
  isValidationLoading: boolean;
}

export const DocumentItem = ({
  value,
  document,
  index,
  setDocument,
  downloadDocument,
  validateDocument,
  isValidationLoading,
}: DocumentItemProps) => {
  const isValidated = (document && document.validation === "accepted") || false;
  const isRefused = (document && document.validation === "refused") || false;
  const isTemporary =
    (document && document.validation === "temporary") || false;
  const isPending = (document && document.validation === "pending") || false;

  return (
    <AccordionItem
      value={`item-${index}`}
      onClick={() => {
        if (document) {
          setDocument(document);
        }
      }}
    >
      <AccordionTrigger>
        <div className="flex flex-row mr-auto items-center">
          {isValidated && <HiCheck className="mr-4" />}
          {isRefused && <HiX className="mr-4" />}
          {isTemporary && <BadgeAlertIcon className="mr-4 h-4 w-4" />}
          {isPending && <ClockIcon className="mr-4 h-4 w-4" />}
          {value}
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {document ? (
          <div className="flex flex-col gap-4">
            <div className="flex grid-cols-2 gap-4">
              {!isValidated && (
                <LoadingButton
                  isLoading={isValidationLoading}
                  label="Valider"
                  className="w-full"
                  onClick={(_) => {
                    validateDocument(document.id, "accepted");
                  }}
                />
              )}
              {(!isValidated || !isTemporary) && (
                <LoadingButton
                  isLoading={isValidationLoading}
                  label="Valider temporairement"
                  className="w-full"
                  onClick={(_) => {
                    validateDocument(document.id, "temporary");
                  }}
                />
              )}
              {!isRefused && (
                <LoadingButton
                  isLoading={isValidationLoading}
                  label="Refuser"
                  className="w-full"
                  onClick={(_) => {
                    validateDocument(document.id, "refused");
                  }}
                />
              )}
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={(_) => downloadDocument(document)}
            >
              <HiDownload className="mr-2" />
              Télécharger
            </Button>
          </div>
        ) : (
          <span className="text-muted-foreground">Aucun document</span>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};
