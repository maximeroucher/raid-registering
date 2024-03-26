import { ControllerRenderProps, FieldValues } from "react-hook-form";

import { Button } from "../ui/button";
import { DropzoneInput } from "../ui/dropzoneInput";
import { useDocument } from "@/src/hooks/useDocument";
import { DocumentView } from "./DocumentView";

interface DocumentDialogProps {
  setIsOpen: (value: boolean) => void;
  setIsUploading: (value: boolean) => void;
  field: ControllerRenderProps<FieldValues, string>;
  id: string;
  key: string;
}

export const DocumentDialog = ({
  setIsUploading,
  setIsOpen,
  field,
  id,
  key,
}: DocumentDialogProps) => {
  const { uploadDocument, getDocument } = useDocument();
  const file = getDocument(key);
  return (
    <>
      {file?.name !== undefined ? (
        <div className="flex flex-col items-center gap-4">
          <span className="text-gray-500 overflow-hidden m-auto">
            <DocumentView id={id} documentKey={key} file={file}/>
          </span>
          <Button
            className="w-full"
            onClick={() => {
              field.onChange(null);
            }}
          >
            Modifier
          </Button>
        </div>
      ) : (
        <DropzoneInput
          setIsOpen={setIsOpen}
          onDropAccepted={(files, _) => {
            const file = files[0];
            const documentId = crypto.randomUUID();
            setIsUploading(true);
            uploadDocument(file, id, documentId, () => {
              field.onChange({
                name: file.name,
                id: documentId,
                type: id,
                updated: true,
              });
              setIsUploading(false);
            });
          }}
        />
      )}
    </>
  );
};
