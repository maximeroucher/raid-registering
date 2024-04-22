import { SecurityFile, Size, Document } from "@/src/api/hyperionSchemas";
import { Checkbox } from "../ui/checkbox";
import { Skeleton } from "../ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { DocumentView } from "./DocumentView";
import { useDocument } from "@/src/hooks/useDocument";
import { SecurityFileDialogView } from "./SecurityFileDialogView";

type ValueType =
  | string
  | Size
  | boolean
  | Document
  | SecurityFile
  | null
  | undefined
  | (string | null | undefined);

interface ParticipantCardItemProps {
  label: string;
  value: ValueType;
  participantId?: string;
}

export const ParticipantCardItem = ({
  label,
  value,
  participantId,
}: ParticipantCardItemProps) => {
  const { getDocument } = useDocument();
  const isSize = (value: ValueType): value is Size => {
    return (
      value === "XS" ||
      value === "S" ||
      value === "M" ||
      value === "L" ||
      value === "XL"
    );
  };

  const isBoolean = (value: ValueType): value is boolean => {
    return typeof value === "boolean";
  };

  const isNull = (value: ValueType): value is null => {
    return value === null;
  };

  const isDocument = (value: ValueType): value is Document => {
    return typeof (value as Document)?.type === "string";
  };

  const isSecurityFile = (value: ValueType): value is SecurityFile => {
    return typeof (value as SecurityFile)?.asthma === "boolean";
  };

  const isString = (value: ValueType): value is string => {
    return typeof value === "string";
  };

  const valueComponent = (value: ValueType) => {
    switch (true) {
      case isBoolean(value):
        return <Checkbox checked={value} className="col-span-4 ml-auto disabled:opacity-100" disabled />;
      case isSize(value):
        return (
          <div className=" col-start-6 col-span-1">
            <div className="bg-zinc-200 px-2 rounded-md w-8 flex justify-center ml-auto dark:bg-zinc-700">
              <span>{value}</span>
            </div>
          </div>
        );
      case isDocument(value):
        const key = value.type as string;
        const file = getDocument(participantId!, key);
        return (
          <div className="flex flex-row w-full justify-end items-center h-6 col-span-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={null}
                  className="pl-auto max-w-full bg-zinc-200"
                >
                  <div className="flex flex-row items-start max-w-full">
                    <span className="text-gray-500 overflow-hidden">
                      {value.name ?? "Aucun fichier séléctionné"}
                    </span>
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="md:max-w-2xl top-1/2">
                <DialogHeader>
                  <DialogTitle className="text-red sm:text-lg">
                    {label}
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center gap-4">
                  <span className="text-gray-500 overflow-hidden m-auto">
                    <DocumentView userId={participantId!} documentKey={key} id={value.id} file={file} />
                  </span>
                </div>
              </DialogContent>
            </Dialog>
            <Checkbox checked={value.validated} className="ml-8" />
          </div>
        );
      case isSecurityFile(value):
        return (
          <div className="flex flex-row w-full justify-end items-center h-6 col-span-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={null} className="col-span-4 px-4 bg-zinc-200 ">
                  <div className="flex flex-row items-start w-full">
                    <span className="text-gray-500 overflow-hidden">
                      {"Fiche sécurité" ?? "Aucun fichier séléctionné"}
                    </span>
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="md:max-w-2xl top-1/2">
                <DialogHeader>
                  <DialogTitle className="text-red sm:text-lg">
                    {label}
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center">
                  <SecurityFileDialogView file={value} />
                </div>
              </DialogContent>
            </Dialog>
            <Checkbox checked={true} className="ml-8" />
          </div>
        );
      case isString(value):
        return <span className="col-span-4 text-right">{value}</span>;
      case isNull(value):
        return (
          <span className="text-zinc-400 col-span-4 text-right">
            Non renseigné
          </span>
        );
      default:
        return <Skeleton className="w-24 h-6 col-span-4 text-right" />;
    }
  };

  return (
    <div className="grid p-2 grid-cols-6 items-center w-full">
      <span className="font-semibold text-left my-auto col-span-2">
        {label}
      </span>
      {valueComponent(value)}
    </div>
  );
};
