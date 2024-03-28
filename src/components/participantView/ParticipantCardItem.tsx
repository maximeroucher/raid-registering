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
import { SecurityFileDialog } from "./SecurityFileDialog";

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
}

export const ParticipantCardItem = ({
  label,
  value,
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
        return <Checkbox checked={value} />;
      case isSize(value):
        return (
          <div className="bg-zinc-200 px-2 rounded-md">
            <span>{value}</span>
          </div>
        );
      case isDocument(value):
        const key = value.type as string;
        const file = getDocument(key);
        return (
          <div className="flex flex-row w-full justify-end items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={null} className="col-span-4 px-4 bg-zinc-200 ">
                  <div className="flex flex-row items-start w-full">
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
                    <DocumentView documentKey={key} id={value.id} file={file} />
                  </span>
                </div>
              </DialogContent>
            </Dialog>
            <Checkbox checked={value.validated} className="ml-4" />
          </div>
        );
      case isSecurityFile(value):
        return (
          <div className="flex flex-row w-full justify-end items-center">
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
                <div className="flex flex-col items-center gap-4">
                  <span className="text-gray-500 overflow-hidden m-auto">
                    {/* <SecurityFileDialog setIsOpen={setIsOpen} form={form} /> */}
                  </span>
                </div>
              </DialogContent>
            </Dialog>
            <Checkbox checked={true} className="ml-4" />
          </div>
        );
      case isString(value):
        return <span>{value}</span>;
      case isNull(value):
        return <span className="text-zinc-400">Non renseigné</span>;
      default:
        return <Skeleton className="w-24 h-6" />;
    }
  };

  return (
    <div className="flex flex-row w-full justify-between p-2 items-center">
      <span className="font-semibold w-1/3">{label}</span>
      {valueComponent(value)}
    </div>
  );
};
