import { Document } from "@/src/api/hyperionSchemas";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import { HiCheck } from "react-icons/hi";
import { Button } from "../ui/button";
import { LoadingButton } from "../ui/loadingButton";

interface DocumentItemProps {
  value: string;
  document: Document | null;
  index: number;
  setDocument: (document: Document) => void;
  downloadDocument: (document: Document) => void;
  validateDocument: (documentId: string) => void;
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
          {value}
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {document ? (
          <div className="flex grid-cols-2 gap-6">
            <Button
              variant="outline"
              className="w-full"
              onClick={(_) => downloadDocument(document)}
            >
              Télécharger le document
            </Button>
            {!isValidated && (
              <LoadingButton
                isLoading={isValidationLoading}
                label="Valider le document"
                className="w-full"
                onClick={(_) => {
                  validateDocument(document.id);
                }}
              />
            )}
          </div>
        ) : (
          <span className="text-muted-foreground">Aucun document</span>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};
