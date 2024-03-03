import { SecurityFile, Size, Document } from "@/src/api/hyperionSchemas";
import { Checkbox } from "../ui/checkbox";

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
  const isSize = (value: ValueType): value is Size => {
    return value === "S" || value === "M" || value === "L" || value === "XL";
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
    return typeof (value as SecurityFile)?.name === "string";
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
        return (
          <>
            <div className="bg-zinc-200 px-2 rounded-md">
              <span>{(value as Document).name}</span>
            </div>
            <Checkbox checked={(value as Document).validated} />
          </>
        );
      case isSecurityFile(value):
        return (
          <>
            <div className="bg-zinc-200 px-2 rounded-md">
              <span>Fiche de sécurité</span>
            </div>
            <Checkbox checked={true} />
          </>
        );
      case isNull(value):
        return <span className="text-zinc-400">Non renseigné</span>;
      default:
        return <span>{value}</span>;
    }
  };

  return (
    <div className="flex flex-row w-full justify-between p-2">
      <span className="font-semibold">{label}</span>
      {valueComponent(value)}
    </div>
  );
};
