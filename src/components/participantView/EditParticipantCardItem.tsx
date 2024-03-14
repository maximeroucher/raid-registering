import { SecurityFile, Size, Document } from "@/src/api/hyperionSchemas";
import { Checkbox } from "../ui/checkbox";
import { Skeleton } from "../ui/skeleton";
import { Input } from "../ui/input";
import { Combobox } from "../ui/combobox";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "../ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type ValueType = string | Size | boolean | Document | SecurityFile;

export enum ValueTypes {
  STRING = "string",
  SIZE = "size",
  BOOLEAN = "boolean",
  DOCUMENT = "document",
  SECURITYFILE = "securityFile",
}

interface EditParticipantCardItemProps<T extends ValueType> {
  label: string;
  id: string;
  placeholder?: string;
  form: any;
  type: T;
}

export function EditParticipantCardItem<T extends ValueType>({
  label,
  id,
  placeholder,
  form,
  type,
}: EditParticipantCardItemProps<T>) {
  const sizeArray: Size[] = ["XS", "S", "M", "L", "XL"];

  const valueComponent = (
    field: ControllerRenderProps<FieldValues, string>
  ) => {
    switch (type) {
      case ValueTypes.BOOLEAN:
        return (
          <div className="col-span-4 text-right">
            <FormMessage />
            <FormControl>
              <Checkbox {...field} />
            </FormControl>
          </div>
        );
      case ValueTypes.SIZE:
        return (
          <>
            <div className="col-span-3"></div>
            <div className="col-span-1">
              <FormMessage />
              <FormControl>
                <Combobox
                  values={sizeArray.map((size) => ({
                    value: size,
                    label: size,
                  }))}
                  placeholder="Taille"
                  {...field}
                />
              </FormControl>
            </div>
          </>
        );
      case ValueTypes.DOCUMENT:
        return (
          <>
            {/* <div className="bg-zinc-200 px-2 rounded-md">
              <span>{(value as Document).name}</span>
            </div>
            <Checkbox checked={(value as Document).validated} /> */}
          </>
        );
      case ValueTypes.SECURITYFILE:
        return (
          <>
            <div className="bg-zinc-200 px-2 rounded-md">
              <span>Fiche de sécurité</span>
            </div>
            <Checkbox checked={true} />
          </>
        );
      case ValueTypes.STRING:
        return (
          <div className="col-span-4">
            <FormMessage />
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
          </div>
        );

      default:
        return <Skeleton className="w-24 h-6" />;
    }
  };

  return (
    <FormField
      control={form.control}
      name={id}
      render={({ field }) => (
        <FormItem>
          <div className="grid p-2 grid-cols-6">
            <FormLabel className="font-bold text-left my-auto text-md col-span-2">
              {label}
            </FormLabel>
            {valueComponent(field)}
          </div>
        </FormItem>
      )}
    />
  );
}
