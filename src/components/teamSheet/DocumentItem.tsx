import { Document } from "@/src/api/hyperionSchemas";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import { HiCheck } from "react-icons/hi";
import { Button } from "../ui/button";

interface DocumentItemProps {
  value: string;
  document: Document | null;
  index: number;
  setDocument: (document: Document) => void;
}

export const DocumentItem = ({
  value,
  document,
  index,
  setDocument,
}: DocumentItemProps) => {
  const isValidated = (document && document.validated) || false;
  return (
    <AccordionItem
      value={`item-${index}`}
      onClick={() => {
        if (document) {
          setDocument(document);
        }
      }}
    >
      <AccordionTrigger disabled={isValidated}>
        <div className="flex flex-row mr-auto items-center">
          {isValidated && <HiCheck className="mr-4" />}
          {value}
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {!isValidated && (
          <>
            {document ? (
              <Button className="w-full">Valider le document</Button>
            ) : (
              <span className="text-muted-foreground">Aucun document</span>
            )}
          </>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};
